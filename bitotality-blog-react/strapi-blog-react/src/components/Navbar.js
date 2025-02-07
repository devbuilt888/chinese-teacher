import React from "react";
import bitoImg from "../images/logobitotransparente.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to={`/`} style={{ textDecoration: "none", color: "inherit" }}>
        <img className="navbar-logo-img" src={bitoImg} />
      </Link>
      {/* <a className="navbar-item" href="">Strapi Blog</a> */}
    </div>
  );
};

export default Navbar;
