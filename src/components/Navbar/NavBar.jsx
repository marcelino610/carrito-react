import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../my-css.css';
import CartWidget from '../CartWidget/CartWidget';
import { CartContext } from '../../context/cartContext';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function NavBar() {
    const { cart } = useContext(CartContext)

    return (
        <Navbar sticky='top' bg='info' variant='dark'>
            <Container>
                <Navbar.Brand>
                    <Link to="/" className='rr-link'>
                        BowShop
                    </Link>
                </Navbar.Brand>
                <Nav className='me-auto' variant='dark'>
                    <Nav.Item>
                        <Nav.Link>
                            <Link to="/" className='rr-link'>
                                <p className="text-18">Home</p>
                            </Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Link to="/categorias/arcos" className='rr-link'>
                                <p className="text-18">Arcos</p>
                            </Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Link to="/categorias/accesorios" className='rr-link'>
                                <p className="text-18">Accesorios</p>
                            </Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='align-self-end'>
                        {cart.length !== 0 && <CartWidget size="50px" alt="Carrito" />}
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    )
};

export default NavBar;