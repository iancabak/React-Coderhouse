import { useEffect, useState } from "react"
import Loading from "./Loading";
import Productos12 from "./Productos12";


const CargarMensaje = ({condicion}) => {
    return (
        <>
            {condicion && <h2 className="text-center text-light">Bienvenidos a Guete</h2>}
            {!condicion && <h2 className="text-center text-light">poronga</h2>}
            <h2 className="text-light">Condicion esta en {condicion ? "TRUE " : "FALSE"}</h2>
        </>
    ) // si condicion esta en true dice TRUE, sino FALSE.
}


const Rendering = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setVisible(false); // Despues de 3 segundos, el estado se vuelve falso a traves de la funcion modificadora.
        }, 3000);
    }, [])


    // Tecnica de condiciones

    

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="text-light">Tecnicas de rendering</h1>
                </div>
            </div>
            <div className="row">{visible ? <Loading /> : <Productos12/>}</div>
            <CargarMensaje condicion={false} />
        </div>
    ) // Si visible es verdadero, mostrame el spinner de carga. Si es falso (una vez cargue el setTimeOut) mostrame los productos. A los 3 segundos, desmonta el componente de loading y monta el de productos.  
// En CargarMensaje, la condicion se pasa como prop. Si es true se muestra el mensaje y si es false no. 
}

export default Rendering;