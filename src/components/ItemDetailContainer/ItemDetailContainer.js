import React, { useState } from 'react'
import { useParams } from 'react-router'
import './itDetContainer-css.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import Productos from '../products'

function ItemDetailContainer(props) {
    const [details, setDetails] = useState(false)
    const { id } = useParams()

    const getDetails = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let detailsRequired = Productos.filter(el => el.id == id)//'el.id' es number y 'id' es string, por eso '==' en lugar de '==='
                resolve(detailsRequired[0])
            }, 2000)
        })
    }
    getDetails().then(resolve => setDetails(resolve))

    return details ? (
    <div>
        <ItemDetail title={details.title} price={details.price} description={details.description} imgSrc={details.imageUrl} stock={details.stock} />
    </div>
    ) : (
        <div></div>
    )
}

export default ItemDetailContainer;