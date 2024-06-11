
import './Formulario.css'
import CampoTexto from '../campoTexto/CampoTexto'

function Formulario() {
    return (
        <section className='formulario'>
            <form>
                <h2>Rellena el formulario para crear el colaborador </h2>
                <CampoTexto titulo="nombre" placeholder="Ingresa su nombre"></CampoTexto>
                <CampoTexto titulo="puesto" placeholder= "Ingresa tu puesto"></CampoTexto>
                <CampoTexto titulo="foto" placeholder="Ingresa su foto"></CampoTexto>
            </form>
        </section>
    )
}

export default Formulario