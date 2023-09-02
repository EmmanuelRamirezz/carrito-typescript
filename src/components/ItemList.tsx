import { Item } from './Item';
import { useContext } from 'react';
import { CartContext } from '../context/ShoppingCartContext';
import { Jelly } from '@uiball/loaders';
import { FilterBar } from './FilterBar';

export const ItemList = () => {
  const contextValue = useContext(CartContext);
  if (contextValue === null) {
    return <div>Loading...</div>;
  }
  const { product, loading } = contextValue;
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
            <FilterBar />
            <div className='grid grid-cols-4 grid-flow-row gap-4 max-md:grid-cols-2 max-sm:grid-cols-1 mb-20'>
              {product.map((product) => {
                return <Item key={product.id} {...product} />
                {/* Los 3 puntos significa que le estoy pasando todas las propiedades de product */ }
              })}
            </div>
          </div>
      }
    </>
  )
}