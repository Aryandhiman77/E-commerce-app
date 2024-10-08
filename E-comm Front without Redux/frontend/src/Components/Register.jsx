import React, { useContext, useState } from 'react'
import AuthContext from '../../Context API/authContext'
import {Link} from 'react-router-dom'

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
          <div className="Image-container">
            <img src="https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration_335657-3875.jpg"  width={500} alt="" />
          </div>
          </div>{/* /.row */}
      </div>{/* /.sigin-in*/}
      {/* ============================================== BRANDS CAROUSEL ============================================== */}
      {/* /.logo-slider */}
      {/* ============================================== BRANDS CAROUSEL : END ============================================== */}	</div>{/* /.container */}
  </div>{/* /.body-content */}
</div>

  )
}

export default Register
