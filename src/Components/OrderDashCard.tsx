import { Button, Card, Col, Row } from 'react-bootstrap';
import { OrderProp } from '../Types';
import Clock from 'react-live-clock';


const OrderDashCard = ({ order }: OrderProp) => {

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
        <Card key={order.id} style={{ width: "20em" }}>
            <Card.Header style={{ color: "#ffff" }} className={`${orderTime()} p-2 d-flex justify-content-between align-items-center fw-bold`}>
                <div>{order.id}</div>
                <Clock format={'H:mm:ss'} ticking={true}
                    timezone={'Africa/Cairo'}
                    date={(new Date(Date.now()).getTime() - new Date(order.dateCreated as Date).getTime() + (((new Date(Date.now())).getTimezoneOffset()) * 60000))}
                />
            </Card.Header>
            <Card.Body className='d-flex flex-wrap justify-content-between'>
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
                <div className='w-100 d-flex justify-content-end'>
                    <div>
                        <Button variant='success' size='sm'>Completed</Button>
                        <Button variant='danger' size='sm'>Cancel</Button>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}

export default OrderDashCard;

