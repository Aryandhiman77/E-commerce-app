import React, { useContext, useState } from "react";
import dataContext from "../../../Context API/dataContext";

const Address = ({ address,manageEdit}) => {
  const  {removeShippingAddress,getAllShippingAddresses} = useContext(dataContext);
  const removeAddress = ()=>{
    removeShippingAddress(address?._id).then((v)=>{ 
      v && getAllShippingAddresses();
    })
  } 
  return (
    <div
      className="innerContent margin-left-1-4rem header-color mtop-2"
      style={{
        padding: "1.4rem",
        fontSize: "1.6rem",
        cursor: "pointer",
        border: "1px solid #e0e0e0",
      }}
    >
       
      <span>
        <p
          className="capitalize-fl"
          style={{
            display: "inline",
            fontSize: "1.2rem",
            color: "#979799",
            background: "#e0e0e0",
            padding: "0.3rem",
            paddingLeft: "0.8rem",
            paddingRight: "0.8rem",
            borderRadius: "3px",
            fontWeight: "bold",
          }}
        >
          {address.address_type}
        </p>
        <span style={{ float: "right", fontSize: "2rem" }}>
          <span className="fa fa-edit text-success" title="Edit address" onClick={()=>manageEdit(address)} ></span>
          <span className="fa fa-trash margin-left-1-2rem text-danger" title="Delete address" onClick={removeAddress}></span>
        </span>
        <div className="margin-left-1-2rem text-black capitalize-fl">
          <div
            style={{
              marginTop: "1rem",
            }}
          >
            {address.username}
            <span className="margin-left-1-2rem">{address.mobile_no}</span>
          </div>
          <p className="mtop-2">{address.full_address}</p>
        </div>
      </span>
    </div>
  );
};

export default Address;
