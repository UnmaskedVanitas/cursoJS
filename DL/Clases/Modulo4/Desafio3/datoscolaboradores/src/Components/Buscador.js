import React, { useState, useEffect } from 'react'

const Buscador = () => {

    const [users, setUsers] = useState([])
    const [search, setSearch] = useState("")


    const URL = 'https://jsonplaceholder.typicode.com/users'

    const showData = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setUsers(data)
    }

    const searcher = (e) => {
        setSearch(e.target.value)
    } 
    const results = !search ? users : users.filter((dato) => dato.name.toLowerCase().includes(search.toLocaleLowerCase()))

    useEffect(() => {
        showData()
    }, [])


    return (
        <div>
            <input value={search} onChange={searcher} type="text" placeholder='Search' className='form-control' />
            <table className='table table-striped table-hover mt-5 shadow-lg'>
                <thead>
                    <tr className='bg-curso text-white'>
                        <th>NAME</th>
                        <th>USER NAME</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Buscador