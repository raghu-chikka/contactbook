import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <div>
        <div className="navbar shadow fixed-top navbar-expand navbar-light bg-light">
          <div className="container">
            <a href="#" className="navbar-brand">
              <h4> The Contact List</h4>
            </a>
          </div>
          <div className="button-position">
            <Link to="/addcontact">
              <span className="button-primary">New Contact</span>
            </Link>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default NavBar;
