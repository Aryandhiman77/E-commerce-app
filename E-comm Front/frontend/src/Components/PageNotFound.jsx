import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <div className="body-content outer-top-bd">
        <div className="container">
          <div className="x-page inner-bottom-sm">
            <div className="row">
              <div className="col-md-12 x-text text-center">
                <h1>404</h1>
                <p>
                  We are sorry, the page you've requested is not available.{" "}
                </p>
                <form role="form" className="outer-top-vs outer-bottom-xs">
                  <input placeholder="Search" autoComplete="off" />
                  <button className="  btn-default le-button">Go</button>
                </form>
                <Link to={'/'}>
                  <i className="fa fa-home" /> Go To Homepage
                </Link>
              </div>
            </div>
            {/* /.row */}
          </div>
          {/* /.sigin-in*/}
        </div>
        {/* /.container */}
      </div>
    </>
  );
};

export default PageNotFound;
