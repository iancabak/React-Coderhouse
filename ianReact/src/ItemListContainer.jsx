import Boton from "./Boton";

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <h1 className="text-warning text-center mt-4">Burguers By Guete</h1>
            <p className="text-center mt-3 text-warning">{greeting}</p>
            <Boton />
        </div>
        
    )
}

export default ItemListContainer;