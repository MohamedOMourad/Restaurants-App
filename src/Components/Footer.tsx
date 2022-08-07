import { Container, Navbar, Image } from 'react-bootstrap';

const Footer = () => {
    return (
        <Navbar style={{ minHeight: '1vh' }} className='nav-Bar' expand="sm">
            <Container className='container-fluid'>
                <div className="w-100 d-flex justify-content-between py-1">
                    <div className="fw-bolder text-light d-flex justify-content-center align-items-center">
                        OBSD <Image src={require('../Imgs/logo.png')} style={{ width: "1em", height: "1em" }}></Image>
                    </div>
                    <div className="text-center text-light w-75 mx-auto ">&copy; {new Date().getFullYear()} OBSD - All Rights Reserved</div>
                </div>
            </Container>
        </Navbar >
    )
}

export default Footer;

