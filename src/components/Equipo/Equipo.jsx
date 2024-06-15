
import './Equipo.css'

function Equipo(props) {

    const { titulo, colorPrimario, colorSecundario } = props.datos

    const obj = {
        backgroundColor: colorSecundario
    }

    const estiloTitulo = {
        borderColor: colorPrimario
    }

    return <section className="equipo" style={obj}>
        <h3 style={estiloTitulo}>{titulo}</h3>
        <div className="colaboradores"></div>
    </section>
}


export default Equipo