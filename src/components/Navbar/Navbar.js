import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
          <ul className="list-nav">
            <div className="di1">
              <div className="list1">
                <li className="list-active"><a href="/">PG</a></li>
              </div>
              <div className="list2">
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Contact</a></li>
              </div>
            </div>
          </ul>
      </nav>
    </>
  );
};

export default Navbar;
