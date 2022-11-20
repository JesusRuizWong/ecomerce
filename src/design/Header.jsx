import {NavLink} from 'react-router-dom' ;
import { FaAutoprefixer, FaBookOpen, FaCarAlt, FaCaravan, FaCarCrash, FaCaretRight, FaGalacticRepublic, FaHome, FaHotel, FaStickyNote } from 'react-icons/fa'
import Menu from './menu/Menu';


export default function Navbar() {
    window.addEventListener("scroll", function(){
        const header = document.getElementById("nav");
        header.classList.toggle("animacionScroll",window.scrollY>0);
       
    })
  return ( 
    <div className="header">     
    
    <header >
    <Menu />
        <nav id="nav" className="navbar navbar-expand-lg navbar-light  " >
        
            <div className="container-fluid">
         
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span> 
                </button>
                <div className="collapse navbar-collapse nav justify-content-center" id="navbarCollapse">
                    <div className="navbar-nav ">
                        <NavLink  className="nav-item nav-link d-flex align-items-center"  to="/home"> <FaHome className='m-2'/>Home</NavLink>
                        <NavLink  className="nav-item nav-link" to="/about"><FaBookOpen className='m-2'/>Circuitos</NavLink>
                  
                        <NavLink  id="logo" className="nav-item nav-link" to="/home"><img src="src\assets\images\icons\logo.png" height="28" alt="CoolBrand"/></NavLink>
                              
                        <NavLink  className="nav-item nav-link" to="/about"><FaHotel className='m-2'/>Hoteles</NavLink>
                        <NavLink  className="nav-item nav-link" to="/about"><FaCarAlt className='m-2'/>Autos</NavLink> 
                    </div>

                </div>
            </div>
        </nav>

        </header>

    </div>
  )
}
