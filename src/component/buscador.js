import React, { Component } from "react";

class Buscador extends Component {
  busquedaRef = React.createRef();

  obtenerDatos = e => {
    e.preventDefault();
    //tomamos el valor del input
    const termino = this.busquedaRef.current.value;
    //lo enviamos al componente principal
    this.props.datosBusqueda(termino);
  };

  render() {
    return (
      <form onSubmit={this.obtenerDatos}>
        <div className="row">
          <div className="form-group col-md-8">
            <input
              ref={this.busquedaRef}
              class="form-control form-control-lg"
              type="text"
              placeholder="Busca tu imagen Ejemplo: futbol"
            />
          </div>
          <div className="form-group col-md-4">
            <button type="submit" class="btn btn-lg btn-danger btn-block">
              Buscar
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default Buscador;
