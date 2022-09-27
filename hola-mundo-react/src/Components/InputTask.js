import React, { useState } from "react";

const InputTask = (props) => {

    const [currentTask, setCurrentTask] = useState('')
    const [tasks, setTask] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault
    }
    
    const handleSubmitChange = (event) => {
        setCurrentTask(event.target.value)
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input onChange={handleInputChange}/>
            <button type="submit">Enviar</button>
        </form>
        <ul>
            {
                tasks.map(task => {
                    return <li key={task}>{task}</li>
                })
            }
        </ul>
        </div>
    )