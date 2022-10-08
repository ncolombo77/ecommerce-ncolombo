import { createContext, useState } from "react";

const CartContext = createContext([]);

const CartProvider = ( {children} ) => {

    const [products, setProducts] = useState([]);

    const add = ( product ) => {
        setProducts( products => products.concat(product) )
    }


    const context = {
        products,
        add
    };

    return (
        <CartContext.Provider value={ context }>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider }