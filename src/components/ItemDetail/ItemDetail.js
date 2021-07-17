import React from 'react'
import './item-detail-css.css'

function ItemDetail(props) {
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
            </div>
        </div>
    )
}

export default ItemDetail;