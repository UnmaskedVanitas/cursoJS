import React, { useContext } from "react"
import Button from "../components/Button"
import Card from "../components/Card/Card"
import Select from "../components/Select"
import Context from "../Context/MyContext"

function Pokemon() {
  const { data } = useContext(Context)

  return (
    <div className="container min-h-[90vh] min-w-full flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-5">Choose your Pokemon</h1>
      <Select list={data} />
      <Card />
      <Button />
    </div>
  )
}

export default Pokemon
