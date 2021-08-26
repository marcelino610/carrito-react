import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../my-css.css'
import ItemCount from '../ItemCount/ItemCount'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function ItemDetail(props) {
    const [addToCart, setAddToCart] = useState(false)

    function finish(val) {
        setAddToCart(val)
    }
    return (
        <Col md={9} className='mt-5'>
            <Card>
                <Row>
                    <Col md={4}>
                        <Card.Img variant='top' src={props.imgSrc} alt="imagen de producto" />
                    </Col>
                    <Col md={8}>
                        <Card.Body>
                            <Row className='justify-content-center'>
                                <Card.Title className='text-center'>
                                    <h3>{props.title}</h3>
                                </Card.Title>
                                <Card.Text className='text-center'>
                                    {props.description}
                                </Card.Text>
                                <Card.Text className='text-center'>
                                    <b>Precio: </b>${props.price}
                                </Card.Text>
                            </Row>
                            <Row className='justify-content-center mt-3'>
                                {addToCart ? (
                                    <Col xs={8}>
                                        <Row className='justify-content-around'>
                                            <Col xs={2}>
                                                <Link to='/' className='rr-link'>
                                                    <Button variant='secondary'>Volver</Button>
                                                </Link>
                                            </Col>
                                            <Col xs={7}>
                                                <Link to='/cart' className='rr-link'>
                                                    <Button variant='success'>Terminar mi compra</Button>
                                                </Link>
                                            </Col>
                                        </Row>
                                    </Col>
                                ) : (
                                    <Col xs={6}>
                                        <ItemCount product={props} onAdd={finish} />
                                    </Col>
                                )}
                            </Row>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Col>
    )
}

export default ItemDetail;