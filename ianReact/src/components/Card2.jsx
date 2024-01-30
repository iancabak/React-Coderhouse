const Card2 = ({titulo, foto, descripcion, boton}) => {
    return (
        <div className="card" style="width: 18rem;">
        <img className="card-img-top" src={foto} alt="Card image cap"/>
        <div className="card-body">
            <h5 className="card-title">{titulo}</h5>
            <p className="card-text">{descripcion}</p>
            <a href={boton} className="btn btn-primary">Agregar al carrito</a>
        </div>
    </div>
    )
    
}

export default Card2;