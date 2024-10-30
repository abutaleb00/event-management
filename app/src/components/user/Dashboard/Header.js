import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Header = () => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          Events POC
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link" to="/user/events">
              ListEvents
            </Link>
            <Link className="nav-item nav-link" to="/user/myevents">
              My Events
            </Link>
            <Link className="nav-item nav-link" to="/user/profile">
              My Profile
            </Link>
            <Link className="nav-item nav-link" to="/user/logout">
              Logout
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
