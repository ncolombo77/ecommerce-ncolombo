import './App.css';
import NavBar from './components/NavBar'
import CartWidget from './components/CartWidget'
import LandingPage from './components/LandingPage';
import { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartContextProvider } from '../src/context/cartContext'
import ItemDetail from './components/ItemDetail';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart'
import Order from './components/Order'


function App() {

  
  return (
    <CartContextProvider>
    <BrowserRouter>

    <NavBar>
        <CartWidget />
    </NavBar>
    <Routes>
        <Route path={'/Nosotros'} element={<LandingPage />}></Route>
        <Route path={'/Category/:categoryId'} element={<ItemListContainer />}></Route>
        <Route path={'/Product/:id'} element={<ItemDetail />}></Route>
        <Route path={'/Cart'} element={<Cart />}></Route>
        <Route path={'/Order'} element={<Order />}></Route>
        <Route path={'/'} element={<ItemListContainer />}></Route>
    </Routes>
   </BrowserRouter>    
  
   </CartContextProvider>
  );
}

export default App;
