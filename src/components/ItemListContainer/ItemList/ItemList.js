import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import Item from './Item/Item'
import './itemlist-css.css'
import productos from '../../products'

function ItemList() {
    const [productsToDisplay, setProductsToDisplay] = useState([]);
    const array = productos
    const { catId } = useParams()

    useEffect(() => {
        setProductsToDisplay([])
        const productsPromise = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    if (catId) {
                        let filtered = array.filter(el => el.category === catId)
                        resolve(filtered)
                    } else {
                        resolve(array)
                    }
                }, 2000)
            })
        }
        productsPromise().then(resolve => setProductsToDisplay(resolve))
    }, [catId, array])

    return (
        <div id="itemList">
            {productsToDisplay.map(el => <Item key={el.id} itemId={el.id} itemTitle={el.title} itemPrice={el.price} itemImageUrl={el.imageUrl} stock={el.stock} />)}
        </div>
    )
}

export default ItemList;