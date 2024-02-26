import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const {cart, clear, removeItem, CantTotalProductos, SumaTotalProductos} = useContext(CartContext);

    if (CantTotalProductos() == 0) {
        return (
            <div className="container m-5">
                <div className="row">
                    <div className="col">
                        <h3 className="text-light mb-4">! No se encontraron productos en el carrito</h3>
                    </div>
                </div>
                <Link className="btn btn-warning" to ={"/"}>Volver a productos</Link>
            </div>
        )
    }

    return (
        <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h2 className="text-light mt-5">Productos seleccionados</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <table className="table text-light">
                            <tbody>
                                <tr>
                                    <td className="align-middle">
                                            <button className="btn btn-warning" onClick={clear}>Vaciar Carrito</button>
                                        </td>
                                </tr>
                                {cart.map(product =>
                                    <tr key={product.id}>
                                        <td className="align-middle"><img className="img-fluid" src={product.imagen} alt={product.title} width={100} /></td>
                                        <td className="align-middle text-start">{product.title}</td>
                                        <td className="align-middle text-start">Precio por unidad: ${product.precio}</td>
                                        <td className="align-middle">Cantidad: {product.quantity}</td>
                                        <td className="align-middle">Precio total: ${product.quantity * product.precio}</td>
                                        <td className="align-middle"><button className="btn btn-warning" onClick={()=>removeItem(product.id)}>Eliminar producto</button></td>
                                    </tr>
                                )}
                                <tr>
                                    <td>Suma total:</td>
                                    <td>${SumaTotalProductos()}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="col text-end">
                                <Link to={"/"}><button className="btn btn-warning mr-2">Ver más</button></Link>
                                <Link to={"/checkout"}><button className="btn btn-warning ml-2">Comprar</button></Link> 
                            </div>
                    </div>
                </div>
            </div>
    )
}

export default Cart;