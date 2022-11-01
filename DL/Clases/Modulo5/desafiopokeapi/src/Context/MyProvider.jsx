import { useState, useEffect } from "react"
import axios from "axios"

import MyContext from "./MyContext"

const MyContextProvider = ({ children }) => {
  const [test, setTest] = useState("Test Context")
  const [data, setData] = useState([])
  const [dataDetail, setDataDetail] = useState([])
  const [pokemonSelected, setPokemonSelected] = useState("")
  const [pokemonSelectedInfo, setPokemonSelectedInfo] = useState("")

  const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=151"

  const getData = async () => {
    const dataFirst = await axios.get(apiUrl)
    setData(dataFirst.data.results)

    const dataSecond = await Promise.all(
      dataFirst.data.results.map(async (item) => {
        try {
          const dataThird = await axios.get(item.url)
          return dataThird.data
        } catch (err) {
          return console.log(err)
        }
      })
    )
    setDataDetail(dataSecond)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <MyContext.Provider value={{ test, setTest, data, dataDetail, pokemonSelected, setPokemonSelected, pokemonSelectedInfo, setPokemonSelectedInfo }}>
      {children}
    </MyContext.Provider>
  )
}

export default MyContextProvider
