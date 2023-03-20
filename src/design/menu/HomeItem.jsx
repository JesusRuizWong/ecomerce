import React from 'react'
import { FaComment, FaHome, FaPersonBooth } from 'react-icons/fa';
import {NavLink} from 'react-router-dom' ;

export default function HomeItem() {
  return (
    <div id="HomeItem" >
        <h2 className="mx-2 text-light"> Home</h2> 
         <div className="d-flex flex-wrap justify-content-center " > 
                        <NavLink className="item-menu-detail bg-ligth" to="/Home">
                           <div className="d-flex align-items-center  flex-column"> 
                              <FaHome  className="fs-1 p-2 rounded-circle color1-t2 color1"/>
                              <span className='text-color1 text-center'>Home</span>
                           </div>
                        </NavLink>

                        <NavLink className="item-menu-detail bg-ligth" to="/Home/#opiniones">
                           <div className="d-flex align-items-center  flex-column"> 
                              <FaComment  className="fs-1 p-2 rounded-circle color1-t2 color1"/>
                              <span className='text-color1 text-center'>Opiniones</span>
                           </div>
                        </NavLink>

                        <NavLink className="item-menu-detail bg-ligth" to="/Home">
                           <div className="d-flex align-items-center  flex-column"> 
                              <FaPersonBooth className="fs-1 p-2 rounded-circle color1-t2 color1"/>
                              <span className='text-color1 text-center'>Nosotros</span>
                           </div>
                        </NavLink>

                </div>         
    </div>
  )
}
