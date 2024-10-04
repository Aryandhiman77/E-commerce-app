import React,{useState} from 'react'
import AuthContext from './authContext'
import { json, useNavigate } from 'react-router-dom';

const AuthState = (props) => {

const navigate = useNavigate();
const Toast = Swal.mixin({
  toast: true,
  position: "top",
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
              title: `<b class="alert">${LoginResult.message}</b>`
            }); 
           console.log(LoginResult)
           localStorage.setItem("user",JSON.stringify({
            username:LoginResult.user,
            email:LoginResult.email,
            mobile_no:LoginResult.phone_number
           }))

            
        }else{
          Toast.fire({
            icon: "error",
            title: `<b class="alert">${LoginResult.message}</b>`
          });
        }
    }
    const updateUser = async(details)=>{
      let data = {
        username:details.username,
        email:details.email,
        mobile_no:details.mobile_no
      }
      
        const response = await fetch(`${props.host}auth/update`,{
            method:"PUT",
            headers:{
              "authorization":`bearer ${JSON.parse(JSON.stringify(localStorage.getItem("token")))}`,
              "Content-type":"application/json",
          },
            body:JSON.stringify(data)
        })
        const result = await response.json();
        if(result.success){
            Toast.fire({
              icon: "success",
              title: `<b class="alert">${result.message}</b>`
            }); 
            localStorage.setItem('user',JSON.stringify(data));

           return true;

            
        }else{
          Toast.fire({
            icon: "error",
            title: `<b class="alert">${result.message}</b>`
          });
          return false;
        }
    }
    const handleLogout = ( )=>{
      localStorage.removeItem('token');
      navigate('/');
      location.reload();
      Toast.fire({
        icon: "success",
        title: `Logged out successfully.`
      });
    }

  return (
    <AuthContext.Provider value={{login,handleLogout,updateUser}}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState
