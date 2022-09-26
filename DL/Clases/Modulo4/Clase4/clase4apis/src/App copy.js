import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count,setCount] = useState(0);
  const [nombre, setNombre] = useState('');
  const handleClick = (e) => {
    setCount(e.target.value);
  }
  const handleChange = (e) => {
    setNombre(e.target.value);
  }
  useEffect(() => console.log('hola mundo'), [nombre])
    return(
      <div className='app'>
        <input
        type='text' 
        onChange={handleChange}
        value={nombre} 
        />
        <p>{nombre}</p>
        <button
        onClick={handleClick}>
        Contador
        </button>
        <p>{count}</p>
      </div>
    )
  
}
export default App;
