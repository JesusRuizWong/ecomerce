import React from 'react'
import Cardstarrank from '../starrank/Cardstarrank'
import Slider from './Slider'

export default function Banner() { 


//  (function(){
//   var moviendo= false;
//   document.onmousemove = function(){
//          moviendo= true;
//   };
//   setInterval (function() {
//      if (!moviendo) {
//          // No ha habido movimiento desde hace un segundo, aquí tu codigo
         
//      } else {
//          moviendo=false;  
//      }
//   }, 1500); // Cada segundo, pon el valor que quieras.
// })()


// setInterval(function() {
//   document.getElementById("btn1").click()
// }, 6000)


 
  return (
    <div>
         <div id="carouselExampleCaptions" className="carousel slide" data-mdb-ride="carousel" data-mdb-interval="false">
  <div className="carousel-indicators "  >
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"  ></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" ></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
   <Slider 
      imagen="1"
      titulo="Primer Titulo"
      descripcion="descripcion 01"

   />

<Slider 
       imagen="2"
       titulo="Primer 2cTitulo"
       descripcion="descripcion 01"
   
   /> 
<Slider 
       imagen="3"
       titulo="Primer 3232cTitulo"
       descripcion="descripcion 0ddddddddddddd1"
   
   /> 

  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev" >
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next" id="btn1">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
