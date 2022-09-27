import React from 'react'

const Counter = ()=> {
    const [count, setCount] = useState(0)
    
    const addOne = () => setCount(count + 1)
    const decreaseOne = () => setCount(count - 1)
    const addTwo = () => setCount(count + 2)
    
    return (
        <div>
            <h1>EL TOTAL ES:</h1>
            <button onClick={addOne}>Aumentar</button>
            <button onClick={decreaseOne}>Disminuir</button>
            <button onClick={addTwo}>Aumentar 2</button>
        </div>
    )
    
}
export default Counter