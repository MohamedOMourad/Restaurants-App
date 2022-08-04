import { Container, Navbar, Image } from 'react-bootstrap';

const Footer = () => {
    return (
        <Navbar style={{ backgroundColor: '#303030', color: '#ffff', minHeight: '5vh' }} >
                <div className="d-flex py-1">
                    <div className="fw-bolder d-flex justify-content-center align-items-center">
                        OBSD <Image src={require('../Imgs/logo.png')} style={{ width: "1em", height: "1em" }}></Image>
                    </div>
                    <div className="text-center w-75 mx-auto ">&copy; copyright</div>
                </div>
        </Navbar>
    )
}

export default Footer;