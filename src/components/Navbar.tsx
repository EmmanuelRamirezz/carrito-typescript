import {Link} from 'react-router-dom'
import { CartContext } from '../context/ShoppingCartContext';
import { useContext } from 'react';
export const Navbar = () => {
  const contextValue = useContext(CartContext);

  if (contextValue === null) {
    return <div>Loading...</div>;
  }
  const { cart, setCart } = contextValue;
  
  //En este ejemplo, estamos primero verificando si el contexto es null. Si es así, mostramos un mensaje de "Loading..." o cualquier otro indicador apropiado mientras el contexto se está cargando. Si el contexto no es null, desestructuramos las propiedades cart y setCart del contexto y las usamos como lo harías con useState.
  
  const quantity:number = cart.reduce((acumulacion:number, current:number):number => {
    return acumulacion + current; 
   }, 0)
  return(
    <div>
      Navbar
    </div>
  )
}