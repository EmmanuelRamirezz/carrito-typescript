
import {Navbar} from './components/Navbar';
import {ItemList} from './components/ItemList';
import {ShoppingCart} from './components/ShoppingCart';
import {ShoppingCartContext} from './context/ShoppingCartContext';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  let saludo: string = "Hola mundo"
  console.log(saludo);
  

  return (
    <>
      <ShoppingCartContext>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element ={<ItemList/>}/>
            <Route path='/cart' element={<ShoppingCart/>}/>
          </Routes>
        </Router>
      </ShoppingCartContext>
    </>
  )
}

export default App
