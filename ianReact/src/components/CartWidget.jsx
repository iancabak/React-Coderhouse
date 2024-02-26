import { useContext } from 'react';
import Cart from '../assets/cart-plus-fill.svg';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
    const {CantTotalProductos} = useContext(CartContext);

    return (
        CantTotalProductos() > 0 ?
            <Link to={"/cart"}>
                <button type="button" className="btn btn-secondary">
                    <img src={Cart} alt="Carrito" width={60} />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{CantTotalProductos()}</span>
                </button>
            </Link> : <button className='btn btn-warning'>Contactanos</button>
    )
}

export default CartWidget;