import { useContext, useState } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import { redirect } from "react-router-dom";
type current = {
  quantity: number,
  price: number,
}
export const ShoppingCart = () => {
  const contextValue = useContext(CartContext);
  if (contextValue === null) {
    return <div>Loading...</div>;
  }
  const { cart, setCart } = contextValue;

  const quantity:number = cart.reduce((acumulacion:number, current:current):number => {
    return acumulacion + current.quantity; 
   }, 0)

   const totalPrice = cart.reduce((acumulador:number, current:current):number => {
    return acumulador + current.quantity * current.price;
  }, 0);
  const [endToggle, setEndToggle] = useState(false)

  const [visible, setVisible] = useState(false)
  console.log(visible);
  
    // const end = document.getElementById('end');
    // setEndToggle(!endToggle)

    // if(!endToggle){
    //   end.classList.remove('hidden');
    // }else{
    //   end.classList.add('hidden')
    // }
  
  return(
    <section>
      <div className='w-52 mx-auto mt-40 rounded-2xl bg-slate-300 p-4'>
        <div>
          <h2 className="text-xl font-bold pb-4">Items in cart: {quantity}</h2>
        </div>
        <div>
          {cart.map((item) => {
             return (
              <div key={item.id} className="mx-auto py-2">
                {item.quantity}<span> </span>{item.name}<span>: </span>
                {item.price * item.quantity}$             
              </div>
             )  
          })}
        </div>
        <div className="text-xl font-bold pt-4">
          Total: {totalPrice} $
        </div>

        <button  className ='block mx-auto bg-yellow-200 p-2 rounded-md mt-6 font-bold'  onClick={() => setVisible(!visible)}>
          Checkout
        </button>

      </div>

      <p className={`text-center mt-20 text-xl ${visible? '': 'hidden'}`} id="end">Thanks for using my app</p>
    </section>
  )
}