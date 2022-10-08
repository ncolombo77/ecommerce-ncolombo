import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


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

    const productsPromise = new Promise ( (resolve) => {
      setTimeout ( () => {
        resolve ( products )
      }, 1000)
    })

    productsPromise
      .then( res => {

        const URL = '../products.json'
        fetch( URL )
        .then( res => res.json())
        .then( data => {
            if ( categoryId != undefined )
              setProducts( data.filter(p => p.categoryId === Number(categoryId)) )
            else
              setProducts(data)
        })
        .catch(error => { console.log(error);});

      })
      .catch( err => {
        console.log('Error: ' + err)
      })


  }

  
  return (
    <div className="flex flex-wrap gap-6 justify-around">
      { products.map (p => <ItemDetail key={p.id} {...p} />) }
    </div>
  )
}

export default ItemList