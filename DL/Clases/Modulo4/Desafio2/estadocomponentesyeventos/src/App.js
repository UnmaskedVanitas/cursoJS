import Datos from "./Componentes/Datos";
import {useState} from 'react';
import Encabezado from "./Componentes/Titulo";

function App() {
  const [contraseña, fijarContraseña] = useState("");
  const [nombre, fijarNombre] = useState("");
  return (
    <>
      <Encabezado titulo="Ingresar Nombre y Contraseña" />
      <Datos
        nombre={nombre} fijarNombre={fijarNombre}
        contraseña={contraseña} fijarContraseña={fijarContraseña} />
    </>
  );
}
export default App;