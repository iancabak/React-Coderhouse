import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const ItemCount = ({stock, onAdd}) => {
    
    const [counter, setCounter] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [addedItem, setAddedItem] = useState(false);

    const incrementar = () => {
        if (counter < itemStock) {
            setCounter(counter + 1)
        }
    }

    const decrementar = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }


    const addToCart = () => {
        if (counter <= itemStock) {
            setItemStock(itemStock - counter);
            setCounter(1);
            onAdd(counter);
            setAddedItem(true);
            console.log("Agregaste " + counter + " productos al carrito!");
        }
    }


    useEffect(() => {
        setItemStock(stock)
    }, [stock]);

    return (
        <>
            <div className="row">
                <div className="col-md-4">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-warning" onClick={decrementar}>-</button>
                        <button type="button" className="btn btn-warning">{counter}</button>
                        <button type="button" className="btn btn-warning" onClick={incrementar}>+</button>
                    </div>
                </div>
            </div>
            <div className="col-md-5 p-0 mt-2">
                {addedItem ? <Link to={"/cart"}><button type="button" className="btn btn-warning" onClick={addToCart}>Finalizar mi compra</button></Link> : <button type="button" className="btn btn-warning" onClick={addToCart}>Agregar al carrito</button>}
                <Link to={"/"}><button className="btn btn-warning mt-2">Volver a productos</button></Link>
            </div>
            
        </>
    )
}
    export default ItemCount;