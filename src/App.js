import React, { Component } from "react";
import Buscador from "./component/buscador";
import Resultado from "./component/Resultado";

class App extends Component {

  state = {
    termino: "",
    imagenes: [],
    pagina: ""

  }

  scroll = () => {
    const elemento = document.querySelector(".jumbotron");
    elemento.scrollIntoView("smooth", "start")
  }

  paginaAnterior = () => {
    //leer el state de la pagina actual 
    let pagina = this.state.pagina;
    // si la pagina es uno ya no ir hacia atras
    if (pagina === 1) return null;

    //resta uno a la pagina actual
    pagina -= 1;
    //agregar el cambio al state
    this.setState({ pagina }, () => {
      this.consultarApi();
      this.scroll();

    });
    //console.log(pagina)
  }

  paginaSiguiente = () => {
    //leer el state de la pagina actual 
    let pagina = this.state.pagina;
    //Sumar uno a la pagina actual
    pagina += 1;
    //agregar el cambio al state
    this.setState({ pagina }, () => {
      this.consultarApi();
      this.scroll();

    });
    //console.log(pagina)
  }

  consultarApi = () => {
    const termino = this.state.termino;
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=13461352-3cfcaaf1fac03fc34f82cebbe&q=${termino}&per_page=30&pague${pagina}`;
    console.log(url);
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({ imagenes: resultado.hits }));
  };

  datosBusqueda = termino => {
    this.setState(
      {
        termino: termino,
        pagina: 1
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
        <div className="row justify-content-center" >
          <Resultado imagenes={this.state.imagenes}
            paginaAnterior={this.paginaAnterior}
            paginaSiguiente={this.paginaSiguiente}

          />
        </div>
      </div>
    );
  }
}
export default App;
