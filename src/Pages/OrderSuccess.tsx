import { Image } from 'react-bootstrap';


const OrderSuccess = () => {
    return (
        <div className='min-vh-100 d-flex justify-content-center align-items-center'>
            <div className=' text-center mx-auto'>
                <Image src={require('../Imgs/success-icon-10.png')} />
                <br />
                <br />
                <h1>ORDER PLACED</h1>
            </div>
        </div>
    )
}

export default OrderSuccess;
