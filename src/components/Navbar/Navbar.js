import React from "react";
import "./Navbar.css";
import logo from './logo.png';
const Navbar = () => {
  return (
    <>
      <nav className="navbar_pratham">
          <ul className="list-nav_pratham">
            <div className="di1_pratham">
              <div className="list1_pratham">
                <li className="list-active_pratham"><a href="/">
                  <img className="image_pratham" src={logo} alt="" /></a></li>
              </div>
              <div className="list2_pratham">
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href=".footer">Contact</a></li>
              </div>
            </div>
          </ul>
      </nav>
    </>
  );
};

export default Navbar;
