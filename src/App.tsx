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
import { Product } from './Types';

function App() {
  const dispatch = useDispatch();

  // const getProductsData = async () => {
  //   const res = await getProducts();
  //   if (res?.status === 200) {
  //     dispatch(getAllProducts(res.data.data));
  //   } else {
  //     console.log("Error On Getting Products");
  //   }
  // }

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

    </div>
  );
}

export default App;
