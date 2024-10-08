import React, { useContext } from "react";
import TrackOrders from "../TrackOrders";
import dataContext from "../../../Context API/dataContext";

const OrderItem = ({ item,host }) => {
const {FormatPrice} = useContext(dataContext);
  console.log(item && item);
  return (
    <>
    {
        item?.orderDetails?.map((detail)=>{
            return <><div
              className="mtop-2"
              style={{ border: "1px solid #878787", borderRadius: "1rem" }}
            >
              <div
                className="main display-flex p-2rem"
                style={{ justifyContent: "space-between", flexWrap: "wrap",paddingBottom:'0' }}
              >
                  <div className="display-flex" style={{width:'100%'}}> <img
                  style={{ objectFit: "contain", marginBottom: "1.3rem" }}
                  height={100}
                  width={100}
                  src={`${host}${detail.product_image}`}
                  alt=""
                />
                <p style={{ fontSize: "1.4rem",marginLeft:'5rem',width:'60%' }}>{detail.product_name}</p>
                <div style={{ position: "relative" }}>
                  <p style={{ fontWeight: "bold", fontSize: "17px" }}>
                    Delivered on due date
                  </p>
                  <p>Your item has been delivered</p>
                  <p>Rate your product</p>
                  
                 
                </div>
      
                  </div>
               
      
                <b className="price margin-left-2rem" style={{ fontSize: "2rem" }}>
                  {FormatPrice(detail.price?detail.price:0)}
                </b>
                
              </div>
              <hr />
              <div style={{padding:'1rem',position:'relative'}}>
              <p style={{ position: "absolute",right:'10px', bottom: "-10px", color: "black" }}>
                    {item.order_no}
                  </p>
                <TrackOrders status={item.status} />
              </div>
            </div>
          </>
        })  
    }
    </>
  );
};

export default OrderItem;
