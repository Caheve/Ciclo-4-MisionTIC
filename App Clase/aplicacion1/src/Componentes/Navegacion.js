import React, { Component } from "react";


class Navegacion extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">{this.props.enlace1}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">{this.props.enlace2}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">{this.props.enlace3}</a>
                            </li>
                            <form className="d-flex" role="search">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    };
};
export default Navegacion;