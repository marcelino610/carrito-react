import React from 'react';
import '../../../my-css.css'
import { Link } from 'react-router-dom';

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Item({ itemId, itemTitle, itemPrice, itemImageUrl, stock }) {
    return (
        <Col md={3} id={itemId} className='mt-3'>
            <Card>
                <Card.Img variant='top' src={itemImageUrl} alt="Imagen del producto" />
                <Card.Body>
                    <Card.Title className='text-center'>
                        <Link to={`/item/${itemId}`} className='rr-link'>
                            {itemTitle}
                        </Link>
                    </Card.Title>
                    <Card.Subtitle className='text-center'>
                        ${itemPrice}
                    </Card.Subtitle>
                </Card.Body></Card>
        </Col>
    )
}

export default Item;