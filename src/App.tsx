
import {Navbar} from './components/Navbar';
import {ItemList} from './components/ItemList';
import {ShoppingCart} from './components/ShoppingCart';
import {ShoppingCartContext} from './context/ShoppingCartContext';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Product } from './components/Product';

function App() {
  return (
    <>
      <ShoppingCartContext>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element ={<ItemList/>}/>
            <Route path='/cart' element={<ShoppingCart/>}/>
            <Route path='/products/:ids' element = {<Product/>}/>
          </Routes>
        </Router>
      </ShoppingCartContext>
    </>
  )
}

export default App
