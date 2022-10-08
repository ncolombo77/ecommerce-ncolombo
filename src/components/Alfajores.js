import React from 'react'
import ItemListContainer from './ItemListContainer'

const styles = {
  fontSize: '36px'
}

const Alfajores = () => {
  return (
    <>
    <h1 style={styles}>Alfajores</h1>
    <main>
    <ItemListContainer titulo='En nuestro catálogo encontrará los mejores alfajores producidos en el país.' />
    </main>
    </>
  )
}

export default Alfajores