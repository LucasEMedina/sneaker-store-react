import React from "react";

import CartWidget from "./CartWidget";
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navDiv">
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/category/Jordan">Jordan</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/category/Runners">Runners</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/category/Street">Street</Link>
                            </li>                            
                        </ul>
                    </div>
                </div>
                <CartWidget/>
            </nav>            
        </div>
    );
};

export default NavBar;