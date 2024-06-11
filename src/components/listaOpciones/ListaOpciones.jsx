
import './ListaOpciones.css'

function ListaOpciones() {

    const equipo = [
        'Programacion',
        'Front end',
        'Data science',
        'Devops',
        'UX y diseño',
        'Mocvil',
        'Programacion'
    ]

    return (
        <div className='lista__opciones'>
            <label> Equipos </label>
            <select>
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