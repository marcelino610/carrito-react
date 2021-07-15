import React, { useState, useEffect } from 'react'
import Item from './Item/Item'
import './itemlist-css.css'
import productos from '../../products'

function ItemList() {
    const [productsToDisplay, setProductsToDisplay] = useState([]);
    console.log(1);
    let productsPromise = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
            }, 2000)
        })
    }
    productsPromise().then(resolve => setProductsToDisplay(resolve))

    return (
        <div id="itemList">
            {productsToDisplay.map(el => <Item key={el.id} itemId={el.id} itemTitle={el.title} itemPrice={el.price} itemImageUrl={el.imageUrl} stock={el.stock} />)}
        </div>
    )
}

export default ItemList;