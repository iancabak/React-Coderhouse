import CartWidget from "./components/CartWidget";
import EnlacesContainer from "./components/EnlacesContainer";
import Logo from "./components/Logo";



const NavBar = () => {
    return (
        <div className="container-fluid row bg-secondary d-flex align-items-center justify-content-between .navbar-expand{-sm|-md|-lg|-xl|-xxl} m-0 sticky-top">
            <div className="col p-2 text-center">
                <CartWidget />
            </div>
            <div className="col p-2 text-center">
                <EnlacesContainer />
            </div>
            <div className="col p-2 text-center">
                <Logo />
            </div>
        </div>
    )
}


export default NavBar;