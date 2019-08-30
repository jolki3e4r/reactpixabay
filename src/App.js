import React, { Component } from "react";
import Buscador from "./component/buscador";
import Resultado from "./component/Resultado";

class App extends Component {
  state = {
    termino: "",
    imagenes: []
  };

  consultarApi = () => {
    const termino = this.state.termino;
    const url = `https://pixabay.com/api/?key=13461352-3cfcaaf1fac03fc34f82cebbe&q=${termino}&per_page=30`;
    //console.log(url);
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({ imagenes: resultado.hits }));
  };

  datosBusqueda = termino => {
    this.setState(
      {
        termino
      },
      () => {
        this.consultarApi();
      }
    );
  };

  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador De imagenes</p>
          <Buscador datosBusqueda={this.datosBusqueda} />
        </div>
        <Resultado imagenes={this.state.imagenes} />
      </div>
    );
  }
}
export default App;
