import { useState } from 'react'
import './CampoTexto.css'
function CampoTexto(props) {

    const [valor,setValor] = useState("")
    console.log("datos",props)

    const manejarCambio = (e) => {
        // console.log('cambio',e.target.value)
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