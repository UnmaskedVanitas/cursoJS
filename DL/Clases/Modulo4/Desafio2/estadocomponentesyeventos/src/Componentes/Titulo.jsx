import'../Componentes/Titulo.css'

const Encabezado = (props) => {
    return (
        <h1 className="title"> <strong>{props.titulo}</strong></h1>
    );
};

export default Encabezado;