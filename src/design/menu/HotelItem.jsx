import React from 'react'
import {  FaComment,  FaHotel } from 'react-icons/fa';
import {NavLink} from 'react-router-dom' ;

export default function HotelItem() {
  return (
    <div>
     <div id="HotelItem" style={{display:"none"}} >
    <h2 className="mx-2 text-light"> Hoteles </h2> 
     <div className="d-flex flex-wrap justify-content-center " > 
                    <NavLink className="item-menu-detail bg-ligth" to="/Home">
                       <div className="d-flex align-items-center  flex-column"> 
                          <FaHotel  className="fs-1 p-2 rounded-circle color3-t2 color3"/>
                          <span className='text-color1 text-center'>Los Más visitados</span>
                       </div>
                    </NavLink>

                    <NavLink className="item-menu-detail bg-ligth" to="/Home">
                       <div className="d-flex align-items-center  flex-column"> 
                          <FaComment  className="fs-1 p-2 rounded-circle color3-t2 color3"/>
                          <span className='text-color1 text-center'>Opiniones</span>
                       </div>
                    </NavLink>


            </div>         
    </div>       

    </div>
  )
}
