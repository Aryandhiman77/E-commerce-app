import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import dataContext from "../../Context API/dataContext";
import AuthContext from "../../Context API/authContext";
import Wishlist from "./Wishlist";
import { useDispatch, useSelector } from "react-redux";

import { cartFetch, removeItem } from "../Cart/cartSlice";


const Header = (props) => {

  const dispatch = useDispatch();
  const {FormatPrice,categories, wishlist, getWishlist} = useContext(dataContext)
  let data = useSelector((state) => state.cart);
  const subtotal = data.data && data.subtotal;
  const { handleLogout } = useContext(AuthContext);

  const handleRemoveItem = (e) => {
    dispatch(removeItem({ cartid: e.target.value })).then(() => {
      dispatch(cartFetch()); // Fetch updated cart after item removal
    });
  };

  const cart = data.data?.getAllCarts || [];
  const cartlength = data.data?.getAllCarts?data.data.getAllCarts.length:'0';
  useEffect(() => {
    getWishlist(); // Fetch wishlist only once on mount
    dispatch(cartFetch());
  }, [dispatch]);

  return (
    
    <>
    
    
      {/* ============================================== HEADER ============================================== */}
      <header className="header-style-1" style={{    position: "sticky",
      top: "0",
      zIndex: "5"}}>
        {/* <h1>{selector}</h1> */}
        {/* ============================================== TOP MENU ============================================== */}
        <div className="top-bar animate-dropdown" >
          <div className="container">
            <div className="header-top-inner">
              <div className="cnt-account">
                <ul className="list-unstyled">
                  <li className="myaccount">
                    <Link to={'/my-account'}>
                      <span>My Account</span>
                    </Link>
                  </li>
                  <li className="wishlist" style={{position:'relative'}}>
                    <Link to="/wishlist">
                    <span style={{position:'absolute',right:"0",top:'-8px',background:'#fdd923',height:'15px',width:'15px',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'40px',color:'#106cab'}}>{wishlist.length}</span>
                      <span>Wishlist </span>
                    </Link>
                  </li>
                  <li className="header_cart hidden-xs" style={{position:'relative'}}>
                  
                    <Link to="/cart">
                    <span style={{position:'absolute',right:"0",top:'-8px',background:'#fdd923',height:'15px',width:'15px',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'40px',color:'#106cab'}}>{cartlength}</span>
                      <span>My Cart</span>
                    </Link>
                  </li>
                  <li className="check">
                    <Link to="/">
                      <span>Checkout</span>
                    </Link>
                  </li>
                  {
                    !localStorage.getItem('token')?<><li className="login">
                    <Link to="/login">
                      <span>Login</span>
                    </Link>
                  </li>
                  <li className="register">
                  <Link to="/register">
                    <span>Register</span>
                  </Link>
                </li>
                </>
                  :
                  <li className="logout">
                    <Link onClick={handleLogout}>
                      <span>Logout</span>
                    </Link>
                  </li>
                  
                  }
                  
                </ul>
              </div>
              {/* /.cnt-account */}
              <div className="cnt-block">
                <ul className="list-unstyled list-inline">
                  <li className="dropdown dropdown-small">
                    {" "}
                    <Link
                      to="#"
                      className="dropdown-toggle"
                      data-hover="dropdown"
                      data-toggle="dropdown"
                    >
                      <span className="value">USD </span>
                      <b className="caret" />
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="#">USD</Link>
                      </li>
                      <li>
                        <Link to="#">INR</Link>
                      </li>
                      <li>
                        <Link to="#">GBP</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown dropdown-small">
                    {" "}
                    <Link
                      to="#"
                      className="dropdown-toggle"
                      data-hover="dropdown"
                      data-toggle="dropdown"
                    >
                      <span className="value">English </span>
                      <b className="caret" />
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="#">English</Link>
                      </li>
                      <li>
                        <Link to="#">French</Link>
                      </li>
                      <li>
                        <Link to="#">German</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
                {/* /.list-unstyled */}
              </div>
              {/* /.cnt-cart */}
              <div className="clearfix" />
            </div>
            {/* /.header-top-inner */}
          </div>
          {/* /.container */}
        </div>
        {/* /.header-top */}
        {/* ============================================== TOP MENU : END ============================================== */}
        <div className="main-header">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-3 logo-holder">
                {/* ============================================================= LOGO ============================================================= */}
                <Link
                  to={"/"}
                  className="logo"
                  style={{ fontSize: "5rem", color: "white" }}
                >
                  <b>
                    Shop<span className="text-danger">it</span>{" "}
                  </b>
                </Link>
                {/* /.logo */}
                {/* ============================================================= LOGO : END ============================================================= */}{" "}
              </div>
              {/* /.logo-holder */}
              <div className="col-lg-7 col-md-6 col-sm-8 col-xs-12 top-search-holder">
                {/* /.contact-row */}
                {/* ============================================================= SEARCH AREA ============================================================= */}
                <div className="search-area">
                  <form>
                    <div className="control-group">
                      <ul className="categories-filter animate-dropdown">
                        <li className="dropdown">
                          {" "}
                          <Link
                            className="dropdown-toggle"
                            data-toggle="dropdown"
                            to=""
                          >
                            Categories <b className="caret" />
                          </Link>
                          <ul className="dropdown-menu" role="menu">
                            {categories.map((category, i) => {
                              return (
                                <li key={i} role="presentation">
                                  <Link
                                    role="menuitem"
                                    tabIndex={-1}
                                    to="category.html"
                                  >
                                    - {category.category_name}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </li>
                      </ul>
                      <input
                        className="search-field"
                        placeholder="Search here..."
                      />
                      <Link className="search-button" to="#" />{" "}
                    </div>
                  </form>
                </div>
                {/* /.search-area */}
                {/* ============================================================= SEARCH AREA : END ============================================================= */}{" "}
              </div>
              {/* /.top-search-holder */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12 animate-dropdown top-cart-row">
                {/* ============================================================= SHOPPING CART DROPDOWN ============================================================= */}
                <div className="dropdown dropdown-cart">
                  {" "}
                  <Link
                    to="#"
                    className="dropdown-toggle lnk-cart"
                    data-toggle="dropdown"
                  >
                    <div className="items-cart-inner">
                      <div className="basket">
                        <div className="basket-item-count">
                          <span className="count">{cartlength}</span>
                        </div>
                        <div className="total-price-basket">
                          {" "}
                          <span className="lbl">Shopping Cart</span>{" "}
                          <span className="value">{FormatPrice(subtotal)}</span>{" "}
                        </div>
                      </div>
                    </div>
                  </Link>
                  <ul className="dropdown-menu" style={{width:'35rem'}} >
                    <div style={{overflowY:'scroll',display:"flex",flexWrap:"wrap",maxHeight:'25rem'}}>
                    {cart && cart.map((item, i) => {
                      return (
                        <li key={i}>
                          {!item.product_id && (
                            <div className="cart-item product-summary">
                              <div className="row" style={{margin:0}}>
                                <div className="col-xs-4">
                                  <div className="image">
                                    {" "}
                                    <Link to="/">
                                      <img
                                        src={`${props.host}${
                                          "/" +
                                          item.product_varient_id
                                            .varient_images[0]
                                        }`}
                                        alt="loading"
                                      />
                                    </Link>{" "}
                                  </div>
                                </div>
                                <div className="col-xs-7">
                                  <h3 className="name">
                                    <Link to="index8a95.html?page-detail">
                                      {item.product_varient_id.varient_name}
                                    </Link>
                                  </h3>
                                  <div className="price">
                                    {FormatPrice(item.product_varient_id.price?item.product_varient_id.price:0)}{item.quantity>1&&<span style={{color:'red'}}>{' x '+item.quantity}</span>}
                                  </div> 
                                </div>
                                <div className="col-xs-1 action">
                                  {" "}
                                  <button
                                    value={item._id}
                                    onClick={handleRemoveItem}
                                    className="fa fa-trash"
                                    style={{
                                      borderRadius: "20px",
                                      height: "3rem",
                                      width: "3rem",
                                      border: "1px",
                                      color: "red",
                                      fontSize: "1.5rem",
                                    }}
                                  ></button>
                                </div>
                              </div>
                              <hr />
                            </div>
                          )}
                          {!item.product_varient_id && (
                            <div className="cart-item product-summary">
                              <div className="row" style={{margin:0}}>
                                <div className="col-xs-4">
                                  <div className="image">
                                    {" "}
                                    <Link to="/">
                                      <img
                                        src={`${props.host}${item.product_id.image}`}
                                        alt="loading"
                                      />
                                    </Link>{" "}
                                  </div>
                                </div>
                                <div className="col-xs-7">
                                  <h3 className="name">
                                    <Link to="index8a95.html?page-detail">
                                      {item.product_id.product_name}
                                    </Link>
                                  </h3>
                                  <div className="price">
                                    {FormatPrice(item.product_id.price?item.product_id.price:0)}
                                     {item.quantity>1&& <span style={{color:'red'}}>{' x '+item.quantity}</span>}
                                  </div>
                                </div>
                                <div className="col-xs-1 action">
                                  {" "}
                                  <button
                                    value={item._id}
                                    onClick={handleRemoveItem}
                                    className="fa fa-trash header-remove-btn"
                                    
                                  ></button>
                                </div>
                              </div>
                              <hr />
                            </div>
                          )}
                        </li>
                      );
                    })}
                     </div>
                    <div className="clearfix" />
                    <div className="clearfix cart-total">
                      <div className="pull-right">
                        {" "}
                        <span className="text">
                          Sub Total : {FormatPrice(subtotal)}
                        </span>
                        <span className="price"></span>{" "}
                      </div>
                      <div className="clearfix" />
                      <Link
                        to="/checkout"
                        className="btn btn-upper btn-primary btn-block m-t-20"
                      >
                        Checkout
                      </Link>{" "}
                    </div>
                   
                  </ul>
                  {/* /.dropdown-menu*/}
                </div>
                {/* /.dropdown-cart */}
                {/* ============================================================= SHOPPING CART DROPDOWN : END============================================================= */}{" "}
              </div>
              {/* /.top-cart-row */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </div>
        {/* /.main-header */}
        {/* ============================================== NAVBAR ============================================== */}
        <div className="header-nav animate-dropdown">
          <div className="container">
            <div className="yamm navbar navbar-default" role="navigation">
              <div className="navbar-header">
                <button
                  data-target="#mc-horizontal-menu-collapse"
                  data-toggle="collapse"
                  className="navbar-toggle collapsed"
                  type="button"
                >
                  <span className="sr-only">Toggle navigation</span>{" "}
                  <span className="icon-bar" /> <span className="icon-bar" />{" "}
                  <span className="icon-bar" />{" "}
                </button>
              </div>

              {/* /.nav-bg-class */}
            </div>
            {/* /.navbar-default */}
          </div>
          {/* /.container-class */}
        </div>
        {/* /.header-nav */}
        {/* ============================================== NAVBAR : END ============================================== */}
      </header>
      {/* ============================================== HEADER : END ============================================== */}
      {/* ============================================== HEADER : END ============================================== */}
    </>
  );
};

export default Header;
