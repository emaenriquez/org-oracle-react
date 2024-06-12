
import './CampoTexto.css'
function CampoTexto(props) {

    return (
        <div className='campo__texto'>
            <label>{props.nombre}</label>
            <input placeholder={props.placeholder} required={props.required}/>
        </div>
    )
}

export default CampoTexto