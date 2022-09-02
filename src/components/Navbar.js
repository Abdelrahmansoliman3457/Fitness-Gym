import React, { useState } from "react";
import "./navbar.css";
import Logo from "../images/logo.png";
import { GoThreeBars } from "react-icons/go";
import { GrFormClose } from "react-icons/gr";
import { links } from "../data";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  return (
    <nav>
      <div className="container nav__container">
        <Link className="logo" to="/" onClick={() => setIsNavShowing(false)}>
          <img src={Logo} alt="navlogo" />
        </Link>
        <ul
          className={`nav__links ${isNavShowing ? "show__nav" : "hide__nav"}`}
        >
          {links.map((link, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={link.path}
                  onClick={() => setIsNavShowing((prev) => !prev)}
                >
                  {link.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button
          className="nav__toggle-btn"
          onClick={() => setIsNavShowing((prev) => !prev)}
        >
          {isNavShowing ? <GrFormClose /> : <GoThreeBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
