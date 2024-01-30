import { Link } from "react-router-dom";
import logoGuete from "../assets/guete.png";


const Footer = () => {
    return (
        <div className="container-fluid bg-light pl-4 mt-4 mb-4">
            <footer className="py-3">
                <div className="row p-5">
                    <div className="col p-3">
                        <h5>Gracias por ser parte de la Experiencia Guete!</h5>
                        <ul>
                            <li>
                                <Link to={"/"}>
                                    <p className="text-dark">Productos</p>
                                </Link>
                            </li>
                            <li>
                                <p>Quienes Somos?</p>
                            </li>
                            <li>
                                <p>Sucursales</p>
                            </li>
                            <li>
                                <p>Familia Guete</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-2 mb-3 text-center">
                        <img className="img-fluid. max-width: 100%" src={logoGuete} alt="Logo" />
                    </div>
                    <div className="col-md-5 p-3 offset-md-1 mb-3">
                        <form>
                        <h5>Subscribite a nuestra Guetecomunidad</h5>
                        <p>Para recibir novedades todos los meses.</p>
                        <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                            <label for="newsletter1" className="visually-hidden"></label>
                            <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                            <button className="btn btn-warning" type="button">Subscribite</button>
                        </div>
                        </form>
                    </div>
                </div>
                <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top p-5">
                    <p>&copy; 2022 Company, Inc. All rights reserved.</p>
                    <ul className="list-unstyled d-flex">
                        <li className="ms-3">
                            <a className="link-dark" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="dark" className="bi bi-instagram m-2" viewBox="0 0 16 16">
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                                </svg>
                            </a>
                        </li>
                        <li className="ms-3">
                            <a className="link-dark" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="dark" className="bi bi-youtube m-2" viewBox="0 0 16 16">
                                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
                                </svg>
                            </a>
                        </li>
                        <li className="ms-3">
                            <a className="link-dark" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="dark" className="bi bi-twitter-x m-2" viewBox="0 0 16 16">
                                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    )
    
}

export default Footer;