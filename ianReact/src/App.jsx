import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemListContainer from './components/ItemListContainer'
import NavBar from './NavBar'
import ItemDetailContainer from "./components/ItemDetailContainer"
import Error404 from "./components/Error404"
import Footer from "./components/Footer"
import Cart from "./components/Cart"
import CartContextProvider from "./context/CartContext"
import Checkout from "./components/Checkout"
import Sucursales from "./components/Sucursales"



const App = () => {

  /* const [visible, setVisible] = useState(true);



  function ocultarComponente() {
    setVisible(false);
    console.log("Quitamos el resize");
  }

  function mostrarComponente() {
    setVisible(true)
    console.log("El componente volvio");
  }
*/ 

  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className='w-100 bg-dark pb-5'>
          <NavBar />
          <Routes>
            <Route path={"/"} element={<ItemListContainer />} />
            <Route path={"/category/:id"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path={"*"} element={<Error404 />} />
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"/checkout"} element={<Checkout />} />
            <Route path={"/sucursales"} element={<Sucursales />} />
          
          </Routes>
          <> 
            
            
            
          </>
          <Footer />
        </div>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App

// {visible ? <Eventos/> : "" }
// <p className="text-center mt-4"><button className="btn btn-warning text-center" onClick={visible ? ocultarComponente : mostrarComponente}>{visible ? "Ocultar componente" : "Mostrar componente"}</button></p>
