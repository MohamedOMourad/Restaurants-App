import { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import OrderDashCard from '../Components/OrderDashCard';
import { Order, OrderState } from '../Types';
import { getOrders } from '../utils/API';

const KitchenDashBoard = () => {
    const [orderStat, setOrderStat] = useState(false)
    const Orders = useSelector((state: OrderState) => state.Order);
    const dispatch = useDispatch();

    const changeOrderStus = (stus: boolean) => {
        setOrderStat(stus);
    }
    useEffect(() => {
        getOrders(dispatch)
    }, []);

    return (
        <Row className='mt-5 me-0 min-vh-100'>
            <Col xs={2} style={{ background: "#303030" }} className="mx-0 pt-5 d-flex flex-wrap justify-content-start">
                <div style={{ color: "white" }} className="w-100" >
                    <h2>DASHBOARD</h2>
                    <div>
                        <Button size='sm' className='w-100 fw-bolder' variant='info' onClick={() => changeOrderStus(false)}>Pending Orders</Button>
                    </div>
                    <div >
                        <Button size='sm' className='w-100 fw-bolder' variant='success' onClick={() => changeOrderStus(true)}>Completed Orders</Button>
                    </div>
                </div>
            </Col>
            <Col className="d-flex flex-wrap gap-3 my-5 mx-0">
                {Orders.map((order: Order) => {
                    if (order.completed === orderStat) {
                        return <OrderDashCard order={order} />
                    }
                }
                )}
            </Col>
        </Row>
    )
}

export default KitchenDashBoard;
