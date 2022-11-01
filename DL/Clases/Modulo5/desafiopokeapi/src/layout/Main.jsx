import { Routes, Route } from "react-router-dom"

import Home from "../pages/Home"
import Pokemon from "../pages/Pokemon"
import NotFound from "../pages/NotFound"
import Detail from "../pages/Detail"

function Main() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Pokemon" element={<Pokemon />} />
        <Route path="/Pokemon/:pokemonSelected" element={<Detail/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default Main
