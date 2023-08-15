import { useState, useContext } from 'react';
import { CartContext } from "../context/ShoppingCartContext";
import men from '../assets/men.png';
import women from '../assets/women.png';
import jewerly from '../assets/jewerly.png';
import electronics from '../assets/electronics.png';

export const FilterBar = () => {
  //mostrar categorias
  const [active, setActive] = useState(false)
  //cambiar categorías
  const contextValue = useContext(CartContext);
  if (contextValue === null) {
    return <div>Loading...</div>;
  }
  const { setCategory } = contextValue;

  //max-md:flex-col max-md:mx-auto
  return (
    <>
      <div className="flex  items-center max-sm:flex-col">
        <div className="flex items-center m-10 hover:cursor-pointer hover:text-gray-400"
          onClick={() => setActive(!active)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-10 h-10 mr-4 max-md:mx-auto "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
            />
          </svg>
        </div>
        <div className='flex justify-evenly w-full items-center max-sm:grid max-sm:grid-cols-2'>
          <div className={`w-24 h-24  max-md:mx-auto max-md:mb-4 ${active ? '' : 'hidden'}`}>
            <img
              src={men}
              alt='Men'
              className="rounded-full m-auto object-fit w-20 hover:cursor-pointer"
              width={100} height={100}
              title='Men'
              onClick={() => setCategory(`category/men's clothing`)}
            />
          </div>
          <div className={`w-24 h-24 max-md:mx-auto max-md:mb-4 ${active ? '' : 'hidden'}`} >
            <img
              src={women}
              alt='Women'
              className="rounded-full m-auto object-fit w-20 hover:cursor-pointer"
              width={100} height={100}
              title='Women'
              onClick={() => setCategory(`category/women's clothing`)}
            />
          </div>

          <div className={`w-24 h-24 max-md:mx-auto max-md:mb-4 ${active ? '' : 'hidden'}`}>
            <img
              src={jewerly}
              alt='Jewerly'
              className="rounded-full m-auto object-fit w-20 hover:cursor-pointer"
              width={100} height={100}
              title='Jewerly'
              onClick={() => setCategory(`category/jewelery`)}
            /></div>
          <div className={`w-24 h-24 max-md:mx-auto max-md:mb-4 ${active ? '' : 'hidden'}`}>
            <img
              src={electronics}
              alt='Electronics'
              className="rounded-full m-auto object-fit w-20 hover:cursor-pointer"
              width={100} height={100}
              title='Electronics'
              onClick={() => setCategory(`category/electronics`)}
            /></div>
        </div>
      </div>
    </>
  )
}