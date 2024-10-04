import React, { useContext, useEffect } from 'react'
import dataContext from '../../Context API/dataContext'
import Product from './Product'
import { Link } from 'react-router-dom'
import { addItem, cartFetch } from '../Cart/cartSlice'
import { useDispatch } from 'react-redux'

const Wishlist = (props) => {
  const dispatch = useDispatch();
    const {getWishlist,wishlist,removeItemsFromWishlist} = useContext(dataContext) 
    useEffect(()=>{
        getWishlist();
    },[])
    const handleAddtoCart=(e)=>{
      let productid = e.target.value;
      dispatch(addItem({ product_id:productid, quantity: 1 })).then(()=>{
        dispatch(cartFetch());
      })
    }
    const handleRemoveFromWishlist=(e)=>{
        console.log(e.target.value)
        removeItemsFromWishlist(e.target.value);
    }
  return (
    <div>
        {/* <h1>{wishlist.length}</h1> */}
  <div className="breadcrumb">
    <div className="container">
      <div className="breadcrumb-inner">
        <ul className="list-inline list-unstyled">
          <li><a href="home.html">Home</a></li>
          <li className="active">Wishlist</li>
        </ul>
      </div>{/* /.breadcrumb-inner */}
    </div>{/* /.container */}
  </div>{/* /.breadcrumb */}
  <div className="body-content">
  <div className="container">
    <div className="my-wishlist-page">
      <div className="row">
        <div className="col-md-12 my-wishlist">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th colSpan={4} className="heading-title">My Wishlist</th>
                </tr>
              </thead>
              {wishlist.length>0?
              <tbody>
                
                  {
                      wishlist.map((item,i)=>{
          return <tr key={i} >
              {!item.product_id &&<>
                  <td className="col-md-2 col-sm-6 col-xs-6"><img src={`${props.host}${item.product_varient_id.varient_images[0]}`} alt="imga" /></td>
                  <td className="col-md-7 col-sm-6 col-xs-6">
                    <div className="product-name"><a href="#">{item.product_varient_id.varient_name}</a></div>
                    <div className="rating">
                      <i className="fa fa-star rate" />
                      <i className="fa fa-star rate" />
                      <i className="fa fa-star rate" />
                      <i className="fa fa-star rate" />
                      <i className="fa fa-star non-rate" />
                      <span className="review">( 06 Reviews )</span>
                    </div>
                    <div className="price">
                      $400.00
                      <span>$900.00</span>
                    </div>
                  </td>
                  <td className="col-md-2 ">
                    <button value={item.product_varient_id._id} onClick={handleAddtoCart} className="btn-upper btn btn-primary">Add to cart</button>
                  </td>
                  <td className="col-md-1 close-btn">
                    <button className='my_btn_style fa fa-times' style={{position:'relative',color:"red"
                    }} value={item._id} onClick={handleRemoveFromWishlist}></button>
                  </td>
              </> }
              {!item.product_varient_id &&<>
                  <td className="col-md-2 col-sm-6 col-xs-6"><img src={`${props.host}${item.product_id.image}`} alt="imga" /></td>
                  <td className="col-md-7 col-sm-6 col-xs-6">
                    <div className="product-name"><a href="#">{item.product_id.product_name}</a></div>
                    <div className="rating">
                      <i className="fa fa-star rate" />
                      <i className="fa fa-star rate" />
                      <i className="fa fa-star rate" />
                      <i className="fa fa-star rate" />
                      <i className="fa fa-star non-rate" />
                      <span className="review">( 06 Reviews )</span>
                    </div>
                    <div className="price">
                    ₹{item.product_id.price}
                      <span>$900.00</span>
                    </div>
                  </td>
                  <td className="col-md-2 ">
                    <button value={item.product_id._id} onClick={handleAddtoCart} className="btn-upper btn btn-primary">Add to cart</button>
                  </td>
                  <td className="col-md-1 close-btn">
                    <button className='my_btn_style fa fa-times' style={{position:'relative',color:"red"
                    }} value={item._id} onClick={handleRemoveFromWishlist}  ></button>
                  </td>
              </> }
                  
                </tr>
                      })
                  }
                
                
              </tbody>
              :
              <h1>No items in wishlist.</h1>
                }
            </table>
          </div>
        </div>			</div>{/* /.row */}
    </div>
    
    {/* /.sigin-in*/}
    {/* ============================================== BRANDS CAROUSEL ============================================== */}
   
    {/* ============================================== BRANDS CAROUSEL : END ============================================== */}	</div>{/* /.container */}
</div>

  
</div>

  )
}

export default Wishlist
