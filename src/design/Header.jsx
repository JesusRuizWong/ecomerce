import {NavLink} from 'react-router-dom' ;
import { FaAutoprefixer, FaBookOpen, FaCarAlt, FaCaravan, FaCarCrash, FaCaretRight, FaGalacticRepublic, FaHome, FaHotel, FaList, FaStickyNote } from 'react-icons/fa'
import Menu from './menu/Menu';


export default function Navbar() {
    window.addEventListener("scroll", function(){
        const header = document.getElementById("nav");
        header.classList.toggle("animacionScroll",window.scrollY>0);
       
    })
  return ( 
    <div className="header">     
      <Menu className="position-fixed "/>  
        <nav id="nav" className="navbar navbar-expand-lg  ">
                    
            <div className="container-fluid">
                <div className="d-flex"> 
                <button type="button" className="btn mx-2" data-bs-toggle="modal" data-bs-target="#menuModal">
                   <FaList />
                </button>
                <a className="navbar-brand" href="#"><img  id="logo" src="src\assets\images\icons\logo.png"></img></a>
                </div>   
                
                <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>


    </div>
  )
}
