import { useEffect, useState } from 'react';
import { Button, Image, Modal } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { AppTypes } from "../Types";
import { TiPlus, TiMinus } from "react-icons/ti";



const PopUpOrder = ({ show, onHide }: AppTypes) => {
    const [supTotal, setSupTotal] = useState(0);
    const [items, setItems] = useState([
        {
            id: 7,
            name: "Seafood",
            description: "Shrimpo squid paper",
            price: 200,
            type: "PIZZA",
        },
        {
            id: 8,
            name: "Seafood",
            description: "Shrimpo squid paper",
            price: 200,
            type: "PIZZA",
        },
        {
            id: 9,
            name: "Seafood",
            description: "Shrimpo squid paper",
            price: 200,
            type: "PIZZA",
        },
        
    ]);

    useEffect(() => {
        let total = 0;
        items.map((item) => (total += item.price));
        setSupTotal(total);
    }, [items]);

    return (
        <Modal
            show={show}
            onHide={() => {
                onHide && onHide();
            }}
            aria-labelledby="example-modal-sizes-title-sm"
            style={{ marginLeft: "40%", marginTop: "2%" }}
            size="sm"
        >
            <Modal.Body>
                {items.map((item) => (
                    <div className='mb-4'>
                        <div className="d-flex justify-content-center align-items-center gap-2">
                            <Image src={require('../Imgs/Pizza.png')} style={{ width: "60px" }} />
                            <div className='m0'>
                                <p>{item?.name}</p>
                                <p>{item?.description}</p>
                                <p>Price:LE{item?.price}</p>
                                <TiMinus />
                                <span className='fw-bold m-2'>1</span>
                                <TiPlus />
                            </div>
                        </div>
                    </div>
                ))}
                <hr/>
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
export default PopUpOrder
