
import './MiOrg.css'
import { useState } from 'react';

function MiOrg(props) {

    // estado - hooks
    // useState
    return <section className="orgSection">
        <h3 className='title'>Mi organizacion</h3>
        <img src="/add.png" alt="boton add" onClick={props.manejarClick} />
    </section>
}

export default MiOrg