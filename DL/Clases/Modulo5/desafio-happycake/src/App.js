import { BrowserRouter, Routes, Route } from "react-router-dom"
import Logo from "./Img/Cake.png"
import Contacto from "./components/Contacto";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
      <img src={Logo} alt="Logo" />
    </div>
  );
}

export default App;
