import { useEffect, useState } from "react";
import arrayProductos from "./json/productos.json"

const Productos12 = () => {
    const [productosItem, setProductosItem] = useState([]); // el array debe empezar vacio.

    useEffect(() => {
        setProductosItem(arrayProductos);
    }, [arrayProductos])

    return (
        <>
            {productosItem.map(produ => ( // el map itera por cada uno de los elementos del array y los renderiza.
                <div key={produ.id} className="col-md-2">
                    <div className="card my-3 ">
                        <img src={produ.imagen} alt={produ.title} className="img-fluid" />
                        <div className="card-body">
                            <h5 className="card-title">{produ.title}</h5>
                            <p className="card-text">${produ.precio}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
        
        
    )
} 

export default Productos12;
