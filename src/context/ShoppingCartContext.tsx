import { createContext, useState, ReactNode} from "react";

//type CartContextType = [any[], React.Dispatch<React.SetStateAction<any[]>>];

//En el código anterior, hemos definido el tipo CartContextType para el valor del contexto, que es un array que contiene un array de any (el carrito) y una función React.Dispatch<React.SetStateAction<any[]>> (la función setCart).

type CartContextType = {
  cart: any[];
  setCart: React.Dispatch<React.SetStateAction<any[]>>;
};

export const CartContext = createContext<CartContextType | null>(null);


export const ShoppingCartContext = ({children}:{children: React.ReactNode}) => {
  const [cart, setCart] = useState<any[]>([]);
  return (
    <CartContext.Provider value={{cart, setCart}}> 
      {children}
    </CartContext.Provider>
  )
}