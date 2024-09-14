import React, { useContext, useState } from 'react'
import AuthContext from '../../Context API/authContext'

const Register = (props) => {
    const context = useContext(AuthContext);
    const {login}  = context;
    const [LoginDetails, setLoginDetails] = useState({LoginEmail:"",LoginPass:""})
    const handleLogin = (e)=>{
        e.preventDefault();
        login(LoginDetails)
    }
    const handleOnChange = (e)=>{
        setLoginDetails({...LoginDetails,[e.target.name]:e.target.value})
    }

  return (
      <div>
  <div className="body-content">
    <div className="container">
      <div className="sign-in-page">
        <div className="row">
          {/* Sign-in */}			
          <div className="col-md-6 col-sm-6 sign-in">
            <h4 className>Sign in</h4>
            <p className>Hello, Welcome to your account.</p>
            <div className="social-sign-in outer-top-xs">
              <a href="#" className="facebook-sign-in"><i className="fa fa-facebook" /> Sign In with Facebook</a>
              <a href="#" className="twitter-sign-in"><i className="fa fa-twitter" /> Sign In with Twitter</a>
            </div>
            <div className="register-form outer-top-xs" >
              <div className="form-group">
                <label className="info-title" htmlFor="LoginEmail">Email Address <span>*</span></label>
                <input type="email" name='LoginEmail' className="form-control unicase-form-control text-input" onChange={handleOnChange} id="LoginEmail" />
              </div>
              <div className="form-group">
                <label className="info-title" htmlFor="LoginPass">Password <span>*</span></label>
                <input type="password" name='LoginPass' className="form-control unicase-form-control text-input" onChange={handleOnChange}  id="LoginPass" />
              </div>
              <div className="radio outer-xs">
                <label>
                  <input type="radio" name="optionsRadios" id="optionsRadios2" defaultValue="option2" />Remember me!
                </label>
                <a href="#" className="forgot-password pull-right">Forgot your Password?</a>
              </div>
              <button className="btn-upper btn btn-primary checkout-page-button" onClick={handleLogin}>Login</button>
            </div>					
          </div>
          {/* Sign-in */}
          {/* create a new account */}
          <div className="col-md-6 col-sm-6 create-new-account">
            <h4 className="checkout-subtitle">Create a new account</h4>
            <p className="text title-tag-line">Create your new account.</p>
            <div className="register-form outer-top-xs">
              <div className="form-group">
                <label className="info-title" htmlFor="exampleInputEmail2">Email Address <span>*</span></label>
                <input type="email" className="form-control unicase-form-control text-input" id="exampleInputEmail2" />
              </div>
              <div className="form-group">
                <label className="info-title" htmlFor="exampleInputEmail1">Name <span>*</span></label>
                <input type="email" className="form-control unicase-form-control text-input" id="exampleInputEmail1" />
              </div>
              <div className="form-group">
                <label className="info-title" htmlFor="exampleInputEmail1">Phone Number <span>*</span></label>
                <input type="email" className="form-control unicase-form-control text-input" id="exampleInputEmail1" />
              </div>
              <div className="form-group">
                <label className="info-title" htmlFor="exampleInputEmail1">Password <span>*</span></label>
                <input type="email" className="form-control unicase-form-control text-input" id="exampleInputEmail1" />
              </div>
              <div className="form-group">
                <label className="info-title" htmlFor="exampleInputEmail1">Confirm Password <span>*</span></label>
                <input type="email" className="form-control unicase-form-control text-input" id="exampleInputEmail1" />
              </div>
              <button  className="btn-upper btn btn-primary checkout-page-button">Sign Up</button>
            </div>
          </div>	
          {/* create a new account */}			</div>{/* /.row */}
      </div>{/* /.sigin-in*/}
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
  </div>{/* /.body-content */}
</div>

  )
}

export default Register
