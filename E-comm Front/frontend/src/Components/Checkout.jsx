import React from 'react'

const Checkout = () => {
    let login = false;
    if(localStorage.getItem('token')){
        login=true;
    }
  return (
    <>
      <div className="body-content">
  <div className="container">
    <div className="checkout-box ">
      <div className="row">
        <div className="col-xs-12 col-sm-9 col-md-9 rht-col">
          <div className="panel-group checkout-steps" id="accordion">
            {/* checkout-step-01  */}
            {!login&& <div className="panel panel-default checkout-step-01">
              {/* panel-heading */}
              <div className="panel-heading">
                <h4 className="unicase-checkout-title">
                  <a data-toggle="collapse" className data-parent="#accordion" href="#collapseOne">
                    <span>1</span>Checkout Method
                  </a>
                </h4>
              </div>
              {/* panel-heading */}
              <div id="collapseOne" className="panel-collapse collapse in">
                {/* panel-body  */}
                <div className="panel-body">
                  <div className="row">		
                    {/* guest-login */}			
                    <div className="col-md-6 col-sm-6 guest-login">
                      <h4 className="checkout-subtitle">Guest or Register Login</h4>
                      <p className="text title-tag-line">Register with us for future convenience:</p>
                      {/* radio-form  */}
                      <form className="register-form" role="form">
                        <div className="radio radio-checkout-unicase">  
                          <input id="guest" type="radio" name="text" defaultValue="guest" defaultChecked />  
                          <label className="radio-button guest-check" htmlFor="guest">Checkout as Guest</label>  
                          <br />
                          <input id="register" type="radio" name="text" defaultValue="register" />  
                          <label className="radio-button" htmlFor="register">Register</label>  
                        </div>  
                      </form>
                      {/* radio-form  */}
                      <h4 className="checkout-subtitle outer-top-vs">Register and save time</h4>
                      <p className="text title-tag-line ">Register with us for future convenience:</p>
                      <ul className="text instruction inner-bottom-30">
                        <li className="save-time-reg">- Fast and easy check out</li>
                        <li>- Easy access to your order history and status</li>
                      </ul>
                      <button type="submit" className="btn-upper btn btn-primary checkout-page-button checkout-continue ">Continue</button>
                    </div>
                    {/* guest-login */}
                    {/* already-registered-login */}
                    <div className="col-md-6 col-sm-6 already-registered-login">
                      <h4 className="checkout-subtitle">Already registered?</h4>
                      <p className="text title-tag-line">Please log in below:</p>
                      <form className="register-form" role="form">
                        <div className="form-group">
                          <label className="info-title" htmlFor="exampleInputEmail1">Email Address <span>*</span></label>
                          <input type="email" className="form-control unicase-form-control text-input" id="exampleInputEmail1" placeholder />
                        </div>
                        <div className="form-group">
                          <label className="info-title" htmlFor="exampleInputPassword1">Password <span>*</span></label>
                          <input type="password" className="form-control unicase-form-control text-input" id="exampleInputPassword1" placeholder />
                          <a href="#" className="forgot-password">Forgot your Password?</a>
                        </div>
                        <button type="submit" className="btn-upper btn btn-primary checkout-page-button">Login</button>
                      </form>
                    </div>	
                    {/* already-registered-login */}		
                  </div>			
                </div>
                {/* panel-body  */}
              </div>{/* row */}
            </div>}
            
            {/* checkout-step-01  */}
            {/* checkout-step-02  */}
            <div className="panel panel-default checkout-step-02">
              <div className="panel-heading">
                <h4 className="unicase-checkout-title">
                  <a data-toggle="collapse" className="collapsed" data-parent="#accordion" href="#collapseTwo">
                    <span>2</span>Billing Information
                  </a>
                </h4>
              </div>
              <div id="collapseTwo" className="panel-collapse collapse">
                <div className="panel-body">
                 
                </div>
              </div>
            </div>
            {/* checkout-step-02  */}
            {/* checkout-step-03  */}
            <div className="panel panel-default checkout-step-03">
              <div className="panel-heading">
                <h4 className="unicase-checkout-title">
                  <a data-toggle="collapse" className="collapsed" data-parent="#accordion" href="#collapseThree">
                    <span>3</span>Shipping Information
                  </a>
                </h4>
              </div>
              <div id="collapseThree" className="panel-collapse collapse">
                <div className="panel-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
            </div>
            {/* checkout-step-03  */}
            {/* checkout-step-04  */}
            <div className="panel panel-default checkout-step-04">
              <div className="panel-heading">
                <h4 className="unicase-checkout-title">
                  <a data-toggle="collapse" className="collapsed" data-parent="#accordion" href="#collapseFour">
                    <span>4</span>Shipping Method
                  </a>
                </h4>
              </div>
              <div id="collapseFour" className="panel-collapse collapse">
                <div className="panel-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
            </div>
            {/* checkout-step-04  */}
            {/* checkout-step-05  */}
            <div className="panel panel-default checkout-step-05">
              <div className="panel-heading">
                <h4 className="unicase-checkout-title">
                  <a data-toggle="collapse" className="collapsed" data-parent="#accordion" href="#collapseFive">
                    <span>5</span>Payment Information
                  </a>
                </h4>
              </div>
              <div id="collapseFive" className="panel-collapse collapse">
                <div className="panel-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
            </div>
            {/* checkout-step-05  */}
            {/* checkout-step-06  */}
            <div className="panel panel-default checkout-step-06">
              <div className="panel-heading">
                <h4 className="unicase-checkout-title">
                  <a data-toggle="collapse" className="collapsed" data-parent="#accordion" href="#collapseSix">
                    <span>6</span>Order Review
                  </a>
                </h4>
              </div>
              <div id="collapseSix" className="panel-collapse collapse">
                <div className="panel-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
            </div>
            {/* checkout-step-06  */}
          </div>{/* /.checkout-steps */}
        </div>
        <div className="col-xs-12 col-sm-3 col-md-3 sidebar">
          {/* checkout-progress-sidebar */}
          <div className="checkout-progress-sidebar ">
            <div className="panel-group">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="unicase-checkout-title">Your Checkout Progress</h4>
                </div>
                <div >
                  <ul className="nav nav-checkout-progress list-unstyled">
                    <li><a href="#">Billing Address</a></li>
                    <li><a href="#">Shipping Address</a></li>
                    <li><a href="#">Shipping Method</a></li>
                    <li><a href="#">Payment Method</a></li>
                  </ul>		
                </div>
              </div>
            </div>
          </div> 
          {/* checkout-progress-sidebar */}				</div>
      </div>{/* /.row */}
    </div>{/* /.checkout-box */}
    {/* ============================================== BRANDS CAROUSEL ============================================== */}
    <div id="brands-carousel" className="logo-slider wow fadeInUp">
      <div className="logo-slider-inner">	
        <div id="brand-slider" className="owl-carousel brand-slider custom-carousel owl-theme">
          <div className="item m-t-15">
            <a href="#" className="image">
              <img data-echo="assets/images/brands/brand1.png" src="assets/images/blank.gif" alt />
            </a>	
          </div>{/*/.item*/}
          <div className="item m-t-10">
            <a href="#" className="image">
              <img data-echo="assets/images/brands/brand2.png" src="assets/images/blank.gif" alt />
            </a>	
          </div>{/*/.item*/}
          <div className="item">
            <a href="#" className="image">
              <img data-echo="assets/images/brands/brand3.png" src="assets/images/blank.gif" alt />
            </a>	
          </div>{/*/.item*/}
          <div className="item">
            <a href="#" className="image">
              <img data-echo="assets/images/brands/brand4.png" src="assets/images/blank.gif" alt />
            </a>	
          </div>{/*/.item*/}
          <div className="item">
            <a href="#" className="image">
              <img data-echo="assets/images/brands/brand5.png" src="assets/images/blank.gif" alt />
            </a>	
          </div>{/*/.item*/}
          <div className="item">
            <a href="#" className="image">
              <img data-echo="assets/images/brands/brand6.png" src="assets/images/blank.gif" alt />
            </a>	
          </div>{/*/.item*/}
          <div className="item">
            <a href="#" className="image">
              <img data-echo="assets/images/brands/brand2.png" src="assets/images/blank.gif" alt />
            </a>	
          </div>{/*/.item*/}
          <div className="item">
            <a href="#" className="image">
              <img data-echo="assets/images/brands/brand4.png" src="assets/images/blank.gif" alt />
            </a>	
          </div>{/*/.item*/}
          <div className="item">
            <a href="#" className="image">
              <img data-echo="assets/images/brands/brand1.png" src="assets/images/blank.gif" alt />
            </a>	
          </div>{/*/.item*/}
          <div className="item">
            <a href="#" className="image">
              <img data-echo="assets/images/brands/brand5.png" src="assets/images/blank.gif" alt />
            </a>	
          </div>{/*/.item*/}
        </div>{/* /.owl-carousel #logo-slider */}
      </div>{/* /.logo-slider-inner */}
    </div>{/* /.logo-slider */}
    {/* ============================================== BRANDS CAROUSEL : END ============================================== */}	</div>{/* /.container */}
</div>

    </>
  )
}

export default Checkout
