import React from "react";
import { Link } from "react-router-dom";
import { FaRegPlusSquare, FaArrowRight } from "react-icons/fa";

import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <span id="title" className="navbar-brand ">
          My Goals
        </span>
        <ul className="navlist">
          <li className="navItem">
            <Link to="goals">Goals</Link>
          </li>
          <li className="navItem">
            <Link to="login">Login</Link>
          </li>
          <li className="navItem">
            <Link to="signup">Signup</Link>
          </li>
          <li className="navItem">
            <Link to="explore">Goal</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
