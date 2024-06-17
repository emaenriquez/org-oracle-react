
import { useState } from 'react'
import './Formulario.css'
import Campo from '../Campo/Campo'
import ListaOpciones from '../ListaOpciones/ListaOpciones'
import Boton from '../Boton/Boton'

function Formulario(props) {

    const [nombre, setNombre] = useState('')
    const [puesto, setPuesto] = useState('')
    const [foto, setFoto] = useState('')
    const [equipo, setEquipo] = useState('')

    const [titulo, setTitulo] = useState('')
    const [color, setColor] = useState('')


    const { registrarColaborador, crearEquipo } = props

    const manejarEnvio = (evento) => {
        evento.preventDefault()

        let manejoDatos = {
            nombre,
            puesto,
            foto,
            equipo
        }

        registrarColaborador(manejoDatos)
    }

    const manejarCrearEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo,colorPrimario: color})
    }

    return (
        <section className='formulario'>
            <form onSubmit={manejarEnvio}>
                <h2>Rellena el formulario para crear el colaborador </h2>
                <Campo
                    titulo="nombre"
                    placeholder="Ingresa su nombre"
                    required
                    valor={nombre}
                    actualizarValor={setNombre}
                ></Campo>
                <Campo
                    titulo="puesto"
                    placeholder="Ingresa tu puesto"
                    required
                    valor={puesto}
                    actualizarValor={setPuesto}
                ></Campo>
                <Campo
                    titulo="foto"
                    placeholder="Ingresa su foto"
                    required
                    valor={foto}
                    actualizarValor={setFoto}
                ></Campo>
                <ListaOpciones
                    valor={equipo}
                    actualizarEquipo={setEquipo}
                    equipos={props.equipos}
                ></ListaOpciones>
                <Boton texto="Crear"></Boton>
            </form>
            <form onSubmit={manejarCrearEquipo}>
                <h2>Rellena el formulario para crear el equipo </h2>
                <Campo
                    titulo="titulo"
                    placeholder="Ingresa su titulo"
                    required
                    valor={titulo}
                    actualizarValor={setTitulo}
                ></Campo>
                <Campo
                    titulo="color"
                    placeholder="Ingresa el nuev color"
                    required
                    valor={color}
                    actualizarValor={setColor}
                    type="color"
                ></Campo>
                <Boton texto="registrar equipo"></Boton>
            </form>
        </section>
    )
}

export default Formulario