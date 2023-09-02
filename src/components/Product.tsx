import { useParams, Link } from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from '../context/ShoppingCartContext';
import { Buttons } from "./Buttons";

//marca error porque nadie la pasa argumentos
export const Product: React.FC = () => {


  const { ids } = useParams();
  const contextValue = useContext(CartContext);
  if (contextValue === null) {
    return <div>Loading...</div>;
  }
  const { product } = contextValue;
  let idNum: number = Number(ids);

  //
  const id = product[idNum - 1].id;
  const price = product[idNum - 1].price;
  const title = product[idNum - 1].title;
  const description = product[idNum - 1].description;
  const image = product[idNum - 1].image;
  const rate = product[idNum - 1].rating.rate;
  const count = product[idNum - 1].rating.count

  console.log(id);
  //Funciones el carrito
  return (
    <>
      <div className="flex justify-center w-11/12 gap-2 mt-20 min-h-screen">
        <div className="w-2/3">
          <img src={image} alt={title}
            className="m-auto object-fit w-1/3" />
        </div>
        <div className="w-1/3">
          <h2>{title}</h2>
          <p>{rate} ⭐️</p>
          <p>{count}👥</p>
          <p>{description}</p>
          <p>{price}$</p>
          <Buttons id={id} title={title} price={price} image={image} />
          <Link to="/">
            <button className="bg-slate-400 py-2 px-4 mt-8 rounded-3xl text-white hover:bg-slate-500 ">
              Return to the catalog
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}