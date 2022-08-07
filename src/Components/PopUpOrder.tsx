import { useEffect, useState } from 'react';
import { Button, Image, Modal } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { AppTypes, OrderCartState } from "../Types";
import { TiPlus, TiMinus } from "react-icons/ti";
import { useDispatch, useSelector } from 'react-redux';
import { addOrder, calcOrderTotal } from '../utils/Function';



const PopUpOrder = ({ show, onHide }: AppTypes) => {
    const [supTotal, setSupTotal] = useState(0);
    const dispatch = useDispatch()
    const ordersCart = useSelector((state: OrderCartState) => state.OrderCart);

    useEffect(() => {
        setSupTotal(calcOrderTotal(ordersCart)
        );
    }, [ordersCart]);

    return (
        <Modal
            show={show}
            onHide={() => {
                onHide && onHide();
            }}
            aria-labelledby="example-modal-sizes-title-sm"
            size="sm"
            className='pop'
        >
            <Modal.Body>
                {ordersCart?.map((item) => (
                    <div key={item?.id} className='mb-4'>
                        <div className="d-flex justify-content-center align-items-center gap-2">
                            <Image src={require('../Imgs/Pizza.png')} style={{ width: "60px" }} />
                            <div className='m0'>
                                <p>{item?.name}</p>
                                <p>Price:LE{item?.price}</p>
                                <TiMinus onClick={() => addOrder('-', item, dispatch)} />
                                <span className='fw-bold m-2'>{item?.quantity}</span>
                                <TiPlus onClick={() => addOrder('+', item, dispatch)} />
                            </div>
                        </div>
                    </div>
                ))}
                <hr />
                <div className="d-flex justify-content-center">
                    <p>SupTotal: LE {supTotal}</p>
                </div>
                <div className="d-flex justify-content-center">
                    <Link
                        to='/checkout'
                        className="btn btn-warning"
                        onClick={() => {
                            onHide && onHide();
                        }}
                    >
                        CheckOut
                    </Link>
                </div>
            </Modal.Body>
        </Modal>
    );
}
export default PopUpOrder;
