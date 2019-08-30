import React, { Component } from "react";
import Imagen from "./Imagen";

class Resultado extends Component {
  mostrarImagenes = () => {
    const imagenes = this.props.imagenes;

    if (imagenes.length === 0) return null;
    console.log(imagenes);

    return (
      <React.Fragment>
        <div className="col-12 p-5 row">{
          imagenes.map(imagen => (
            <imagen
              imagen={imagen.pageURL}
            />
          ))
        }</div>
      </React.Fragment>
    );
  };

  render() {
    return <React.Fragment>{this.mostrarImagenes()}</React.Fragment>;
  }
}

export default Resultado;

