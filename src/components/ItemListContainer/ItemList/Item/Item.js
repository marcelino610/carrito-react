import React from 'react'
import ItemCount from '../../../ItemCount/ItemCount'
import './item-css.css'
import { NavLink } from 'react-router-dom'

function Item({ itemId, itemTitle, itemPrice, itemImageUrl, stock }) {
    return (
        <div className="item-card" id={ itemId }>
            <div className="img-container">
                <img src={ itemImageUrl } height="144px" width="233px" alt="Imagen del producto"/>
            </div>
            <div className="info-container">
                <h2><NavLink to={`/item/${itemId}`}>{ itemTitle }</NavLink></h2>
                <h3>${ itemPrice }</h3>
            </div>
        </div>
    )
}

export default Item;