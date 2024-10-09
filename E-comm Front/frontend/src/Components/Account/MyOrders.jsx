import React, { useContext, useEffect } from "react";
import OrderItem from "./OrderItem";
import dataContext from "../../../Context API/dataContext";

const MyOrders = ({host}) => {
  const {getAllOrdersusingOrn,fetchAllOrders,orders} = useContext(dataContext);


  useEffect(()=>{
    fetchAllOrders();
    
  },[])
  
  return (
    <>
      <div className="search-result-container " style={{ userSelect: "none" }}>
        <div id="myTabContent" className="tab-content category-list">
            <h4 className="m-0"><b>My Orders</b></h4>
            

 
            <hr />
            {/* <div className="filterbox mtop-2" style={{border:'1px solid',width:'25%',}}>
              <h4 className="text-center color-gray">Filters</h4>
              <div className="orderstatus">

              </div>
              <div className="ordertime">

              </div>
            </div> */}
            {
              orders.map((item,i)=>{
               return <OrderItem key={i} item={item} host={host}/>
              })
            }
            
        </div>
      </div>
    </>
  );
};

export default MyOrders;
