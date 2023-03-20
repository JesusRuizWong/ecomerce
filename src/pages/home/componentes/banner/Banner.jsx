import React from 'react'
import Slider from './Slider'

export default function Banner() { 

  return (
    <div>
         <div id="carouselExampleIndicators1" className="carousel slide" data-ride="carousel">
  <div className="carousel-indicators "  >
    <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"  ></button>
    <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="1" aria-label="Slide 2" ></button>
    <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
  
  <div className="carousel-item active" data-mdb-interval="2000">
   <Slider 
      imagen="1"
      titulo="Primer Titulo"
      descripcion="descripcion 01"
   />
  </div> 

  <div className="carousel-item " data-mdb-interval="2000">
  <Slider 
       imagen="2"
       titulo="sEGUNDO  2cTitulo"
       descripcion="descripcion 01"
   
   /> 
</div> 

<div className="carousel-item " data-mdb-interval="2000">
<Slider 
       imagen="3"
       titulo="Primer 3232cTitulo"
       descripcion="descripcion 0ddddddddddddd1"
   
   /> 
</div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="prev" >
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="next" id="btn1">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
