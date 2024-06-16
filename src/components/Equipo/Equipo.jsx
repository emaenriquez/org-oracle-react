
import Colaborador from '../Colaborador/Colaborador'
import './Equipo.css'

function Equipo(props) {

    const { titulo, colorPrimario, colorSecundario } = props.datos
    const { colaboradores } = props

    const obj = {
        backgroundColor: colorSecundario
    }

    const estiloTitulo = {
        borderColor: colorPrimario
    }

    return <>
        {
            colaboradores.length > 0 &&
            <section className="equipo" style={obj}>
                <h3 style={estiloTitulo}>{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador, index) => {
                            return <Colaborador
                                datos={colaborador}
                                key={index}
                                colorPrimario = {colorPrimario}
                            ></Colaborador>
                        })
                    }
                </div>
            </section>
        }
    </>
}


export default Equipo