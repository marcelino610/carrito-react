import React from 'react';
import Cart from './shopping-cart.png'
import './CartWidget.css'

function CartWidget(props) {
    return (
            <img className="xy-centered" src={Cart} height={props.size} width={props.size} alt={props.alt} />
    )
};

export default CartWidget;