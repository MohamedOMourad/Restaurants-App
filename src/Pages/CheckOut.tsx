import { Formik, Field, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Modal, Form, Container, Image } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { TiPlus, TiMinus } from "react-icons/ti";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { OrderCartState } from '../Types';
import { addOrder, calcOrderTotal } from '../utils/Function';
import { checkOutOrder } from '../utils/API';


const CheckOut = () => {
    const [supTotal, setSupTotal] = useState(0);
    const dispatch = useDispatch();
    const ordersCart = useSelector((state: OrderCartState) => state.OrderCart);
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            mobNum: '',
            city: '',
            address: ''
        },
        onSubmit: values => {
            checkOutOrder(values, ordersCart)
            formik.resetForm()
            navigate('/ordersuccess')
        },
    });

    useEffect(() => {
        setSupTotal(calcOrderTotal(ordersCart)
        );
    }, [ordersCart]);

    return (
        <div className='p-5 mt-5'>
            <Container>
                <div className='d-flex  justify-content-between align-items-center'>
                    <Form onSubmit={formik.handleSubmit}>
                        <Form.Group className="mb-5">
                            <Form.Control
                                plaintext type="text" placeholder="First Name" name="firstName" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.firstName} />
                        </Form.Group>
                        <Form.Group className="mb-5">
                            <Form.Control
                                plaintext type="text" placeholder="Last Name" name="lastName" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastName} />
                        </Form.Group>
                        <Form.Group className="mb-5">
                            <Form.Control
                                plaintext type="text" placeholder="Mobile" name="mobNum" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.mobNum} />
                        </Form.Group>
                        <Form.Group className="mb-5">
                            <Form.Control
                                plaintext type="text" placeholder="Address" name="address" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.address} />
                        </Form.Group>
                        <Form.Group className="mb-5">
                            <Form.Control
                                plaintext type="text" placeholder="City" name="city" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.city} />
                        </Form.Group>
                        <Button variant='warning' type="submit">Place Order</Button>
                        <Link to='/'>
                            <Button variant='danger'>Cancel</Button>
                        </Link>
                    </Form>
                    <div className='border-left w-25 '>
                        {ordersCart?.map((item) => (
                            <div className='mb-1'>
                                <div className="d-flex justify-content-center align-items-center gap-2">
                                    <Image src={require('../Imgs/Pizza.png')} style={{ width: "100px" }} />
                                    <div className='m0'>
                                        <p>{item?.name}</p>
                                        <p>Price:LE{item?.price.toLocaleString()}</p>
                                        <TiMinus onClick={() => addOrder('-', item, dispatch)} />
                                        <span className='fw-bold m-2'>{item?.quantity}</span>
                                        <TiPlus onClick={() => addOrder('+', item, dispatch)} />
                                    </div>
                                </div>
                            </div>
                        ))}
                        <hr />
                        <div className="d-flex justify-content-center">
                            <p className='fw-bolder fs-4'>SupTotal: LE {supTotal.toLocaleString()}</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div >
    );
}

export default CheckOut;
