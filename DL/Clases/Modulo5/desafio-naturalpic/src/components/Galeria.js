import "../assets/css/galeria.css";
import { useContext } from 'react';
import Context from '../../src/Context';
import Heart from './Heart';

export default function Galeria() {
  
  const { galeria , setGaleria } = useContext(Context)

  return (
    <div className="galeria grid-columns-5 p-3">
      {galeria.map((foto) => {
        return (
        <div className="foto" key={foto.id} style={{backgroundImage: `url(${foto.src.tiny})`}} onClick={() => {
          const index = galeria.findIndex((x) => x.id === foto.id)
          galeria[index].liked = !galeria[index].liked
          setGaleria([...galeria])
        }
          }>
          {foto.alt}  
          <Heart filled={foto.liked}/>
        </div>
        )
      })}

    </div>
  );
}
