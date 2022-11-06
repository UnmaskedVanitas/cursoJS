import { Routes, Route } from "react-router-dom"

import Home from "../pages/Home"
import NotFound from "../pages/NotFound"
import Pizza from "../pages/Pizza"
import ShoppingCart from "../pages/ShoppingCart"

function Main() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/ShoppingCart" element={<ShoppingCart />} />
        <Route path="/Pizza/Detail/:id" element={<Pizza />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default Main
