import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      
      <nav className={`navbar navbar-expand-lg bg-white sticky top-0 ${location.pathname==='/admin'?'d-none':''}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            <img src="/app-logo.png" width={100} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/about"}>
                  About us
                </Link>
              </li>
            </ul>
            <form className="d-flex gap-2">
              <Link
                to={"/login"}
                className="btn btn-outline-success"
                type="submit"
              >
                Login
              </Link>
              <Link
                to={"/register"}
                className="btn btn-outline-danger"
                type="submit"
              >
                Register
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
