import { Container } from 'react-bootstrap';
import Filter from './Filter';
import MenuItems from './MenuItems';

const Menu = () => {
  const selecItem = (val: string) => {
  }

  return (
    <Container id='menu' style={{ minHeight: '90vh' }}>
      <Filter selecItem={selecItem} />
      <MenuItems />
    </Container>
  )
}

export default Menu;
