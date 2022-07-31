import { Formik, Field, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Modal, Form, Container, Image } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { TiPlus, TiMinus } from "react-icons/ti";
import { Link } from 'react-router-dom';



const CheckOut = () => {
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


    const formik = useFormik({
        initialValues: {
            name: '',
            mobile: '',
            address: '',
            city: ''
        },
        onSubmit: values => {
            // handle form submission
        },
    });
    return (
        <div className='p-5 mt-5'>
            <Container>
                <div className='d-flex  justify-content-between align-items-center'>
                    <Form onSubmit={formik.handleSubmit}>
                        <Form.Group className="mb-5">
                            <Form.Control
                                plaintext type="text" placeholder="Name" name="name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
                        </Form.Group>
                        <Form.Group className="mb-5">
                            <Form.Control
                                plaintext type="text" placeholder="Mobile" name="mobile" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.mobile} />
                        </Form.Group>
                        <Form.Group className="mb-5">
                            <Form.Control
                                plaintext type="text" placeholder="Address" name="address" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.address} />
                        </Form.Group>
                        <Form.Group className="mb-5">
                            <Form.Control
                                plaintext type="text" placeholder="City" name="city" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.city} />
                        </Form.Group>
                        <Link to='/ordersuccess'>
                            <Button variant='warning' type="submit">Submit</Button>
                        </Link>
                        <Link to='/'>
                            <Button variant='danger' type="submit">Cancel</Button>
                        </Link>
                    </Form>
                    <div className='border-left  p-5'>
                        {items.map((item) => (
                            <div className='mb-1'>
                                <div className="d-flex justify-content-center align-items-center gap-2">
                                    <Image src={require('../Imgs/Pizza.png')} style={{ width: "100px" }} />
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
                        <hr />
                        <div className="d-flex justify-content-center">
                            <p className='fw-bolder fs-4'>SupTotal: LE {supTotal}</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div >
    );
}

export default CheckOut;
