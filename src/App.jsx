import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header/Header'
import Formulario from './components/Formulario/Formulario'
import MiOrg from './components/MiOrg/MiOrg'
import Equipo from './components/Equipo/Equipo'
import Footer from './components/Footer/Footer'

function App() {

  const [mostrarFormulario, setMostrarFormulario] = useState(true);
  const [colaboradores, setColaboradores] = useState([{
    id: uuidv4(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav: true
  },
  {
    id: uuidv4(),
    equipo: "Programación",
    foto: "https://github.com/emaenriquez.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav: false
  },
  {
    id: uuidv4(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: false
  },
  {
    id: uuidv4(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: false
  },
  {
    id: uuidv4(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav: false
  }])

  const [equipos, setEquipos] = useState([
    {
      id: uuidv4(),
      titulo: 'Programación',
      colorPrimario: '#57C278',
      colorSecundario: '#D9F7E9'
    },
    {
      id: uuidv4(),
      titulo: 'Front End',
      colorPrimario: '#82CFFA',
      colorSecundario: '#E8F8FF'
    },
    {
      id: uuidv4(),
      titulo: 'Data Science',
      colorPrimario: '#A6D157',
      colorSecundario: '#F0F8E2'
    },
    {
      id: uuidv4(),
      titulo: 'DevOps',
      colorPrimario: '#E06B69',
      colorSecundario: '#FDE7E8'
    },
    {
      id: uuidv4(),
      titulo: 'UX y Diseño',
      colorPrimario: '#DB6EBF',
      colorSecundario: '#FAE9F5'
    },

    {
      id: uuidv4(),
      titulo: 'Móvil',
      colorPrimario: '#FFBA05',
      colorSecundario: '#FFF5D9'
    },
    {
      id: uuidv4(),
      titulo: 'Innovación y Gestión',
      colorPrimario: '#FF8A29',
      colorSecundario: '#FFEEDF'
    },
  ])

  const manejarClick = () => {
    setMostrarFormulario(!mostrarFormulario);
  }

  // actualizar color del equipo

  const actualizarColor = (color, id) => {
    console.log('actualizando color', color, id)
    const equiposActualizado = equipos.map((equipo) => {
      if (equipos.id === id) {
        equipo.colorPrimario = color
      }
      return equipo
    })
    setEquipos(equiposActualizado)
  }

  // registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log('nuevo colaborador', colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  // eliminar un colaborador
  const eliminarColaborador = (id) => {
    console.log('colaborador eliminado')
    const nuevoColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    setColaboradores(nuevoColaboradores)
  }
  // crear equipo
  const crearEquipo = (crearEquipo) => {
    console.log(crearEquipo)
    setEquipos([...equipos, { ...crearEquipo, id: uuidv4() }])
  }
  // like
  const like = (id) => {
    const colaboradoresActualiados = colaboradores.map((colaborador) => {
      if (colaborador.id == id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
  }
  return (
    <>
      <Header></Header>
      {
        mostrarFormulario &&
        <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        ></Formulario>
      }
      <MiOrg manejarClick={manejarClick}></MiOrg>
      {
        equipos.map((equipo) => {
          const colaboradoresFiltrados = colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)
          // console.log(`Equipo: ${equipo.titulo}, Colaboradores:`, colaboradoresFiltrados)
          return (
            <Equipo
              datos={equipo}
              key={equipo.titulo}
              colaboradores={colaboradoresFiltrados}
              eliminarColaborador={eliminarColaborador}
              actualizarColor={actualizarColor}
              like={like}
            ></Equipo>
          )
        })
      }
      <Footer></Footer>
    </>
  )
}

export default App
