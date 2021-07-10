import React from 'react'
import ItemCount from '../../../ItemCount/ItemCount'
import './item-css.css'

function Item({ itemId, itemTitle, itemPrice, itemImageUrl, stock }) {
    return (
        <div className="item-card" id={ itemId }>
            <div className="img-container">
                <img src={ itemImageUrl } height="144px" width="233px" alt="Imagen del producto"/>
            </div>
            <div className="info-container">
                <h2>{ itemTitle }</h2>
                <h3>${ itemPrice }</h3>
                <div className="ic-container">
                    <ItemCount stock={stock} />
                </div>
            </div>
        </div>
    )
}

export default Item;