import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ItemDetail = () => {

    const { id } = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = () => {
        const URL = '../products.json'
        fetch(URL)
            .then(res => res.json())
            .then(data => {
                setProduct(data.find((prod) => prod.id === Number(id)))
            })
            .catch(error => { console.log(error); });
    }

    return (
        <div className="container mx-auto p-5">
            <h1>{product.name}</h1>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={'../img/products/' + product.img} alt={product.name} /></figure>
                <div className="card-body">
                    <p>{product.desc}</p>
                    <p>$ {product.price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Agregar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail