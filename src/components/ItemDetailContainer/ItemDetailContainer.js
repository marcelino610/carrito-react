import React, { useState } from 'react'
import './itDetContainer-css.css'
import ItemDetail from '../ItemDetail/ItemDetail'

function ItemDetailContainer(props) {
    const [details, setDetails] = useState(false)

    const getDetails = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({name: "Nombre del producto", price: "3000", description: "Descripción detallada de las características del producto", src: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
            })
            }, 2000)
        })
    }
    getDetails().then(resolve => setDetails(resolve))

    return details ? (
    <div>
        <ItemDetail title={details.name} price={details.price} description={details.description} imgSrc={details.src} />
    </div>
    ) : (
        <div></div>
    )
}

export default ItemDetailContainer;