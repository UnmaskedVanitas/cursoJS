import { useState } from 'react';

const Colores = () => {

    const [nuevoColor, setNuevoColor] = useState('')
    const [listaColores, setListaColores] = useState([])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setListaColores([...listaColores, nuevoColor])
        nuevoColor = ("")
    }
    const handleChange = (e) => {
        setNuevoColor(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                onChange={handleChange}/>
                <button type='submit'>Agregar</button>
            </form>
            <ul>
                {
                    listaColores.map(color => {
                    return (
                    <li key={color}>
                        {color}

                    </li>
                    )}
                }
            </ul>
        </div>
    }
    )


export default App

