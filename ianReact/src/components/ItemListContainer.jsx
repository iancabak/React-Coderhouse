

import arrayProductos from "./json/productos.json";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams(); // el useParams captura el id

    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.category === id) : arrayProductos); // hace una promesa y devuelve el array de productos despues de 2 segundos
            }, 1000);
        })
        promesa.then(data => {
            setItems(data); // Cuando tenemos la respuesta, guardamos todos los productos en un estado que se llama items y se lo enviamos via props al ItemList
        })
    }, [id]);
    
    return (
        <div>
            <h1 className="font-weight-bold display-1 text-warning text-center mt-5 mb-3">The Guete Experience</h1>
            <p className="text-center mt-3 text-light font-weight-bold">Sean todos bienvenidos!</p>
            <ItemList items={items} />
            
        </div>
        
    )
}

// itemListContainer > ItemList > Item
// El carrusel lo tengo que meter dentro de ItemListContainer

export default ItemListContainer;


