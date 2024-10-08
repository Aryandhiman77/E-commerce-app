import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../../Context API/authContext'
import {Link, useNavigate} from 'react-router-dom'

const Login = (props) => {
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
            <h4>Sign in</h4>
            {/* <p className>Hello, Welcome to your account.</p> */}
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
              <div className="checkbox">
                <label>
                  <input type="checkbox" name="rememberme" id="rememberme" defaultValue="option2" />Remember me!
                </label>
                <a href="#" className="forgot-password pull-right">Forgot your Password?</a>
              </div>
              <button className="btn-upper btn btn-primary checkout-page-button" onClick={handleLogin}>Login</button>
            </div>					
          </div>
          {/* Sign-in */}
          {/* create a new account */}
          {/* create a new account */}
          <div className="Image-container">
            <img src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg"  width={500} alt="" />
          </div>
          </div>{/* /.row */}
      </div>{/* /.sigin-in*/}
      </div>{/* /.container */}
  </div>{/* /.body-content */}
</div>

  )
}

export default Login
