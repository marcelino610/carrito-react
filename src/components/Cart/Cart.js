import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'
import '../my-css.css'
import CartItem from '../CartItem/CartItem'
import { database } from '../../firebase';

function Cart() {
    const { cart } = useContext(CartContext)
    const { clear } = useContext(CartContext)

    const [finishPurchase, setFinishPurchase] = useState(false)

    let total = 0
    cart.map(el => total += el.price * el.quantity)

    function buy(ev, total) {
        ev.preventDefault()
        database.collection('ventas').doc().set({
            buyer: {
                name: ev.target.name.value,
                phone: ev.target.phone.value,
                email: ev.target.mail.value
            },
            products: cart.map(el => ({ id: el.id, title: el.title, price: el.price, quantity: el.quantity })),
            date: 'timeStamp',
            total: total
        })

        let products = database.collection('productos')

        products.get()
            .then(query => {
                return query._delegate._snapshot.docChanges
            })
            .then(query => {
                let ids = []
                query.forEach(queryElem => {
                    ids.push([queryElem.doc.data.value.mapValue.fields.id.integerValue,
                    queryElem.doc.key.path.segments[6]])
                })
                return ids
            })
            .then(productsIdsQuery => {
                cart.forEach(async el => {
                    let itemDbId = ''
                    productsIdsQuery.forEach(idElem => (idElem[0] == el.id) && (itemDbId = idElem[1]))
                    let itemStock = await products.doc(`${itemDbId}`).get().then(query => query.data().stock)
                    products.doc(`${itemDbId}`).update({
                        stock: itemStock - el.quantity
                    })
                })

                clear()
                setFinishPurchase(!finishPurchase)
                alert('Gracias por tu compra!!')
            })

    }

    return (
        <div>

            {cart.length !== 0 ? (
                finishPurchase ? (
                    <form onSubmit={(ev) => buy(ev, total)} style={{ 'display': 'flex', 'flexDirection': 'column' }}>
                        <label>Nombre</label>
                        <input id='name' placeholder='Nombre' />
                        <label>Número de contacto</label>
                        <input id='phone' placeholder='Teléfono' />
                        <label>Correo de cntacto</label>
                        <input id='mail' placeholder='Mail' />
                        <button type='submit'>Finalizar</button>
                    </form>
                ) : (
                    <div>
                        <ul>
                            {
                                cart.map(el => <CartItem key={el.id} id={el.id} title={el.title} price={el.price} quantity={el.quantity} />)
                            }
                        </ul>
                        <h4>Total: ${total}</h4>
                        <button onClick={() => setFinishPurchase(!finishPurchase)}>Finalizar compra</button>{/* este botón debe mostrar alert de 'compra realizada' y vaciar el carrito */}
                        <br />
                        <button onClick={() => clear()}>Vaciar carrito</button>
                    </div>
                )
            ) : (
                <div>
                    <h3>No hay items en tu carrito</h3>
                    <Link to='/'>
                        <button>Volver</button>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Cart;