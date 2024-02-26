import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
        <div className="col-md-3 text-center mt-3">
            <div className="card w-100 text-center m-0 h-100">
                <Link to={"/item/" + item.id} className="text-decoration-none text-dark">
                    <img className="card-img-top" src={item.imagen} alt={item.title} />
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.descripcion}</p>
                        <div className="card-footer">
                            <a href="#" className="btn btn-warning ">Comprar</a>
                        </div>
                    </div>
                </Link>
                <Link to={"/item/Ovyp4uh32I8p1rZSzIMI"}>
                    <button className="btn btn-warning fixed-bottom p-2"><b>Probá la nueva 'Rock N Roll Guete'!</b></button>
                </Link>
                
            </div> 
        </div>

    
    )
}

export default Item;

// Item recibe la prop item de ItemList y con eso accedemos a las propiedades.