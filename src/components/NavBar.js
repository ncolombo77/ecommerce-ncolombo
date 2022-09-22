import CartWidget from './CartWidget'

const NavBar = ( { carrito } ) => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <img src="./TiendaDeAlfajores_Logo.png" alt="" />
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input type="text" placeholder="Buscar" className="input input-bordered" />
        </div>
        <CartWidget />
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">Mi cuenta</a>
            </li>
            <li>
              <a>Cerrar sesión</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar