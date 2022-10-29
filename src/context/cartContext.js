import { createContext, useState, useContext } from "react";

const CartContext = createContext({
    products: [],
    addToCart: () => {},
    clearCart: () => {},
    totalAmmount: () => {},
    productsQty: 0
});


const useCart = () => { 
    return useContext(CartContext);
 }

const CartContextProvider = ( {children} ) => {

    const [products, setProducts] = useState([]);
    const [productsQty, setQty] = useState(0);

    const addToCart = ( product ) => {
        console.log(product);
        let producto = products.find((prod) => prod.id === product.id);

        if (producto === undefined) {
            setProducts( products => [...products, product])
        }
        else {
            producto.qty += product.qty;
        }

        setQty(productsQty => productsQty + product.qty);

     }

    const clearCart = () => {
        setProducts([]);
        setQty(0);
     }

     const totalAmmount = () => {
        return products.length === 0 ? 0 : products.map(prod => prod.price * prod.qty).reduce((sum, valor) => sum + valor)
    }

     const context = {
        products: products,
        addToCart: addToCart,
        clearCart: clearCart,
        totalAmmount: totalAmmount,
        productsQty: productsQty
    }

    return (
        <CartContext.Provider value={ context }>
            {children}
        </CartContext.Provider>
    )
}

export { useCart, CartContextProvider }