import React, { useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

import ManageAddress from "./Account/ManageAddress";
import ManageProfile from "./Account/ManageProfile";
import AuthContext from "../../Context API/authContext";
import { render } from "react-dom";
import MyOrders from "./Account/MyOrders";

const MyAccount = ({host}) => {
  const user  = JSON.parse(localStorage.getItem('user'));
  const renderComponent = (path)=>{
    const url = new URL(location.href).pathname;
    if(url == path){
      return true;
    }else{
      return false;
    }
  }

const { handleLogout } = useContext(AuthContext);
  return (
    <>
      <div className="breadcrumb">
        <div className="container">
          <div className="breadcrumb-inner">
            <ul className="list-inline list-unstyled">
              <li>
                <a href="#">Home</a>
              </li>
              <li className="active">nothign..</li>
            </ul>
          </div>
          {/* /.breadcrumb-inner */}
        </div>
        {/* /.container */}
      </div>
      {/* /.breadcrumb */}
      <div className="body-content outer-top-xs">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-3 sidebar"   style={{position:'sticky',top:'0'}}>
              {/* ================================== TOP NAVIGATION ================================== */}

              {/* /.side-menu */}
              {/* ================================== TOP NAVIGATION : END ================================== */}
              <div className="sidebar-module-container">
                <div className="sidebar-filter">
                  {/* /.sidebar-widget */}
                  {/* ============================================== MANUFACTURES: END ============================================== */}
                  {/* ============================================== COLOR============================================== */}

                  {/* /.sidebar-widget */}
                  {/* ============================================== COLOR: END ============================================== */}
                  {/* ============================================== COMPARE============================================== */}
                  <div
                    className="sidebar-widget"
                    style={{
                      display: "flex",
                      justifyContent: "start",
                      lineHeight: "5px",
                      padding: "1rem",
                    }}
                  >
                    <div className="compare-report profileContainer">
                      <img
                        height={50}
                        width={50}
                        src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/profile-pic-male_4811a1.svg"
                        alt=""
                      />
                    </div>
                    <div style={{ marginLeft: "1.4rem", marginTop: "1rem" }}>
                      <p>Hello,</p>
                      <h5 style={{textTransform:"capitalize"}}>{user.username}</h5>
                    </div>
                    {/* /.compare-report */}

                    {/* /.sidebar-widget-body */}
                  </div>
                  <div
                    className="sidebar-widget"
                    style={{
                      display: "flex",
                      marginTop:'2rem',
                      cursor:'pointer'
                    }}
                  >
                    <h3 className="m-0">
                    <i className="fa fa-power-off margin-left-1.2rem text-danger"></i>
                    <span onClick={handleLogout} className="margin-left-1-2rem"> Logout </span>
                    </h3>
                  </div>

                  <div className="sidebar-widget outer-top-vs">
                    <div className="heading color-gray">
                      <h3 className="section-title">
                        <i className="fa fa-user header-color"></i>
                        <span className="margin-left-1-2rem">My Account</span>
                      </h3>
                    </div>
                    <div className="sub-heading" style={{padding:'1rem',paddingTop:'0.4rem',}}>
                      <h4 className="m-0">
                        <Link className="margin-left-2rem  color-gray" >
                        <i className="fa fa-gear "></i>
                          <span className="margin-left-4px"> Account Settings</span>
                        </Link>
                      </h4>

                    </div>
                      <hr className="m-0" style={{marginBottom:'4px'}}/>
                    <div className="body-item pt-1-2rem">
                      <p >
                        <Link to={'/my-account'} className="margin-left-2rem">
                          <i className="fa margin-left-2rem"></i>
                          <span className="margin-left-4px"
                          style={{
                            fontWeight:renderComponent('/my-account')?'bold':''
                          }}
                          > Profile Information</span>
                        </Link>
                      </p>
                      <hr className="m-0"/>
                    </div>
                    <div className="body-item pt-1-2rem">
                      <p >
                        <Link to={'/my-account/addresses'} className="margin-left-2rem">
                          <i className="fa margin-left-2rem"></i>
                          <span className="margin-left-4px"
                          style={{
                            fontWeight:renderComponent('/my-account/addresses')?'bold':''
                          }}
                          > Manage Addresses</span>
                        </Link>
                      </p>
                      <hr className="m-0"/>
                    </div>
                    <div className="sub-heading mtop-1" style={{padding:'1rem',paddingTop:'0.4rem'}}>
                      <h4 className="m-0">
                        <Link to={"/my-account/orders"} className="margin-left-2rem  color-gray" >
                        <i className="fa fa-truck "></i>
                          <span className="margin-left-4px"
                          style={{fontWeight:renderComponent('/my-account/orders')?'bold':'',color:renderComponent('/my-account/orders')?'black':''}}
                          > My Orders</span>
                        </Link>
                      </h4>
                      <hr className="pt-1-2rem mtop-1-2 "/>
                    </div>
                    {/* /.sidebar-widget-body */}
                  </div>
                  

                </div>
                
                {/* /.sidebar-filter */}
              </div>
              {/* /.sidebar-module-container */}
              
            </div>
            {/* /.sidebar */}

              {/* conditional rendering container */}
            <div className="col-xs-12 col-sm-12 col-md-9 rht-col">
            {
             renderComponent('/my-account')&&<ManageProfile user={user}/>
             }
             {
             renderComponent('/my-account/addresses')&&<ManageAddress/>
             }
             {
              renderComponent('/my-account/orders') && <MyOrders host={host}/>
             }
            </div>
              {/* /.conditional rendering container */}

            {/* /.col */}
          </div>
          {/* /.row */}
          {/* ============================================== BRANDS CAROUSEL ============================================== */}
          {/* /.logo-slider */}
          {/* ============================================== BRANDS CAROUSEL : END ============================================== */}{" "}
        </div>
        {/* /.container */}
      </div>
    </>
  );
};

export default MyAccount;
