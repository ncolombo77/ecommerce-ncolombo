import './App.css';
import NavBar from './components/NavBar'
import CartWidget from './components/CartWidget'
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <>

    <NavBar>

        <CartWidget />

    </NavBar>

    <ItemListContainer saludo="Bienvenido a Tienda de alfajores, un lugar para fanáticos." />
  
    </>
  );
}

export default App;
