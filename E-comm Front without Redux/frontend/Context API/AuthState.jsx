import React,{useState} from 'react'
import AuthContext from './authContext'
import { useNavigate } from 'react-router-dom';

const AuthState = (props) => {
const navigate = useNavigate();
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});
    const login = async(details)=>{
        let data = {
          email:details.LoginEmail,
          password:details.LoginPass,
          role_name:"customer"
        }
       
        const LoginRequest = await fetch(`${props.host}auth/login`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(data)
        })
        const LoginResult = await LoginRequest.json();
        if(LoginResult.success){
            localStorage.setItem('token',LoginResult.token);
            navigate('/');
            Toast.fire({
              icon: "success",
              title: `<h5>${LoginResult.message}</h5>`
            });
            
        }
        console.log(LoginResult)
    }
    const handleLogout = ( )=>{
      localStorage.removeItem('token');
      location.reload();
    }

  return (
    <AuthContext.Provider value={{login,handleLogout}}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState
