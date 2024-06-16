import { useState } from 'react'
import Header from './components/Header/Header'
import Formulario from './components/Formulario/Formulario'
import MiOrg from './components/MiOrg/MiOrg'
import Equipo from './components/Equipo/Equipo'
import Footer from './components/Footer/Footer'

function App() {

  const [mostrarFormulario, setMostrarFormulario] = useState(true);
  const [colaboradores,setColaboradores] = useState([])

  const manejarClick = () => {
    setMostrarFormulario(!mostrarFormulario);
  }

  // lista de equipos

  const equipos = [
    {
      titulo: 'Programacion',
      colorPrimario: '#57C278',
      colorSecundario: '#D9F7E9'
    },
    {
      titulo: 'Front end',
      colorPrimario: '#82CFFA',
      colorSecundario: '#E8F8FF'
    },
    {
      titulo: 'Data science',
      colorPrimario: '#A6D157',
      colorSecundario: '#F0F8E2'
    },
    {
      titulo: 'Devops',
      colorPrimario: '#E06B69',
      colorSecundario: '#FDE7E8'
    },
    {
      titulo: 'UX y diseño',
      colorPrimario: '#DB6EBF',
      colorSecundario: '#FAE9F5'
    },
    {
      titulo: 'Movil',
      colorPrimario: '#FFBA05',
      colorSecundario: '#FFF5D9'
    },
    {
      titulo: 'inovacion y gestion',
      colorPrimario: '#FF8A29',
      colorSecundario: '#FFEEDF'
    },
  ]

  // registrar colaborador

  const registrarColaborador = (colaborador) => {
    console.log('nuevo colaborador',colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <>
      <Header></Header>
      {/* {mostrarFormulario ? <Formulario></Formulario> : <></> } */}
      {
        mostrarFormulario && 
        <Formulario 
          equipos={equipos.map((equipo)=> equipo.titulo)}
          registrarColaborador={registrarColaborador}
        ></Formulario>
      }
      <MiOrg manejarClick={manejarClick}></MiOrg>
      {
        equipos.map( (equipo,index) => {
          return <Equipo 
            datos= {equipo} 
            key={equipo.titulo}
            colaboradores= {colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          ></Equipo>
        } )
      }
      <Footer></Footer>
    </>
  )
}

export default App
