import React from 'react';
import './home.css';
import Logo from '../Img/Cake.png';


const Home = () => {
    return (
        < div className='contenedor'>
            <h1 className='titulo' > Bienvenido a Happy Cake </h1>
            <img className='image' src={Logo} alt="Logo" />
        </div >
    );
}

export default Home;