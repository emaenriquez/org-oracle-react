
import './Colaborador.css'
import { MdDeleteForever } from "react-icons/md";
function Colaborador(props) {

    const { nombre , puesto, foto , equipo} = props.datos
    const { eliminarColaborador } = props

    return <div className='colaborador'>

        <MdDeleteForever className='eliminar' onClick={eliminarColaborador}/>
        <div className='encabezado' style={{backgroundColor: props.colorPrimario}}>
            <img src={foto} alt={nombre}></img>
        </div>
        <div className='info'>
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
        </div>
    </div>    
}

export default Colaborador