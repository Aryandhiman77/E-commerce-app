import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../../Context API/authContext";

const ManageProfile = ({user}) => {
    let [editFlag,setEditFlag] = useState(false);
    const {updateUser} = useContext(AuthContext);
    const [updatedDetails,setUpdatedDetails] = useState(user);
    const toggleEdit=()=>{
        if(editFlag){
            setEditFlag(false)
        }else{
            setEditFlag(true)
        }
    }
    const updateDetails = ()=>{
        updateUser(updatedDetails).then(v=>{
            v &&  setEditFlag(false);
        })
    }
    const onchange=(e)=>{
        setUpdatedDetails({...updatedDetails,[e.target.id]:e.target.value})
    }   
useEffect(()=>{
    setUpdatedDetails(user)
},[editFlag])
   
  return (
    <>
      <div className="search-result-container "  style={{userSelect: "none"}}>
        <div id="myTabContent" className="tab-content category-list">
          <h4>
            <b>Personal Information</b>
            <div style={{display:'inline',fontSize: "14px",cursor:'pointer' }} className="margin-left-2rem header-color "
            onClick={toggleEdit}
            >
                {
                    editFlag?"Cancel":"Edit"
                }
              
            </div>
          </h4>

          <div className="padding-4 mtop-2">
            <div className="row">
                <fieldset disabled={!editFlag}>
              <div className="col-md-8 contact-form">
                  <div className="col-md-12 contact-title"></div>

                  <div className="col-md-8 ">
                    <form className="register-form" role="form">
                      <div className="form-group">
                      <label class="info-title" for="email">Name</label>
                        <input
                          type="text"
                          className="form-control unicase-form-control text-input"
                          id="username"
                          placeholder="Name"
                          defaultValue={updatedDetails.username}
                          onChange={onchange}
                        />
                      </div>
                    </form>
                  </div>
                  <div className="col-md-8">
                    <form className="register-form" role="form">
                      <div className="form-group">
                      <label class="info-title" for="email">Email</label>
                        <input
                          type="email"
                          className="form-control unicase-form-control text-input"
                          id="email"
                          placeholder="Email"
                          defaultValue={updatedDetails.email}
                          onChange={onchange}
                        />
                      </div>
                    </form>
                  </div>
                  <div className="col-md-8">
                    <form className="register-form" role="form">
                      <div className="form-group">
                      <label class="info-title" for="email">Mobile Number</label>
                        <input
                          type="number"
                          className="form-control unicase-form-control text-input"
                          id="mobile_no"
                          placeholder="10 digit mobile number"
                          defaultValue={updatedDetails.mobile_no}
                          onChange={onchange}
                        />
                      </div>
                    </form>
                  </div>
                
                  {
                        editFlag && <div className="col-md-12 outer-bottom-small m-t-20">
                    
                        <button
                          type="submit"
                          className="btn-upper btn btn-primary checkout-page-button"
                          onClick={updateDetails}
                        >
                          Save
                        </button>
                        
                      </div>
                    }
               
              </div>
                  </fieldset>
            </div>
            {/* /.contact-page */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageProfile;
