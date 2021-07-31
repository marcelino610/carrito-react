import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import Cart from './shopping-cart.png'
import './CartWidget.css'
import { CartContext } from '../../context/cartContext'

function CartWidget(props) {
    const { cart } = useContext(CartContext)
    let totalItemsInCart = cart.map(el => el.quantity)
    console.log(totalItemsInCart)
    totalItemsInCart = totalItemsInCart.reduce((acc, el) => acc + el)
    console.log(totalItemsInCart)
    return (
        <Link to='/cart'>
            <div>
                <img className="xy-centered" src={Cart} height={props.size} width={props.size} alt={props.alt} />
                <p style={{'z-index': '20', backgroundColor: 'black', color: 'white', position: 'relative', right: '-5%', bottom: '10%' }} >{totalItemsInCart}</p>
            </div>
        </Link>
    )
};

export default CartWidget;