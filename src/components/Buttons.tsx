import { useContext, useEffect } from "react";
import { CartContext } from "../context/ShoppingCartContext"
//tipos de los props que recibe
type Products = {
  id: number;
  title: string;
  price: number;
  image: string;
}
//tipos de los items actuales:
type CurrentItems = {
  id: number,
  title: string,
  price: number,
  image: string,
  quantity: number;
}

export const Buttons: React.FC<Products> = ({ id, title, price, image }) => {
  // Código del componente hijo
  const contextValue = useContext(CartContext);
  if (contextValue === null) {
    return <div>Loading...</div>;
  }
  const { cart, setCart, productQuantity, setProductQuantity } = contextValue;
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
  const getQuantityById = (id: number) => {
    // Busca en el carrito un elemento que coincida con el id que mandamos. Y si esto nos retorna algo, vamos a extraer la cantidad sino nos debe retornar 0
    return cart.find((item: Products) => item.id === id)?.quantity || 0;
  };
  useEffect(() => {
    setProductQuantity(getQuantityById(id))
  }, [cart])
  return (
    <div>
      <div className={`mt-4 text-center w-10  rounded-xl ${productQuantity > 0 ? 'text-black' : 'text-white'}`}>
        <p>Quantity:</p>
        <p className="font-bold">{productQuantity}</p>
      </div>
      {/*Mostramos el boton de Add to cart si no lo tenemos en el carrito. Y si ya lo tenemos debe de mostrar Add more*/}
      {
        productQuantity === 0 ? (
          <div>
            <button className="bg-green-400 py-2 px-4 mt-8 rounded-3xl text-white hover:bg-green-500 "
              onClick={() => addToCart()} >
              Add to cart
            </button>
          </div>
        ) :
          (
            <button className="bg-blue-400 py-2 px-4 mt-8 mr-4 rounded-3xl text-white hover:bg-blue-500"
              onClick={() => addToCart()} >
              Add more
            </button>
          )
      }
      {/* Muestra el siguiente botton si la cantidad del elemento es mayor a 0 */}
      {
        productQuantity > 0 && <button className="bg-red-400 py-2 px-4 mt-8 rounded-3xl text-white hover:bg-red-500" onClick={() => removeItem(id)}>
          Substract item
        </button>
      }
    </div>
  )
}