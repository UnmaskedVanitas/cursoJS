import { useState, useEffect } from "react"
import axios from "axios"
import MyContext from "./MyContext"

const MyContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [data, setData] = useState([])
  const apiUrl = "/pizzas.json"

  const getData = async () => {
    const res = await axios.get(apiUrl)
    const { data } = res
    setData(data)
  }

  useEffect(() => {
    getData()
  }, [])

  const changeToClp = (element) => {
    const changed = element.toLocaleString("es-CL", {
      style: "currency",
      currency: "CLP",
    })
    return changed
  }

  // Cart --------------------------------------------------------------->>
  const [cartTotal, setCartTotal] = useState(0)

  const addPizza = (id, name, img, price) => {
    const check = cart.find((e) => e.name.toUpperCase() === name.toUpperCase())
    let update = ""
    check === undefined
      ? setCart([...cart,{ id: id, name: name, img: img, count: 1, price: price },])
      : ((update = cart.map((item) => item.id === id ? (item.count++, item) : item)), setCart(update))
  }

  const removePizza = (id, name) => {
    const check = cart.find((e) => e.name.toUpperCase() === name.toUpperCase())
    let update = ""
    check.count === 1
      ? ((update = cart.filter((item) => item.id !== id)), setCart(update))
      : ((update = cart.map((item) => item.id === id ? (item.count--, item) : item)), setCart(update))
  }

  useEffect(() => {
    setCartTotal(changeToClp(cart.reduce((pastValue, { price, count }) => pastValue + price * count, 0)))
    }, [cart])

  return (
    <MyContext.Provider
      value={{
        data,
        setData,
        cart,
        setCart,
        cartTotal,
        setCartTotal,
        addPizza,
        removePizza,
        changeToClp,
      }}
    >
      {children}
    </MyContext.Provider>
  )
}

export default MyContextProvider
