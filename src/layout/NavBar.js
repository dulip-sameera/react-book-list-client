import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary bg-body-tertiary">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand text-light">
          My Book List
        </Link>
        <Link to={"/add-book"} className="btn btn-outline-light">
          Add Book
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
