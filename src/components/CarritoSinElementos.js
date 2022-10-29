import React from 'react'
import { Link } from 'react-router-dom'

const CarritoSinElementos = () => {
    return (
        <div>
            <br />
            <br />
            <br />
            <div className="text-center p-5 text-lg">
                No hay elementos en el carrito.
            </div>
            <div className="text-center p-5">

                <Link to='/'>
                    <button className="btn btn-primary">Comprar productos</button>
                </Link>
            </div>
        </div>
    )
}

export default CarritoSinElementos