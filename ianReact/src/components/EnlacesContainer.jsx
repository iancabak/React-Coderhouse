import { NavLink } from "react-router-dom";


const EnlacesContainer = () => {
    return (
        <ul className="container-fluid row justify-content-center list-unstyled list-inline mb-0">
            
            <li className="list-inline-item ">
                <NavLink className="text-light" to="/">Productos</NavLink>
            </li>
            <li className="list-inline-item">
                <NavLink className="text-light" to="/category/hamburguesas">Hamburguesas</NavLink>
            </li>
            <li className="list-inline-item">
                <NavLink className="text-light" to="/category/pollo">Pollo</NavLink>
            </li>
            <li className="list-inline-item">
                <NavLink className="text-light" to="/category/bebidas">Bebidas</NavLink>
            </li>
            <li className="list-inline-item">
                <NavLink className="text-light" to="/category/guarniciones">Guarniciones</NavLink>
            </li>
            <li className="list-inline-item">
                <NavLink className="text-light" to="/category/postres">Postres</NavLink>
            </li>
        </ul>
    )
}

export default EnlacesContainer;