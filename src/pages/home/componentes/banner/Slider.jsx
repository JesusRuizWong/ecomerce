import React from 'react'

export default function Slider({imagen,titulo,descripcion}) {
  return (
    <div>

            
            <img id="bannerImg" src={`src/assets/images/banner/slide-${imagen}.jpg`} 
                style={{height:"600px" ,objectFit:"cover"}}
                 className="d-block w-100" alt="slider"></img>
            <div className="carousel-caption d-none d-md-block">
                <h5>{titulo}</h5>
                <p>{descripcion}</p>
            </div>
    

    </div>
  )
}

