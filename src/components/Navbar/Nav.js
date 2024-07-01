import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import MyLogo from "../../images/MyLogo.png";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header effect">
      <Link to={"/"} className="title">
        <span>
          <img className="logo" src={MyLogo} alt="Logo" />
        </span>
      </Link>
      <nav>
        <div
          className="menu"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <Link to={"/input"} className="btnPort">
              PortFolio
            </Link>
          </li>
          <li>
            <Link to={"/login"} className="btnLog">
              Login
            </Link>
          </li>
          <li>
            <Link to={"/register"} className="btnReg">
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
