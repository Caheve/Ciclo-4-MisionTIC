import React, { Component } from "react";
import Tarjetas from "./Tarjetas";
import Datos from './Datos.json';

class Cargar extends Component {

    constructor() {
        super();
        this.state = { Datos };
        //console.log(this.state);
    }
    render() {
        let mostrar = this.state.Datos.map((dato) => {
            return (
                <Tarjetas titulo={dato.titulo} descripcion={dato.descripcion} imagen={dato.numero} prioridad={dato.prioridad} responsable={dato.responsable} />
            );
        });
        return (
            <div className="row">
                {mostrar}
            </div>
        );
    };
}
export default Cargar;