import React from 'react';
import './Navbar.css';
import './my-css.css'

function NavBar() {
    return (
        <nav>
            <h1 className="text-24">TiendaWeb</h1>
            <div className="y-centered">
                <p className="text-18">Home</p>
                <p className="text-18">Productos</p>
                <p className="text-18">Quiénes somos</p>
                <p className="text-18">Contacto</p>
            </div>
        </nav>
    )
};

export default NavBar