import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import CheckOut from './Pages/CheckOut';
import Home from './Pages/Home';
import KitchenDashBoard from './Pages/KitchenDashBoard';
import OrderSuccess from './Pages/OrderSuccess';


function App() {
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
