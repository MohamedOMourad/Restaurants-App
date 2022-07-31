import { Container, Nav, Navbar, Image, Button, Modal } from 'react-bootstrap';
import React, { useState } from 'react';
import PopUpOrder from './PopUpOrder';
import { Link } from 'react-router-dom';

function NavBar() {
    const [show, setShow] = useState(false);

    const onHide = () => {
        setShow(false)
    }

    return (
        <>
            <Navbar style={{ minHeight: '1vh' }} className='fixed-top nav-Bar' expand="sm">
                <Container className='container-fluid'>
                    <div >
                        <Navbar.Brand href="/" style={{ height: "0.1em" }} className='d-flex justify-content-center align-items-center'>
                            <span style={{ color: '#ffff' }} className='fw-bolder m-1'>OBSD</span><Image style={{ width: "1em", height: "1em" }} src={require('../Imgs/logo.png')} />
                            <Link to='/'><span className='m-3' style={{ color: '#e2e2e2' }}>Home</span></Link>
                        </Navbar.Brand>
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id=" basic-navbar-nav">
                        <Nav className='ms-auto d-flex align-items-lg-center'>
                            <Nav.Link href="#menu"> <span style={{ color: '#e2e2e2' }}>Menu</span> </Nav.Link>
                            <Image onClick={() => setShow(true)} style={{ width: "2em", height: "2em" }} src={require('../Imgs/fast-delivery.png')} />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
            <PopUpOrder show={show} onHide={onHide}/>
        </>
    )
}

export default NavBar
