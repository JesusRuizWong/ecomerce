import React from 'react';
import { FaBookOpen, FaChevronCircleRight, FaChevronRight, FaHome, FaHotel } from 'react-icons/fa';
import {NavLink} from 'react-router-dom' ;


export default function Menu() {
  return (
    <div className='header'>
       
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
        </button>


        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog"  >
            <div class="modal-content"  >
            <div class="modal-header border-bottom-0">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body d-flex"> 
                <div id="menuList" className=" d-flex flex-column  m-4 rounded-4 py-5 px-2 text-center fixed-top" >
                    <div className="h2" ><h2>Menu</h2></div> 
                    <div className="m-2 my-4 d-flex flex-row" > <FaHome  className="w-25 fs-3"/> <h3 className="">Home</h3><FaChevronRight className="w-25 fs-3 end-0 position-absolute" /> </div>
                    <div className="m-2 my-4  d-flex flex-row"> <FaBookOpen className="w-25 fs-3"/> <h3 className="">Circuitos</h3><FaChevronRight className="w-25 fs-3 end-0 position-absolute" /> </div>
                    <div className="m-2 my-4  d-flex flex-row"><FaHotel  className="w-25 fs-3"/> <h3 className="">Hoteles</h3><FaChevronRight className="w-25 fs-3 end-0 position-absolute" /> </div>
                    <div className="m-2 my-4  d-flex flex-row"><FaHotel  className="w-25 fs-3"/> <h3 className="">Hoteles</h3> <FaChevronRight className="w-25 fs-3 end-0 position-absolute" /></div>
                    <div className="m-2 my-4  d-flex flex-row"><FaHotel  className="w-25 fs-3"/> <h3 className="">Hoteles</h3><FaChevronRight className="w-25 fs-3 end-0 position-absolute" /> </div>
                    <div className="m-2 my-4  d-flex flex-row"><FaHotel  className="w-25 fs-3"/> <h3 className="">Hoteles</h3> <FaChevronRight className="w-25 fs-3 end-0 position-absolute" /></div>

                </div>
                <div>

                </div>
           
            </div>

            </div>
        </div>
        </div>
    </div>
  )
}
