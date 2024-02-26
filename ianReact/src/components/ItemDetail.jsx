import { Link } from "react-router-dom";
import ItemCount from "./ItemCount"
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


const ItemDetail = ({item}) => { // Render de cada producto individual cuando toco comprar.

    const {addItem} = useContext(CartContext); // addItem recibe dos parametros. Uno es el objeto y otro la cantidad.

        const onAdd = (quantity) => { // Si hay stock, al clickear se debe ejecutar onAdd CON EL NUMERO DE CANTIDAD SELECCIONADA POR EL USUARIO
            addItem(item, quantity); // A la funcion addItem se le pasa el objeto via prop y la cantidad 
        }

    return (
        <div className="container p-5"> 
            <div className="row">
                <div className="col md-4 offset-md-2">
                    <img className="img-fluid" src={item.imagen} alt={item.title} />
                </div>
                <div className="col ">
                    <h1 className="text-light">{item.title}</h1>
                    <p className="text-light">{item.descripcion}</p>
                    <p className="text-light display-3"><b>$</b>{item.precio}</p>
                    <ItemCount stock={item.stock} onAdd={onAdd} />
                </div>
            </div>
            <div className="row">
                <div className="col md-4 offset-md-2 text-center mt-4">
                    <Link to={`/category/${item.category}`}>
                        <button className="btn btn-warning w-100">{"Ver mas " + item.category}</button>
                    </Link>
                </div>
                <div className="col"></div>
            </div>
        </div>
    )
}

export default ItemDetail;

// Debe mostrar la vista de detalle de un item incluyendo su descripcion, una foto y el precio