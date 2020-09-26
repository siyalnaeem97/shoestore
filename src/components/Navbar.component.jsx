import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export const Navbar = () => {
  return (
    <nav className="nav">
      <div>
        <Link className="link brand" to="/">
          ShoeStore
        </Link>
      </div>
      <div className="nav-link">
        <Link className="link" to="/product">
          Products
        </Link>
        <Link className="link" to="/about">
          About
        </Link>
      </div>
    </nav>
  );
};
