import React, { useContext } from "react"
import MyContext from "../context/MyContext"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function ButtonRemove({ id, textBtn, name, img, price }) {
  const { removePizza} = useContext(MyContext)

  const remove = () => {
       removePizza(id, name, img, price)
       notifyRemove()
  }

  const notifyRemove = () => toast.warn(`-1 🍕 ${name} `)


  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={200}
        closeOnClick={false}
        hideProgressBar={true}
        newestOnTop={false}
        pauseOnFocusLoss={false}
        draggable={false}
        rtl={false}
        theme="dark"
      />
      <button
        onClick={remove}
        type="button"
        className="btn border bg-red-600 w-[16px] rounded-md m-1"
      >
        {textBtn}
      </button>
    </>
  )
}

export default ButtonRemove
