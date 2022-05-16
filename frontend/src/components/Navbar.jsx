import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Goal Tracker</h1>
      <ul className="navlist">
        <li className="navItem">
          <Link to="goals">Goals</Link>
        </li>
        <li className="navItem"><Link to="login">Login</Link></li>
        <li className="navItem"><Link to="signup">Signup</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
