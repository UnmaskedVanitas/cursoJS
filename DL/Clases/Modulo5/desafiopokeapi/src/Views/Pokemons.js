import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Views/pokemons.css';

const Pokemons = () => {

    const [pjs, setPj] = useState([]);
    const [id, setId] = useState();
    const Navigate = useNavigate();

    useEffect(() => {
        const getApi = async () => {
            const resp = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
            const datos = await resp.json();
            if (datos && datos.results) {
                const pjNamesid = datos.results.map(({ id, name }) => ({ id, name }))
                setPj(pjNamesid)
            }
        }
        getApi();
    }, [])
    const mantenerName = (event) => {
        event.preventDefault();
        const namespj = event.target.value;
        if (namespj && namespj !== "") {
            setId(namespj)
        }
    }
    const iraPj = (event) => {
        event.preventDefault();
        Navigate(`/Pokemons/${id}`);
    }
    return (
        <div className='container' >
            <h1 className='titulo'>Selecciona a tu Pokemón</h1>
            <select className='selector' onChange={mantenerName}>
                <option value="" > Selecciona</option>
                {pjs.map((pj) => (
                    <option key={pj.name} value={pj.id}> {pj.name} </option>
                ))}
                <option>Selecciona</option>
            </select>
            <button className='btn' onClick={iraPj} >Ver Detalles</button>
        </div>
    );
}
export default Pokemons;
