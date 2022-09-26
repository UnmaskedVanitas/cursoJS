import { useState } from 'react'
import { BaseColaboradores } from './baseColaboradores'

function App() {
  
  const [nuevoColaborador, setNuevoColaborador] = useState({nombre: "", correo: ""})
  const [listaColaboradores, setListaColaboradores] = useState(BaseColaboradores)
  const [buscadorColaboradores, setBuscadorColaboradores] = useState("")

  const handleChange = (evento, propiedad) => {
    setNuevoColaborador({...nuevoColaborador, [propiedad]: evento.target.value })
    console.log(nuevoColaborador)

  }

  const handleSearch = (evento) => {
    setBuscadorColaboradores(evento.targe.value)
  }

  const handleClick = () => {
    setListaColaboradores([...listaColaboradores, {...nuevoColaborador, id:Date.now()}])
  }
  return (
    <div className="App">
      <h1>Buscador Colaboradores</h1>
      <input
      onChange={handleSearch}
      type="text" />
      <label>Nombre:</label>
      <input
      onChange={(ev) => handleChange(ev, "nombre")} 
      type="text" />
      <label>Correo:</label>
      <input
      onChange={(ev) => handleChange(ev, "correo")}
      type="text" />
      <button
      onClick={handleClick}
      >Agregar</button>
      <ul>
        {listaColaboradores.filter((colaborador) => {
          return ( 
            colaborador.nombre.includes(buscadorColaboradores)
        }).map(colaborador => {
          return (
            <li key={colaborador.id}>
              {colaborador.nombre} - {colaborador.correo}
            </li>)
        })}
      </ul>
    </div>
  );
}

export default App;