
import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaOpciones from '../ListaOpciones/ListaOpciones'
import Boton from '../Boton/Boton'

function Formulario() {

    const manejarEnvio = (evento) => {
        evento.preventDefault()
    }

    return (
        <section className='formulario'>
            <form onSubmit={manejarEnvio}>
                <h2>Rellena el formulario para crear el colaborador </h2>
                <CampoTexto titulo="nombre" placeholder="Ingresa su nombre" required></CampoTexto>
                <CampoTexto titulo="puesto" placeholder= "Ingresa tu puesto" required></CampoTexto>
                <CampoTexto titulo="foto" placeholder="Ingresa su foto"  required></CampoTexto>
                <ListaOpciones></ListaOpciones>
                <Boton texto="Crear"></Boton>
            </form>
        </section>
    )
}

export default Formulario