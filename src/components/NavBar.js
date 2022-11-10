import React from "react";
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <div className="navDiv">
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">Abaut Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">Contact</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categorias
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="/">Sports</a></li>
                                    <li><a class="dropdown-item" href="/">Runers</a></li>
                                    <li><a class="dropdown-item" href="/">Street</a></li>
                                </ul>
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