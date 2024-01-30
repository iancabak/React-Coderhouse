import { NavLink } from "react-router-dom";

const Enlace = ({elemento, link, color}) => {
    return (
        <NavLink className={color} to={link}>{elemento}</NavLink>
    )
}


export default Enlace;