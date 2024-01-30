const Card = ({imagen, titulo, parrafo, boton}) => {
    return (
        <div className="card w-100 text-center m-0 h-100">
            <img className="card-img-top" src={imagen} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">{parrafo}</p>
                <div className="card-footer">
                    <a href={boton} className="btn btn-warning">Comprar</a>
                </div>
                
            </div>
        </div>
    )
}

export default Card;