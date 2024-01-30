import CartWidget from "./components/CartWidget";
import EnlacesContainer from "./components/EnlacesContainer";
import Logo from "./components/Logo";



const NavBar = () => {
    return (
        <div className="container-fluid w-100 row bg-secondary d-flex align-items-center justify-content-between .navbar-expand{-sm|-md|-lg|-xl|-xxl} p-8 m-0">
            <div className="col p-0">
                <CartWidget />
            </div>
            <div className="col p-0">
                <EnlacesContainer />
            </div>
            <div className="col p-0">
                <Logo posicion={'float-right'} />
                
            </div>
        </div>
    )
}


export default NavBar;