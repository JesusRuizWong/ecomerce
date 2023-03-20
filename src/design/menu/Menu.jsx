import React from 'react';
import { FaBookOpen, FaCar, FaChevronCircleRight, FaChevronRight, FaCogs, FaComment, FaHome, FaHotel, FaIndustry } from 'react-icons/fa';
import {NavLink} from 'react-router-dom' ;
import AutosItem from './AutosItem';
import CircuitsItem from './CircuitsItem';
import ConfigsItem from './ConfigsItem';
import HomeItem from './HomeItem';
import HotelItem from './HotelItem';


export default function Menu() {
    const HomeMenu = (e) => {
        e.preventDefault();
          document.getElementById('HomeItem').style.display = 'block';
        document.getElementById('CircuitsItem').style.display = 'none';
        document.getElementById('HotelItem').style.display = 'none';
        document.getElementById('AutosItem').style.display = 'none';
        document.getElementById('ConfigsItem').style.display = 'none';
        document.getElementById('modal-dialog').setAttribute("class","color1-t1");
  
      }

      const CircuitsMenu = (e) => {
         e.preventDefault();
         document.getElementById('HomeItem').style.display = 'none';
         document.getElementById('CircuitsItem').style.display = 'block';
         document.getElementById('HotelItem').style.display = 'none';
         document.getElementById('AutosItem').style.display = 'none';
         document.getElementById('ConfigsItem').style.display = 'none';
         document.getElementById('modal-dialog').setAttribute("class","color2-t1");
       }  

       const HotelMenu = (e) => {
         e.preventDefault();
         document.getElementById('HomeItem').style.display = 'none';
         document.getElementById('CircuitsItem').style.display = 'none';
         document.getElementById('HotelItem').style.display = 'block';
         document.getElementById('AutosItem').style.display = 'none';
         document.getElementById('ConfigsItem').style.display = 'none';
         document.getElementById('modal-dialog').setAttribute("class","color3-t1");
       } 

       const AutosMenu = (e) => {
         e.preventDefault();
         document.getElementById('HomeItem').style.display = 'none';
         document.getElementById('CircuitsItem').style.display = 'none';
         document.getElementById('HotelItem').style.display = 'none';
         document.getElementById('AutosItem').style.display = 'block';
         document.getElementById('ConfigsItem').style.display = 'none';
         document.getElementById('modal-dialog').setAttribute("class","color4-t1");
       } 

       const ConfigsMenu = (e) => {
         e.preventDefault();
         document.getElementById('HomeItem').style.display = 'none';
         document.getElementById('CircuitsItem').style.display = 'none';
         document.getElementById('HotelItem').style.display = 'none';
         document.getElementById('AutosItem').style.display = 'none';
         document.getElementById('ConfigsItem').style.display = 'block';
         document.getElementById('modal-dialog').setAttribute("class","color5-t1");
       } 
  return (
    <div className='header '>
        <div className="modal fade" id="menuModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div id='modal-dialog' className="modal-dialog color1-t1"  >
            <div id="modal-content" className="modal-content"  >
            <div className="modal-header border-bottom-0">
                <button type="button" className="btn-close bg-white " data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex"> 
                <div id="menuList" className="row text-center d-flex flex-wrap justify-content-center align-items-center  mx-4 my-2 rounded-4 pt-5  top-0 start-0 position-absolute" >
                        <span className="fs-1 fw-bold text-color1  ">Menú</span>
                        <NavLink className="item-menu"  onClick={HomeMenu}>
                           <div className="d-flex flex-wrap align-items-center justify-content-center"> 
                              <FaHome  className="mx-4 fs-1 p-2 rounded-circle color1-t2 color1"/>
                              <span className='text-color1 '>Home</span>
                           </div>
                           <FaChevronRight className="mx-2 end-0  text-color1" /> 
                        </NavLink>

                        <NavLink className="item-menu" onClick={CircuitsMenu}>
                           <div   className="d-flex flex-wrap align-items-center justify-content-center"> 
                              <FaBookOpen  className="mx-4 fs-1 p-2 rounded-circle color2-t2 color2"/>
                              <span className='text-color1 '>Circuitos</span>
                           </div>
                           <FaChevronRight className="mx-2 end-0  text-color1" /> 
                        </NavLink>

                        <NavLink className="item-menu"  onClick={HotelMenu}>
                           <div className="d-flex flex-wrap align-items-center justify-content-center"> 
                              <FaHotel  className="mx-4 fs-1 p-2 rounded-circle color3-t2 color3"/>
                              <span className='text-color1 '>Hoteles</span>
                           </div>
                           <FaChevronRight className="mx-2 end-0  text-color1" /> 
                        </NavLink>

                        <NavLink className="item-menu" onClick={AutosMenu}>
                           <div className="d-flex flex-wrap align-items-center justify-content-center"> 
                              <FaCar  className="mx-4 fs-1 p-2 rounded-circle color4-t2 color4"/>
                              <span className='text-color1 '>Autos</span>
                           </div>
                           <FaChevronRight className="mx-2 end-0  text-color1" /> 
                        </NavLink>

                        <NavLink className="item-menu" onClick={ConfigsMenu}>
                           <div className="d-flex flex-wrap align-items-center justify-content-center"> 
                              <FaCogs  className="mx-4 fs-1 p-2 rounded-circle color5-t2 color5"/>
                              <span className='text-color1 '>Autos</span>
                           </div>
                           <FaChevronRight className="mx-2 end-0  text-color1" /> 
                        </NavLink>
                </div>
                <div id="menuListDetail" className=" d-flex flex-column justify-content-center  end-0 position-absolute" >
                   
                    <div>
                    <HomeItem  /> 
                    <CircuitsItem /> 
                    <HotelItem /> 
                    <AutosItem />
                    <ConfigsItem />
                    </div>
                </div>
           
            </div>

            </div>
        </div>
        </div>
    </div>
  )
}
