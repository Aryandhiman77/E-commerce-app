import React from 'react'
import { ThreeDots } from 'react-loader-spinner'
const Spinner = () => {
  return (
    <div style={{height:'50vh',width:'100vw',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <ThreeDots
  visible={true}
  height="80"
  width="80"
  color="#4fa94d"
  radius="9"
  ariaLabel="three-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
    </div>
  )
}

export default Spinner
