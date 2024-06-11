
import './Formulario.css'
import CampoTexto from '../campoTexto/CampoTexto'
import ListaOpciones from '../listaOpciones/ListaOpciones'
import Boton from '../boton/Boton'

function Formulario() {

    const manejarEnvio = (evento) => {
        evento.preventDefault()
    }

    return (
        <section className='formulario'>
            <form onSubmit={manejarEnvio}>
                <h2>Rellena el formulario para crear el colaborador </h2>
                <CampoTexto titulo="nombre" placeholder="Ingresa su nombre"></CampoTexto>
                <CampoTexto titulo="puesto" placeholder= "Ingresa tu puesto"></CampoTexto>
                <CampoTexto titulo="foto" placeholder="Ingresa su foto"></CampoTexto>
                <ListaOpciones></ListaOpciones>
                <Boton texto="Crear"></Boton>
            </form>
        </section>
    )
}

export default Formulario