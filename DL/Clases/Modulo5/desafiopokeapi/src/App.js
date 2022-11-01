import { BrowserRouter, Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Views/Home";
import Navbar from "./Views/Navbar"
import Pokemons from "./Views/Pokemons";
import Details from "./Views/Details";

export default function App() {
    return (

        <div className="app-total" >
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Pokemons" element={<Pokemons />} />
                    <Route path="/Pokemons/:name" element={<Details />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}