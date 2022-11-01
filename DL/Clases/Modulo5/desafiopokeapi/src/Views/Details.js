import React from 'react';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './details.css'


const Details = () => {

    const [pjs, setPj] = useState({});
    const { name } = useParams();

    useEffect(() => {
        const getApi = async () => {
            const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            const datos = await resp.json();
            setPj(datos)

        }
        getApi();
    }, [name])

    return (
        <div>
            <p className='titulo'>Pokemón escogido:</p>

            <div className='conteiner' >
                <p className='texto'> Nombre: {pjs.name}</p>
                <img className='pokeimg' src={pjs.sprites.other.home.front_default} alt="" />
            </div>
            <table className="table-fixed ">
                <thead>
                    <tr>
                        <th>Descripción</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {pjs.stats?.map((item, i) => (
                        <tr key={i}>
                            <td>{item.stat.name}</td>
                            <td>{item.base_stat}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Details;
