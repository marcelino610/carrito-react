import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import './itDetContainer-css.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { database } from '../../firebase'

function ItemDetailContainer(props) {
    const [details, setDetails] = useState(false)
    const { id } = useParams()

    const getDetails = () => {
        let products = database.collection('productos')
        products.get().then(query => {
            setDetails(query.docs.filter(el => el.data().id == id)[0].data())
        })
    }
    useEffect(() => {
        getDetails()
    }, [id]);

    return details ? (
        <div>
            <ItemDetail id={details.id} title={details.title} price={details.price} description={details.description} imgSrc={details.imageUrl} stock={details.stock} />
        </div>
    ) : (
        <div></div>
    )
}

export default ItemDetailContainer;