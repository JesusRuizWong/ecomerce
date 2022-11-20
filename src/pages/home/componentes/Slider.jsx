import React from 'react'

export default function Slider({imagen,titulo,descripcion}) {
  return (
    <div>
        <div className="carousel-item active">
            
            <img  src={require(`src\assets\images\banner\slide-${imagen}.jpg`)} className="d-block w-100" alt="..."></img>
            <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
            </div>
        </div>

    </div>
  )
}
