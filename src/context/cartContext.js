import React, { useState } from 'react'

export const CartContext = React.createContext()
function CartContextProvider({ children }) {
    const [cart, setCart] = useState([])
    console.log(cart)

    function isInCart(it) {
        return cart.findIndex(el => el.id === it.id) !== -1 ? true : false
    }

    function clear() {
        setCart([])
    }

    function removeItem(id) {
        const itemIndex = cart.findIndex(el => el.id === id)
        const smallerCart = cart.splice(itemIndex, 0)
        setCart(smallerCart)
    }

    function addItem(item) {
        !isInCart(item) && setCart([...cart, item])
    }
    
    return (
        <CartContext.Provider value={{ cart, setCart, addItem, removeItem, clear, isInCart }}>
            {children}
        </CartContext.Provider>)
}

export default CartContextProvider;