import React, { useState, useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import './item-count.css'
import '../my-css.css'
import minus from '../minus.png'
import add from '../add.png'

function ItemCount({ product, onAdd  }) {
    const [count, setCount] = useState(0)
    const { addItem } = useContext(CartContext)
    const { cart } = useContext(CartContext)

    return (
        <div id="count-container">
            <div className="xy-centered">
                <img className={count === 0 ? "disabled" : ""} src={minus} onClick={() => { count === 0 ? setCount(0) : setCount(count - 1) }} height="20px" width="20px" alt="menos item" />
                <p className="text-18">{count}</p>
                <img className={count === product.stock ? "disabled" : ""} src={add} onClick={() => { count === product.stock ? setCount(count) : setCount(count + 1) }} height="20px" width="20px" alt="mas item" />
            </div>
            <button onClick={() => {
                onAdd(count)
                addItem({...product, "quantity": count})
                console.log(cart)
                }}>
                Agregar al carrito
                </button>
        </div>
    )
}

export default ItemCount;