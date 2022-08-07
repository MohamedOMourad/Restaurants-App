import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import CheckOut from './Pages/CheckOut';
import Home from './Pages/Home';
import KitchenDashBoard from './Pages/KitchenDashBoard';
import OrderSuccess from './Pages/OrderSuccess';
import { getAllProducts } from './redux/actions/Product';
import { getProducts } from './utils/API';
import Footer from './Components/Footer';


function App() {
  const dispatch = useDispatch();



  useEffect(() => {
    getProducts(dispatch)
  }, [])
  return (
    <div style={{ height: '100vh' }}>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/checkout' element={<CheckOut />} />
        <Route path='/ordersuccess' element={<OrderSuccess />} />
        <Route path='/KitchenDashBoard' element={<KitchenDashBoard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
