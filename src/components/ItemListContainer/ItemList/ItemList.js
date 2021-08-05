import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Item from './Item/Item'
import './itemlist-css.css'
import { database } from '../../../firebase'

function ItemList() {
    const [productsToDisplay, setProductsToDisplay] = useState([]);
    const { catId } = useParams()

    const getProducts = () => {
        const products = database.collection('productos')
        if (catId) {
            let byCategory = products.where('category', '==', catId)
            byCategory.get().then(query => setProductsToDisplay(query.docs.map(el => {
                return { ...el.data(), id: el.data().id }
            })))
        } else {
            products.get().then(query => setProductsToDisplay(query.docs.map(el => {
                return { ...el.data(), id: el.data().id }
            })))
        }
    }
    useEffect(() => {
        getProducts()
    }, [catId]);

    return (
        <div id="itemList">
            {productsToDisplay.map(el => <Item key={el.id} itemId={el.id} itemTitle={el.title} itemPrice={el.price} itemImageUrl={el.imageUrl} stock={el.stock} />)}
        </div>
    )
}

export default ItemList;