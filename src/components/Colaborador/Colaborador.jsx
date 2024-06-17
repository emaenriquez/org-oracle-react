
import './Colaborador.css'
import { MdDeleteForever} from "react-icons/md";
import { FaHeart,FaRegHeart } from "react-icons/fa";
function Colaborador(props) {

    const { nombre , puesto, foto , equipo , id, fav} = props.datos
    const { eliminarColaborador, like } = props

    return <div className='colaborador'>

        <MdDeleteForever className='eliminar' onClick={()=>eliminarColaborador(id)}/>
        <div className='encabezado' style={{backgroundColor: props.colorPrimario}}>
            <img src={foto} alt={nombre}></img>
        </div>
        <div className='info'>
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            { fav ?  <FaHeart color='red' onClick={()=> like(id)}></FaHeart> : <FaRegHeart onClick={()=> like(id)}></FaRegHeart> }
           
            
        </div>
    </div>    
}

export default Colaborador