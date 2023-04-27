import { useState } from "react";
import "./MiOrg.css"

const MiOrg = (props) => {
    //Estado - hooks
    //useState
    //const [nombreVariable, FuncionActualiza] = useState(vslorInicial)
    console.log(props)
   // const [mostrar, actualizarMostrar] = useState(true)
    //const manejarClick = () => {
    //  console.log("Mostrar/Ocultar elemento", !mostrar)
    // actualizarMostrar(mostrar)
    //}

    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/add 1.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg