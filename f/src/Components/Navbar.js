import React, { useEffect, useContext } from 'react'
import {Link} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import logo from './images/logo.png';
import './Navbar.css';
import { UserContext} from "../App";
function Navbar() {
    const {state, dispatch} = useContext(UserContext);
    const RenderMenu = () => {
        if(state) {
            return (
                    <div>
                        <section>
                            <nav class="navbar navbar-expand-lg ">
                                <div class="container-fluid">
                                    <a class="navbar-brand mx-4 logo"><img src={logo} alt=''></img></a>
                                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>
                                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                                        <div class="navbar-nav ms-auto link">
                                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                                <li className="nav-item">
                                                    <NavLink className="nav-link" to="/">Home</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link" to="/team">About</NavLink>
                                                </li>
                                                {/* <li className="nav-item">
                                                    <NavLink className="nav-link" to="/logout">Logout</NavLink>
                                                </li> */}
                                                {/* <li className="nav-item">
                                                    <NavLink className="nav-link" to="/registration">Register</NavLink>
                                                </li> */}
                                                <li className="nav-item">
                                                    <NavLink className="nav-link" to="/logout">Logout</NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </section>
                    </div>
                )
        }//.......if block
        else{
    return (
        <div>
            <section>
                <nav class="navbar navbar-expand-lg ">
                    <div class="container-fluid">
                        <a class="navbar-brand mx-4 logo"><img src={logo} alt=''></img></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav ms-auto link">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/team">About</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/login">Login</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/registration">Register</NavLink>
                                    </li>
                                    {/* <li className="nav-item">
                                        <NavLink className="nav-link" to="/logout">Logout</NavLink>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </section>
        </div>
    )
        }
    }
    return(
        <>
          <div className="container1">
            <div className="navigation-bar">
 
 
              <RenderMenu />
 
 
            </div>
 
 
          </div>
       </>
    )
}

export default Navbar
