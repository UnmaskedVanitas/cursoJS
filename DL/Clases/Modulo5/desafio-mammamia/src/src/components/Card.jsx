import React, { useContext } from "react"
import MyContext from "../context/MyContext"
import Button from "./Button"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';

function Card({ id, img, ingredients, name, price }) {
  const { changeToClp } = useContext(MyContext)
  return (
    <>
      <div className="card min-w-[330px] max-w-[330px] shadow-lg rounded-[20px] bg-gray-800 flex flex-col overflow-hidden">
        <div className="cardHeader">
          <LazyLoadImage src={`${img}`} alt={`Photo-${name}`} effect="black-and-white" loading="lazy"/>
        </div>
        <div className="cardBody flex justify-center font-bold text-xl my-4">
          <h1>{`${name}`}</h1>
        </div>
        <div className="cardFooter mx-5">
          <ul className="text-lg border rounded-md pl-4 mb-4">
            Ingredients :
            {ingredients
              ? ingredients.map((item) => (
                  <li key={`${item}-${id}`} className="text-base">{`🍕 ${
                    item[0].toUpperCase() + item.substring(1)
                  }`}</li>
                ))
              : null}
          </ul>
        </div>
        <div>
          <h1 className="flex justify-center">{`Valor ${changeToClp(
            price
          )}`}</h1>
        </div>
        <div className="cardActions flex justify-evenly my-4">
          <Button textBtn={"View More"} colorBtn={"red"} name={name} id={id}  />
          <Button textBtn={"Add to Cart"} colorBtn={"green"} name={name} id={id} img={img} price={price}/>
        </div>
      </div>
    </>
  )
}

export default Card
