import React from "react";
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
 
const Navbar = () =>{
	return (
		<div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/about-us"
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-link"
                to="/login"
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
	)
}
 
export default Navbar;