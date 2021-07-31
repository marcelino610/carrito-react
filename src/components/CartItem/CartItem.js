import React, { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'
import '../my-css.css'

function CartItem({ id, title, price, quantity }) {
    const { removeItem } = useContext(CartContext)

    return (
        <div>
            <h3>{title} x{quantity}</h3>
            <p>${price}</p>
            <Link to={`/item/${id}`}>
                <button>Modificar</button>
            </Link>
            <button onClick={() => removeItem(id)}>Borrar</button>
        </div>
    )
}

export default CartItem;