import React, { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'
import '../my-css.css'
import CartItem from '../CartItem/CartItem'

function Cart() {
    const { cart } = useContext(CartContext)
    const { clear } = useContext(CartContext)

    //const [total, setTotal] = useState(0)

    let total = 0
    cart.map(el => total += el.price * el.quantity)
    return (
        <div>

            {cart.length !== 0 ? (
                <div>
                    <ul>
                        {
                            cart.map(el => <CartItem key={el.id} id={el.id} title={el.title} price={el.price} quantity={el.quantity} />)
                        }
                    </ul>
                    <h4>Total: ${total}</h4>
                    <button>Pagar</button>{/* este botón debe mostrar alert de 'compra realizada' y vaciar el carrito */}
                    <br/>
                    <button onClick={() => clear()}>Vaciar carrito</button>
                </div>
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