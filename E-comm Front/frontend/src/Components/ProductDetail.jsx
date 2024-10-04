import React, { useContext, useEffect, useState } from "react";
import ReactCarousel from "./Elements/Carousel";
import { Link, useParams } from "react-router-dom";
import { param } from "jquery";
import dataContext from "../../Context API/dataContext";
import Spinner from "./Elements/Spinner";
import ReactImageMagnify from "react-image-magnify";
import VarientImageColor from "./Elements/VarientImageColor";
import { useDispatch, useSelector } from 'react-redux';
import { decrementer, incrementer } from "../Cart/cartSlice";

const ProductDetail = (props) => {
  const params = useParams();
  const context = useContext(dataContext);
  const selector = useSelector(state=>state?.cart)
  const { getProduct, viewProduct, productImages, addToCart, wishlist } =
    context;
    const dispatch = useDispatch()

  const addItem = (e) => {
    console.log(e.target.value);
    const details = {
      productid: e.target.value,
      quantity:selector.quantity,
    };
    addToCart(details);
  };
  const incrementQnty =(e)=> {
    dispatch(incrementer());
    // dispatch(updateItem())
  }
  const decrementQuantity=()=>{
    dispatch(decrementer());

  }
  useEffect(() => {
    getProduct(params.productSlug);
  }, []);
  return (
    <>
      {!viewProduct && <Spinner />}

      {/* <button onClick={show}>click</button> */}
      {/* <p>{[`${props.host}${viewProduct.image}`,`${props.host}${[viewProduct.product_images]}`]}</p> */}
      <div
        className="body-content outer-top-xs"
        style={{ textTransform: "capitalize" }}
      >
        <div className="container">
          <div className="row single-product">
            <div className="col-xs-12 col-sm-12 col-md-3 sidebar">
              <div className="sidebar-module-container">
                <div className="home-banner outer-top-n outer-bottom-xs">
                  <img
                    src="/src/assets/images/banners/LHS-banner.jpg"
                    alt="Image"
                  />
                </div>

                {/* ============================================== HOT DEALS ============================================== */}
                <div className="sidebar-widget hot-deals outer-bottom-xs">
                  <h3 className="section-title">Hot deals</h3>
                  <div className="owl-carousel sidebar-carousel custom-carousel owl-theme outer-top-ss">
                    <div className="item">
                      <div className="products">
                        <div className="hot-deal-wrapper">
                          <div className="image">
                            <a href="#">
                              <img src="/src/assets/images/hot-deals/p13.jpg" />
                              <img
                                src="/src/assets/images/hot-deals/p13_hover.jpg"
                                className="hover-image"
                              />
                            </a>
                          </div>
                          <div className="sale-offer-tag">
                            <span>
                              49%
                              <br />
                              off
                            </span>
                          </div>
                          <div className="timing-wrapper">
                            <div className="box-wrapper">
                              <div className="date box">
                                {" "}
                                <span className="key">120</span>{" "}
                                <span className="value">DAYS</span>{" "}
                              </div>
                            </div>
                            <div className="box-wrapper">
                              <div className="hour box">
                                {" "}
                                <span className="key">20</span>{" "}
                                <span className="value">HRS</span>{" "}
                              </div>
                            </div>
                            <div className="box-wrapper">
                              <div className="minutes box">
                                {" "}
                                <span className="key">36</span>{" "}
                                <span className="value">MINS</span>{" "}
                              </div>
                            </div>
                            <div className="box-wrapper">
                              <div className="seconds box">
                                {" "}
                                <span className="key">60</span>{" "}
                                <span className="value">SEC</span>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* /.hot-deal-wrapper */}
                        <div className="product-info text-left m-t-20">
                          <h3 className="name">
                            <a href="detail.html">Floral Print Buttoned</a>
                          </h3>
                          <div className="rating rateit-small" />
                          <div className="product-price">
                            {" "}
                            <span className="price"> $600.00 </span>{" "}
                            <span className="price-before-discount">
                              $800.00
                            </span>{" "}
                          </div>
                          {/* /.product-price */}
                        </div>
                        {/* /.product-info */}
                        <div className="cart clearfix animate-effect">
                          <div className="action">
                            <div className="add-cart-button btn-group">
                              <button
                                className="btn btn-primary icon"
                                data-toggle="dropdown"
                                type="button"
                              >
                                {" "}
                                <i className="fa fa-shopping-cart" />{" "}
                              </button>
                              <button
                                className="btn btn-primary cart-btn"
                                type="button"
                              >
                                Add to cart
                              </button>
                            </div>
                          </div>
                          {/* /.action */}
                        </div>
                        {/* /.cart */}
                      </div>
                    </div>
                    <div className="item">
                      <div className="products">
                        <div className="hot-deal-wrapper">
                          <div className="image">
                            <a href="#">
                              <img src="/src/assets/images/hot-deals/p14.jpg" />
                              <img
                                src="/src/assets/images/hot-deals/p14_hover.jpg"
                                className="hover-image"
                              />
                            </a>
                          </div>
                          <div className="sale-offer-tag">
                            <span>
                              35%
                              <br />
                              off
                            </span>
                          </div>
                          <div className="timing-wrapper">
                            <div className="box-wrapper">
                              <div className="date box">
                                {" "}
                                <span className="key">120</span>{" "}
                                <span className="value">Days</span>{" "}
                              </div>
                            </div>
                            <div className="box-wrapper">
                              <div className="hour box">
                                {" "}
                                <span className="key">20</span>{" "}
                                <span className="value">HRS</span>{" "}
                              </div>
                            </div>
                            <div className="box-wrapper">
                              <div className="minutes box">
                                {" "}
                                <span className="key">36</span>{" "}
                                <span className="value">MINS</span>{" "}
                              </div>
                            </div>
                            <div className="box-wrapper">
                              <div className="seconds box">
                                {" "}
                                <span className="key">60</span>{" "}
                                <span className="value">SEC</span>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* /.hot-deal-wrapper */}
                        <div className="product-info text-left m-t-20">
                          <h3 className="name">
                            <a href="detail.html">Floral Print Buttoned</a>
                          </h3>
                          <div className="rating rateit-small" />
                          <div className="product-price">
                            {" "}
                            <span className="price"> $600.00 </span>{" "}
                            <span className="price-before-discount">
                              $800.00
                            </span>{" "}
                          </div>
                          {/* /.product-price */}
                        </div>
                        {/* /.product-info */}
                        <div className="cart clearfix animate-effect">
                          <div className="action">
                            <div className="add-cart-button btn-group">
                              <button
                                className="btn btn-primary icon"
                                data-toggle="dropdown"
                                type="button"
                              >
                                {" "}
                                <i className="fa fa-shopping-cart" />{" "}
                              </button>
                              <button
                                className="btn btn-primary cart-btn"
                                type="button"
                              >
                                Add to cart
                              </button>
                            </div>
                          </div>
                          {/* /.action */}
                        </div>
                        {/* /.cart */}
                      </div>
                    </div>
                    <div className="item">
                      <div className="products">
                        <div className="hot-deal-wrapper">
                          <div className="image">
                            <a href="#">
                              <img src="/src/assets/images/hot-deals/p15.jpg" />
                              <img
                                src="/src/assets/images/hot-deals/p15_hover.jpg"
                                className="hover-image"
                              />
                            </a>
                          </div>
                          <div className="sale-offer-tag">
                            <span>
                              35%
                              <br />
                              off
                            </span>
                          </div>
                          <div className="timing-wrapper">
                            <div className="box-wrapper">
                              <div className="date box">
                                {" "}
                                <span className="key">120</span>{" "}
                                <span className="value">Days</span>{" "}
                              </div>
                            </div>
                            <div className="box-wrapper">
                              <div className="hour box">
                                {" "}
                                <span className="key">20</span>{" "}
                                <span className="value">HRS</span>{" "}
                              </div>
                            </div>
                            <div className="box-wrapper">
                              <div className="minutes box">
                                {" "}
                                <span className="key">36</span>{" "}
                                <span className="value">MINS</span>{" "}
                              </div>
                            </div>
                            <div className="box-wrapper">
                              <div className="seconds box">
                                {" "}
                                <span className="key">60</span>{" "}
                                <span className="value">SEC</span>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* /.hot-deal-wrapper */}
                        <div className="product-info text-left m-t-20">
                          <h3 className="name">
                            <a href="detail.html">Floral Print Buttoned</a>
                          </h3>
                          <div className="rating rateit-small" />
                          <div className="product-price">
                            {" "}
                            <span className="price"> $600.00 </span>{" "}
                            <span className="price-before-discount">
                              $800.00
                            </span>{" "}
                          </div>
                          {/* /.product-price */}
                        </div>
                        {/* /.product-info */}
                        <div className="cart clearfix animate-effect">
                          <div className="action">
                            <div className="add-cart-button btn-group">
                              <button
                                className="btn btn-primary icon"
                                data-toggle="dropdown"
                                type="button"
                              >
                                {" "}
                                <i className="fa fa-shopping-cart" />{" "}
                              </button>
                              <button
                                className="btn btn-primary cart-btn"
                                type="button"
                              >
                                Add to cart
                              </button>
                            </div>
                          </div>
                          {/* /.action */}
                        </div>
                        {/* /.cart */}
                      </div>
                    </div>
                  </div>
                  {/* /.sidebar-widget */}
                </div>
                {/* ============================================== HOT DEALS: END ============================================== */}
                {/* ============================================== NEWSLETTER ============================================== */}
                <div className="sidebar-widget newsletter outer-bottom-small outer-top-vs">
                  <h3 className="section-title">Newsletters</h3>
                  <div className="sidebar-widget-body outer-top-xs">
                    <p>Sign Up for Our Newsletter!</p>
                    <form>
                      <div className="form-group">
                        <label className="sr-only" htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          placeholder="Subscribe to our newsletter"
                        />
                      </div>
                      <button className="btn btn-primary">Subscribe</button>
                    </form>
                  </div>
                  {/* /.sidebar-widget-body */}
                </div>
                {/* /.sidebar-widget */}
                {/* ============================================== NEWSLETTER: END ============================================== */}
                {/* ============================================== Testimonials============================================== */}
                <div className="sidebar-widget  outer-top-vs ">
                  <div id="advertisement" className="advertisement">
                    <div className="item">
                      <div className="avatar">
                        <img
                          src="/src/assets/images/testimonials/member1.png"
                          alt="Image"
                        />
                      </div>
                      <div className="testimonials">
                        <em>"</em> Vtae sodales aliq uam morbi non sem lacus
                        port mollis. Nunc condime tum metus eud molest sed
                        consectetuer.<em>"</em>
                      </div>
                      <div className="clients_author">
                        John Doe <span>Abc Company</span>{" "}
                      </div>
                      {/* /.container-fluid */}
                    </div>
                    {/* /.item */}
                    <div className="item">
                      <div className="avatar">
                        <img
                          src="/src/assets/images/testimonials/member3.png"
                          alt="Image"
                        />
                      </div>
                      <div className="testimonials">
                        <em>"</em>Vtae sodales aliq uam morbi non sem lacus port
                        mollis. Nunc condime tum metus eud molest sed
                        consectetuer.<em>"</em>
                      </div>
                      <div className="clients_author">
                        Stephen Doe <span>Xperia Designs</span>{" "}
                      </div>
                    </div>
                    {/* /.item */}
                    <div className="item">
                      <div className="avatar">
                        <img
                          src="/src/assets/images/testimonials/member2.png"
                          alt="Image"
                        />
                      </div>
                      <div className="testimonials">
                        <em>"</em> Vtae sodales aliq uam morbi non sem lacus
                        port mollis. Nunc condime tum metus eud molest sed
                        consectetuer.<em>"</em>
                      </div>
                      <div className="clients_author">
                        Saraha Smith <span>Datsun &amp; Co</span>{" "}
                      </div>
                      {/* /.container-fluid */}
                    </div>
                    {/* /.item */}
                  </div>
                  {/* /.owl-carousel */}
                </div>
                {/* ============================================== Testimonials: END ============================================== */}
              </div>
            </div>
            {/* /.sidebar */}

            <div className="col-xs-12 col-sm-12 col-md-9 rht-col">
              <div className="detail-block">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 gallery-holder">
                    <div className="product-item-holder size-big single-product-gallery small-gallery">
                      <ReactCarousel
                        showThumbs={false}
                        autoPlay={false}
                        infiniteLoop={true}
                        transitionTime={700}
                        swipeable={true}
                        images={productImages}
                        style={{ marginTop: "8rem", position: "relative" }}
                        magnifier={true}
                      />
                      {/* <h1>{productImages}</h1> */}
                    </div>
                    {/* /.single-product-gallery */}
                  </div>
                  {/* /.gallery-holder */}
                  <div className="col-sm-12 col-md-8 col-lg-8 product-info-block">
                    <div className="product-info">
                      <h1 className="name">{viewProduct.product_name}</h1>
                      <div className="rating-reviews m-t-20">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="pull-left">
                              <div className="rating rateit-small" />
                            </div>
                            <div className="pull-left">
                              <div className="reviews">
                                <a href="#" className="lnk">
                                  (13 Reviews)
                                </a>
                              </div>
                              <VarientImageColor viewProduct={viewProduct} host={props.host} productSlug={params.productSlug}/>
                              
                            </div>
                          </div>
                        </div>
                        {/* /.row */}
                      </div>
                      {/* /.rating-reviews */}
                      <div className="stock-container info-container m-t-10">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="pull-left">
                              <div className="stock-box">
                                {viewProduct.stock_quantity > 0 ? (
                                  <div className="pull-left">
                                    <div className="stock-box">
                                      <span
                                        className="value"
                                        style={{ color: "green" }}
                                      >
                                        In Stock
                                      </span>
                                    </div>
                                  </div>
                                ) : (
                                  <div className="pull-left">
                                    <div className="stock-box">
                                      <span className="value">
                                        Out of Stock
                                      </span>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* /.row */}
                      </div>
                      {/* /.stock-container */}
                      <div className="description-container m-t-20">
                        <p>{viewProduct.description}</p>
                      </div>
                      {/* /.description-container */}
                      <div className="price-container info-container m-t-30">
                        <div className="row">
                          <div className="col-sm-6 col-xs-6">
                            <div className="price-box">
                              <span className="price">
                                ₹{viewProduct.price}
                              </span>
                              <span className="price-strike">$900.00</span>
                            </div>
                          </div>
                          <div className="col-sm-6 col-xs-6">
                            <div className="favorite-button m-t-5">
                              <a
                                className="btn btn-primary"
                                data-toggle="tooltip"
                                data-placement="right"
                                title="Wishlist"
                                href="#"
                              >
                                <i className="fa fa-heart" />
                              </a>
                              <a
                                className="btn btn-primary"
                                data-toggle="tooltip"
                                data-placement="right"
                                title="Add to Compare"
                                href="#"
                              >
                                <i className="fa fa-signal" />
                              </a>
                              <a
                                className="btn btn-primary"
                                data-toggle="tooltip"
                                data-placement="right"
                                title="E-mail"
                                href="#"
                              >
                                <i className="fa fa-envelope" />
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* /.row */}
                      </div>
                      {/* /.price-container */}
                      <div className="colors row" style={{ marginTop: "2rem" }}>
                        <div className="col-md-1 color-circle"></div>
                      </div>
                      <div className="quantity-container info-container">
                        <div className="row">
                          <div className="qty">
                            <span className="label">Qty :</span>
                          </div>
                          <div className="qty-count">
                            <div className="cart-quantity">
                              <div className="quant-input">
                                <div className="arrows">
                                  <div className="arrow plus gradient">
                                    <span className="ir">
                                      <button className="incDecIcons icon fa fa-sort-asc" onClick={incrementQnty} />
                                    </span>
                                  </div>
                                  <div className="arrow minus gradient">
                                    <span className="ir">
                                      <button className="incDecIcons icon fa fa-sort-desc" onClick={decrementQuantity} />
                                    </span>
                                  </div>
                                </div>
                                <input type="text" value={selector.quantity} />
                              </div>
                            </div>
                          </div>
                          <div className="add-btn">
                            <button
                              href="#"
                              className="btn btn-primary"
                              value={viewProduct._id}
                              onClick={addItem}
                            >
                              <i className="fa fa-shopping-cart inner-right-vs" />{" "}
                              ADD TO CART
                            </button>
                          </div>
                        </div>
                        {/* /.row */}
                      </div>
                      {/* /.quantity-container */}
                    </div>
                    {/* /.product-info */}
                  </div>
                  {/* /.col-sm-7 */}
                </div>
                {/* /.row */}
              </div>
              <div className="product-tabs inner-bottom-xs">
                <div className="row">
                  <div className="col-sm-12 col-md-3 col-lg-3">
                    <ul id="product-tabs" className="nav nav-tabs nav-tab-cell">
                      <li className="active">
                        <a data-toggle="tab" href="#description">
                          DESCRIPTION
                        </a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#review">
                          REVIEW
                        </a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#tags">
                          TAGS
                        </a>
                      </li>
                    </ul>
                    {/* /.nav-tabs #product-tabs */}
                  </div>
                  <div className="col-sm-12 col-md-9 col-lg-9">
                    <div className="tab-content">
                      <div id="description" className="tab-pane in active">
                        <div className="product-tab">
                          <p className="text">{viewProduct.description}</p>
                        </div>
                      </div>
                      {/* /.tab-pane */}
                      <div id="review" className="tab-pane">
                        <div className="product-tab">
                          <div className="product-reviews">
                            <h4 className="title">Customer Reviews</h4>
                            <div className="reviews">
                              <div className="review">
                                <div className="review-title">
                                  <span className="summary">
                                    We love this product
                                  </span>
                                  <span className="date">
                                    <i className="fa fa-calendar" />
                                    <span>1 days ago</span>
                                  </span>
                                </div>
                                <div className="text">
                                  "Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit.Aliquam suscipit."
                                </div>
                              </div>
                            </div>
                            {/* /.reviews */}
                          </div>
                          {/* /.product-reviews */}
                          <div className="product-add-review">
                            <h4 className="title">Write your own review</h4>
                            <div className="review-table">
                              <div className="table-responsive">
                                <table className="table">
                                  <thead>
                                    <tr>
                                      <th className="cell-label">&nbsp;</th>
                                      <th>1 star</th>
                                      <th>2 stars</th>
                                      <th>3 stars</th>
                                      <th>4 stars</th>
                                      <th>5 stars</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className="cell-label">Quality</td>
                                      <td>
                                        <input
                                          type="radio"
                                          name="quality"
                                          className="radio"
                                          defaultValue={1}
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="radio"
                                          name="quality"
                                          className="radio"
                                          defaultValue={2}
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="radio"
                                          name="quality"
                                          className="radio"
                                          defaultValue={3}
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="radio"
                                          name="quality"
                                          className="radio"
                                          defaultValue={4}
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="radio"
                                          name="quality"
                                          className="radio"
                                          defaultValue={5}
                                        />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="cell-label">Price</td>
                                      <td>
                                        <input
                                          type="radio"
                                          name="quality"
                                          className="radio"
                                          defaultValue={1}
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="radio"
                                          name="quality"
                                          className="radio"
                                          defaultValue={2}
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="radio"
                                          name="quality"
                                          className="radio"
                                          defaultValue={3}
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="radio"
                                          name="quality"
                                          className="radio"
                                          defaultValue={4}
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="radio"
                                          name="quality"
                                          className="radio"
                                          defaultValue={5}
                                        />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="cell-label">Value</td>
                                      <td>
                                        <input
                                          type="radio"
                                          name="quality"
                                          className="radio"
                                          defaultValue={1}
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="radio"
                                          name="quality"
                                          className="radio"
                                          defaultValue={2}
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="radio"
                                          name="quality"
                                          className="radio"
                                          defaultValue={3}
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="radio"
                                          name="quality"
                                          className="radio"
                                          defaultValue={4}
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="radio"
                                          name="quality"
                                          className="radio"
                                          defaultValue={5}
                                        />
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                {/* /.table .table-bordered */}
                              </div>
                              {/* /.table-responsive */}
                            </div>
                            {/* /.review-table */}
                            <div className="review-form">
                              <div className="form-container">
                                <form className="cnt-form">
                                  <div className="row">
                                    <div className="col-sm-6">
                                      <div className="form-group">
                                        <label htmlFor="exampleInputName">
                                          Your Name{" "}
                                          <span className="astk">*</span>
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control txt"
                                          id="exampleInputName"
                                        />
                                      </div>
                                      {/* /.form-group */}
                                      <div className="form-group">
                                        <label htmlFor="exampleInputSummary">
                                          Summary{" "}
                                          <span className="astk">*</span>
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control txt"
                                          id="exampleInputSummary"
                                        />
                                      </div>
                                      {/* /.form-group */}
                                    </div>
                                    <div className="col-md-6">
                                      <div className="form-group">
                                        <label htmlFor="exampleInputReview">
                                          Review <span className="astk">*</span>
                                        </label>
                                        <textarea
                                          className="form-control txt txt-review"
                                          id="exampleInputReview"
                                          rows={4}
                                          defaultValue={""}
                                        />
                                      </div>
                                      {/* /.form-group */}
                                    </div>
                                  </div>
                                  {/* /.row */}
                                  <div className="action text-right">
                                    <button className="btn btn-primary btn-upper">
                                      SUBMIT REVIEW
                                    </button>
                                  </div>
                                  {/* /.action */}
                                </form>
                                {/* /.cnt-form */}
                              </div>
                              {/* /.form-container */}
                            </div>
                            {/* /.review-form */}
                          </div>
                          {/* /.product-add-review */}
                        </div>
                        {/* /.product-tab */}
                      </div>
                      {/* /.tab-pane */}
                      <div id="tags" className="tab-pane">
                        <div className="product-tag">
                          <h4 className="title">Product Tags</h4>
                          <form className="form-inline form-cnt">
                            <div className="form-container">
                              <div className="form-group">
                                <label htmlFor="exampleInputTag">
                                  Add Your Tags:{" "}
                                </label>
                                <input
                                  type="email"
                                  id="exampleInputTag"
                                  className="form-control txt"
                                />
                              </div>
                              <button
                                className="btn btn-upper btn-primary"
                                type="submit"
                              >
                                ADD TAGS
                              </button>
                            </div>
                            {/* /.form-container */}
                          </form>
                          {/* /.form-cnt */}
                          <form className="form-inline form-cnt">
                            <div className="form-group">
                              <label>&nbsp;</label>
                              <span className="text col-md-offset-3">
                                Use spaces to separate tags. Use single quotes
                                (') for phrases.
                              </span>
                            </div>
                          </form>
                          {/* /.form-cnt */}
                        </div>
                        {/* /.product-tab */}
                      </div>
                      {/* /.tab-pane */}
                    </div>
                    {/* /.tab-content */}
                  </div>
                  {/* /.col */}
                </div>
                {/* /.row */}
              </div>
              {/* /.product-tabs */}
              {/* ============================================== UPSELL PRODUCTS ============================================== */}
              <section className="section featured-product">
                <div className="row">
                  <div className="col-lg-3">
                    <h3 className="section-title">Upsell Products</h3>
                    <div className="ad-imgs">
                      <img
                        className="img-responsive"
                        src="/src/assets/images/banners/home-banner1.jpg"
                      />
                      <img
                        className="img-responsive"
                        src="/src/assets/images/banners/home-banner2.jpg"
                      />
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <div className="owl-carousel homepage-owl-carousel upsell-product custom-carousel owl-theme outer-top-xs">
                      <div className="item item-carousel">
                        <div className="products">
                          <div className="product">
                            <div className="product-image">
                              <div className="image">
                                <a href="detail.html">
                                  <img src="/src/assets/images/products/p1.jpg" />
                                </a>
                              </div>
                              {/* /.image */}
                              <div className="tag sale">
                                <span>sale</span>
                              </div>
                            </div>
                            {/* /.product-image */}
                            <div className="product-info text-left">
                              <h3 className="name">
                                <a href="detail.html">Floral Print Buttoned</a>
                              </h3>
                              <div className="rating rateit-small" />
                              <div className="description" />
                              <div className="product-price">
                                <span className="price">$650.99 </span>
                                <span className="price-before-discount">
                                  $ 800
                                </span>
                              </div>
                              {/* /.product-price */}
                            </div>
                            {/* /.product-info */}
                            <div className="cart clearfix animate-effect">
                              <div className="action">
                                <ul className="list-unstyled">
                                  <li className="add-cart-button btn-group">
                                    <button
                                      className="btn btn-primary icon"
                                      data-toggle="dropdown"
                                      type="button"
                                    >
                                      <i className="fa fa-shopping-cart" />
                                    </button>
                                    <button
                                      className="btn btn-primary cart-btn"
                                      type="button"
                                    >
                                      Add to cart
                                    </button>
                                  </li>
                                  <li className="lnk wishlist">
                                    <a
                                      className="add-to-cart"
                                      href="detail.html"
                                      title="Wishlist"
                                    >
                                      <i className="icon fa fa-heart" />
                                    </a>
                                  </li>
                                  <li className="lnk">
                                    <a
                                      className="add-to-cart"
                                      href="detail.html"
                                      title="Compare"
                                    >
                                      <i className="fa fa-signal" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              {/* /.action */}
                            </div>
                            {/* /.cart */}
                          </div>
                          {/* /.product */}
                        </div>
                        {/* /.products */}
                      </div>
                      {/* /.item */}
                      <div className="item item-carousel">
                        <div className="products">
                          <div className="product">
                            <div className="product-image">
                              <div className="image">
                                <a href="detail.html">
                                  <img src="/src/assets/images/products/p2.jpg" />
                                </a>
                              </div>
                              {/* /.image */}
                              <div className="tag sale">
                                <span>sale</span>
                              </div>
                            </div>
                            {/* /.product-image */}
                            <div className="product-info text-left">
                              <h3 className="name">
                                <a href="detail.html">Floral Print Buttoned</a>
                              </h3>
                              <div className="rating rateit-small" />
                              <div className="description" />
                              <div className="product-price">
                                <span className="price">$650.99 </span>
                                <span className="price-before-discount">
                                  $ 800
                                </span>
                              </div>
                              {/* /.product-price */}
                            </div>
                            {/* /.product-info */}
                            <div className="cart clearfix animate-effect">
                              <div className="action">
                                <ul className="list-unstyled">
                                  <li className="add-cart-button btn-group">
                                    <button
                                      className="btn btn-primary icon"
                                      data-toggle="dropdown"
                                      type="button"
                                    >
                                      <i className="fa fa-shopping-cart" />
                                    </button>
                                    <button
                                      className="btn btn-primary cart-btn"
                                      type="button"
                                    >
                                      Add to cart
                                    </button>
                                  </li>
                                  <li className="lnk wishlist">
                                    <a
                                      className="add-to-cart"
                                      href="detail.html"
                                      title="Wishlist"
                                    >
                                      <i className="icon fa fa-heart" />
                                    </a>
                                  </li>
                                  <li className="lnk">
                                    <a
                                      className="add-to-cart"
                                      href="detail.html"
                                      title="Compare"
                                    >
                                      <i className="fa fa-signal" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              {/* /.action */}
                            </div>
                            {/* /.cart */}
                          </div>
                          {/* /.product */}
                        </div>
                        {/* /.products */}
                      </div>
                      {/* /.item */}
                      <div className="item item-carousel">
                        <div className="products">
                          <div className="product">
                            <div className="product-image">
                              <div className="image">
                                <a href="detail.html">
                                  <img src="/src/assets/images/products/p3.jpg" />
                                </a>
                              </div>
                              {/* /.image */}
                              <div className="tag hot">
                                <span>hot</span>
                              </div>
                            </div>
                            {/* /.product-image */}
                            <div className="product-info text-left">
                              <h3 className="name">
                                <a href="detail.html">Floral Print Buttoned</a>
                              </h3>
                              <div className="rating rateit-small" />
                              <div className="description" />
                              <div className="product-price">
                                <span className="price">$650.99 </span>
                                <span className="price-before-discount">
                                  $ 800
                                </span>
                              </div>
                              {/* /.product-price */}
                            </div>
                            {/* /.product-info */}
                            <div className="cart clearfix animate-effect">
                              <div className="action">
                                <ul className="list-unstyled">
                                  <li className="add-cart-button btn-group">
                                    <button
                                      className="btn btn-primary icon"
                                      data-toggle="dropdown"
                                      type="button"
                                    >
                                      <i className="fa fa-shopping-cart" />
                                    </button>
                                    <button
                                      className="btn btn-primary cart-btn"
                                      type="button"
                                    >
                                      Add to cart
                                    </button>
                                  </li>
                                  <li className="lnk wishlist">
                                    <a
                                      className="add-to-cart"
                                      href="detail.html"
                                      title="Wishlist"
                                    >
                                      <i className="icon fa fa-heart" />
                                    </a>
                                  </li>
                                  <li className="lnk">
                                    <a
                                      className="add-to-cart"
                                      href="detail.html"
                                      title="Compare"
                                    >
                                      <i className="fa fa-signal" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              {/* /.action */}
                            </div>
                            {/* /.cart */}
                          </div>
                          {/* /.product */}
                        </div>
                        {/* /.products */}
                      </div>
                      {/* /.item */}
                      <div className="item item-carousel">
                        <div className="products">
                          <div className="product">
                            <div className="product-image">
                              <div className="image">
                                <a href="detail.html">
                                  <img src="/src/assets/images/products/p4.jpg" />
                                </a>
                              </div>
                              {/* /.image */}
                              <div className="tag new">
                                <span>new</span>
                              </div>
                            </div>
                            {/* /.product-image */}
                            <div className="product-info text-left">
                              <h3 className="name">
                                <a href="detail.html">Floral Print Buttoned</a>
                              </h3>
                              <div className="rating rateit-small" />
                              <div className="description" />
                              <div className="product-price">
                                <span className="price">$650.99 </span>
                                <span className="price-before-discount">
                                  $ 800
                                </span>
                              </div>
                              {/* /.product-price */}
                            </div>
                            {/* /.product-info */}
                            <div className="cart clearfix animate-effect">
                              <div className="action">
                                <ul className="list-unstyled">
                                  <li className="add-cart-button btn-group">
                                    <button
                                      className="btn btn-primary icon"
                                      data-toggle="dropdown"
                                      type="button"
                                    >
                                      <i className="fa fa-shopping-cart" />
                                    </button>
                                    <button
                                      className="btn btn-primary cart-btn"
                                      type="button"
                                    >
                                      Add to cart
                                    </button>
                                  </li>
                                  <li className="lnk wishlist">
                                    <a
                                      className="add-to-cart"
                                      href="detail.html"
                                      title="Wishlist"
                                    >
                                      <i className="icon fa fa-heart" />
                                    </a>
                                  </li>
                                  <li className="lnk">
                                    <a
                                      className="add-to-cart"
                                      href="detail.html"
                                      title="Compare"
                                    >
                                      <i className="fa fa-signal" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              {/* /.action */}
                            </div>
                            {/* /.cart */}
                          </div>
                          {/* /.product */}
                        </div>
                        {/* /.products */}
                      </div>
                      {/* /.item */}
                      <div className="item item-carousel">
                        <div className="products">
                          <div className="product">
                            <div className="product-image">
                              <div className="image">
                                <a href="detail.html">
                                  <img
                                    src="/src/assets/images/blank.gif"
                                    data-echo="/src/assets/images/products/p5.jpg"
                                  />
                                </a>
                              </div>
                              {/* /.image */}
                              <div className="tag hot">
                                <span>hot</span>
                              </div>
                            </div>
                            {/* /.product-image */}
                            <div className="product-info text-left">
                              <h3 className="name">
                                <a href="detail.html">Floral Print Buttoned</a>
                              </h3>
                              <div className="rating rateit-small" />
                              <div className="description" />
                              <div className="product-price">
                                <span className="price">$650.99 </span>
                                <span className="price-before-discount">
                                  $ 800
                                </span>
                              </div>
                              {/* /.product-price */}
                            </div>
                            {/* /.product-info */}
                            <div className="cart clearfix animate-effect">
                              <div className="action">
                                <ul className="list-unstyled">
                                  <li className="add-cart-button btn-group">
                                    <button
                                      className="btn btn-primary icon"
                                      data-toggle="dropdown"
                                      type="button"
                                    >
                                      <i className="fa fa-shopping-cart" />
                                    </button>
                                    <button
                                      className="btn btn-primary cart-btn"
                                      type="button"
                                    >
                                      Add to cart
                                    </button>
                                  </li>
                                  <li className="lnk wishlist">
                                    <a
                                      className="add-to-cart"
                                      href="detail.html"
                                      title="Wishlist"
                                    >
                                      <i className="icon fa fa-heart" />
                                    </a>
                                  </li>
                                  <li className="lnk">
                                    <a
                                      className="add-to-cart"
                                      href="detail.html"
                                      title="Compare"
                                    >
                                      <i className="fa fa-signal" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              {/* /.action */}
                            </div>
                            {/* /.cart */}
                          </div>
                          {/* /.product */}
                        </div>
                        {/* /.products */}
                      </div>
                      {/* /.item */}
                      <div className="item item-carousel">
                        <div className="products">
                          <div className="product">
                            <div className="product-image">
                              <div className="image">
                                <a href="detail.html">
                                  <img
                                    src="/src/assets/images/blank.gif"
                                    data-echo="/src/assets/images/products/p6.jpg"
                                  />
                                </a>
                              </div>
                              {/* /.image */}
                              <div className="tag new">
                                <span>new</span>
                              </div>
                            </div>
                            {/* /.product-image */}
                            <div className="product-info text-left">
                              <h3 className="name">
                                <a href="detail.html">Floral Print Buttoned</a>
                              </h3>
                              <div className="rating rateit-small" />
                              <div className="description" />
                              <div className="product-price">
                                <span className="price">$650.99 </span>
                                <span className="price-before-discount">
                                  $ 800
                                </span>
                              </div>
                              {/* /.product-price */}
                            </div>
                            {/* /.product-info */}
                            <div className="cart clearfix animate-effect">
                              <div className="action">
                                <ul className="list-unstyled">
                                  <li className="add-cart-button btn-group">
                                    <button
                                      className="btn btn-primary icon"
                                      data-toggle="dropdown"
                                      type="button"
                                    >
                                      <i className="fa fa-shopping-cart" />
                                    </button>
                                    <button
                                      className="btn btn-primary cart-btn"
                                      type="button"
                                    >
                                      Add to cart
                                    </button>
                                  </li>
                                  <li className="lnk wishlist">
                                    <a
                                      className="add-to-cart"
                                      href="detail.html"
                                      title="Wishlist"
                                    >
                                      <i className="icon fa fa-heart" />
                                    </a>
                                  </li>
                                  <li className="lnk">
                                    <a
                                      className="add-to-cart"
                                      href="detail.html"
                                      title="Compare"
                                    >
                                      <i className="fa fa-signal" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              {/* /.action */}
                            </div>
                            {/* /.cart */}
                          </div>
                          {/* /.product */}
                        </div>
                        {/* /.products */}
                      </div>
                      {/* /.item */}
                    </div>
                    {/* /.home-owl-carousel */}
                  </div>
                </div>
              </section>
              {/* /.section */}
              {/* ============================================== UPSELL PRODUCTS : END ============================================== */}
            </div>
            {/* /.col */}
            <div className="clearfix" />
          </div>
          {/* /.row */}
          {/* ============================================== BRANDS CAROUSEL ============================================== */}
          <div id="brands-carousel" className="logo-slider">
            <div className="logo-slider-inner">
              <div
                id="brand-slider"
                className="owl-carousel brand-slider custom-carousel owl-theme"
              >
                <div className="item m-t-15">
                  <a href="#" className="image">
                    <img
                      data-echo="/src/assets/images/brands/brand1.png"
                      src="/src/assets/images/blank.gif"
                    />
                  </a>
                </div>
                {/*/.item*/}
                <div className="item m-t-10">
                  <a href="#" className="image">
                    <img
                      data-echo="/src/assets/images/brands/brand2.png"
                      src="/src/assets/images/blank.gif"
                    />
                  </a>
                </div>
                {/*/.item*/}
                <div className="item">
                  <a href="#" className="image">
                    <img
                      data-echo="/src/assets/images/brands/brand3.png"
                      src="/src/assets/images/blank.gif"
                    />
                  </a>
                </div>
                {/*/.item*/}
                <div className="item">
                  <a href="#" className="image">
                    <img
                      data-echo="/src/assets/images/brands/brand4.png"
                      src="/src/assets/images/blank.gif"
                    />
                  </a>
                </div>
                {/*/.item*/}
                <div className="item">
                  <a href="#" className="image">
                    <img
                      data-echo="/src/assets/images/brands/brand5.png"
                      src="/src/assets/images/blank.gif"
                    />
                  </a>
                </div>
                {/*/.item*/}
                <div className="item">
                  <a href="#" className="image">
                    <img
                      data-echo="/src/assets/images/brands/brand6.png"
                      src="/src/assets/images/blank.gif"
                    />
                  </a>
                </div>
                {/*/.item*/}
                <div className="item">
                  <a href="#" className="image">
                    <img
                      data-echo="/src/assets/images/brands/brand2.png"
                      src="/src/assets/images/blank.gif"
                    />
                  </a>
                </div>
                {/*/.item*/}
                <div className="item">
                  <a href="#" className="image">
                    <img
                      data-echo="/src/assets/images/brands/brand4.png"
                      src="/src/assets/images/blank.gif"
                    />
                  </a>
                </div>
                {/*/.item*/}
                <div className="item">
                  <a href="#" className="image">
                    <img
                      data-echo="/src/assets/images/brands/brand1.png"
                      src="/src/assets/images/blank.gif"
                    />
                  </a>
                </div>
                {/*/.item*/}
                <div className="item">
                  <a href="#" className="image">
                    <img
                      data-echo="/src/assets/images/brands/brand5.png"
                      src="/src/assets/images/blank.gif"
                    />
                  </a>
                </div>
                {/*/.item*/}
              </div>
              {/* /.owl-carousel #logo-slider */}
            </div>
            {/* /.logo-slider-inner */}
          </div>
          {/* /.logo-slider */}
          {/* ============================================== BRANDS CAROUSEL : END ============================================== */}{" "}
        </div>
        {/* /.container */}
      </div>
    </>
  );
};

export default ProductDetail;
