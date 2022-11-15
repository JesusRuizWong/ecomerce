import {NavLink} from 'react-router-dom' ;

export default function Navbar() {
  return ( 
    <div className="header">
        <a href="#default" className="logo">CompanyLogo</a>
        <div className="header-right"></div>
    <nav className="header-right">
        <ul className="header-right">
            <li>
                <NavLink  to="/home">Home</NavLink>
            </li>
            <li>
                <NavLink  to="/about">About</NavLink>
            </li>
            <li>
                <NavLink  to="/notfound">NotFound</NavLink>
            </li>            

        </ul>
      
    </nav>
    </div>
  )
}
