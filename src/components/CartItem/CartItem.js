import React, { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';
import '../my-css.css';
import trash from './trash.png';
import edit from './edit.png'

import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CartItem({ id, title, price, quantity }) {
    const { removeItem } = useContext(CartContext)

    return (
        <ListGroup.Item>
            <Row>
                <Col md={5}>
                    <h4>{title}</h4>
                </Col>
                <Col md={2}>
                    <p className='text-center'>${price}</p>
                </Col>
                <Col md={3}>
                    <p className='text-center'>
                        {quantity}
                    </p>
                </Col>
                <Col md={2}>
                    <Row>
                        <Col sm={6} className='justify-content-center'>
                            <Link to={`/item/${id}`} className='rr-link'>
                                <img src={edit} alt='Editar ítem' height='30px' width='30px' />
                            </Link>
                        </Col>
                        <Col sm={6} className='justify-content-center'>
                            <img onClick={() => removeItem(id)} src={trash} alt='Borrar ítem' height='30px' width='30px' />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </ListGroup.Item>
    )
}

export default CartItem;