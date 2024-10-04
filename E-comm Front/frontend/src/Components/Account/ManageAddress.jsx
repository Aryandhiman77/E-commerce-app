import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import dataContext from "../../../Context API/dataContext";
import Address from "./SavedAddress";
import AddressForm from "./AddressForm";
const ManageAddress = () => {
  const { getAllShippingAddresses, shippingAddresses } =
    useContext(dataContext);
  const [popupFlag, setPopup] = useState(false);
  const [isAddressEditEnabled,setAddressEdit] = useState(false);
  const [details,setDetails] = useState({});
  const manageEdit = (data)=>{
    if(isAddressEditEnabled){
      setAddressEdit(false);
    }
    else{
        console.log('in else')
      setPopup(false);
      setAddressEdit(true);
      setDetails(data);
    }
  }
  const openManageAddress = () => {
    if (popupFlag) {
      setPopup(false);
    } else {
      setPopup(true);
    }
    return popupFlag;
  };
  
  useEffect(() => {
    getAllShippingAddresses();
  }, []);


  return (
    <>
      <div className="search-result-container " style={{ userSelect: "none" }}>
        <div id="myTabContent" className="tab-content category-list">
          {shippingAddresses?.length <= 0 ? (
            
            !popupFlag?<div className="container"
            style={{
                display:'flex',
                alignItems:'center',
                flexFlow:'column',
                minHeight:'48rem',
                maxHeight:'70rem',
                justifyContent:'center'

            }}
            >
              
            <img height={150} width={180}
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/myaddresses-empty_3b40af.png"
              alt="loading.."
            />
            <h3>No Addresses found in your account!</h3>
            <button className="btn btn-primary capitalize-fl mtop-2"
            style={{
                height:'4rem',
                width:'20rem'
            }}
            onClick={openManageAddress}
            
            >Add address</button>
            
            </div>
            :
            popupFlag && <AddressForm openManageAddress={openManageAddress}/>
                
                
          ) : (
            <>
              <h4>
                <b>Manage Addresses</b>
              </h4>
              <div
                style={{    
                  width: "100%",
                  border: "1px solid #e0e0e0",
                }}
              >
                {!popupFlag && (
                    <>
                    <div
                    className="innerContent margin-left-1-4rem header-color"
                    style={{
                      padding: "1.4rem",
                      fontSize: "1.6rem",
                      cursor: "pointer",
                    }}
                    onClick={() => openManageAddress()}
                  >
                    <span>
                      <i className="fa fa-plus "></i>
                      <span className="margin-left-1-2rem">
                        {" "}
                        ADD A NEW ADDRESS
                      </span>
                    </span>
                  </div>
                    
                    </>
                  
                )}
                
                {
                popupFlag && <AddressForm openManageAddress={openManageAddress}/>
                
                }
                
                
              </div>
              
                    
                
              {
                shippingAddresses?.map((address,i)=>{
                    return !isAddressEditEnabled && <Address key={i} address={address} openManageAddress={openManageAddress}  setPopup={setPopup} isAddressEditEnabled={isAddressEditEnabled} setAddressEdit={setAddressEdit} manageEdit={manageEdit}/>
                    

                } )
              }
             <>
                    {
                        
                        isAddressEditEnabled &&  <AddressForm manageEdit={manageEdit} editData={details} isAddressEditEnabled={isAddressEditEnabled} openManageAddress={openManageAddress} />
                    }
             </> 
              
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ManageAddress;
