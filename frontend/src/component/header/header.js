import React from 'react';
import "./style.css"
import {Link} from 'react-router-dom'

const Header = () => {
return(
  <div>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            
          <div className="container-fluid">
           
            <Link className="navbar-brand" to='/' >
            <i className="fas fa-2x fa-book"></i>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse header-content" id="navbarNav">
             <ul className="navbar-nav ">
                <li className="nav-item mx-5 ">
                <Link className="nav-link"  aria-current="page" >Write</Link>
                </li>
                <li className="nav-item mx-5">
                <Link className="nav-link" to="/signup" >Sign Up</Link>
                </li>
                <li className="nav-item mx-5 ">
                <Link className="nav-link" to="/login">Log in</Link>
                </li>
               
              </ul>
            </div>
         
          </div>

        </nav>

  </div>
)
}

export default Header