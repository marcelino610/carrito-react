import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom'
import '../my-css.css';
import minus from '../minus.png';
import add from '../add.png';

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function ItemCount({ product, onAdd }) {
    const [count, setCount] = useState(0)
    const { addItem } = useContext(CartContext)

    return (
        product.stock === 0 ? (
            <div>
                <h3 className='justify-content-center red'>Producto agotado</h3>
                <Row className='justify-content-center'>
                    <Col xs={4}>
                        <Link to='/' className='rr-link align-self-center'>
                            <Button variant='secondary'>Volver</Button>
                        </Link>
                    </Col>
                </Row>
            </div>
        ) : (
            <Card style={{ 'border': 'none' }}>
                <Row className='justify-content-center'>
                    <Col xs={3} md={2}>
                        <Card.Img className={count === 0 ? "disabled" : ""}
                            src={minus} onClick={() => { count === 0 ? setCount(0) : setCount(count - 1) }}
                            alt="menos item" />
                    </Col>
                    <Col xs={2}>
                        <Card.Text className='text-center'>
                            {count}
                        </Card.Text>
                    </Col>
                    <Col xs={3} md={2}>
                        <Card.Img className={count === product.stock ? "disabled" : ""}
                            src={add}
                            onClick={() => { count === product.stock ? setCount(count) : setCount(count + 1) }}
                            alt="mas item" />
                    </Col>
                </Row>
                <Row className='justify-content-center mt-3'>
                    <Col xs={12} md={8}>
                        <Button onClick={() => {
                            onAdd(count)
                            addItem({ ...product, "quantity": count })
                        }}
                            variant='success'>
                            Agregar al carrito
                        </Button>
                    </Col>
                </Row>

            </Card>
        )
    )
}

export default ItemCount;