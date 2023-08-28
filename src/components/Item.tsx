import { CartContext } from "../context/ShoppingCartContext"
import { useContext } from "react";
import { Product } from "./Product";
import { Link, useParams } from "react-router-dom";
import { Buttons } from "./Buttons";
//tipos de todos los items
// type AppProps = {
//   id: number,
//   name: string,
//   price: number,
//   imgUrl: string,
// };
type Products = {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: { [key: string]: string };
}

export const Item = ({ id, title, price, image, rating }: Products) => {
  
  return (
    <div className="border-2 p-5">
      <Link to={`products/${id}`} className="hover:cursor-pointer" >

        <div className="h-36 w-36 m-auto">
          <img
            src={image}
            alt={title}
            width='150'
            className="m-auto object-fit w-36 h-32"
          />
        </div>

        <div className="flex justify-around items-center mt-4 h-52">
          <div>{title}</div>
          <div>
            <p className="text-center">{rating.rate} ⭐️</p>
            <p>{rating.count}👥</p>
          </div>
          {/*  */}
        </div>
      </Link>
      <div className="flex justify-center text-lg font-bold mt-4"><p>{price}$</p></div>
      <Buttons id={id}  title={title} price={price} image={image} rating={rating}/>
    </div>

  )
}