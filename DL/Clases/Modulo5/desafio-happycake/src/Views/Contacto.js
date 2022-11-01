import React from 'react';
import "./Contacto.css"


const Contacto = () => {
    return (
        <div className='container' >
            <h1 className='titulo' >Cuentanos, En que te podemos ayudar?</h1>
            <h4 className='ops'>Correo</h4>
            <input></input>
            <h4 className='ops'>Detalles</h4>
            <input></input>


            <button className='boton'>Enviar</button>
        </div>
    );
}

export default Contacto;
