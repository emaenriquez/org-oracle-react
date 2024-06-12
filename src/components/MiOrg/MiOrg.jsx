
import './MiOrg.css'
import { useState } from 'react';

function MiOrg(params) {

    // estado - hooks
    // useState

    const [click, setClick] = useState(true);

    const manejarClick = () => {
        setClick(!click)
    }

    return <section className="orgSection">
        <h3 className='title'>Mi organizacion</h3>
        <img src="/add.png" alt="boton add" onClick={manejarClick} />
    </section>
}

export default MiOrg