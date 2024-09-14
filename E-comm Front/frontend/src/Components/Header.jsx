import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <div>
  {/* ============================================== HEADER ============================================== */}
  <header className="header-style-1"> 
    {/* ============================================== TOP MENU ============================================== */}
    <div className="top-bar animate-dropdown">
      <div className="container">
        <div className="header-top-inner">
          <div className="cnt-account">
            <ul className="list-unstyled">
              <li className="myaccount"><Link to="#"><span>My Account</span></Link></li>
              <li className="wishlist"><Link to="#"><span>Wishlist</span></Link></li>
              <li className="header_cart hidden-xs"><Link to="#"><span>My Cart</span></Link></li>
              <li className="check"><Link to="#"><span>Checkout</span></Link></li>
              <li className="login"><Link to="#"><span>Login</span></Link></li>
            </ul>
          </div>
          {/* /.cnt-account */}
          <div className="cnt-block">
            <ul className="list-unstyled list-inline">
              <li className="dropdown dropdown-small"> <Link to="#" className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown"><span className="value">USD </span><b className="caret" /></Link>
                <ul className="dropdown-menu">
                  <li><Link to="#">USD</Link></li>
                  <li><Link to="#">INR</Link></li>
                  <li><Link to="#">GBP</Link></li>
                </ul>
              </li>
              <li className="dropdown dropdown-small"> <Link to="#" className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown"><span className="value">English </span><b className="caret" /></Link>
                <ul className="dropdown-menu">
                  <li><Link to="#">English</Link></li>
                  <li><Link to="#">French</Link></li>
                  <li><Link to="#">German</Link></li>
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
            <div className="logo"> <Link to="home.html"> <img src="/src/assets/images/logo.png" alt="logo" /> </Link> </div>
            {/* /.logo */} 
            {/* ============================================================= LOGO : END ============================================================= */} </div>
          {/* /.logo-holder */}
          <div className="col-lg-7 col-md-6 col-sm-8 col-xs-12 top-search-holder"> 
            {/* /.contact-row */} 
            {/* ============================================================= SEARCH AREA ============================================================= */}
            <div className="search-area">
              <form>
                <div className="control-group">
                  <ul className="categories-filter animate-dropdown">
                    <li className="dropdown"> <Link className="dropdown-toggle" data-toggle="dropdown" to="category.html">Categories <b className="caret" /></Link>
                      <ul className="dropdown-menu" role="menu">
                        <li className="menu-header">Computer</li>
                        <li role="presentation"><Link role="menuitem" tabIndex={-1} to="category.html">- Clothing</Link></li>
                        <li role="presentation"><Link role="menuitem" tabIndex={-1} to="category.html">- Electronics</Link></li>
                        <li role="presentation"><Link role="menuitem" tabIndex={-1} to="category.html">- Shoes</Link></li>
                        <li role="presentation"><Link role="menuitem" tabIndex={-1} to="category.html">- Watches</Link></li>
                      </ul>
                    </li>
                  </ul>
                  <input className="search-field" placeholder="Search here..." />
                  <Link className="search-button" to="#" /> </div>
              </form>
            </div>
            {/* /.search-area */} 
            {/* ============================================================= SEARCH AREA : END ============================================================= */} </div>
          {/* /.top-search-holder */}
          <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12 animate-dropdown top-cart-row"> 
            {/* ============================================================= SHOPPING CART DROPDOWN ============================================================= */}
            <div className="dropdown dropdown-cart"> <Link to="#" className="dropdown-toggle lnk-cart" data-toggle="dropdown">
                <div className="items-cart-inner">
                  <div className="basket">
                    <div className="basket-item-count"><span className="count">2</span></div>
                    <div className="total-price-basket"> <span className="lbl">Shopping Cart</span> <span className="value">$4580</span> </div>
                  </div>
                </div>
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <div className="cart-item product-summary">
                    <div className="row">
                      <div className="col-xs-4">
                        <div className="image"> <Link to="detail.html"><img src="assets/images/products/p4.jpg" alt="loading" /></Link> </div>
                      </div>
                      <div className="col-xs-7">
                        <h3 className="name"><Link to="index8a95.html?page-detail">Simple Product</Link></h3>
                        <div className="price">$600.00</div>
                      </div>
                      <div className="col-xs-1 action"> <Link to="#"><i className="fa fa-trash" /></Link></div>
                    </div>
                  </div>
                  {/* /.cart-item */}
                  <div className="clearfix" />
                  <hr />
                  <div className="clearfix cart-total">
                    <div className="pull-right"> <span className="text">Sub Total :</span><span className="price">$600.00</span> </div>
                    <div className="clearfix" />
                    <Link to="checkout.html" className="btn btn-upper btn-primary btn-block m-t-20">Checkout</Link> </div>
                  {/* /.cart-total*/} 
                </li>
              </ul>
              {/* /.dropdown-menu*/} 
            </div>
            {/* /.dropdown-cart */} 
            {/* ============================================================= SHOPPING CART DROPDOWN : END============================================================= */} </div>
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
            <button data-target="#mc-horizontal-menu-collapse" data-toggle="collapse" className="navbar-toggle collapsed" type="button"> 
              <span className="sr-only">Toggle navigation</span> <span className="icon-bar" /> <span className="icon-bar" /> <span className="icon-bar" /> </button>
          </div>
          <div className="nav-bg-class">
            <div className="navbar-collapse collapse" id="mc-horizontal-menu-collapse">
              <div className="nav-outer">
                <ul className="nav navbar-nav">
                  <li className="active dropdown"> <Link to="home.html">Home</Link> </li>
                  <li className="dropdown yamm mega-menu"> <Link to="home.html" data-hover="dropdown" className="dropdown-toggle" data-toggle="dropdown">Clothing</Link>
                    <ul className="dropdown-menu container">
                      <li>
                        <div className="yamm-content ">
                          <div className="row">
                            <div className="col-xs-12 col-sm-6 col-md-2 col-menu">
                              <h2 className="title">Men</h2>
                              <ul className="links">
                                <li><Link to="#">Dresses</Link></li>
                                <li><Link to="#">Shoes </Link></li>
                                <li><Link to="#">Jackets</Link></li>
                                <li><Link to="#">Sunglasses</Link></li>
                                <li><Link to="#">Sport Wear</Link></li>
                                <li><Link to="#">Blazers</Link></li>
                                <li><Link to="#">Shirts</Link></li>
                              </ul>
                            </div>
                            {/* /.col */}
                            <div className="col-xs-12 col-sm-6 col-md-2 col-menu">
                              <h2 className="title">Women</h2>
                              <ul className="links">
                                <li><Link to="#">Handbags</Link></li>
                                <li><Link to="#">Jwellery</Link></li>
                                <li><Link to="#">Swimwear </Link></li>
                                <li><Link to="#">Tops</Link></li>
                                <li><Link to="#">Flats</Link></li>
                                <li><Link to="#">Shoes</Link></li>
                                <li><Link to="#">Winter Wear</Link></li>
                              </ul>
                            </div>
                            {/* /.col */}
                            <div className="col-xs-12 col-sm-6 col-md-2 col-menu">
                              <h2 className="title">Boys</h2>
                              <ul className="links">
                                <li><Link to="#">Toys &amp; Games</Link></li>
                                <li><Link to="#">Jeans</Link></li>
                                <li><Link to="#">Shirts</Link></li>
                                <li><Link to="#">Shoes</Link></li>
                                <li><Link to="#">School Bags</Link></li>
                                <li><Link to="#">Lunch Box</Link></li>
                                <li><Link to="#">Footwear</Link></li>
                              </ul>
                            </div>
                            {/* /.col */}
                            <div className="col-xs-12 col-sm-6 col-md-2 col-menu">
                              <h2 className="title">Girls</h2>
                              <ul className="links">
                                <li><Link to="#">Sandals </Link></li>
                                <li><Link to="#">Shorts</Link></li>
                                <li><Link to="#">Dresses</Link></li>
                                <li><Link to="#">Jwellery</Link></li>
                                <li><Link to="#">Bags</Link></li>
                                <li><Link to="#">Night Dress</Link></li>
                                <li><Link to="#">Swim Wear</Link></li>
                              </ul>
                            </div>
                            {/* /.col */}
                            <div className="col-xs-12 col-sm-6 col-md-4 col-menu banner-image"> <img className="img-responsive" src="assets/images/banners/top-menu-banner.jpg" alt="loading" /> </div>
                            {/* /.yamm-content */} 
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown mega-menu"> 
                    <Link to="category.html" data-hover="dropdown" className="dropdown-toggle" data-toggle="dropdown">Electronics <span className="menu-label hot-menu hidden-xs">hot</span> </Link>
                    <ul className="dropdown-menu container">
                      <li>
                        <div className="yamm-content">
                          <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-2 col-menu">
                              <h2 className="title">Laptops</h2>
                              <ul className="links">
                                <li><Link to="/">Gaming</Link></li>
                                <li><Link to="/">Laptop Skins</Link></li>
                                <li><Link to="/">Apple</Link></li>
                                <li><Link to="/">Dell</Link></li>
                                <li><Link to="/">Lenovo</Link></li>
                                <li><Link to="/">Microsoft</Link></li>
                                <li><Link to="/">Asus</Link></li>
                                <li><Link to="/">Adapters</Link></li>
                                <li><Link to="/">Batteries</Link></li>
                                <li><Link to="/">Cooling Pads</Link></li>
                              </ul>
                            </div>
                            {/* /.col */}
                            <div className="col-xs-12 col-sm-12 col-md-2 col-menu">
                              <h2 className="title">Desktops</h2>
                              <ul className="links">
                                <li><Link to="/">Routers &amp; Modems</Link></li>
                                <li><Link to="/">CPUs, Processors</Link></li>
                                <li><Link to="/">PC Gaming Store</Link></li>
                                <li><Link to="/">Graphics Cards</Link></li>
                                <li><Link to="/">Components</Link></li>
                                <li><Link to="/">Webcam</Link></li>
                                <li><Link to="/">Memory (RAM)</Link></li>
                                <li><Link to="/">Motherboards</Link></li>
                                <li><Link to="/">Keyboards</Link></li>
                                <li><Link to="/">Headphones</Link></li>
                              </ul>
                            </div>
                            {/* /.col */}
                            <div className="col-xs-12 col-sm-12 col-md-2 col-menu">
                              <h2 className="title">Cameras</h2>
                              <ul className="links">
                                <li><Link to="/">Accessories</Link></li>
                                <li><Link to="/">Binoculars</Link></li>
                                <li><Link to="/">Telescopes</Link></li>
                                <li><Link to="/">Camcorders</Link></li>
                                <li><Link to="/">Digital</Link></li>
                                <li><Link to="/">Film Cameras</Link></li>
                                <li><Link to="/">Flashes</Link></li>
                                <li><Link to="/">Lenses</Link></li>
                                <li><Link to="/">Surveillance</Link></li>
                                <li><Link to="/">Tripods</Link></li>
                              </ul>
                            </div>
                            {/* /.col */}
                            <div className="col-xs-12 col-sm-12 col-md-2 col-menu">
                              <h2 className="title">Mobile Phones</h2>
                              <ul className="links">
                                <li><Link to="/">Apple</Link></li>
                                <li><Link to="/">Samsung</Link></li>
                                <li><Link to="/">Lenovo</Link></li>
                                <li><Link to="/">Motorola</Link></li>
                                <li><Link to="/">LeEco</Link></li>
                                <li><Link to="/">Asus</Link></li>
                                <li><Link to="/">Acer</Link></li>
                                <li><Link to="/">Accessories</Link></li>
                                <li><Link to="/">Headphones</Link></li>
                                <li><Link to="/">Memory Cards</Link></li>
                              </ul>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-4 col-menu custom-banner"> <Link to="#"><img alt="loading" src="assets/images/banners/top-menu-banner1.jpg" /></Link> </div>
                          </div>
                          {/* /.row */} 
                        </div>
                        {/* /.yamm-content */} </li>
                    </ul>
                  </li>
                  <li className="dropdown hidden-sm"> <Link to="category.html">Health &amp; Beauty <span className="menu-label new-menu hidden-xs">new</span> </Link> </li>
                  <li className="dropdown hidden-sm"> <Link to="category.html">Watches</Link> </li>
                  <li className="dropdown"> <Link to="contact.html">Jewellery</Link> </li>
                  <li className="dropdown"> <Link to="contact.html">Shoes</Link> </li>
                  <li className="dropdown"> <Link to="contact.html">Kids &amp; Girls</Link> </li>
                  <li className="dropdown"> <Link to="#" className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown">Pages</Link>
                    <ul className="dropdown-menu pages">
                      <li>
                        <div className="yamm-content">
                          <div className="row">
                            <div className="col-xs-12 col-menu">
                              <ul className="links">
                                <li><Link to="home.html">Home</Link></li>
                                <li><Link to="category.html">Category</Link></li>
                                <li><Link to="detail.html">Detail</Link></li>
                                <li><Link to="shopping-cart.html">Shopping Cart Summary</Link></li>
                                <li><Link to="checkout.html">Checkout</Link></li>
                                <li><Link to="blog.html">Blog</Link></li>
                                <li><Link to="blog-details.html">Blog Detail</Link></li>
                                <li><Link to="contact.html">Contact</Link></li>
                                <li><Link to="sign-in.html">Sign In</Link></li>
                                <li><Link to="my-wishlist.html">Wishlist</Link></li>
                                <li><Link to="terms-conditions.html">Terms and Condition</Link></li>
                                <li><Link to="track-orders.html">Track Orders</Link></li>
                                <li><Link to="product-comparison.html">Product-Comparison</Link></li>
                                <li><Link to="faq.html">FAQ</Link></li>
                                <li><Link to="404.html">404</Link></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown  navbar-right special-menu"> <Link to="#">Get 30% off on selected items</Link> </li>
                </ul>
                {/* /.navbar-nav */}
                <div className="clearfix" />
              </div>
              {/* /.nav-outer */} 
            </div>
            {/* /.navbar-collapse */} 
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
</div>

  )
}

export default Header
