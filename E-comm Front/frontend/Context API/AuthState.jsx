import React,{useState} from 'react'
import AuthContext from './authContext'

const AuthState = (props) => {


    const login = async(details)=>{
        console.log('login working...',details)
       
        const LoginRequest = await fetch(`http://localhost:8000/auth/login`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:{
            email:LoginEmail,
            password:LoginPass
            }
        })
        const LoginResult = await LoginRequest.json();
        // if(LoginResult.success){
        //     localStorage.setItem('token',LoginResult.token)
        // }
        console.log(LoginResult)
    }

  return (
    <AuthContext.Provider value={{login}}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState
