import React from "react";
import logoGuete from "../assets/guete.png";
import { Link } from "react-router-dom";

const Logo = ({posicion}) => {
    return (
        <Link to={"/"}>
            <img className={posicion} src={logoGuete} alt="Logo Mc Donalds" width={80} />
        </Link> 
    )
}

export default Logo;