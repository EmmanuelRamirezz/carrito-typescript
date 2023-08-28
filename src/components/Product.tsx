import { useParams, Link } from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from '../context/ShoppingCartContext';
import { Item } from "./Item";
import { Buttons } from "./Buttons";

//Tipos de datos:
type Products = {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: { [key: string]: string };
}
type CurrentItems = {
  id: number,
  title: string,
  image: string,
  quantity: number;
}
//marca error porque nadie la pasa argumentos
export const Product = () => {


  const { ids } = useParams();
  const contextValue = useContext(CartContext);
  if (contextValue === null) {
    return <div>Loading...</div>;
  }
  const { product, cart, setCart, productQuantity } = contextValue;
  let idNum: number = Number(ids);

  //
  const id = product[idNum].id;
  const price = product[idNum].price;
  const title = product[idNum].title;
  const image = product[idNum].image;

  //Funciones el carrito
  const addToCart = () => {
    //setCart puede recibir funciones como parametro. [Verifica si el producto agregado ya estaba en el carrito]
    setCart((currItems: CurrentItems[]) => {
      //Busca en el carrito si el profucto seleccionado se encuentrá ahí. id es el producto seleccionado
      const isItemsFound = currItems.find((item: CurrentItems) => item.id == id);
      //Si el producto ya estaba, entonces retorna un nuevo arreglo


      if (isItemsFound) {
        //Busca en el el carrito el producto que se seleccionó
        return currItems.map((item) => {
          //Confirma que si se encontró al verificar el id
          if (item.id === id) {
            //le agrega +1 a la propiedad quantity
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        //Si el producto seleccionado no está en el carrito entonces copia los productos que ya estaban y agregamos el nuevo producto seleccionado con su respectivo id, precio y le añadimos la propiedad quantity con valor 1
        return [...currItems, { id, price, title, image, quantity: 1 }];
      }
    });
  };
  const removeItem = (id: number) => {
    //le damos acceto a los elementos del carrito
    setCart((currItems: CurrentItems[]) => {
      //Buscamos dentro de los elementos del carrito un elemento que coincida con el id que le hemos pasado como parametro usando .find
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        //Si la propiedad quantity del producto que queremos eliminar es = 1 entonces me retorna los elementos del carrito menos del producto que coincide con el id que hemos enviado
        return currItems.filter((item) => item.id !== id);
      } else {
        //Si el producto con el id que enviamos tiene más de 2 unidades en quantity, entonces se le resta 1
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  return (
    <>
    <div className="flex">
        <div>
          <img src={product[idNum - 1].image} alt={product[idNum - 1].title} />
        </div>
        <div>
          <h2>{product[idNum - 1].title}</h2>
          <p>{product[idNum - 1].rating.rate} ⭐️</p>
          <p>{product[idNum - 1].rating.count}👥</p>
          <p>{product[idNum - 1].description}</p>
          <p>{product[idNum - 1].price}$</p>
          <p>{productQuantity}</p>
        </div>
        <Link to={'/'}>
          home
        </Link>
      </div>	
    </>
  )
}