import React from 'react';
import { FaBookOpen, FaChevronCircleRight, FaChevronRight, FaComment, FaHome, FaHotel } from 'react-icons/fa';
import {NavLink} from 'react-router-dom' ;
import HomeItem from './HomeItem';


export default function Menu() {
  return (
    <div className='header'>
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog"  >
            <div className="modal-content"  >
            <div className="modal-header border-bottom-0">
                <button type="button" className="btn-close bg-white " data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex"> 
                <div id="menuList" className=" d-flex flex-column  m-4 rounded-4 py-5 px-2 text-center fixed-top" >
                    <div className="h2" ><h2>Menu</h2></div> 
                    <NavLink  className="nav-item nav-link" to="/Home"><div className="m-2 my-4 d-flex flex-row" > <FaHome  className="w-25 fs-3"/> <h3 className="">Home</h3><FaChevronRight className="w-25 fs-3 end-0 position-absolute" /> </div></NavLink>
                    <div className="m-2 my-4  d-flex flex-row"> <FaBookOpen className="w-25 fs-3"/> <h3 className="">Circuitos</h3><FaChevronRight className="w-25 fs-3 end-0 position-absolute" /> </div>
                    <div className="m-2 my-4  d-flex flex-row"><FaHotel  className="w-25 fs-3"/> <h3 className="">Hoteles</h3><FaChevronRight className="w-25 fs-3 end-0 position-absolute" /> </div>
                    <div className="m-2 my-4  d-flex flex-row"><FaHotel  className="w-25 fs-3"/> <h3 className="">Hoteles</h3> <FaChevronRight className="w-25 fs-3 end-0 position-absolute" /></div>
                    <div className="m-2 my-4  d-flex flex-row"><FaHotel  className="w-25 fs-3"/> <h3 className="">Hoteles</h3><FaChevronRight className="w-25 fs-3 end-0 position-absolute" /> </div>
                    <div className="m-2 my-4  d-flex flex-row"><FaHotel  className="w-25 fs-3"/> <h3 className="">Hoteles</h3> <FaChevronRight className="w-25 fs-3 end-0 position-absolute" /></div>
                    <NavLink  className="nav-item nav-link" to="/about"></NavLink>
                </div>
                <div id="menuListDetail"className=" d-flex flex-column  end-0 position-absolute" >
                   
                    <div>
                       <HomeItem />
                    </div>
                </div>
           
            </div>

            </div>
        </div>
        </div>
    </div>
  )
}
