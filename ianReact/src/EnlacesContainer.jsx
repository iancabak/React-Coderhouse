import Enlace from "./Enlace";

const EnlacesContainer = () => {
    return (
        <ul className="container-fluid row justify-content-center list-unstyled list-inline mb-0">
            <li className="list-inline-item"><Enlace elemento={'Productos'} link={''} color={'text-light'} /></li>
            <li className="list-inline-item"><Enlace elemento={'Quienes Somos'} link={''} color={'text-light'} /></li>
            <li className="list-inline-item"><Enlace elemento={'Sucursales'} link={''} color={'text-light'} /></li>
            <li className="list-inline-item"><Enlace elemento={'Nuevo'} link={''} color={'text-light'} /></li>
        </ul>
    )
}

export default EnlacesContainer;