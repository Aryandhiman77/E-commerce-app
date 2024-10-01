import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import dataContext from "../../Context API/dataContext";
import {useDispatch} from 'react-redux'




const Product = (props) => {
  const cartIcon = useRef(null);
  const likeIcon = useRef(null);
  const context = useContext(dataContext);
  const {cart, addToCart ,addToWishlist,wishlist,getCart,getWishlist,viewVarient} = context;

  const StyleIconsCartAndWishlist = ()=>{
    if(cartIcon.current.style.color==="green"){
        cartIcon.current.style.color=null;
    }
    if(likeIcon.current.style.color==="red"){
        likeIcon.current.style.color=null;
    }
    cart.map((item)=>{
      if(item.product_id){
        if(item.product_id._id===cartIcon.current.value){
            cartIcon.current.style.color="green"
      }
        
    }  
    })
    wishlist.map((wish)=>{
      if(wish.product_id){
        if(wish.product_id._id===likeIcon.current.value){
             likeIcon.current.style.color="red"
        }  
      }
    })
}

  const handleAddtoCart = (e) => {
    let productid = e.target.value;

    addToCart({ productid, quantity: 1 });
    getCart();
    StyleIconsCartAndWishlist();
    
  };
  

  const handleaddToWishlist = (e)=>{
    let productid = e.target.value;
    addToWishlist({productid})
    getWishlist();
    
  }
  
  useEffect(()=>{
    StyleIconsCartAndWishlist();
  })

 
  return (
    <>
    
      <div
        className="products"
        style={{ display: "inline-flex", flexWrap: "wrap" }}
      >

        <div className="product" style={{ maxWidth: "20rem", margin: "10px" ,position:'relative'}}>
        <button className="my_btn_style fa fa-shopping-cart" title="Add to Cart"  ref={cartIcon} value={props.product._id} onClick={handleAddtoCart}></button>
        
        <button className="my_btn_style fa fa-heart" title="Add to Wishlist" ref={likeIcon} value={props.product._id} onClick={handleaddToWishlist} style={{left:"77%"}}></button>
        {/* <button onClick={showcart}>show cart</button> */}
          <div className="product-image">
            <div className="image">
              <Link to={`/product/${props.product.product_url_slug}`}>
                <img height={240} src={`${props.host}${props.product.image}`} />
              </Link>
            </div>
            <Link to={`/product/${props.product.product_url_slug}`}>
              {/* <div className="tag new"><span>new</span></div> */}
            </Link>
          </div>
          <Link href={`/product/${props.product.product_url_slug}`}></Link>
          <div className="product-info text-left">
            <Link to="/productDetail"></Link>
            <h3 className="name">
                {props.product.product_name}
              {/* <Link href="detail.html" /> */}
              {/* <Link href="detail.html">{props.product.product_name}</a> */}
            </h3>
            <div className="rating rateit-small rateit">
              <button
                id="rateit-reset-2"
                data-role="none"
                className="rateit-reset"
                aria-label="reset rating"
                aria-controls="rateit-range-2"
                style={{ display: "none" }}
              />
              <div
                id="rateit-range-2"
                className="rateit-range"
                tabIndex={0}
                role="slider"
                aria-label="rating"
                aria-owns="rateit-reset-2"
                aria-valuemin={0}
                aria-valuemax={5}
                aria-valuenow={4}
                aria-readonly="true"
                style={{ width: 70, height: 14 }}
              >
                <div
                  className="rateit-selected"
                  style={{ height: 14, width: 56 }}
                />
                <div className="rateit-hover" style={{ height: 14 }} />
              </div>
            </div>
            <div className="description" />
            <div className="product-price">
              <span className="price">₹{props.product.price} </span>
              <span className="price-before-discount">$ 800</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
