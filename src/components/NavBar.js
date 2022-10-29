import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const estiloMenu = {
  fontSize: '20px'
}

const NavBar = ( { carrito } ) => {
  return (
    <div className="navbar bg-base-100">
        <div className="flex-1 navbar-start">
            <Link to='/'>
                <img src="./TiendaDeAlfajores_Logo.png" alt="Tienda de alfajores logo" />
            </Link>
        </div>
        <div className="navbar-center">
            <ul className="menu menu-horizontal p-0">
                <li style={estiloMenu}><Link to='/Nosotros'>Nosotros</Link></li>
                <li style={estiloMenu}><Link to='/Category/1'>Alfajores</Link></li>
                <li style={estiloMenu}><Link to='/Category/2'>Regionales</Link></li>
            </ul>
        </div>
      <div className="flex-none gap-2 navbar-end">
        <CartWidget />
      </div>
    </div>
  )
}

export default NavBar