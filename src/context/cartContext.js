import React, { useState } from 'react'

export const CartContext = React.createContext()
function CartContextProvider({ children }) {
    const [cart, setCart] = useState([])

    function isInCart(it) {
        return cart.findIndex(el => el.id === it.id) !== -1 ? true : false
    }

    function clear() {
        setCart([])
    }

    function removeItem(id) {
        let newCart = [...cart]
        let index = cart.findIndex(el => el.id === id)
        //recurro a un switch porque newCart.splice(...) no me funcionaba correctamente
        switch (index) {
            case 0:
                newCart = newCart.slice(1, newCart.length)
                setCart(newCart)
                break;
            case (newCart.length - 1):
                newCart = newCart.slice(0, newCart.length - 1)
                setCart(newCart)
                break;
        
            default:
                newCart = newCart.slice(0, index).concat(newCart.slice(index + 1, newCart.length))
                setCart(newCart)
                break;
        }
    }

    function addItem(item) {
        if (!isInCart(item)) {
            setCart([...cart, item])
        } else {
            const newCart = [...cart]
            newCart.map(el => {
                return el.id === item.id && (el.quantity = item.quantity)
            })
            setCart(newCart)
        }
    }
    
    return (
        <CartContext.Provider value={{ cart, setCart, addItem, removeItem, clear, isInCart }}>
            {children}
        </CartContext.Provider>)
}

export default CartContextProvider;