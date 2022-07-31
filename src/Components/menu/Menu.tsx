import { useState } from 'react'
import { Container } from 'react-bootstrap';
import Filter from './Filter';
import MenuItems from './MenuItems';

const Menu = () => {
  const [menu, SetMenu] = useState([{
    id: 1,
    title: "PIZZA",
    description: "shrimp, squid, olives ",
    price: 200,
    type: "PIZZA",
    popular: true
  }, {
    id: 2,
    title: "PIZZA",
    description: "tomato",
    price: 200,
    type: "PIZZA",
    popular: true
  }, {
    id: 3,
    title: "PIZZA",
    description: "tomato",
    price: 200,
    type: "PIZZA",
    popular: true
  },
  {
    id: 4,
    title: "PIZZA",
    description: "tomato",
    price: 200,
    type: "PIZZA",
    popular: true
  }, {
    id: 5,
    title: "PIZZA",
    description: "tomato",
    price: 200,
    type: "PIZZA",
    popular: true
  }, {
    id: 6,
    title: "PIZZA",
    description: "tomato",
    price: 200,
    type: "PIZZA",
    popular: true
  },
  {
    id: 7,
    title: "PIZZA",
    description: "tomato",
    price: 200,
    type: "PIZZA",
    popular: true
  }, {
    id: 8,
    title: "PIZZA",
    description: "tomato",
    price: 200,
    type: "PIZZA",
    popular: true
  }, {
    id: 1,
    title: "PIZZA",
    description: "shrimp, squid, olives ",
    price: 200,
    type: "PIZZA",
    popular: true
  }, {
    id: 2,
    title: "PIZZA",
    description: "tomato",
    price: 200,
    type: "PIZZA",
    popular: true
  }, {
    id: 3,
    title: "PIZZA",
    description: "tomato",
    price: 200,
    type: "PIZZA",
    popular: true
  },
  {
    id: 4,
    title: "PIZZA",
    description: "tomato",
    price: 200,
    type: "PIZZA",
    popular: true
  }, {
    id: 5,
    title: "PIZZA",
    description: "tomato",
    price: 200,
    type: "PIZZA",
    popular: true
  }, {
    id: 6,
    title: "PIZZA",
    description: "tomato",
    price: 200,
    type: "PIZZA",
    popular: true
  },
  {
    id: 7,
    title: "PIZZA",
    description: "tomato",
    price: 200,
    type: "PIZZA",
    popular: true
  }, {
    id: 8,
    title: "PIZZA",
    description: "tomato",
    price: 200,
    type: "PIZZA",
    popular: true
  }]);

  const selecItem = (val: string) => {
  }

  return (
    <Container>
      <div id='menu' style={{ minHeight: '90vh' }}>
        <Filter selecItem={selecItem} />
        <MenuItems menu={menu} />
      </div>
    </Container>
  )
}

export default Menu;
