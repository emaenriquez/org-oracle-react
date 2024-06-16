import { useState } from 'react'
import Header from './components/Header/Header'
import Formulario from './components/Formulario/Formulario'
import MiOrg from './components/MiOrg/MiOrg'
import Equipo from './components/Equipo/Equipo'
import Footer from './components/Footer/Footer'

function App() {

  const [mostrarFormulario, setMostrarFormulario] = useState(true);
  const [colaboradores, setColaboradores] = useState([{
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor"
  },
  {
    equipo: "Programación",
    foto: "https://github.com/emaenriquez.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora"
  },
  {
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam"
  },
  {
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor"
  },
  {
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack"
  }])

  const manejarClick = () => {
    setMostrarFormulario(!mostrarFormulario);
  }

  // lista de equipos
  const equipos = [
    {
      titulo: 'Programación',
      colorPrimario: '#57C278',
      colorSecundario: '#D9F7E9'
    },
    {
      titulo: 'Front End',
      colorPrimario: '#82CFFA',
      colorSecundario: '#E8F8FF'
    },
    {
      titulo: 'Data Science',
      colorPrimario: '#A6D157',
      colorSecundario: '#F0F8E2'
    },
    {
      titulo: 'DevOps',
      colorPrimario: '#E06B69',
      colorSecundario: '#FDE7E8'
    },
    {
      titulo: 'UX y Diseño',
      colorPrimario: '#DB6EBF',
      colorSecundario: '#FAE9F5'
    },
    {
      titulo: 'Móvil',
      colorPrimario: '#FFBA05',
      colorSecundario: '#FFF5D9'
    },
    {
      titulo: 'Innovación y Gestión',
      colorPrimario: '#FF8A29',
      colorSecundario: '#FFEEDF'
    },
  ]

  // registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log('nuevo colaborador', colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  // eliminar un colaborador
  const eliminarColaborador = ( ) => {
    console.log('colaborador eliminado')
  } 

  return (
    <>
      <Header></Header>
      {mostrarFormulario && 
        <Formulario 
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
        ></Formulario>
      }
      <MiOrg manejarClick={manejarClick}></MiOrg>
      {
        equipos.map((equipo) => {
          const colaboradoresFiltrados = colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)
          console.log(`Equipo: ${equipo.titulo}, Colaboradores:`, colaboradoresFiltrados)
          return (
            <Equipo 
              datos={equipo} 
              key={equipo.titulo}
              colaboradores={colaboradoresFiltrados}
              eliminarColaborador = {eliminarColaborador}
            ></Equipo>
          )
        })
      }
      <Footer></Footer>
    </>
  )
}

export default App
