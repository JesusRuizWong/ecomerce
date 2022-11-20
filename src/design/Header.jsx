import {NavLink} from 'react-router-dom' ;

export default function Navbar() {
    window.addEventListener("scroll", function(){
        const header = document.getElementById("nav");
        header.classList.toggle("animacionScroll",window.scrollY>0);
       
    })
  return ( 
    <div className="header">     
    <header >
        <nav id="nav" className="navbar navbar-expand-lg navbar-light  " >
            <div className="container-fluid">
                
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse nav justify-content-center" id="navbarCollapse">
                    <div className="navbar-nav ">
                        <NavLink  className="nav-item nav-link" to="/home">Home</NavLink>
                        <NavLink  className="nav-item nav-link" to="/about">Escapadas</NavLink>
            
                        <NavLink  id="logo" className="nav-item nav-link" to="/home"><img src="src\assets\images\icons\logo.png" height="28" alt="CoolBrand"/></NavLink>
                              
                        
                        <NavLink  className="nav-item nav-link" to="/about">Reseñas</NavLink>
                        <NavLink  className="nav-item nav-link" to="/about">About</NavLink>
                    </div>

                </div>
            </div>
        </nav>

        </header>

    </div>
  )
}
