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
                <a class="navbar-brand" href="#">
                    <img src={icono} alt="Logo" width="90" class="d-inline-block align-text-top" />
                </a>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <NavLink className={setActiveClass} to="/">
                        Home
                    </NavLink>
                    {" - "}
                    <NavLink className={setActiveClass} to="/Contacto">
                        Contacto
                    </NavLink>
                </div>
            </div>
        </nav>

    );
}

export default Navbar; 