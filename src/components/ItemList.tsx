import { Item } from './Item';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/ShoppingCartContext';
import { Jelly } from '@uiball/loaders';
import { FilterBar } from './FilterBar';

type current = {
  quantity: number,
  price: number,
}
export const ItemList = () => {
  const contextValue = useContext(CartContext);
  if (contextValue === null) {
    return <div>Loading...</div>;
  }
  const { cart, product, loading } = contextValue;
  const quantity: number = cart.reduce((acumulacion: number, current: current): number => { return acumulacion + current.quantity;}, 0)  
  return (
    <>
      {
        loading ?
          <div className='flex  justify-center items-center h-screen mx-auto'>

            <Jelly
              size={120}
              speed={0.9}
              color="rgb(100 116 139"
            />
          </div>
          :
          <div className='w-11/12 mx-auto pt-8'>
            <FilterBar/>
            <div className='grid grid-cols-4 grid-flow-row gap-4 max-md:grid-cols-2 max-sm:grid-cols-1'>
              {product.map((product) => {
                return <Item key={product.id} {...product} />
                {/* Los 3 puntos significa que le estoy pasando todas las propiedades de product */ }
              })}
            </div>
            <ul className="my-auto text-lg text-white">
              <Link to={"/cart"}>
                <li className='text-black'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-14 h-14 mx-auto hover:h-16 hover:w-16  mt-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>

                  <div className="cart-count mx-auto text-center">
                    Cart items:
                    <span> </span>
                    {quantity}
                  </div>
                </li>
              </Link>
            </ul>
          </div>
      }

    </>

  )
}