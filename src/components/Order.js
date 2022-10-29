import React from 'react'
import CarritoSinElementos from './CarritoSinElementos'
import { useCart } from '../context/cartContext'
import { useNavigate } from 'react-router-dom'
import { getFirestore, collection, addDoc } from 'firebase/firestore'

export const UserForm = () => {
  return (
    <>
      <div className="form-control p-5">
        <label className="input-group m-5">
          <span>Nombre</span>
          <input type="text" placeholder="Ingrese su nombre" className="input input-bordered" />
        </label>

        <label className="input-group m-5">
          <span>Teléfono</span>
          <input type="text" placeholder="099-9999-9999" className="input input-bordered" />
        </label>

        <label className="input-group m-5">
          <span>Email</span>
          <input type="text" placeholder="ejemplo@sitio.com" className="input input-bordered" />
        </label>
      </div>

    </>
  )
}


const Order = () => {

    const navigate = useNavigate();

    const confirmOrderHandler = () => {
      putOrder();
      clearCart();
      navigate("/");
    }

    const { products, clearCart, productsQty } = useCart();

    const putOrder = () => { 

        const user = {name: 'Nicolás Colombo', phone: '45430742', email: 'ncolombo@yahoo.com'}

        const order = {
            buyer: user,
            items: products,
            total: productsQty
        }

        const db = getFirestore();

        const ordersCollection = collection(db, 'orders');

        addDoc(ordersCollection, order).then( res => {})

     }

    return (

      <>
      { products.length > 0 ?
      <div className='text-center'>
          <h1 className="text-5xl">Confirmar compra</h1>
          <UserForm></UserForm>
          <button className="btn" onClick={ confirmOrderHandler }>Confirmar orden</button>
      </div>
      :
      <CarritoSinElementos />
      }
    </>

  )
}

export default Order