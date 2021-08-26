import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Item from './Item/Item'
import { database } from '../../../firebase'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

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
        <Container>
            <Row>
                {productsToDisplay.map(el => <Item key={el.id} itemId={el.id} itemTitle={el.title} itemPrice={el.price} itemImageUrl={el.imageUrl} stock={el.stock} />)}
            </Row>
        </Container>
    )
}

export default ItemList;