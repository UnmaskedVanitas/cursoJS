import React, { useContext } from "react"
import style from "./Card.css"
import Context from "../../Context/MyContext"

function Card() {
  const { pokemonSelected, dataDetail } = useContext(Context)
  return (
    <>
      {pokemonSelected &&
        dataDetail
          .filter((pokemon) => pokemon.name === pokemonSelected)
          .map((poke) => (
            <div
              key={poke.id}
              className="max-w-[190px]  shadow-lg rounded-[20px] bg-slate-300 my-5"
            >
              <p className="pokeball -translate-x-4 -translate-y-4">
                <span className="boton"></span>
              </p>
              <span className="flex justify-center w-12 font-bold bg-white rounded-full -translate-y-9 translate-x-24">
                N°{poke.id}
              </span>
              <img
                className="image w-full hover:scale-110 duration-300]"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png`}
                alt={poke.name}
                data-modal-toggle={`#id${poke.id}`}
              />
              <div className="">
                <div className="font-bold text-xl text-center hover:scale-125 duration-300">
                  {poke.name.toUpperCase()}
                </div>
              </div>
            </div>
          ))}
    </>
  )
}

export default Card
