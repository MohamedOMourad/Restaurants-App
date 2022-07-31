import { Container, Image } from 'react-bootstrap';

function HeroImage() {
  return (
    <div className='pt-5' style={{ background: '#303030' }}>
      <Container style={{ background: '#303030' }}>
    <div  className='p-5 text-start d-flex justify-content-center align-items-center'>
      <h1 style={{ color: '#ffffff' }} className='me-3'>
        ENJOY OUR<br/> DELICIOUS
        <span style={{ color: '#ff9200' }}>FOOD</span>
      </h1>
      <div>
        <Image style={{ width: "15em", height: "15em" }} src={require('../Imgs/Pizza.png')}/>
      </div>
      </div>
      </Container>
    </div>
  )
}

export default HeroImage;
