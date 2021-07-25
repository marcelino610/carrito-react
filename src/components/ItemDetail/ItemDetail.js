import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './item-detail-css.css'
import ItemCount from '../ItemCount/ItemCount'

function ItemDetail(props) {
    const [addToCart, setAddToCart] = useState(false)

    function finish(val) {
        setAddToCart(val)
    }
    return (
        <div id="info-container">
            <div id="img">
                <div>
                    <img src={props.imgSrc} alt="imagen de producto"/>
                </div>
            </div>
            <div id="info">
                <div>
                    <h3>{props.title}</h3>
                    <p>
                        {props.description}
                    </p>
                </div>
                <h2>
                    <p>${props.price}</p>
                </h2>
                {addToCart ? <Link to='/cart'><button>Terminar mi compra</button></Link> : <ItemCount product={props} onAdd={finish} />}
            </div>
        </div>
    )
}

export default ItemDetail;