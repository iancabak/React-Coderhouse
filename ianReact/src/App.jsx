import ItemListContainer from './ItemListContainer'
import NavBar from './NavBar'

const App = () => {
  return (
    <div className='w-100 bg-dark pb-5'>
      <NavBar />
      <ItemListContainer greeting={'Sean bienvenidos'} />
    </div>
    
  )
}

export default App
