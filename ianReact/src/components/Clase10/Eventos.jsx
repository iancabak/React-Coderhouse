const Eventos = () => {
    const saludo = () => {
        console.log(Hola);
    }
    return (
        <div>
            <h1>Eventos</h1>
            <button className="btn btn-secondary" onClick={saludo}>Submit</button>
        </div>
    )
    
}

export default Eventos;