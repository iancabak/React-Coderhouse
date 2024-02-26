import { useContext } from "react";
import { CartContext } from "../context/CartContext";


const CompProductos = () => {
    const {productos, totalProductos} = useContext(CartContext); // Para acceder a los beneficios del contexto, solo hay que acceder al nombre del contexto dentro de useContext. 
    // Aca me importaban solamente el array de los productos y su funcion, pero podriamos usar cualquiero objeto, funcion etc de un contexto. Eso es lo que esta dentro del value en el Provider.
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Productos</h1>
                    <ul>
                        {productos.map(item => (
                            <li key={item.id}>{item.nombre}</li>
                    ))}
                    </ul>
                    <p>Total productos: {totalProductos()}</p>
                </div>
            </div>
        </div>
    )
}


export default CompProductos;
