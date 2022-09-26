import { useState, useEffect } from "react";

function App() {
  const [info,setInfo] = useState([])

  useEffect(() => {
    consultarInformacion() }, [])

  const consultarInformacion = async() => {
    const url = 'https://jsonplaceholder.typicode.com/users'
    const response = await fetch(url)
    const data = await response.json()
    setInfo(data)
  }
  return(
    <div className="App">
      <ul>
        {info.map((persona) => {
          return(
          <li key={persona.id}>
            {persona.name}
          </li>
          )
        })}
      </ul>
    </div>
  )

}
export default App;

