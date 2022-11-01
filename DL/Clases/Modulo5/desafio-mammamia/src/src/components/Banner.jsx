import React from "react"

function Banner() {
  return (
    <>
      <h1 className="translate-y-24 text-3xl font-extrabold sm:text-3xl sm:translate-y-28 md:text-5xl md:translate-y-32 lg:translate-y-44 flex justify-center text-center">
        Wellcome to Pizzeria <br/> Natos
      </h1>

      <img
        src="/banner.jpg"
        loading="lazy"
        alt="Banner Pizzeria Natos"
        className="w-full opacity-40 mt-8 "
      />
    </>
  )
}

export default Banner
