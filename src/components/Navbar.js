import React from 'react';
import {Outlet,Link} from "react-router-dom";

const Navbar =()=> {
    return (
        <header id='home'>
            <nav>
                <ul className="nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/skills">Skills</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/projects">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            <Outlet/>
        </header>
    )
};

export default Navbar;