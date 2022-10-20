import React, { Component } from "react";

class Tarjetas extends Component {

    editar() {
        alert('Editar')
    }
    eliminar() {
        alert('Eliminar')
    }
    render() {
        return (
            <div className="col-sm-4 mt-4">
                
                <div className="card">

                    <img src="..." className="card-img-top" alt={this.props.imagen} />

                    <div className="card-body">
                        <h5 className="card-subtitle">{this.props.titulo}</h5>

                        <p className="card-text">{this.props.descripcion}</p>

                        <span className="bg bg-pill bg-danger rounded-pill text-black ml-4">{this.props.prioridad}</span>
                        <br></br>
                        <span className="badge badge-pill badge-dark text-black ml-2">{this.props.responsable}</span>
                        <br></br>
                        <br></br>
                        <button className="btn btn-primary me-2" onClick={this.editar}>Editar</button>
                        
                        <button className="btn btn-danger" onClick={this.eliminar}>Eliminar</button>
                        
                    </div>
                </div>
            </div>
        );

    }

}
export default Tarjetas;