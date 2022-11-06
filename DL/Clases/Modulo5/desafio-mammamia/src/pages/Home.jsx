import React, { useContext } from "react"
import MyContext from "../context/MyContext"
import Card from "../components/Card"
import Banner from "../components/Banner"
function Home() {
  const { data } = useContext(MyContext)

  return (
    <>
      <Banner />
      <section className="FlexContainer flex flex-wrap justify-center items-center content-center w-full gap-5 overflow-auto flex-row mt-4 mb-20">
        {data
          ? data.map((item) => (
                <Card
                  key={`${item.id}${item.name}${item.price}`}
                  id={item.id}
                  img={item.img}
                  ingredients={item.ingredients}
                  name={item.name.toUpperCase()}
                  price={item.price}
                />
            ))
          : null}
      </section>
    </>
  )
}

export default Home
