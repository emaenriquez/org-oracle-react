
import { useState } from 'react'
import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaOpciones from '../ListaOpciones/ListaOpciones'
import Boton from '../Boton/Boton'

function Formulario() {

    const [nombre, setNombre] = useState('')
    const [puesto, setPuesto] = useState('')
    const [foto, setFoto] = useState('')
    const [equipo,setEquipo] = useState('')

    const manejarEnvio = (evento) => {
        evento.preventDefault()
        
        let manejoDatos = {
            nombre,
            puesto,
            foto
        }

        console.log(manejoDatos)
    }

    return (
        <section className='formulario'>
            <form onSubmit={manejarEnvio}>
                <h2>Rellena el formulario para crear el colaborador </h2>
                <CampoTexto 
                    titulo="nombre" 
                    placeholder="Ingresa su nombre" 
                    required 
                    valor={nombre} 
                    actualizarValor={setNombre}
                ></CampoTexto>
                <CampoTexto 
                    titulo="puesto" 
                    placeholder= "Ingresa tu puesto" 
                    required
                    valor={puesto} 
                    actualizarValor={setPuesto}
                ></CampoTexto>
                <CampoTexto 
                    titulo="foto" 
                    placeholder="Ingresa su foto"  
                    required
                    valor={foto} 
                    actualizarValor={setFoto}
                ></CampoTexto>
                <ListaOpciones valor={equipo} actualizarEquipo={setEquipo}></ListaOpciones>
                <Boton texto="Crear"></Boton>
            </form>
        </section>
    )
}

export default Formulario