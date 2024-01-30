import ItemCount from "./ItemCount"


const ItemDetail = ({item}) => { // Render de cada producto individual cuando toco comprar.
    return (
        <div className="container pt-4"> 
            <div className="row">
                <div className="col md-4 offset-md-2">
                    <img className="img-fluid" src={item.imagen} alt={item.title} />
                </div>
                <div className="col m4-4">
                    <h1 className="text-light">{item.title}</h1>
                    <p className="text-light">{item.descripcion}</p>
                    <p className="text-light"><b>$</b>{item.precio}</p>
                    <ItemCount stock={item.stock} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;

// Debe mostrar la vista de detalle de un item incluyendo su descripcion, una foto y el precio