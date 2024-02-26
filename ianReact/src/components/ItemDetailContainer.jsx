import { useEffect, useState } from "react";
// import arrayProductos from "./json/productos.json";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import Loading from "./Loading";

const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams(); // cuando hacemos el useParams, el dato lo vamos a capturar, pero me tira error de consola porque le llega el parametro como STRING y el id del producto lo guardamos en numero. Se compara un valor numerico con una string. Podemos hacer parseInt para pasarlo a valor numerico. 


    /* useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {

                let producto = arrayProductos.find(item => item.id === parseInt(id)); // Obtenemos el producto con ID capturado por parametro. Lo hacemos para que sea dinamico, porque antes te devolvia siempre hamburguesa haciendo clic en cualquier producto.

                resolve(producto); // Aca no tenemos que devolver todo el array, sino UN SOLO Item.
            }, 1000);
        })
        promesa.then(data => {
            setItem(data); // Cuando tenemos la respuesta, guardamos todos los productos en un estado que se llama items y se lo enviamos via props al ItemList
        })
    }, [id]); */

    // Llamada del producto desde el Firestore

    useEffect(() => {
        const db = getFirestore();
        const producto = doc(db, "items", id);
        getDoc(producto).then(resultado => {
            setLoading(false);
            setItem({id:resultado.id, ...resultado.data()});
        });

    }, [id]);


    return (
        <>
            {loading ? <Loading/> : <ItemDetail item={item} />}
        </>
        
    )
}

export default ItemDetailContainer;