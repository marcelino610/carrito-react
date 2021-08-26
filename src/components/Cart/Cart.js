import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';
import '../my-css.css';
import CartItem from '../CartItem/CartItem';
import CartForm from './CartForm';
import { database } from '../../firebase';

import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Cart() {
    const { cart } = useContext(CartContext)
    const { clear } = useContext(CartContext)

    const [finishPurchase, setFinishPurchase] = useState(false)

    let total = 0
    cart.map(el => total += el.price * el.quantity)

    function buy(ev, total) {
        ev.preventDefault()
        database.collection('ventas').add({
            buyer: {
                name: ev.target.name.value,
                phone: ev.target.phone.value,
                email: ev.target.mail.value
            },
            products: cart.map(el => ({ id: el.id, title: el.title, price: el.price, quantity: el.quantity })),
            date: toString(new Date()),
            total: total
        })
            .then(
                doc => alert('Gracias por tu compra \n Tu número de compra es: ' + doc.id)
            )

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
            })

    }

    return (
        <Row className='justify-content-center mt-5'>
            <Col md={8}>
                {cart.length !== 0 ? (
                    finishPurchase ? (
                        <CartForm total={total} buy={buy} />
                    ) : (
                        <Card>
                            <ListGroup variant='flush' as='ul'>
                                <ListGroup.Item>
                                    <Row>
                                        <Col md={5}>
                                            <h2 className='text-center'>Artículo</h2>
                                        </Col>
                                        <Col md={2}>
                                            <h2 className='text-center'>Precio</h2>
                                        </Col>
                                        <Col md={3}>
                                            <h2 className='text-center'>Cantidad</h2>
                                        </Col>
                                        <Col md={2}>
                                            <h2> </h2>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                {
                                    cart.map(el => <CartItem key={el.id} id={el.id} title={el.title} price={el.price} quantity={el.quantity} />)
                                }
                            </ListGroup>
                            <Card.Footer>
                                <Card.Subtitle className='text-center'>
                                    <b>Total: </b>${total}
                                </Card.Subtitle>
                                <Row className='justify-content-around mt-3'>
                                    <Col md={3}>
                                        <Row className='justify-content-center'>
                                            <Col md={9}>
                                            <Link to='/'>
                                                <Button variant='secondary'>Volver</Button>
                                            </Link>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md={3}>
                                        <Row className='justify-content-center'>
                                            <Col md={9}>
                                                <Button variant='secondary' onClick={() => clear()}>Vaciar carrito</Button>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md={3}>
                                        <Row className='justify-content-center'>
                                            <Col md={10}>
                                                <Button variant='success' onClick={() => setFinishPurchase(!finishPurchase)}>Finalizar compra</Button>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Footer>
                        </Card>
                    )
                ) : (
                    <Card style={{ 'border': 'none' }}>
                        <Card.Title className='text-center'>
                            No hay items en tu carrito
                        </Card.Title>
                        <Row className='justify-content-center'>
                            <Col md={1}>
                                <Link to='/' className='rr-link'>
                                    <Button variant='secondary' className='text-center'>Volver</Button>
                                </Link>
                            </Col>
                        </Row>
                    </Card>
                )}
            </Col>
        </Row>
    )
}

export default Cart;