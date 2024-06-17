import './Campo.css'
function Campo(props) {

    const { type = "text" } = props

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return (
        <div className='campo__texto'>
            <label>{props.nombre}</label>
            <input 
                placeholder = { props.placeholder }
                required = { props.required }
                onChange = { manejarCambio }
                value = { props.valor }
                type = { type }
            />
        </div>
    )
}

export default Campo