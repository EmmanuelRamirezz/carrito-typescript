import { createContext, useState, ReactNode, useEffect} from "react";

//El tipo para cada producto
type Products={
    id: number;
    title: string;
    price: number;
    image: string;
    rating: {[key:string]:string};
}
//tipo de dato del contexto
type CartContextType = {
  cart: any[];
  setCart: React.Dispatch<React.SetStateAction<any[]>>;
  product: Products[];
  loading: boolean;
};
//creamos el contexto
export const CartContext = createContext<CartContextType | null>(null);
//funcion principal
export const ShoppingCartContext = ({children}:{children: React.ReactNode}) => {
  //asrignacion de valores del carrito
  const [cart, setCart] = useState<any[]>([]);
  //asignacion de valores a los productos
  const [product, setProduct] = useState<Products[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
      useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                console.log(data),
                setProduct(data),
                setLoading(false)
            })
            .catch(e => console.log('Ha surgido un error '+e)
            )
      }, []);

  
  return (
    <CartContext.Provider value={{cart, setCart, product, loading}}> 
      {children}
    </CartContext.Provider>
  )
}
