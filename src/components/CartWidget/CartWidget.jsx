import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Cart from './shopping-cart.png';
import './CartWidget.css';
import { CartContext } from '../../context/cartContext';

import Image from 'react-bootstrap/Image';

function CartWidget(props) {
    const { cart } = useContext(CartContext)
    let totalItemsInCart = cart.map(el => el.quantity)
    totalItemsInCart = totalItemsInCart.reduce((acc, el) => acc + el)

    return (
        <Link to='/cart' className='rr-link'>
            <div style={{ position: 'relative' }}>
                <img className='color-changed' src={Cart} height={props.size} width={props.size} alt={props.alt} />
                <div>
                <p className='batch'>{totalItemsInCart}</p>
                </div>
            </div>
        </Link>
    )
};

export default CartWidget;