import React, { useContext } from "react"
import MyContext from "../context/MyContext"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function Button({ colorBtn, textBtn, id, name, img, price }) {
  const navigate = useNavigate()
  const { addPizza} = useContext(MyContext)

  const handlePizza = () => {
    colorBtn === "green"
      ? (notifyAdd(), addPizza(id, name, img, price))
      : navigate(`/Pizza/Detail/${id}`)
  }

  const notifyAdd = () => toast.success(`+1 🍕 ${name} `)

  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={200}
        closeOnClick= {false}
        hideProgressBar={true}
        newestOnTop={false}
        pauseOnFocusLoss={false}
        draggable={false}
        rtl={false}
        theme="dark"
      />
      <button
        onClick={handlePizza}
        type="button"
        className={`inline-block px-6 py-2.5 bg-${colorBtn}-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-${colorBtn}-600 hover:shadow-lg focus:bg-${colorBtn}-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-${colorBtn}-700 active:shadow-lg transition duration-150 ease-in-out`}
      >
        {textBtn}
      </button>
    </>
  )
}

export default Button
