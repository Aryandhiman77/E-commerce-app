import React,{useContext, useEffect, useRef} from 'react'
import dataContext from '../../Context API/dataContext'
import Product from './Product';
import ReactCarousel from './Elements/Carousel'
import Spinner from './Elements/Spinner';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartFetch } from '../Cart/cartSlice';




const Home = (props) => {
  const dispatch = useDispatch();
  const context = useContext(dataContext);
  const {fetchProducts,products,fetchCategories,categories,capitalizeFirstLetter,getCart,getWishlist,} = context;
  const images = ['https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/6c3baa6acd6ab9bf.jpg','https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/6c3baa6acd6ab9bf.jpg','https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/6c3baa6acd6ab9bf.jpg']
  

  
  useEffect(()=>{
    fetchProducts();
    fetchCategories();
    dispatch(cartFetch());
    getWishlist();
  },[])
  return (
products.length===0?<Spinner/>:
    <div style={{textTransform:'capitalize'}}>
 
      <div className="body-content outer-top-vs" id="top-banner-and-menu">
  <div className="container">
    <div className="row"> 
    
      <div className="row text-center " style={{background:'white',marginBottom:"2rem",width:'inherit',display:'flex',justifyContent:"center",margin:'2rem',flexWrap:'wrap'}}>
    {       
                categories.map((category,i)=>{
                  return <Link to={`/${category.category_url_slug}`} key={i} className='col-md-2 d-flex mx-5' style={{width:'inherit',marginLeft:'1rem',marginTop:'1rem',justifyContent:"center",cursor:'pointer',color:'black',fontSize:'1.5rem'}}>
                    <img height={90} width={100}
                      src={`${props.host}${category.category_image}`}
                      className="img-fluid rounded-top"
                      alt=""
                    />
                    <p><b>{capitalizeFirstLetter(category.category_name)}</b></p>
                    
                  </Link>
                })
              }
              </div>
              <ReactCarousel showThumbs={false} autoPlay={true} infiniteLoop={true} transitionTime={700} swipeable={true} images={images} style={{margin:'2rem'}} magnifier={false}/>
      {/* ============================================== SIDEBAR ============================================== */}
      <div className="col-xs-12 col-sm-12 col-md-3 sidebar"> 
        {/* ================================== TOP NAVIGATION ================================== */}
   

        {/* /.side-menu */} 
        {/* ================================== TOP NAVIGATION : END ================================== */} 
        {/* ============================================== HOT DEALS ============================================== */}
        <div className="sidebar-widget hot-deals outer-bottom-xs">
          <h3 className="section-title">Hot deals</h3>
          <div className="owl-carousel sidebar-carousel custom-carousel owl-theme outer-top-ss">
            <div className="item">
              <div className="products">


                <div className="hot-deal-wrapper">
                  <div className="image"> 
                    <a href="#">
                      <img src="/src/assets/images/hot-deals/p13.jpg" alt="loading" /> 
                      <img src="/src/assets/images/hot-deals/p13_hover.jpg" alt="loading" className="hover-image" />
                    </a>
                  </div>
                  <div className="sale-offer-tag"><span>49%<br />
                      off</span></div>
                  <div className="timing-wrapper">
                    <div className="box-wrapper">
                      <div className="date box"> <span className="key">120</span> <span className="value">DAYS</span> </div>
                    </div>
                    <div className="box-wrapper">
                      <div className="hour box"> <span className="key">20</span> <span className="value">HRS</span> </div>
                    </div>
                    <div className="box-wrapper">
                      <div className="minutes box"> <span className="key">36</span> <span className="value">MINS</span> </div>
                    </div>
                    <div className="box-wrapper">
                      <div className="seconds box"> <span className="key">60</span> <span className="value">SEC</span> </div>
                    </div>
                  </div>
                </div>
                {/* /.hot-deal-wrapper */}
                <div className="product-info text-left m-t-20">
                  <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                  <div className="rating rateit-small" />
                  <div className="product-price"> <span className="price"> $600.00 </span> <span className="price-before-discount">$800.00</span> </div>
                  {/* /.product-price */} 
                </div>
                {/* /.product-info */}
                <div className="cart clearfix animate-effect">
                  <div className="action">
                    <div className="add-cart-button btn-group">
                      <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart" /> </button>
                      <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                      
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
                      <img src="/src/assets/images/hot-deals/p14.jpg" alt="loading" /> 
                      <img src="/src/assets/images/hot-deals/p14_hover.jpg" alt="loading" className="hover-image" />
                    </a>
                  </div>
                  <div className="sale-offer-tag"><span>35%<br />
                      off</span></div>
                  <div className="timing-wrapper">
                    <div className="box-wrapper">
                      <div className="date box"> <span className="key">120</span> <span className="value">Days</span> </div>
                    </div>
                    <div className="box-wrapper">
                      <div className="hour box"> <span className="key">20</span> <span className="value">HRS</span> </div>
                    </div>
                    <div className="box-wrapper">
                      <div className="minutes box"> <span className="key">36</span> <span className="value">MINS</span> </div>
                    </div>
                    <div className="box-wrapper">
                      <div className="seconds box"> <span className="key">60</span> <span className="value">SEC</span> </div>
                    </div>
                  </div>
                </div>
                {/* /.hot-deal-wrapper */}
                <div className="product-info text-left m-t-20">
                  <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                  <div className="rating rateit-small" />
                  <div className="product-price"> <span className="price"> $600.00 </span> <span className="price-before-discount">$800.00</span> </div>
                  {/* /.product-price */} 
                </div>
                {/* /.product-info */}
                <div className="cart clearfix animate-effect">
                  <div className="action">
                    <div className="add-cart-button btn-group">
                      <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart" /> </button>
                      <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
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
                      <img src="/src/assets/images/hot-deals/p15.jpg" alt="loading" /> 
                      <img src="/src/assets/images/hot-deals/p15_hover.jpg" alt="loading" className="hover-image" />
                    </a>
                  </div>
                  <div className="sale-offer-tag"><span>35%<br />
                      off</span></div>
                  <div className="timing-wrapper">
                    <div className="box-wrapper">
                      <div className="date box"> <span className="key">120</span> <span className="value">Days</span> </div>
                    </div>
                    <div className="box-wrapper">
                      <div className="hour box"> <span className="key">20</span> <span className="value">HRS</span> </div>
                    </div>
                    <div className="box-wrapper">
                      <div className="minutes box"> <span className="key">36</span> <span className="value">MINS</span> </div>
                    </div>
                    <div className="box-wrapper">
                      <div className="seconds box"> <span className="key">60</span> <span className="value">SEC</span> </div>
                    </div>
                  </div>
                </div>
                {/* /.hot-deal-wrapper */}
                <div className="product-info text-left m-t-20">
                  <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                  <div className="rating rateit-small" />
                  <div className="product-price"> <span className="price"> $600.00 </span> <span className="price-before-discount">$800.00</span> </div>
                  {/* /.product-price */} 
                </div>
                {/* /.product-info */}
                <div className="cart clearfix animate-effect">
                  <div className="action">
                    <div className="add-cart-button btn-group">
                      <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart" /> </button>
                      <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
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
        {/* ============================================== SPECIAL OFFER ============================================== */}
        <div className="sidebar-widget outer-bottom-small">
          <h3 className="section-title">Special Offer</h3>
          <div className="sidebar-widget-body outer-top-xs">
            <div className="owl-carousel sidebar-carousel special-offer custom-carousel owl-theme outer-top-xs">
              <div className="item">
                <div className="products special-product">
                  <div className="product">
                    <div className="product-micro">
                      <div className="row product-micro-row">
                        <div className="col col-xs-5">
                          <div className="product-image">
                            <div className="image"> <a href="#"> <img src="/src/assets/images/products/p5.jpg" alt="loading" /> </a> </div>
                            {/* /.image */} 
                          </div>
                          {/* /.product-image */} 
                        </div>
                        {/* /.col */}
                        <div className="col col-xs-7">
                          <div className="product-info">
                            <h3 className="name"><a href="#">Floral Print Shirt</a></h3>
                            <div className="rating rateit-small" />
                            <div className="product-price"> <span className="price"> $450.99 </span> </div>
                            {/* /.product-price */} 
                          </div>
                        </div>
                        {/* /.col */} 
                      </div>
                      {/* /.product-micro-row */} 
                    </div>
                    {/* /.product-micro */} 
                  </div>
                  <div className="product">
                    <div className="product-micro">
                      <div className="row product-micro-row">
                        <div className="col col-xs-5">
                          <div className="product-image">
                            <div className="image"> <a href="#"> <img src="/src/assets/images/products/p9.jpg" alt="loading" /> </a> </div>
                            {/* /.image */} 
                          </div>
                          {/* /.product-image */} 
                        </div>
                        {/* /.col */}
                        <div className="col col-xs-7">
                          <div className="product-info">
                            <h3 className="name"><a href="#">Floral Print Shirt</a></h3>
                            <div className="rating rateit-small" />
                            <div className="product-price"> <span className="price"> $450.99 </span> </div>
                            {/* /.product-price */} 
                          </div>
                        </div>
                        {/* /.col */} 
                      </div>
                      {/* /.product-micro-row */} 
                    </div>
                    {/* /.product-micro */} 
                  </div>
                  <div className="product">
                    <div className="product-micro">
                      <div className="row product-micro-row">
                        <div className="col col-xs-5">
                          <div className="product-image">
                            <div className="image"> <a href="#"> <img src="/src/assets/images/products/p11.jpg" alt="loading" /> </a> </div>
                            {/* /.image */} 
                          </div>
                          {/* /.product-image */} 
                        </div>
                        {/* /.col */}
                        <div className="col col-xs-7">
                          <div className="product-info">
                            <h3 className="name"><a href="#">Floral Print Shirt</a></h3>
                            <div className="rating rateit-small" />
                            <div className="product-price"> <span className="price"> $450.99 </span> </div>
                            {/* /.product-price */} 
                          </div>
                        </div>
                        {/* /.col */} 
                      </div>
                      {/* /.product-micro-row */} 
                    </div>
                    {/* /.product-micro */} 
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="products special-product">
                  <div className="product">
                    <div className="product-micro">
                      <div className="row product-micro-row">
                        <div className="col col-xs-5">
                          <div className="product-image">
                            <div className="image"> <a href="#"> <img src="/src/assets/images/products/p15.jpg" alt="loading" /> </a> </div>
                            {/* /.image */} 
                          </div>
                          {/* /.product-image */} 
                        </div>
                        {/* /.col */}
                        <div className="col col-xs-7">
                          <div className="product-info">
                            <h3 className="name"><a href="#">Floral Print Shirt</a></h3>
                            <div className="rating rateit-small" />
                            <div className="product-price"> <span className="price"> $450.99 </span> </div>
                            {/* /.product-price */} 
                          </div>
                        </div>
                        {/* /.col */} 
                      </div>
                      {/* /.product-micro-row */} 
                    </div>
                    {/* /.product-micro */} 
                  </div>
                  <div className="product">
                    <div className="product-micro">
                      <div className="row product-micro-row">
                        <div className="col col-xs-5">
                          <div className="product-image">
                            <div className="image"> <a href="#"> <img src="/src/assets/images/products/p13.jpg" alt="loading" /> </a> </div>
                            {/* /.image */} 
                          </div>
                          {/* /.product-image */} 
                        </div>
                        {/* /.col */}
                        <div className="col col-xs-7">
                          <div className="product-info">
                            <h3 className="name"><a href="#">Floral Print Shirt</a></h3>
                            <div className="rating rateit-small" />
                            <div className="product-price"> <span className="price"> $450.99 </span> </div>
                            {/* /.product-price */} 
                          </div>
                        </div>
                        {/* /.col */} 
                      </div>
                      {/* /.product-micro-row */} 
                    </div>
                    {/* /.product-micro */} 
                  </div>
                  <div className="product">
                    <div className="product-micro">
                      <div className="row product-micro-row">
                        <div className="col col-xs-5">
                          <div className="product-image">
                            <div className="image"> <a href="#"> <img src="/src/assets/images/products/p12.jpg" alt="loading" /> </a> </div>
                            {/* /.image */} 
                          </div>
                          {/* /.product-image */} 
                        </div>
                        {/* /.col */}
                        <div className="col col-xs-7">
                          <div className="product-info">
                            <h3 className="name"><a href="#">Floral Print Shirt</a></h3>
                            <div className="rating rateit-small" />
                            <div className="product-price"> <span className="price"> $450.99 </span> </div>
                            {/* /.product-price */} 
                          </div>
                        </div>
                        {/* /.col */} 
                      </div>
                      {/* /.product-micro-row */} 
                    </div>
                    {/* /.product-micro */} 
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="products special-product">
                  <div className="product">
                    <div className="product-micro">
                      <div className="row product-micro-row">
                        <div className="col col-xs-5">
                          <div className="product-image">
                            <div className="image"> <a href="#"> <img src="/src/assets/images/products/p1.jpg" alt="loading" /> </a> </div>
                            {/* /.image */} 
                          </div>
                          {/* /.product-image */} 
                        </div>
                        {/* /.col */}
                        <div className="col col-xs-7">
                          <div className="product-info">
                            <h3 className="name"><a href="#">Floral Print Shirt</a></h3>
                            <div className="rating rateit-small" />
                            <div className="product-price"> <span className="price"> $450.99 </span> </div>
                            {/* /.product-price */} 
                          </div>
                        </div>
                        {/* /.col */} 
                      </div>
                      {/* /.product-micro-row */} 
                    </div>
                    {/* /.product-micro */} 
                  </div>
                  <div className="product">
                    <div className="product-micro">
                      <div className="row product-micro-row">
                        <div className="col col-xs-5">
                          <div className="product-image">
                            <div className="image"> <a href="#"> <img src="/src/assets/images/products/p3.jpg" alt="loading" /> </a> </div>
                            {/* /.image */} 
                          </div>
                          {/* /.product-image */} 
                        </div>
                        {/* /.col */}
                        <div className="col col-xs-7">
                          <div className="product-info">
                            <h3 className="name"><a href="#">Floral Print Shirt</a></h3>
                            <div className="rating rateit-small" />
                            <div className="product-price"> <span className="price"> $450.99 </span> </div>
                            {/* /.product-price */} 
                          </div>
                        </div>
                        {/* /.col */} 
                      </div>
                      {/* /.product-micro-row */} 
                    </div>
                    {/* /.product-micro */} 
                  </div>
                  <div className="product">
                    <div className="product-micro">
                      <div className="row product-micro-row">
                        <div className="col col-xs-5">
                          <div className="product-image">
                            <div className="image"> <a href="#"> <img src="/src/assets/images/products/p7.jpg" alt="loading" /> </a> </div>
                            {/* /.image */} 
                          </div>
                          {/* /.product-image */} 
                        </div>
                        {/* /.col */}
                        <div className="col col-xs-7">
                          <div className="product-info">
                            <h3 className="name"><a href="#">Floral Print Shirt</a></h3>
                            <div className="rating rateit-small" />
                            <div className="product-price"> <span className="price"> $450.99 </span> </div>
                            {/* /.product-price */} 
                          </div>
                        </div>
                        {/* /.col */} 
                      </div>
                      {/* /.product-micro-row */} 
                    </div>
                    {/* /.product-micro */} 
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /.sidebar-widget-body */} 
        </div>
        {/* /.sidebar-widget */} 
        {/* ============================================== SPECIAL OFFER : END ============================================== */} 
        {/* ============================================== PRODUCT TAGS ============================================== */}
        <div className="sidebar-widget product-tag">
          <h3 className="section-title">Product tags</h3>
          <div className="sidebar-widget-body outer-top-xs">
            <div className="tag-list"> <a className="item" title="Phone" href="category.html">Phone</a> <a className="item active" title="Vest" href="category.html">Vest</a> <a className="item" title="Smartphone" href="category.html">Smartphone</a> <a className="item" title="Furniture" href="category.html">Furniture</a> <a className="item" title="T-shirt" href="category.html">T-shirt</a> <a className="item" title="Sweatpants" href="category.html">Sweatpants</a> <a className="item" title="Sneaker" href="category.html">Sneaker</a> <a className="item" title="Toys" href="category.html">Toys</a> <a className="item" title="Rose" href="category.html">Rose</a> </div>
            {/* /.tag-list */} 
          </div>
          {/* /.sidebar-widget-body */} 
        </div>
        {/* /.sidebar-widget */} 
        {/* ============================================== PRODUCT TAGS : END ============================================== */} 
        {/* ============================================== SPECIAL DEALS ============================================== */}
        <div className="sidebar-widget outer-bottom-small">
          <h3 className="section-title">Special Deals</h3>
          <div className="sidebar-widget-body outer-top-xs">
            <div className="owl-carousel sidebar-carousel special-offer custom-carousel owl-theme outer-top-xs">
              <div className="item">
                <div className="products special-product">
                  <div className="product">
                    <div className="product-micro">
                      <div className="row product-micro-row">
                        <div className="col col-xs-5">
                          <div className="product-image">
                            <div className="image"> <a href="#"> <img src="/src/assets/images/products/p8.jpg" alt="loading" /> </a> </div>
                            {/* /.image */} 
                          </div>
                          {/* /.product-image */} 
                        </div>
                        {/* /.col */}
                        <div className="col col-xs-7">
                          <div className="product-info">
                            <h3 className="name"><a href="#">Floral Print Shirt</a></h3>
                            <div className="rating rateit-small" />
                            <div className="product-price"> <span className="price"> $450.99 </span> </div>
                            {/* /.product-price */} 
                          </div>
                        </div>
                        {/* /.col */} 
                      </div>
                      {/* /.product-micro-row */} 
                    </div>
                    {/* /.product-micro */} 
                  </div>
                  <div className="product">
                    <div className="product-micro">
                      <div className="row product-micro-row">
                        <div className="col col-xs-5">
                          <div className="product-image">
                            <div className="image"> <a href="#"> <img src="/src/assets/images/products/p5.jpg" alt="loading" /> </a> </div>
                            {/* /.image */} 
                          </div>
                          {/* /.product-image */} 
                        </div>
                        {/* /.col */}
                        <div className="col col-xs-7">
                          <div className="product-info">
                            <h3 className="name"><a href="#">Floral Print Shirt</a></h3>
                            <div className="rating rateit-small" />
                            <div className="product-price"> <span className="price"> $450.99 </span> </div>
                            {/* /.product-price */} 
                          </div>
                        </div>
                        {/* /.col */} 
                      </div>
                      {/* /.product-micro-row */} 
                    </div>
                    {/* /.product-micro */} 
                  </div>
                  <div className="product">
                    <div className="product-micro">
                      <div className="row product-micro-row">
                        <div className="col col-xs-5">
                          <div className="product-image">
                            <div className="image"> <a href="#"> <img src="/src/assets/images/products/p6.jpg" alt="image" /> </a> </div>
                            {/* /.image */} 
                          </div>
                          {/* /.product-image */} 
                        </div>
                        {/* /.col */}
                        <div className="col col-xs-7">
                          <div className="product-info">
                            <h3 className="name"><a href="#">Floral Print Shirt</a></h3>
                            <div className="rating rateit-small" />
                            <div className="product-price"> <span className="price"> $450.99 </span> </div>
                            {/* /.product-price */} 
                          </div>
                        </div>
                        {/* /.col */} 
                      </div>
                      {/* /.product-micro-row */} 
                    </div>
                    {/* /.product-micro */} 
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="products special-product">
                  <div className="product">
                    <div className="product-micro">
                      <div className="row product-micro-row">
                        <div className="col col-xs-5">
                          <div className="product-image">
                            <div className="image"> <a href="#"> <img src="/src/assets/images/products/p8.jpg" alt="loading" /> </a> </div>
                            {/* /.image */} 
                          </div>
                          {/* /.product-image */} 
                        </div>
                        {/* /.col */}
                        <div className="col col-xs-7">
                          <div className="product-info">
                            <h3 className="name"><a href="#">Floral Print Shirt</a></h3>
                            <div className="rating rateit-small" />
                            <div className="product-price"> <span className="price"> $450.99 </span> </div>
                            {/* /.product-price */} 
                          </div>
                        </div>
                        {/* /.col */} 
                      </div>
                      {/* /.product-micro-row */} 
                    </div>
                    {/* /.product-micro */} 
                  </div>
                  <div className="product">
                    <div className="product-micro">
                      <div className="row product-micro-row">
                        <div className="col col-xs-5">
                          <div className="product-image">
                            <div className="image"> <a href="#"> <img src="/src/assets/images/products/p7.jpg" alt="loading" /> </a> </div>
                            {/* /.image */} 
                          </div>
                          {/* /.product-image */} 
                        </div>
                        {/* /.col */}
                        <div className="col col-xs-7">
                          <div className="product-info">
                            <h3 className="name"><a href="#">Floral Print Shirt</a></h3>
                            <div className="rating rateit-small" />
                            <div className="product-price"> <span className="price"> $450.99 </span> </div>
                            {/* /.product-price */} 
                          </div>
                        </div>
                        {/* /.col */} 
                      </div>
                      {/* /.product-micro-row */} 
                    </div>
                    {/* /.product-micro */} 
                  </div>
                  <div className="product">
                    <div className="product-micro">
                      <div className="row product-micro-row">
                        <div className="col col-xs-5">
                          <div className="product-image">
                            <div className="image"> <a href="#"> <img src="/src/assets/images/products/p6.jpg" alt="loading" /> </a> </div>
                            {/* /.image */} 
                          </div>
                          {/* /.product-image */} 
                        </div>
                        {/* /.col */}
                        <div className="col col-xs-7">
                          <div className="product-info">
                            <h3 className="name"><a href="#">Floral Print Shirt</a></h3>
                            <div className="rating rateit-small" />
                            <div className="product-price"> <span className="price"> $450.99 </span> </div>
                            {/* /.product-price */} 
                          </div>
                        </div>
                        {/* /.col */} 
                      </div>
                      {/* /.product-micro-row */} 
                    </div>
                    {/* /.product-micro */} 
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="products special-product">
                  <div className="product">
                    <div className="product-micro">
                      <div className="row product-micro-row">
                        <div className="col col-xs-5">
                          <div className="product-image">
                            <div className="image"> <a href="#"> <img src="/src/assets/images/products/p5.jpg" alt="images" />
                                <div className="zoom-overlay" />
                              </a> </div>
                            {/* /.image */} 
                          </div>
                          {/* /.product-image */} 
                        </div>
                        {/* /.col */}
                        <div className="col col-xs-7">
                          <div className="product-info">
                            <h3 className="name"><a href="#">Floral Print Shirt</a></h3>
                            <div className="rating rateit-small" />
                            <div className="product-price"> <span className="price"> $450.99 </span> </div>
                            {/* /.product-price */} 
                          </div>
                        </div>
                        {/* /.col */} 
                      </div>
                      {/* /.product-micro-row */} 
                    </div>
                    {/* /.product-micro */} 
                  </div>
                  <div className="product">
                    <div className="product-micro">
                      <div className="row product-micro-row">
                        <div className="col col-xs-5">
                          <div className="product-image">
                            <div className="image"> <a href="#"> <img src="/src/assets/images/products/p4.jpg" alt="loading" />
                                <div className="zoom-overlay" />
                              </a> </div>
                            {/* /.image */} 
                          </div>
                          {/* /.product-image */} 
                        </div>
                        {/* /.col */}
                        <div className="col col-xs-7">
                          <div className="product-info">
                            <h3 className="name"><a href="#">Floral Print Shirt</a></h3>
                            <div className="rating rateit-small" />
                            <div className="product-price"> <span className="price"> $450.99 </span> </div>
                            {/* /.product-price */} 
                          </div>
                        </div>
                        {/* /.col */} 
                      </div>
                      {/* /.product-micro-row */} 
                    </div>
                    {/* /.product-micro */} 
                  </div>
                  <div className="product">
                    <div className="product-micro">
                      <div className="row product-micro-row">
                        <div className="col col-xs-5">
                          <div className="product-image">
                            <div className="image"> <a href="#"> <img src="/src/assets/images/products/p13.jpg" alt="image" /> </a> </div>
                            {/* /.image */} 
                          </div>
                          {/* /.product-image */} 
                        </div>
                        {/* /.col */}
                        <div className="col col-xs-7">
                          <div className="product-info">
                            <h3 className="name"><a href="#">Floral Print Shirt</a></h3>
                            <div className="rating rateit-small" />
                            <div className="product-price"> <span className="price"> $450.99 </span> </div>
                            {/* /.product-price */} 
                          </div>
                        </div>
                        {/* /.col */} 
                      </div>
                      {/* /.product-micro-row */} 
                    </div>
                    {/* /.product-micro */} 
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /.sidebar-widget-body */} 
        </div>
        {/* /.sidebar-widget */} 
        {/* ============================================== SPECIAL DEALS : END ============================================== */} 
        {/* ============================================== NEWSLETTER ============================================== */}
        <div className="sidebar-widget newsletter outer-bottom-small">
          <h3 className="section-title">Newsletters</h3>
          <div className="sidebar-widget-body outer-top-xs">
            <p>Sign Up for Our Newsletter!</p>
            <form>
              <div className="form-group">
                <label className="sr-only" htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Subscribe to our newsletter" />
              </div>
              <button className="btn btn-primary">Subscribe</button>
            </form>
          </div>
          {/* /.sidebar-widget-body */} 
        </div>
        {/* /.sidebar-widget */} 
        {/* ============================================== NEWSLETTER: END ============================================== */} 
        {/* ============================================== Testimonials============================================== */}
        <div className="sidebar-widget outer-top-vs ">
          <div id="advertisement" className="advertisement">
            <div className="item">
              <div className="avatar"><img src="/src/assets/images/testimonials/member1.png" alt="Image" /></div>
              <div className="testimonials"><em>"</em> Vtae sodales aliq uam morbi non sem lacus port mollis. Nunc condime tum metus eud molest sed consectetuer. Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat.<em>"</em></div>
              <div className="clients_author">John Doe <span>Abc Company</span> </div>
              {/* /.container-fluid */} 
            </div>
            {/* /.item */}
            <div className="item">
              <div className="avatar"><img src="/src/assets/images/testimonials/member3.png" alt="Image" /></div>
              <div className="testimonials"><em>"</em>Vtae sodales aliq uam morbi non sem lacus port mollis. Nunc condime tum metus eud molest sed consectetuer. Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat.<em>"</em></div>
              <div className="clients_author">Stephen Doe <span>Xperia Designs</span> </div>
            </div>
            {/* /.item */}
            <div className="item">
              <div className="avatar"><img src="/src/assets/images/testimonials/member2.png" alt="Image" /></div>
              <div className="testimonials"><em>"</em>Vtae sodales aliq uam morbi non sem lacus port mollis. Nunc condime tum metus eud molest sed consectetuer. Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat.<em>"</em></div>
              <div className="clients_author">Saraha Smith <span>Datsun &amp; Co</span> </div>
              {/* /.container-fluid */} 
            </div>
            {/* /.item */} 
          </div>
          {/* /.owl-carousel */} 
        </div>
        {/* ============================================== Testimonials: END ============================================== */}
      </div>
      {/* /.sidemenu-holder */} 
      {/* ============================================== SIDEBAR : END ============================================== */} 
      {/* ============================================== CONTENT ============================================== */}
      <div className="col-xs-12 col-sm-12 col-md-9 homebanner-holder"> 
        {/* ========================================== SECTION – HERO ========================================= */}
        <div id="hero">
          <div id="owl-main" className="owl-carousel owl-inner-nav owl-ui-sm">
            <div className="item" style={{backgroundImage: 'url(assets/images/sliders/01.jpg)'}}>
              <div className="container-fluid">
                <div className="caption bg-color vertical-center text-left">
                  <div className="slider-header fadeInDown-1">Top Brands</div>
                  <div className="big-text fadeInDown-1"> New Collections </div>
                  <div className="excerpt fadeInDown-2 hidden-xs"> <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span> </div>
                  <div className="button-holder fadeInDown-3"> <a href="index6c11.html?page=single-product" className="btn-lg btn btn-uppercase btn-primary shop-now-button">Shop Now</a> </div>
                </div>
                {/* /.caption */} 
              </div>
              {/* /.container-fluid */} 
            </div>
            {/* /.item */}
            <div className="item" style={{backgroundImage: 'url(assets/images/sliders/02.jpg)'}}>
              <div className="container-fluid">
                <div className="caption bg-color vertical-center text-left">
                  <div className="slider-header fadeInDown-1">Spring 2018</div>
                  <div className="big-text fadeInDown-1"> Women Fashion </div>
                  <div className="excerpt fadeInDown-2 hidden-xs"> <span>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</span> </div>
                  <div className="button-holder fadeInDown-3"> <a href="index6c11.html?page=single-product" className="btn-lg btn btn-uppercase btn-primary shop-now-button">Shop Now</a> </div>
                </div>
                {/* /.caption */} 
              </div>
              {/* /.container-fluid */} 
            </div>
            {/* /.item */} 
          </div>
          {/* /.owl-carousel */} 
        </div>
        {/* ========================================= SECTION – HERO : END ========================================= */} 
        {/* ============================================== SCROLL TABS ============================================== */}
        <div id="product-tabs-slider" className="scroll-tabs outer-top-vs">
          <div className="more-info-tab clearfix ">
            <h3 className="new-product-title pull-left">Products</h3>
            <ul className="nav nav-tabs nav-tab-line pull-right" id="new-products-1">
              <li className="active"><a data-transition-type="backSlide" href="#all" data-toggle="tab">All</a></li>
              <li><a data-transition-type="backSlide" href="#smartphone" data-toggle="tab">Clothing</a></li>
              <li><a data-transition-type="backSlide" href="#laptop" data-toggle="tab">Electronics</a></li>
              <li><a data-transition-type="backSlide" href="#apple" data-toggle="tab">Shoes</a></li>
            </ul>
            {/* /.nav-tabs */} 
          </div>
 {/* rendering products.. */}
 
         {products.map((product,i) => {
          
           return <Product key={i} host={props.host} product={product} />
         })}
        
          
        </div>
       
        
        {/* /.scroll-tabs */} 
        {/* ============================================== SCROLL TABS : END ============================================== */} 
        {/* ============================================== WIDE PRODUCTS ============================================== */}
        <div className="wide-banners outer-bottom-xs">
          <div className="row">
            <div className="col-md-4 col-sm-4">
              <div className="wide-banner cnt-strip">
                <div className="image"> <img className="img-responsive" src="/src/assets/images/banners/home-banner1.jpg" alt="loading" /> </div>
              </div>
              {/* /.wide-banner */} 
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="wide-banner cnt-strip">
                <div className="image"> <img className="img-responsive" src="/src/assets/images/banners/home-banner3.jpg" alt="loading" /> </div>
              </div>
              {/* /.wide-banner */} 
            </div>
            {/* /.col */}
            <div className="col-md-4 col-sm-4">
              <div className="wide-banner cnt-strip">
                <div className="image"> <img className="img-responsive" src="/src/assets/images/banners/home-banner2.jpg" alt="loading" /> </div>
              </div>
              {/* /.wide-banner */} 
            </div>
            {/* /.col */} 
          </div>
          {/* /.row */} 
        </div>
        {/* /.wide-banners */} 
        {/* ============================================== WIDE PRODUCTS : END ============================================== */} 
        {/* ============================================== FEATURED PRODUCTS ============================================== */}
        <section className="section featured-product">
          <div className="row">
            <div className="col-lg-3">
              <h3 className="section-title">Electronics &amp; Digital</h3>
              <ul className="sub-cat">
                <li><a href="#">Computers</a></li>
                <li><a href="#">Air Condtion</a></li>
                <li><a href="#">Mobile Phones</a></li>
                <li><a href="#">Camera</a></li>
                <li><a href="#">Television</a></li>
                <li><a href="#">Sound &amp; Speakers</a></li>
                <li><a href="#">Games &amp; Audio Music</a></li>
                <li><a href="#">Digital Watches</a></li>
                <li><a href="#">Washing Machines</a></li>
                <li><a href="#">Office Electronics</a></li>
              </ul>
            </div>
            <div className="col-lg-9">
              <div className="owl-carousel homepage-owl-carousel custom-carousel owl-theme outer-top-xs">
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product">
                      <div className="product-image">
                        <div className="image"> 
                          <a href="detail.html">
                            <img src="/src/assets/images/products/p13.jpg" alt="loading" /> 
                            <img src="/src/assets/images/products/p13_hover.jpg" alt="loading" className="hover-image" />
                          </a>
                        </div>
                        {/* /.image */}
                        <div className="tag hot"><span>hot</span></div>
                      </div>
                      {/* /.product-image */}
                      <div className="product-info text-left">
                        <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                        <div className="rating rateit-small" />
                        <div className="description" />
                        <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                        {/* /.product-price */} 
                      </div>
                      {/* /.product-info */}
                      <div className="cart clearfix animate-effect">
                        <div className="action">
                          <ul className="list-unstyled">
                            <li className="add-cart-button btn-group">
                              <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart" /> </button>
                              <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                            </li>
                            <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart" /> </a> </li>
                            <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true" /> </a> </li>
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
                            <img src="/src/assets/images/products/p15.jpg" alt="loading" /> 
                            <img src="/src/assets/images/products/p15_hover.jpg" alt="loading" className="hover-image" />
                          </a>
                        </div>
                        {/* /.image */}
                        <div className="tag new"><span>new</span></div>
                      </div>
                      {/* /.product-image */}
                      <div className="product-info text-left">
                        <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                        <div className="rating rateit-small" />
                        <div className="description" />
                        <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                        {/* /.product-price */} 
                      </div>
                      {/* /.product-info */}
                      <div className="cart clearfix animate-effect">
                        <div className="action">
                          <ul className="list-unstyled">
                            <li className="add-cart-button btn-group">
                              <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart" /> </button>
                              <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                            </li>
                            <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart" /> </a> </li>
                            <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true" /> </a> </li>
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
                            <img src="/src/assets/images/products/p10.jpg" alt="loading" /> 
                            <img src="/src/assets/images/products/p10_hover.jpg" alt="loading" className="hover-image" />
                          </a>
                        </div>
                        {/* /.image */}
                        <div className="tag sale"><span>sale</span></div>
                      </div>
                      {/* /.product-image */}
                      <div className="product-info text-left">
                        <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                        <div className="rating rateit-small" />
                        <div className="description" />
                        <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                        {/* /.product-price */} 
                      </div>
                      {/* /.product-info */}
                      <div className="cart clearfix animate-effect">
                        <div className="action">
                          <ul className="list-unstyled">
                            <li className="add-cart-button btn-group">
                              <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart" /> </button>
                              <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                            </li>
                            <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart" /> </a> </li>
                            <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true" /> </a> </li>
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
                            <img src="/src/assets/images/products/p11.jpg" alt="loading" /> 
                            <img src="/src/assets/images/products/p11_hover.jpg" alt="loading" className="hover-image" />
                          </a>
                        </div>
                        {/* /.image */}
                        <div className="tag hot"><span>hot</span></div>
                      </div>
                      {/* /.product-image */}
                      <div className="product-info text-left">
                        <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                        <div className="rating rateit-small" />
                        <div className="description" />
                        <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                        {/* /.product-price */} 
                      </div>
                      {/* /.product-info */}
                      <div className="cart clearfix animate-effect">
                        <div className="action">
                          <ul className="list-unstyled">
                            <li className="add-cart-button btn-group">
                              <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart" /> </button>
                              <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                            </li>
                            <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart" /> </a> </li>
                            <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true" /> </a> </li>
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
                            <img src="/src/assets/images/products/p8.jpg" alt="loading" /> 
                            <img src="/src/assets/images/products/p8_hover.jpg" alt="loading" className="hover-image" />
                          </a>
                        </div>
                        {/* /.image */}
                        <div className="tag new"><span>new</span></div>
                      </div>
                      {/* /.product-image */}
                      <div className="product-info text-left">
                        <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                        <div className="rating rateit-small" />
                        <div className="description" />
                        <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                        {/* /.product-price */} 
                      </div>
                      {/* /.product-info */}
                      <div className="cart clearfix animate-effect">
                        <div className="action">
                          <ul className="list-unstyled">
                            <li className="add-cart-button btn-group">
                              <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart" /> </button>
                              <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                            </li>
                            <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart" /> </a> </li>
                            <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true" /> </a> </li>
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
                            <img src="/src/assets/images/products/p7.jpg" alt="loading" /> 
                            <img src="/src/assets/images/products/p7_hover.jpg" alt="loading" className="hover-image" />
                          </a>
                        </div>
                        {/* /.image */}
                        <div className="tag sale"><span>sale</span></div>
                      </div>
                      {/* /.product-image */}
                      <div className="product-info text-left">
                        <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                        <div className="rating rateit-small" />
                        <div className="description" />
                        <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                        {/* /.product-price */} 
                      </div>
                      {/* /.product-info */}
                      <div className="cart clearfix animate-effect">
                        <div className="action">
                          <ul className="list-unstyled">
                            <li className="add-cart-button btn-group">
                              <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart" /> </button>
                              <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                            </li>
                            <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart" /> </a> </li>
                            <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true" /> </a> </li>
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
            </div>
          </div>
          {/* /.home-owl-carousel */} 
        </section>
        {/* /.section */} 
        {/* ============================================== FEATURED PRODUCTS : END ============================================== */} 
        {/* ============================================== WIDE PRODUCTS ============================================== */}
        <div className="wide-banners outer-bottom-xs">
          <div className="row">
            <div className="col-md-8">
              <div className="wide-banner1 cnt-strip">
                <div className="image"> <img className="img-responsive" src="/src/assets/images/banners/home-banner.jpg" alt="loading" /> </div>
                <div className="strip strip-text">
                  <div className="strip-inner">
                    <h2 className="text-right">Amazing Sunglasses<br />
                      <span className="shopping-needs">Get 40% off on selected items</span></h2>
                  </div>
                </div>
                <div className="new-label">
                  <div className="text">NEW</div>
                </div>
                {/* /.new-label */} 
              </div>
              {/* /.wide-banner */} 
            </div>
            {/* /.col */} 
            <div className="col-md-4">
              <div className="wide-banner cnt-strip">
                <div className="image"> <img className="img-responsive" src="/src/assets/images/banners/home-banner4.jpg" alt="loading" /> </div>
                {/* /.new-label */} 
              </div>
              {/* /.wide-banner */} 
            </div>
          </div>
          {/* /.row */} 
        </div>
        {/* /.wide-banners */} 
        {/* ============================================== WIDE PRODUCTS : END ============================================== */} 
        {/* /.sidebar-widget */} 
        {/* ============================================== BEST SELLER : END ============================================== */} 
        {/* ============================================== BLOG SLIDER ============================================== */}
        <section className="section latest-blog outer-bottom-vs">
          <h3 className="section-title">Latest form Blog</h3>
          <div className="blog-slider-container outer-top-xs">
            <div className="owl-carousel blog-slider custom-carousel">
              <div className="item">
                <div className="blog-post">
                  <div className="blog-post-image">
                    <div className="image"> <a href="blog.html"><img src="/src/assets/images/blog-post/blog_big_01.jpg" alt="loading" /></a> </div>
                  </div>
                  {/* /.blog-post-image */}
                  <div className="blog-post-info text-left">
                    <h3 className="name"><a href="#">Voluptatem accusantium doloremque laudantium</a></h3>
                    <span className="info">By Jone Doe &nbsp;|&nbsp; 21 March 2016 </span>
                    <p className="text">Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                  </div>
                  {/* /.blog-post-info */} 
                </div>
                {/* /.blog-post */} 
              </div>
              {/* /.item */}
              <div className="item">
                <div className="blog-post">
                  <div className="blog-post-image">
                    <div className="image"> <a href="blog.html"><img src="/src/assets/images/blog-post/blog_big_02.jpg" alt="loading" /></a> </div>
                  </div>
                  {/* /.blog-post-image */}
                  <div className="blog-post-info text-left">
                    <h3 className="name"><a href="#">Dolorem eum fugiat quo voluptas nulla pariatur</a></h3>
                    <span className="info">By Saraha Smith &nbsp;|&nbsp; 21 March 2016 </span>
                    <p className="text">Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                  </div>
                  {/* /.blog-post-info */} 
                </div>
                {/* /.blog-post */} 
              </div>
              {/* /.item */} 
              {/* /.item */}
              <div className="item">
                <div className="blog-post">
                  <div className="blog-post-image">
                    <div className="image"> <a href="blog.html"><img src="/src/assets/images/blog-post/blog_big_03.jpg" alt="loading" /></a> </div>
                  </div>
                  {/* /.blog-post-image */}
                  <div className="blog-post-info text-left">
                    <h3 className="name"><a href="#">Dolorem eum fugiat quo voluptas nulla pariatur</a></h3>
                    <span className="info">By Saraha Smith &nbsp;|&nbsp; 21 March 2016 </span>
                    <p className="text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
                  </div>
                  {/* /.blog-post-info */} 
                </div>
                {/* /.blog-post */} 
              </div>
              {/* /.item */}
              <div className="item">
                <div className="blog-post">
                  <div className="blog-post-image">
                    <div className="image"> <a href="blog.html"><img src="/src/assets/images/blog-post/blog_big_01.jpg" alt="loading" /></a> </div>
                  </div>
                  {/* /.blog-post-image */}
                  <div className="blog-post-info text-left">
                    <h3 className="name"><a href="#">Dolorem eum fugiat quo voluptas nulla pariatur</a></h3>
                    <span className="info">By Saraha Smith &nbsp;|&nbsp; 21 March 2016 </span>
                    <p className="text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
                  </div>
                  {/* /.blog-post-info */} 
                </div>
                {/* /.blog-post */} 
              </div>
              {/* /.item */}
              <div className="item">
                <div className="blog-post">
                  <div className="blog-post-image">
                    <div className="image"> <a href="blog.html"><img src="/src/assets/images/blog-post/blog_big_02.jpg" alt="loading" /></a> </div>
                  </div>
                  {/* /.blog-post-image */}
                  <div className="blog-post-info text-left">
                    <h3 className="name"><a href="#">Dolorem eum fugiat quo voluptas nulla pariatur</a></h3>
                    <span className="info">By Saraha Smith &nbsp;|&nbsp; 21 March 2016 </span>
                    <p className="text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
                  </div>
                  
                  {/* /.blog-post-info */} 
                </div>
                {/* /.blog-post */} 
              </div>
              {/* /.item */} 
            </div>
            {/* /.owl-carousel */} 
          </div>
          {/* /.blog-slider-container */} 
        </section>
        {/* /.section */} 
        {/* ============================================== BLOG SLIDER : END ============================================== */} 
        {/* ============================================== FEATURED PRODUCTS ============================================== */}
        <section className="section new-arriavls">
          <h3 className="section-title">Featured Products</h3>
          <div className="owl-carousel home-owl-carousel custom-carousel owl-theme outer-top-xs">
            <div className="item item-carousel">
              <div className="products">
                <div className="product">
                  <div className="product-image">
                    <div className="image"> 
                      <a href="detail.html">
                        <img src="/src/assets/images/products/p10.jpg" alt="loading" /> 
                        <img src="/src/assets/images/products/p10_hover.jpg" alt="loading" className="hover-image" />
                      </a>
                    </div>
                    {/* /.image */}
                    <div className="tag new"><span>new</span></div>
                  </div>
                  {/* /.product-image */}
                  <div className="product-info text-left">
                    <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                    <div className="rating rateit-small" />
                    <div className="description" />
                    <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                    {/* /.product-price */} 
                  </div>
                  {/* /.product-info */}
                  <div className="cart clearfix animate-effect">
                    <div className="action">
                      <ul className="list-unstyled">
                        <li className="add-cart-button btn-group">
                          <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart" /> </button>
                          <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                        </li>
                        <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart" /> </a> </li>
                        <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true" /> </a> </li>
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
                        <img src="/src/assets/images/products/p2.jpg" alt="loading" /> 
                        <img src="/src/assets/images/products/p2_hover.jpg" alt="loading" className="hover-image" />
                      </a>
                    </div>
                    {/* /.image */}
                    <div className="tag new"><span>new</span></div>
                  </div>
                  {/* /.product-image */}
                  <div className="product-info text-left">
                    <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                    <div className="rating rateit-small" />
                    <div className="description" />
                    <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                    {/* /.product-price */} 
                  </div>
                  {/* /.product-info */}
                  <div className="cart clearfix animate-effect">
                    <div className="action">
                      <ul className="list-unstyled">
                        <li className="add-cart-button btn-group">
                          <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart" /> </button>
                          <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                        </li>
                        <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart" /> </a> </li>
                        <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true" /> </a> </li>
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
                        <img src="/src/assets/images/products/p3.jpg" alt="loading" /> 
                        <img src="/src/assets/images/products/p3_hover.jpg" alt="loading" className="hover-image" />
                      </a>
                    </div>
                    {/* /.image */}
                    <div className="tag hot"><span>hot</span></div>
                  </div>
                  {/* /.product-image */}
                  <div className="product-info text-left">
                    <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                    <div className="rating rateit-small" />
                    <div className="description" />
                    <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                    {/* /.product-price */} 
                  </div>
                  {/* /.product-info */}
                  <div className="cart clearfix animate-effect">
                    <div className="action">
                      <ul className="list-unstyled">
                        <li className="add-cart-button btn-group">
                          <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart" /> </button>
                          <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                        </li>
                        <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart" /> </a> </li>
                        <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true" /> </a> </li>
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
                        <img src="/src/assets/images/products/p1.jpg" alt="loading" /> 
                        <img src="/src/assets/images/products/p1_hover.jpg" alt="loading" className="hover-image" />
                      </a>
                    </div>
                    {/* /.image */}
                    <div className="tag hot"><span>hot</span></div>
                  </div>
                  {/* /.product-image */}
                  <div className="product-info text-left">
                    <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                    <div className="rating rateit-small" />
                    <div className="description" />
                    <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                    {/* /.product-price */} 
                  </div>
                  {/* /.product-info */}
                  <div className="cart clearfix animate-effect">
                    <div className="action">
                      <ul className="list-unstyled">
                        <li className="add-cart-button btn-group">
                          <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart" /> </button>
                          <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                        </li>
                        <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart" /> </a> </li>
                        <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true" /> </a> </li>
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
                        <img src="/src/assets/images/products/p7.jpg" alt="loading" /> 
                        <img src="/src/assets/images/products/p7_hover.jpg" alt="loading" className="hover-image" />
                      </a>
                    </div>
                    {/* /.image */}
                    <div className="tag sale"><span>sale</span></div>
                  </div>
                  {/* /.product-image */}
                  <div className="product-info text-left">
                    <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                    <div className="rating rateit-small" />
                    <div className="description" />
                    <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                    {/* /.product-price */} 
                  </div>
                  {/* /.product-info */}
                  <div className="cart clearfix animate-effect">
                    <div className="action">
                      <ul className="list-unstyled">
                        <li className="add-cart-button btn-group">
                          <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart" /> </button>
                          <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                        </li>
                        <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart" /> </a> </li>
                        <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true" /> </a> </li>
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
                        <img src="/src/assets/images/products/p9.jpg" alt="loading" /> 
                        <img src="/src/assets/images/products/p9_hover.jpg" alt="loading" className="hover-image" />
                      </a>
                    </div>
                    {/* /.image */}
                    <div className="tag sale"><span>sale</span></div>
                  </div>
                  {/* /.product-image */}
                  <div className="product-info text-left">
                    <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                    <div className="rating rateit-small" />
                    <div className="description" />
                    <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                    {/* /.product-price */} 
                  </div>
                  {/* /.product-info */}
                  <div className="cart clearfix animate-effect">
                    <div className="action">
                      <ul className="list-unstyled">
                        <li className="add-cart-button btn-group">
                          <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart" /> </button>
                          <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                        </li>
                        <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart" /> </a> </li>
                        <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true" /> </a> </li>
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
        </section>
        {/* /.section */} 
        {/* ============================================== FEATURED PRODUCTS : END ============================================== */} 
      </div>
      {/* /.homebanner-holder */} 
      {/* ============================================== CONTENT : END ============================================== */} 
    </div>
    {/* /.row */} 
    {/* ============================================== BRANDS CAROUSEL ============================================== */}
    <div id="brands-carousel" className="logo-slider">
      <div className="logo-slider-inner">
        <div id="brand-slider" className="owl-carousel brand-slider custom-carousel owl-theme">
          <div className="item m-t-15"> <a href="#" className="image"> <img data-echo="/src/assets/images/brands/brand1.png" src="/src/assets/images/blank.gif" alt="loading" /> </a> </div>
          {/*/.item*/}
          <div className="item m-t-10"> <a href="#" className="image"> <img data-echo="/src/assets/images/brands/brand2.png" src="/src/assets/images/blank.gif" alt="loading" /> </a> </div>
          {/*/.item*/}
          <div className="item"> <a href="#" className="image"> <img data-echo="/src/assets/images/brands/brand3.png" src="/src/assets/images/blank.gif" alt="loading" /> </a> </div>
          {/*/.item*/}
          <div className="item"> <a href="#" className="image"> <img data-echo="/src/assets/images/brands/brand4.png" src="/src/assets/images/blank.gif" alt="loading" /> </a> </div>
          {/*/.item*/}
          <div className="item"> <a href="#" className="image"> <img data-echo="/src/assets/images/brands/brand5.png" src="/src/assets/images/blank.gif" alt="loading" /> </a> </div>
          {/*/.item*/}
          <div className="item"> <a href="#" className="image"> <img data-echo="/src/assets/images/brands/brand6.png" src="/src/assets/images/blank.gif" alt="loading" /> </a> </div>
          {/*/.item*/}
          <div className="item"> <a href="#" className="image"> <img data-echo="/src/assets/images/brands/brand2.png" src="/src/assets/images/blank.gif" alt="loading" /> </a> </div>
          {/*/.item*/}
          <div className="item"> <a href="#" className="image"> <img data-echo="/src/assets/images/brands/brand4.png" src="/src/assets/images/blank.gif" alt="loading" /> </a> </div>
          {/*/.item*/}
          <div className="item"> <a href="#" className="image"> <img data-echo="/src/assets/images/brands/brand1.png" src="/src/assets/images/blank.gif" alt="loading" /> </a> </div>
          {/*/.item*/}
          <div className="item"> <a href="#" className="image"> <img data-echo="/src/assets/images/brands/brand5.png" src="/src/assets/images/blank.gif" alt="loading" /> </a> </div>
          {/*/.item*/} 
        </div>
        {/* /.owl-carousel #logo-slider */} 
      </div>
      {/* /.logo-slider-inner */} 
    </div>
    {/* /.logo-slider */} 
    {/* ============================================== BRANDS CAROUSEL : END ============================================== */} 
  </div>
  {/* /.container */} 
