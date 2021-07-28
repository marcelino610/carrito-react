import React, { useState } from 'react'

export const CartContext = React.createContext()
function CartContextProvider({ children }) {
    const [cart, setCart] = useState([])
    console.log(cart)
    console.log(typeof(cart))

    function isInCart(it) {//recibe un objeto
        return cart.find(el => it.id === el.id) ? true : false
    }

    function clear() {
        setCart([])
    }

    function removeItem(id) {
        const itemIndex = cart.indexOf(el => id === el.id)
        cart.splice(itemIndex, 0)
    }

    function addItem(item, quantity) {
        console.log(cart, typeof(cart))
        let givenCart = cart
        console.log('givenCart: ' + givenCart)
        let newCart = givenCart.push({product: item, howMuch: quantity})
        console.log('newCart: ' + newCart)
        //isInCart(item) ? console.log('el item ya se encuentra en el carrito') : cart.push({product: item, howMuch: quantity})
        isInCart(item) ? console.log('el item ya se encuentra en el carrito') : setCart(newCart)
        console.log(cart)
        //si comentamos la línea 23 y hacemos correr la 24, luego de agregar un item
        //los log de las líneas 6 y 7 imprimen '1' y 'number' respectivamente
        //por esto manejo 'cart' como una variable común de JavaScript

    }

    return (
        <CartContext.Provider value={{ cart, setCart, addItem, removeItem, clear }}>
            {
                //es necesario pasar 'isInCart' o sólo si lo uso fuera de este componente?
            }
            {children}
        </CartContext.Provider>)
}

export default CartContextProvider;