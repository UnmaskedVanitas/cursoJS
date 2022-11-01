import React, { useContext } from "react"
import MyContext from "../context/MyContext"
import ButtonAdd from "../components/ButtonAdd"
import ButtonRemove from "../components/ButtonRemove"
import { useNavigate } from "react-router-dom"


function ShoppingCart() {
  const { cart, cartTotal, changeToClp } = useContext(MyContext)
  const navigate = useNavigate()

  return (
    <>
      <section className="FlexContainer mt-20 pb-24">
        <h1 className="flex justify-center">Detalle de Compras</h1>
        {cartTotal !== changeToClp(0) ? (
          cart.map((item) => (
            <div
              key={`${item.name}-${item.id}`}
              className="flex justify-between border border-gray-700"
            >
              <div className="flex items-center">
                <img
                effect="black-and-white"
                  loading="lazy"
                  src={`${item.img}`}
                  alt={`Photo pizza ${item.name}`}
                  className="h-[100px] ml-2"
                  onClick={() => navigate(`/Pizza/Detail/${item.id}`)}
                />
                <h1 className="ml-10">{`Pizza Familiar ${
                  item.name[0].toUpperCase() + item.name.substring(1)
                }`}</h1>
              </div>
              <div className="flex justify-center items-center flex-col mt-4 sm:flex-row ">
                <ButtonAdd
                  id={item.id}
                  textBtn={" + "}
                  name={item.name}
                  img={item.img}
                  price={item.price}
                />
                <h2>{`${item.count}`}</h2>
                <ButtonRemove
                  id={item.id}
                  textBtn={" - "}
                  name={item.name}
                  img={item.img}
                  price={item.price}
                />
                <h2 className="m-5">
                  {`${changeToClp(item.count * item.price)}`}
                </h2>
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center min-h-[40vh]">
            <h1> Carrito vacio favor de agregar un producto</h1>
          </div>
        )}

        <div className="flex justify-end items-center mr-4 mt-6">
          <h1>{`Total = ${cartTotal}`}</h1>
          <button
            onClick={() => {
              alert("¿Proximamente nos enseñan la pasarela de pago?")
            }}
            className="ml-4 inline-block px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-red-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out"
          >
            Pagar
          </button>
        </div>
      </section>
    </>
  )
}

export default ShoppingCart
