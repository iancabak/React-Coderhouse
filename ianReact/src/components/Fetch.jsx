import { useState } from "react";
// import arrayProductos from "./productos.json";


/* const FetchJson = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        setProductos(arrayProductos);
    })

    return(
        "aca iria el codigo HTML"
    )
} */

const Fetch = () => {

    const [productos, setProductos] = useState([]);

    fetch('https://fakestoreapi.com/products')
        .then(respuesta=>respuesta.json())
        .then(datos=>setProductos(datos));



    return (
        <div className="container">
            <div className="row">
                <div className="col text-center text-light"><h1>Fakestore API</h1></div>
                
            </div>
            <div className="row">
                {productos.map(produ => (
                    <div key={produ.id} className="col-md-2">
                        <div className="card">
                            <img className="img-fluid" src={produ.image} alt={produ.title} />
                            <div className="card-body">
                                <h5 className="card-title">{produ.title}</h5>
                                <p className="card-text">${produ.price}</p>
                                <a href="#" className="btn btn-primary">BUY</a>
                            </div>
                        </div>
                    </div>
                        
                    ))}
            </div>
            
        </div>
        
    )
}


export default Fetch;

