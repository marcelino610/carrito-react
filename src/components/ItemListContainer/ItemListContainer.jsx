import React from 'react'
import ItemList from './ItemList/ItemList'
import './item-list-container.css'
import productos from '../products'

function ItemListContainer(props) {

    return (
        <div>
            <ItemList products={productos} />
        </div>
    )
}

export default ItemListContainer;