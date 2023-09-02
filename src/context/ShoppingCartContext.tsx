import { createContext, useState, useEffect } from "react";
//El tipo para cada producto
type Products = {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: { [key: string]: string };
  description: string;
}
type CartContentType = {
  id: number;
  image: string;
  price: number;
  quantity: number;
  title: string;
}
//Tipo de dato del contexto
type CartContextType = {
  cart: CartContentType[];
  setCart: React.Dispatch<React.SetStateAction<CartContentType[]>>;
  product: Products[];
  loading: boolean;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  productQuantity: number;
  setProductQuantity: React.Dispatch<React.SetStateAction<number>>;
};
//creamos el contexto
export const CartContext = createContext<CartContextType | null>(null);

//funcion principal
export const ShoppingCartContext = ({ children }: { children: React.ReactNode }) => {
  //asignacion de valores del carrito
  const [cart, setCart] = useState<CartContentType[]>([]);
  //asignacion de valores a los productos
  const [product, setProduct] = useState<Products[]>([]);
  //asignacion de la carga
  const [loading, setLoading] = useState<boolean>(true);
  //asignacion de las categorías
  const [category, setCategory] = useState<string>('');
  //asignaciond de la cantidad de los productos
  const [productQuantity, setProductQuantity] = useState<number>(0)
  //quantity en items y products


  //llamado a la api ()
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${category}`)
      .then(response => response.json())
      .then(data => {
        //console.log(data),
        setProduct(data)
        setLoading(false)
      })
      .catch(e => console.log('Ha surgido un error ' + e)
      )
  }, [category]);
  return (
    <CartContext.Provider value={{ cart, setCart, product, loading, category, setCategory, productQuantity, setProductQuantity }}>
      {children}
    </CartContext.Provider>
  )
}
