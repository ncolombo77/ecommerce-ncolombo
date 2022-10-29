import ItemList from "./ItemList"
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getDocs, getFirestore, query, where, collection } from 'firebase/firestore';

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
      if (categoryId !== undefined) {
        const db = getFirestore();
        const itemsRef = collection(db, 'Categories');
        const q = query(itemsRef, where('categoryId', '==', Number(categoryId)));
        getDocs( q ).then(snapshot => {
          const data = snapshot.docs.map(c => ({ id: c.id, ...c.data() }));
          setCategory(data[0]);
        })
      }

    }

    return (
        <>
            { categoryId !== undefined ?
                <CategoryTitle {...category } />
            :
                <GenericTitle />
            }
            <ItemList categoryId={ categoryId } />
        </>
    )
}

export default ItemListContainer