import Item from "./Item";

const ItemList = ({items}) => {
    return ( // Recibimos la prop items y hacemos un map de Item osea de cada uno de los elementos y despues de recorrer el array llamamos al componente Item que es donde finalmente se va a renderizar el HTML del objeto item.
        <div className="container my-5">
            <div className="row">
                {items.map(item => ( // item es como una variable de iteracion, toma cada uno de los elementos del array y se lo enviamos al componente Item via prop. 
                    <Item key={item.id} item={item} /> // La variable item pasada como prop va a tener el objeto del array de productos.
                ))}
            </div>
        </div>
        
    )
} 

export default ItemList;

