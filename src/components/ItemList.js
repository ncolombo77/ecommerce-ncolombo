import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getDocs, getFirestore, query, where, collection } from 'firebase/firestore';


export const ItemDetail = ( {id, name, img, price} ) => {
  return (
    <div className="card w-72 bg-base-100 shadow-xl">
      <figure><img src={ `../img/products/${img}` } alt={ name } /></figure>
      <div className="card-body">
        <h2 className="card-title">{ name }</h2>
        <p>$ {price}</p>
        <div className="card-actions justify-end">
          <Link to={`/Product/${id}`}><button className="btn btn-primary">Detalles</button></Link>
        </div>
      </div>
    </div>
  )
}


const ItemList = ( { categoryId } ) => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
  }, [categoryId])

  const getProducts = () => {

    const db = getFirestore();
    const itemsRef = ( categoryId === undefined ) ? collection(db, 'Items') : query(collection(db, 'Items'), where('categoryId', '==', Number(categoryId)));
    getDocs( itemsRef ).then( snapshot => {
      const data = snapshot.docs.map(i => ({ id: i.id, ...i.data()}));
      setProducts(data);
    })

  }

  
  return (
    <div className="flex flex-wrap gap-6 justify-around">
      { products.map (p => <ItemDetail key={p.id} {...p} />) }
    </div>
  )
}

export default ItemList