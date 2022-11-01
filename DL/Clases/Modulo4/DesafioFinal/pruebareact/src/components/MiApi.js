import React, { useState, useEffect } from "react";

const Buscador = () => {
    
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState('')

    const url = 'https://hp-api.herokuapp.com/api/characters/students'

    const showData = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setUsers(data)
        const sortData = data.sort((a,b) => {
            if(a.name < b.name) {
                return-1
            } if (a.name > b.name) {
                return 1
            } return 0
        })
    }

    const searcher = (e) => {
        setSearch(e.target.value)
    }
    const results = !search ? users : users.filter((dato) => dato.name.toLowerCase().includes(search.toLocaleLowerCase()))

    useEffect(() => {
        showData()

    },[])

    return(
        <div className="container">
            <input value={search} onChange={searcher} type="text" placeholder='Buscar Personaje' className='form-control' />
            <table className='table table-striped table-hover mt-5 shadow-lg'>
                <div>
                    <p className='subtitulo'>
                        <p className="estudiantes">Estudiantes</p>
                    </p>
                </div>
                <main className="main" background="https://1000marcas.net/wp-content/uploads/2020/02/Hogwarts-emblema.jpg">
                    <div className= "card-contenedor">
                        {results.map((characters) => (
                            <div className="card" key={characters.id}>
                                <div>
                                <img className="card" width={150} src={characters.image} />
                                </div>
                                <div>Nombre: {characters.name}</div>
                                <div>Casa: {characters.house}</div>
                                <div>Especie: {characters.species}</div>
                                <div>Genero: {characters.gender}</div>
                            </div>
                        )

                        )}
                    </div>
                </main>
            </table>
        </div>
    )
}

export default Buscador