import React from 'react'
import {NavLink} from 'react-router-dom' ;
import { FaBook,  FaComment} from 'react-icons/fa';

export default function CircuitsItem() {
  return (
    <div id="CircuitsItem" style={{display:"none"}} >
    <h2 className="mx-2 text-light"> Circuitos</h2> 
     <div className="d-flex flex-wrap justify-content-center " > 
                    <NavLink className="item-menu-detail bg-ligth" to="/Home">
                       <div className="d-flex align-items-center  flex-column"> 
                          <FaBook  className="fs-1 p-2 rounded-circle color2-t2 color2"/>
                          <span className='text-color1  text-center'>Los Más visitados</span>
                       </div>
                    </NavLink>

                    <NavLink className="item-menu-detail bg-ligth" to="/Home">
                       <div className="d-flex align-items-center  flex-column"> 
                          <FaComment  className="fs-1 p-2 rounded-circle color1-t2 color2"/>
                          <span className='text-color1 text-center '>Opiniones</span>
                       </div>
                    </NavLink>


            </div>         
</div>
  )
}
