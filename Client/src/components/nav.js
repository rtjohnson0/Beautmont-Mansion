import React from "react";
import { render } from "sass";

import { NavLink } from 'react-router-dom'

const Nav = () => {
    
        return(
            <div>
                <nav id="navBar" class="navbar-white">
        <a href="index.html">
           
        </a>
        
        <ul class="nav-links">
            <li><NavLink exact={true} className="nav-link active" to="/">Home</NavLink>
            </li>
            <li><NavLink exact={true} className="nav-link" to="/products">Homes For Sale</NavLink></li>
            <li><NavLink exact={true} className="nav-link" to="/contact">Contact</NavLink></li>
        </ul>
      
    </nav>
            </div>

        )
    
}

export default Nav