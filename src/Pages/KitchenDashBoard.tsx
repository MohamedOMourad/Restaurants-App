import { useEffect } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import OrderDashCard from '../Components/OrderDashCard';
import { Order, OrderState } from '../Types';
import { getOrders } from '../utils/API';

const KitchenDashBoard = () => {
    const Orders = useSelector((state: OrderState) => state.Order);
    const dispatch = useDispatch();
    useEffect(() => {
        getOrders(dispatch)
    }, [])
    return (
        <Row className='mt-5 ms-0 min-vh-100'>
            <Col xs={2} style={{ background: "#303030" }} className="mx-0 pt-5 d-flex flex-wrap justify-content-start">
                <div style={{ color: "white" }} className="w-75" >
                    <p className='fs-3 fw-bolder'>DASHBOARD</p>
                
                    <p >
                        Pending Orders
                    </p>
                    <p >
                        Completed Orders
                    </p>
                </div>
            </Col>
            <Col className="d-flex flex-wrap gap-3 my-5 mx-0">
                {Orders.map((order: Order) => {
                    return <OrderDashCard order={order} />
                }
                )}
            </Col>
        </Row>
    )
}

export default KitchenDashBoard;
