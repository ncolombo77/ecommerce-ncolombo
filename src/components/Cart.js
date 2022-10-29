import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/cartContext'
import CarritoSinElementos from './CarritoSinElementos'


const ItemDetailCart = ({ id, name, img, price, qty }) => {
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={`../img/products/${img}`} alt="{ name }" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
          </div>
        </div>
      </td>
      <td>{ qty }</td>
      <td>{ price }</td>
      <td>{ price * qty }</td>
    </tr>
  )
}


const CarritoConElementos = () => {

  const { products, clearCart, totalAmmount } = useCart();

  return (
    <div>
      <div>Carrito</div>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio unitario</th>
              <th>Precio total</th>
            </tr>
          </thead>

          <tbody>

            {products.map((p) => <ItemDetailCart key={p.id} {...p} />)}

          </tbody>

          <tfoot>
          <tr>
              <th></th>
              <th></th>
              <th>Total:</th>
              <th> { totalAmmount() } </th>
            </tr>
          </tfoot>

        </table>
      </div>

      <div className="text-right p-5">
        <button onClick={ clearCart } className="btn btn-primary m-3">Vaciar carrito</button>
        <Link to='/Order'><button className="btn btn-primary m-3">Finalizar compra</button></Link>
      </div>
    </div>
  )
}



const Cart = () => {

  const { products } = useCart();

  return (
    <>
      { products.length > 0 ?
      <CarritoConElementos />
      :
      <CarritoSinElementos />
      }
    </>
  )
}

export default Cart