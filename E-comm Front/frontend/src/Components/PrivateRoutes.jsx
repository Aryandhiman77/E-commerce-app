import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
    const login = true
    if(login){
        return <Outlet/>
    }else{
        return (
            <>
              <p>Please login first</p>
            </>
          )
    }
  
}

export default PrivateRoutes
