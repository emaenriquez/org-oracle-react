
import './ListaOpciones.css'

function ListaOpciones(props) {

    const equipo = [
        'Programacion',
        'Front end',
        'Data science',
        'Devops',
        'UX y diseño',
        'Mocvil',
        'Programacion'
    ]

    const manejarCambio = (e) => {
        props.actualizarEquipo(e.target.value)
    }

    return (
        <div className='lista__opciones'>
            <label> Equipos </label>
            <select value={props.valor} onChange={manejarCambio}>
                <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
                {
                    equipo.map((equipos,index)=> {
                        return <option key={index} value={equipos}>{equipos}</option>
                    })
                }
            </select>
        </div>
    )
}

export default ListaOpciones