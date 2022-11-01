import React, { useContext } from "react"
import MyContext from "../context/MyContext"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function ButtonAdd({ id, textBtn, name, img, price }) {
  const { addPizza} = useContext(MyContext)

  const add = () => {
      addPizza(id, name, img, price)
       notifyAdd()
  }

  const notifyAdd = () => toast.success(`+1 🍕 ${name} `)


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
        onClick={add}
        type="button"
        className="btn border bg-green-600 w-[16px] rounded-md m-1"
      >
        {textBtn}
      </button>
    </>
  )
}

export default ButtonAdd
