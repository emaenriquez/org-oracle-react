import { useState } from 'react'
import Header from './components/Header/Header'
import Formulario from './components/Formulario/Formulario'
import MiOrg from './components/MiOrg/MiOrg'

function App() {

  const [mostrarFormulario, setMostrarFormulario] = useState(true);

  // ternario --> condicion ? seMuestra: noSeMuestra

  const manejarClick = () => {
    setMostrarFormulario(!mostrarFormulario);
  }

  return (
    <>
      <Header></Header>
      {/* {mostrarFormulario ? <Formulario></Formulario> : <></> } */}
      {mostrarFormulario && <Formulario></Formulario>}
      {/* <Formulario></Formulario> */}
      <MiOrg manejarClick={manejarClick}></MiOrg>
    </>
  )
}

export default App
