import React, { useContext, useEffect, useRef, useState } from 'react'
import dataContext from '../../../Context API/dataContext';
import { AddressFinder } from "@ideal-postcodes/address-finder";
import { Controller } from '@ideal-postcodes/address-finder/dist/controller';



const AddressForm = ({manageEdit,editData,isAddressEditEnabled,openManageAddress}) => {
    const {Toast} = useContext(dataContext)
    const [islocationActive,setLocationActive] = useState(false);
    const getlocation = ()=>{
      if(islocationActive){
        setLocationActive(false)
      }else{

      
      setLocationActive(true)
        const controller = AddressFinder.setup({
            inputField: "#full_address", // Target <input> to host Address Finder
            apiKey: "ak_m1td429xfd5B9NHQbGp7HLlpR3IOh", // API Key from your account
            outputFields: {
              // Target address fields
              line_1: "#full_address",
              line_2: "#locality",
              line_3: "#state",
              post_town: "#city",
              postcode: "#zip_code",
            },
          });
          if(controller){
            Toast.fire({
                icon:'success',
                title:controller.notification
            })
            
          }else{
            Toast.fire({
                icon:'error',
                title:controller.notification
            })
          }
    }}
    
    const [newdetails,setNewDetails]= useState(editData?editData:{});
    const {addShippingAddress,updateShippingAddress,getAllShippingAddresses} = useContext(dataContext);
    const addresstype = useRef(null);
    const updateAddress = ()=>{
 console.log('updating address')
        // console.log(newdetails)
        updateShippingAddress(newdetails).then(v=>{
           v && manageEdit();getAllShippingAddresses();
        })
    }
       
    
    const addAddress = ()=>{ 
        addShippingAddress(newdetails).then(v=>{
            v && openManageAddress();getAllShippingAddresses();
        })
    }
    const onchange = (e) =>{
        setNewDetails({...newdetails,[e.target.id]:e.target.value})
        !newdetails.address_type && setNewDetails({...newdetails,[addresstype.current.id]:addresstype.current.value});
    }
    

  return (  
    <>
      <div className="innerContent margin-left-1-4rem header-color"
                    style={{
                      padding: "1.4rem",
                      fontSize: "1.6rem",
                      border:isAddressEditEnabled&&'1px solid rgb(224, 224, 224)',
                      marginTop:isAddressEditEnabled&&'2rem'
                    }}
                  >
                    <span>
                      <span className="margin-left-1-2rem header-color capitalize">
                        {
                            editData&&newdetails?"edit address":"add a new address"
                        }
                      </span>

                      <div className="contact-page">
                        <div className="row">
                          <div className="col-md-8 contact-form">
                            <div className="col-md-12 contact-title">
                              <button className="btn btn-primary margin-bottom-2rem"
                               onClick={getlocation}
                              >
                                <img
                                  src="https://cdn-icons-png.flaticon.com/128/3601/3601885.png"
                                  height={20}
                                  width={20}
                                  alt=""
                                  style={{ filter: "invert(1)" }}
                                />
                                <span className="margin-left-1-2rem capitalize">
                                  {
                                    islocationActive?"Starting typing full address to get suggesstions":"get your location suggesstion"
                                  }
                                </span>
                              </button>
                            </div>
                            <div className="col-md-6 ">
                              <form className="register-form" role="form">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control unicase-form-control text-input"
                                    id="username"
                                    placeholder="Name"
                                    defaultValue={editData&&newdetails?newdetails.username:''}
                                    onChange={onchange}
                                  />
                                </div>
                              </form>
                            </div>
                            <div className="col-md-6">
                              <form className="register-form" role="form">
                                <div className="form-group">
                                  <input
                                    type="number"
                                    className="form-control unicase-form-control text-input"
                                    id="mobile_no"
                                    maxLength={'10'}
                                    placeholder="10 Digit Mobile Number"
                                    defaultValue={editData&&newdetails?newdetails.mobile_no:''}
                                    onChange={onchange}
                                  />
                                </div>
                              </form>
                            </div>
                            <div className="col-md-12">
                              <form className="register-form" role="form">
                                <div className="form-group">
                                  <textarea
                                    placeholder="Full address"
                                    className="form-control unicase-form-control"
                                    id="full_address"
                                    defaultValue={editData&&newdetails?newdetails.full_address:''}
                                    style={{ resize: "none" }}
                                    onChange={onchange}
                                  />
                                </div>
                              </form>
                            </div>
                            <div className="col-md-6">
                              <form className="register-form" role="form">
                                <div className="form-group">
                                  <input
                                    type="number"
                                    className="form-control unicase-form-control text-input"
                                    id="zip_code"
                                    placeholder="Zipcode"
                                    defaultValue={editData&&newdetails?newdetails.zip_code:''}
                                    onChange={onchange}
                                  />
                                </div>
                              </form>
                            </div>
                            <div className="col-md-6">
                              <form className="register-form" role="form">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control unicase-form-control text-input"
                                    id="locality"
                                    placeholder="Locality"
                                    defaultValue={editData&&newdetails?newdetails.locality:''}
                                    onChange={onchange}
                                  />
                                </div>
                              </form>
                            </div>

                            
                            <div className="col-md-6">
                              <form className="register-form" role="form">
                                <div className="form-group">
                                  <input
                                    type="city"
                                    className="form-control unicase-form-control text-input"
                                    id="city"
                                    placeholder="City/District/Town"
                                    defaultValue={editData&&newdetails?newdetails.city:''}
                                    onChange={onchange}
                                  />
                                </div>
                              </form>
                            </div>
                            <div className="col-md-6">
                              <form className="register-form" role="form">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control unicase-form-control text-input"
                                    id="state"
                                    placeholder="State"
                                    defaultValue={editData&&newdetails?newdetails.state:''}
                                    onChange={onchange}
                                    />
                                </div>
                              </form>
                            </div>
                            <div className="col-md-12">
                              <form className="register-form" role="form">
                                <div className="form-group">
                                  <select
                                    className="form-control unicase-form-control text-input"
                                    id="address_type"
                                    defaultValue={editData&&newdetails.address_type}
                                    onChange={onchange}
                                    ref={addresstype}
                                  >
                                    <option>home</option>
                                    <option>work</option>
                                  </select>
                                </div>
                              </form>
                            </div>

                            <div className="col-md-12 outer-bottom-small m-t-20">
                              <button
                                // type="submit"
                                className="btn-upper btn btn-primary checkout-page-button"
                                onClick={()=>isAddressEditEnabled?updateAddress():addAddress()}
                              >
                                Save
                              </button>
                              <button
                                type="submit"
                                className="btn-upper btn btn-primary checkout-page-button margin-left-4px"
                                onClick={() => isAddressEditEnabled? manageEdit():openManageAddress()}
                              >
                                {" "}
                                Cancel
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* /.contact-page */}
                      </div>
                    </span>
                  </div>
    </>
  )
}

export default AddressForm
