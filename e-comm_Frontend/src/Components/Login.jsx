import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='container border mt-5 p-4 px-3 rounded px-4 border-0 text-light' style={{width:'30rem',backdropFilter:' blur(10px)',boxShadow: '0px 0px 10px 0px black'}}>
            
            <div className="mb-3 d-flex justify-content-between">
            <h2>Login</h2>
                <Link to={'/register'} className="btn btn-sm btn-outline-danger mx-1 rounded-2 text-light mb-3" style={{backgroundImage: 'linear-gradient(387deg, #f04060, #fe523a, #ff6500)'}}>Register</Link>
                </div>
            <hr/>
            <form> 
                <div className="mb-3">
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder='Enter your email' />
                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" id="password" placeholder='Enter your password'/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                </div>
                <div className="mb-3 d-flex flex-column ">
                <Link type="submit" className="w-100 btn mx-1 rounded-2 text-light" style={{backgroundImage: 'linear-gradient(387deg, #f04060, #fe523a, #ff6500)'}}>Login</Link>
                </div>
                
            </form>
        </div>
    )
}

export default Login
