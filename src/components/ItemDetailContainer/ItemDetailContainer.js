import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import '../my-css.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import { database } from '../../firebase';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ItemDetailContainer(props) {
    const [details, setDetails] = useState(false)
    const { id } = useParams()

    const getDetails = () => {
        let products = database.collection('productos')
        products.get().then(query => {
            setDetails(query.docs.filter(el => {
                return el.data().id === parseInt(id)
            })[0].data())
        })
    }
    useEffect(() => {
        getDetails()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    return details ? (
        <Container>
            <Row className='justify-content-center'>
                <ItemDetail id={details.id} title={details.title} price={details.price} description={details.description} imgSrc={details.imageUrl} stock={details.stock} />
            </Row>
        </Container>
    ) : (
        <Container>
            <Row className='justify-content-center'>
                <Col xs={6}>
                    <Card className='mt-5'>
                        <Card.Title className='text-center'>
                            Lo sentimos, no hemos encontrado este producto
                        </Card.Title>
                        <Card.Body>
                            <Row className='justify-content-center'>
                                <Col xs={3}>
                                    <Button variant='secondary'>
                                        <Link to='/' className='rr-link'>
                                            Volver
                                        </Link>
                                    </Button>
                                </Col>
                            </Row>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default ItemDetailContainer;