import React, { useState, useEffect } from 'react'
import Item from './Item/Item'
import './itemlist-css.css'

function ItemList({ products }) {
    const [productsToDisplay, setProductsToDisplay] = useState();
    console.log(1);
    let productsPromise = new Promise((resolve) => {
        setTimeout(
            resolve(products.map(el => <Item key={el.id} itemId={el.id} itemTitle={el.title} itemPrice={el.price} itemImageUrl={el.imageUrl} stock={el.stock} />))
        , 20000)
    })
    useEffect(() => {
        productsPromise.then(resp => {console.log(resp); setProductsToDisplay(resp)})
        // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, [productsToDisplay])
    console.log(2)
    //console.log(productsToDisplay);

    return (
        <div>
            {productsToDisplay}
        </div>
    )
}

export default ItemList;