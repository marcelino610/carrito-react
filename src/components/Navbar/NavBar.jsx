import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css';
import '../my-css.css'
import CartWidget from '../CartWidget/CartWidget'
import { CartContext } from '../../context/cartContext'

function NavBar() {
    const { cart } = useContext(CartContext)

    return (
        <nav>
        <Link to="/">
            <h1 className="text-24">TiendaWeb</h1>
        </Link>
            <div className="y-centered">
            <Link to="/">
                <p className="text-18">Home</p>
            </Link>
            <NavLink to="/categorias/arcos">
                <p className="text-18">Arcos</p>
            </NavLink>
            <NavLink to="/categorias/accesorios">
                <p className="text-18">Accesorios</p>
            </NavLink>
            </div>
            {cart.length !== 0 && <CartWidget size="50px" alt="Carrito" />}
        </nav>
    )
};

export default NavBar