import './App.css';
import NavBar from './components/NavBar'
import CartWidget from './components/CartWidget'
import LandingPage from './components/LandingPage';
import { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider, CartContext } from '../src/context/cartContext'
import ItemDetail from './components/ItemDetail';
import ItemListContainer from './components/ItemListContainer';


function App() {

  const { add, products } = useContext ( CartContext )

  return (
    <CartProvider>
    <BrowserRouter>

    <NavBar>
        <CartWidget />
    </NavBar>
    <Routes>
        <Route path={'/Nosotros'} element={<LandingPage />}></Route>
        <Route path={'/Category/:categoryId'} element={<ItemListContainer />}></Route>
        <Route path={'/Product/:id'} element={<ItemDetail />}></Route>
        <Route path={'/'} element={<ItemListContainer />}></Route>
    </Routes>
   </BrowserRouter>    
  
   </CartProvider>
  );
}

export default App;
