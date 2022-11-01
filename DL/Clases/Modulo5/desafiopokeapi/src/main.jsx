import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import { BrowserRouter } from "react-router-dom"
import MyContext from "./Context/MyProvider"
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MyContext>
  </React.StrictMode>
)
