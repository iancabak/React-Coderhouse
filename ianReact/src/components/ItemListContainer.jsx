// import arrayProductos from "./json/productos.json";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { Link, useParams } from "react-router-dom";
import { getFirestore, collection, query, getDocs, where } from "firebase/firestore";
import Loading from "./Loading";
import Carrusel from "./Carrusel";
import ResenasContainer from "./ResenasContainer";
import QuienesSomos from "./QuienesSomos";


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams(); // el useParams captura el id


// Llamada a productos desde el archivo JSON:

/*   useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.category === id) : arrayProductos); // hace una promesa y devuelve el array de productos despues de 2 segundos
            }, 1000);
        })
        promesa.then(data => {
            setItems(data); // Cuando tenemos la respuesta, guardamos todos los productos en un estado que se llama items y se lo enviamos via props al ItemList
        })
    }, [id]); 
*/


// Subida de los productos a la collection items de firebase: SOLO HACER UNA VEZ Y DESPUES COMENTAR.

    /* useEffect(() => {
        const db = getFirestore(); // coneccion a base de datos
        const itemsCollection = collection(db, "items"); // seleccionamos a que coleccion apuntamos

        arrayProductos.forEach(producto => { // hacemos forEach para pushear los productos.
            addDoc(itemsCollection, producto); // recorre cada uno de los elementos del array
        });

        console.log("Los productos se subieron correctamente"); // se ejecuta una sola vez 
    
    }, [])
*/
    
    // Llamada a productos desde el firestore:

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const consulta = id ? query(itemsCollection, where("category", "==", id)) : itemsCollection;
        getDocs(consulta).then(resultado => {
            setLoading(false);
            setItems(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})));
        });

    }, [id]); // Si viene el id de la categoria, accedemos a toda la coleccion completa. Sino, filtramos los productos por cada categoria.

    return (
        <div>
            <h5 className="fluid bg-light text-center text-warning mb-0 p-2">The Guete Experience</h5>
            <Carrusel/>
            <h1 className="font-weight-bold display-1 text-warning text-center mt-5 mb-2">The Guete Experience</h1>
            <p className="text-center mt-3 mb-5 text-light">Les da la bienvenida!</p>
            <hr className="border-warning" width="1000" />
            <div className="text-center">
                <h3 className="text-center text-light mt-5">Nuestros productos:</h3>
                {id ? <Link to={"/"}><button onClick={<Loading/>} className="btn btn-warning mt-3">Mostrar todo</button></Link> : ""}
            </div>
            {loading ? <Loading/> : <ItemList items={items}/>}
            
            <QuienesSomos/>
            <ResenasContainer/>
            <section className="container-fluid bg-warning mb-5">
                <div className="container bg-dark text-center p-5">
                    <h3 className="text-light mb-4">Conocé nuestras sucursales</h3>
                    <Link to={"/sucursales"}><button className="btn btn-warning">Ver sucursales</button></Link>
                    
                </div>
            </section>
                
            
        </div>
        
    )
}

// itemListContainer > ItemList > Item
// El carrusel lo tengo que meter dentro de ItemListContainer

export default ItemListContainer;