</div>

<div className="row our-features-box">
     <div className="container">
      <ul>
        <li>
          <div className="feature-box">
            <div className="icon-truck"></div>
            <div className="content-blocks">We ship worldwide</div>
          </div>
        </li>
        <li>
          <div className="feature-box">
            <div className="icon-support"></div>
            <div className="content-blocks">call 
              +1 800 789 0000</div>
          </div>
        </li>
        <li>
          <div className="feature-box">
            <div className="icon-money"></div>
            <div className="content-blocks">Money Back Guarantee</div>
          </div>
        </li>
        <li>
          <div className="feature-box">
            <div className="icon-return"></div>
            <div className="content">30 days return</div>
          </div>
        </li>
        
      </ul>
    </div>
  </div>
  <footer id="footer" className="footer color-bg">
  <div className="footer-bottom">
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-3">
          <div className="address-block">
            {/* /.module-heading */}
            <div className="module-body">
              <ul className="toggle-footer" style={{}}>
                <li className="media">
                  <div className="pull-left"> <span className="icon fa-stack fa-lg"> <i className="fa fa-map-marker fa-stack-1x fa-inverse" /> </span> </div>
                  <div className="media-body">
                    <p>ThemesGround, 789 Main rd, Anytown, CA 12345 USA</p>
                  </div>
                </li>
                <li className="media">
                  <div className="pull-left"> <span className="icon fa-stack fa-lg"> <i className="fa fa-mobile fa-stack-1x fa-inverse" /> </span> </div>
                  <div className="media-body">
                    <p> + (888) 123-4567 / + (888) 456-7890</p>
                  </div>
                </li>
                <li className="media">
                  <div className="pull-left"> <span className="icon fa-stack fa-lg"> <i className="fa fa-envelope fa-stack-1x fa-inverse" /> </span> </div>
                  <div className="media-body"> <span><a href="#">marazzo@themesground.com</a></span> </div>
                </li>
              </ul>
            </div>
          </div>
          {/* /.module-body */} 
        </div>
        {/* /.col */}
        <div className="col-xs-12 col-sm-6 col-md-3">
          <div className="module-heading">
            <h4 className="module-title">Customer Service</h4>
          </div>
          {/* /.module-heading */}
          <div className="module-body">
            <ul className="list-unstyled">
              <li className="first"><a href="#" title="Contact us">My Account</a></li>
              <li><a href="#" title="About us">Order History</a></li>
              <li><a href="#" title="faq">FAQ</a></li>
              <li><a href="#" title="Popular Searches">Specials</a></li>
              <li className="last"><a href="#" title="Where is my order?">Help Center</a></li>
            </ul>
          </div>
          {/* /.module-body */} 
        </div>
        {/* /.col */}
        <div className="col-xs-12 col-sm-6 col-md-3">
          <div className="module-heading">
            <h4 className="module-title">Corporation</h4>
          </div>
          {/* /.module-heading */}
          <div className="module-body">
            <ul className="list-unstyled">
              <li className="first"><a title="Your Account" href="#">About us</a></li>
              <li><a title="Information" href="#">Customer Service</a></li>
              <li><a title="Addresses" href="#">Company</a></li>
              <li><a title="Addresses" href="#">Investor Relations</a></li>
              <li className="last"><a title="Orders History" href="#">Advanced Search</a></li>
            </ul>
          </div>
          {/* /.module-body */} 
        </div>
        {/* /.col */}
        <div className="col-xs-12 col-sm-6 col-md-3">
          <div className="module-heading">
            <h4 className="module-title">Why Choose Us</h4>
          </div>
          {/* /.module-heading */}
          <div className="module-body">
            <ul className="list-unstyled">
              <li className="first"><a href="#" title="About us">Shopping Guide</a></li>
              <li><a href="#" title="Blog">Blog</a></li>
              <li><a href="#" title="Company">Company</a></li>
              <li><a href="#" title="Investor Relations">Investor Relations</a></li>
              <li className=" last"><a href="contact-us.html" title="Suppliers">Contact Us</a></li>
            </ul>
          </div>
          {/* /.module-body */} 
        </div>
      </div>
    </div>
  </div>
  <div className="copyright-bar">
    <div className="container">
      <div className="col-xs-12 col-sm-4 no-padding social">
        <ul className="link">
          <li className="fb pull-left"><a target="_blank" rel="nofollow" href="#" title="Facebook" /></li>
          <li className="tw pull-left"><a target="_blank" rel="nofollow" href="#" title="Twitter" /></li>
          <li className="googleplus pull-left"><a target="_blank" rel="nofollow" href="#" title="GooglePlus" /></li>
          <li className="rss pull-left"><a target="_blank" rel="nofollow" href="#" title="RSS" /></li>
          <li className="pintrest pull-left"><a target="_blank" rel="nofollow" href="#" title="PInterest" /></li>
          <li className="linkedin pull-left"><a target="_blank" rel="nofollow" href="#" title="Linkedin" /></li>
          <li className="youtube pull-left"><a target="_blank" rel="nofollow" href="#" title="Youtube" /></li>
        </ul>
      </div>
      <div className="col-xs-12 col-sm-4 no-padding copyright"><a target="_blank" href="https://www.templateshub.net">Templates Hub</a> </div>
      <div className="col-xs-12 col-sm-4 no-padding">
        <div className="clearfix payment-methods">
          <ul>
            <li><img src="/src/assets/images/payments/1.png" alt='loading' /></li>
            <li><img src="/src/assets/images/payments/2.png" alt='loading' /></li>
            <li><img src="/src/assets/images/payments/3.png" alt='loading' /></li>
            <li><img src="/src/assets/images/payments/4.png" alt='loading' /></li>
            <li><img src="/src/assets/images/payments/5.png" alt='loading' /></li>
          </ul>
        </div>
        {/* /.payment-methods */} 
      </div>
    </div>
  </div>
</footer>

</div>
  )

}

export default Home;
