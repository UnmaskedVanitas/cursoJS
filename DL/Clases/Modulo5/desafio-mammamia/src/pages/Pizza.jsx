import React, { useContext } from "react"
import MyContext from "../context/MyContext"
import { useParams } from "react-router-dom"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';
import style from "../assets/css/pagesPizza.css"
import Button from "../components/Button"
import NotFound from "./NotFound"

function Pizza() {
  const { id } = useParams()
  const { data, changeToClp } = useContext(MyContext)

  return (
    <div className="containerDetail my-[90px] sm:mt-[6%] flex justify-center items-center">
      {data.find((item) => item.id === id) ? (
        data
          .filter((pizza) => pizza.id === id)
          .map((pizzaDetail) => (
            <div
              key={`${pizzaDetail.name}-${pizzaDetail.id}`}
              className="container overflow-hidden flex flex-col"
            >
              <div className="imagePizza sm:max-w-[425px] mx-auto">
                <LazyLoadImage src={`${pizzaDetail.img}`} loading="lazy" alt={`Photo of ${pizzaDetail.name}`} effect="black-and-white"/>
              </div>
              <div className="titlePizza mx-auto p-2 font-bold">
                <h1>{pizzaDetail.name.toUpperCase()}</h1>
              </div>
              <div className="descriptionPizza p-2 sm:mx-[5%]">
                <p>{pizzaDetail.desc}</p>
              </div>
              <div className="ingredientsPizza p-2 sm:ml-[15%]">
                <ul>
                  <strong>Ingredients</strong>
                  {pizzaDetail.ingredients
                    ? pizzaDetail.ingredients.map((item) => (
                        <li
                          key={`${item}-${id}`}
                          className="text-base"
                        >{`🍕 ${item}`}</li>
                      ))
                    : null}
                </ul>
              </div>
              <div className="totalsPizza flex justify-evenly items-center font-extrabold ">
                <h1>Valor {changeToClp(pizzaDetail.price)}</h1>
                <Button
                  textBtn={"Add to Cart"}
                  colorBtn={"green"}
                  id={pizzaDetail.id}
                  name={pizzaDetail.name.toUpperCase()}
                  img={pizzaDetail.img}
                  price={pizzaDetail.price}
                />
              </div>
            </div>
          ))
      ) : (
        <NotFound />
      )}
    </div>
  )
}

export default Pizza
