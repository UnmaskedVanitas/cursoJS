import React, {useContext} from "react"
import { useNavigate } from "react-router-dom";

import Context from "../Context/MyContext"
function Button() {
  const { pokemonSelected } = useContext(Context)
  const navigate = useNavigate();

  const pokemonNavigate = ()=>{
    navigate(`${pokemonSelected}`)
  }

  return (
    <button
      className="shadow bg-blue-500 hover:bg-red-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
      type="button"
      onClick={pokemonNavigate}
    >
      Details View
    </button>
  )
}

export default Button
