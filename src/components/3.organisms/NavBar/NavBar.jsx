import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <header className="c-nav-bar">
        <nav>
            <Link className="c-nav-bar__link" to="/repositories">Repositories</Link>
            <Link className="c-nav-bar__link" to="/organisations">Organisations</Link>
        </nav>
    </header>
  )
};


export default NavBar;

