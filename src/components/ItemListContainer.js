import ItemList from "./ItemList"
import { categories } from './data/categories'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const styleH2 = {
    padding: '20px'
}

const CategoryTitle = ( { name, desc }) => {
  return (
    <>
        <h1>{ name }</h1>
        <h2 style={styleH2}>{ desc }</h2>
        <br />
    </>
  )
}


const GenericTitle = ( ) => {
    return (
      <>
          <h1>Catálogo de productos</h1>
          <h2 style={styleH2}>En nuestro catálogo encontrará los productos dulces más deliciosos.</h2>
          <br />
      </>
    )
  }

const ItemListContainer = () => {

    const { categoryId } = useParams()
    const [category, setCategory] = useState({})

    useEffect(() => {
        getCategory()
      }, [categoryId])

    const getCategory = () => {
        if (categoryId != undefined)
            setCategory(categories.find( c => c.categoryId === Number(categoryId)))
    }

    return (
        <>
            { categoryId != undefined ?
                <CategoryTitle {...category } />
            :
                <GenericTitle />
            }
            <ItemList categoryId={ categoryId } />
        </>
    )
}

export default ItemListContainer