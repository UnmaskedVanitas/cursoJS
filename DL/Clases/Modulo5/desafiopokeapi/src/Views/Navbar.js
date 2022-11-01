import React from 'react';
import { NavLink } from 'react-router-dom';
import icono from "../Img/Logo.png"
import "bootstrap/dist/css/bootstrap.min.css";
import './navbar.css';

const Navbar = () => {

    const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
    return (
        <nav class="navbar navbar-expand-lg bg-dark">
            <div class="container-fluid">
                <img src={icono} alt="Logo" width="90" class="d-inline-block align-text-top" />
                <div class="collapse navbar-collapse" id="navbarNav">
                    <NavLink className={setActiveClass} end to="/">
                        Home
                    </NavLink>
                    {" - "}
                    <NavLink className={setActiveClass} to="/Pokemons">
                        Pokemones
                    </NavLink>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;