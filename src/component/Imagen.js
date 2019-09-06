import React from 'react'

const Imagen = (props) => {

  const { likes, previewURL, views, tags, largeImageURL } = props;

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card" >
        <img src={previewURL} alt={views} className="card-img-top" />
        <div className="card-body" >
          <p className="card-text"> {likes} Me Gusta</p>
          <p className=""> {views} Vistas</p>
          <a href={largeImageURL} target="_blank" className="btn btn-primary btn-block" >Ver Imagen</a>
        </div>
      </div>

    </div>
  )
}




export default Imagen;