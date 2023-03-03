import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <nav className="navbar_pratham">
          <ul className="list-nav_pratham">
            <div className="di1_pratham">
              <div className="list1_pratham">
                <li className="list-active_pratham"><a href="/">PG</a></li>
              </div>
              <div className="list2_pratham">
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
