import React from "react";
import logoGuete from "./assets/guete.png";

const Logo = ({posicion}) => {
    return (
        <img className={posicion} src={logoGuete} alt="Logo Mc Donalds" width={80} />
    )
}

export default Logo;