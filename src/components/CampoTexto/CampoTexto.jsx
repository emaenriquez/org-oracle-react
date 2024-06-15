import './CampoTexto.css'
function CampoTexto(props) {

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return (
        <div className='campo__texto'>
            <label>{props.nombre}</label>
            <input 
                placeholder={props.placeholder} 
                required={props.required} 
                onChange={manejarCambio} 
                value={props.valor}
            />
        </div>
    )
}

export default CampoTexto