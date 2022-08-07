import { Button, Card, Col, Row } from 'react-bootstrap';
import { OrderProp } from '../Types';
import Clock from 'react-live-clock';
import { updateOrderStus } from '../utils/API';
import { useDispatch } from 'react-redux';
import moment from 'moment';



const OrderDashCard = ({ order }: OrderProp) => {
    const dispatch = useDispatch()
    const orderTime = () => {
        if (Math.round((new Date(Date.now()).getTime() - new Date(order.dateCreated as Date).getTime()) / 60000) < 30) {
            return "bg-info"
        } else if (Math.round((new Date(Date.now()).getTime() - new Date(order.dateCreated as Date).getTime()) / 60000) < 60) {
            return "bg-warning"
        } else {
            return "bg-danger"
        }
    }

    return (
        <Card key={order.id} style={{ width: "20em", maxHeight: "20em" }}>
            <Card.Header style={{ color: "#ffff" }} className={`${order.completed ? "bg-success" : orderTime()} p-2 d-flex justify-content-between align-items-center fw-bold`}>
                <div>{order.id}</div>
                {order.completed ? <div>{moment(order.dateUpdated?.toString()).format('hh:mm:ss')}</div>  : <Clock format={'H:mm:ss'} ticking={true}
                    timezone={'Africa/Cairo'}
                    date={(new Date(Date.now()).getTime() - new Date(order.dateCreated as Date).getTime() + (((new Date(Date.now())).getTimezoneOffset()) * 60000))}
                />}
            </Card.Header>
            <Card.Body className='d-flex flex-wrap justify-content-between align-items-center'>
                {
                    order?.orderLine?.map((item) => {
                        return (
                            <div className='w-100 d-flex '>
                                <p className="w-50 fw-bold ">{item?.product?.name} </p>
                                <p className="w-25 fw-bold "> Qty: </p>
                                <p className='w-25 fw-bold' > {item.quantity}</p>
                            </div>
                        )
                    })
                }
                {order.completed ? '' : <div className='w-100 d-flex justify-content-end'>
                    <div>
                        <Button variant='success' size='sm' onClick={() => updateOrderStus(dispatch, order?.id as number)}>Completed</Button>
                        {/* <Button variant='danger' size='sm'>Cancel</Button> */}
                    </div>
                </div>}
            </Card.Body>
        </Card>
    )
}

export default OrderDashCard;

