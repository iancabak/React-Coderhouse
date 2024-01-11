import Cart from './assets/cart-plus-fill.svg'

const CartWidget = () => {
    return (
            <button type="button" className="btn btn-secondary">
                <img src={Cart} alt="Carrito" width={80} />
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
            </button>   
    )
}

export default CartWidget;