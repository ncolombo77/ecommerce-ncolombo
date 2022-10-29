import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDoc, getFirestore, doc } from 'firebase/firestore';
import { useCart } from '../context/cartContext';

const ItemDetail = () => {

    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [prodQty, setProdQty] = useState(1)

    const {addToCart} = useCart()

    const incHandler = () => {
        setProdQty(prodQty + 1)
    }

    const decHandler = () => {
        if (prodQty > 1)
            setProdQty(prodQty - 1)
    }

    useEffect(() => {
        getProduct();
        setProdQty(1);
    }, [])

    const getProduct = () => {
        const db = getFirestore();
        const docRef = doc(db, 'Items', id);
        getDoc( docRef ).then( snapshot => {
          setProduct({ id, ...snapshot.data()});
        })
    }

    const addHandler = () => {
        product.qty = prodQty;
        addToCart( product );
    }

    return (
        <div className="container mx-auto p-5">
            <h1>{product.name}</h1>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={'../img/products/' + product.img} alt={product.name} /></figure>
                <div className="card-body">
                    <p>{product.desc}</p>
                    <p>$ {product.price}</p>
                    <div className="justify-end btn-group">
                        <button className="btn" onClick={ decHandler }>-</button>
                        <button className="btn no-animation btn-ghost">{ prodQty }</button>
                        <button className="btn" onClick={ incHandler }>+</button>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={addHandler}>Agregar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail