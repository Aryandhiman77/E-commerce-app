import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {cartFetch}  from '../Cart/cartSlice';
import CartItem from './CartItem';
import { Link, useNavigate } from 'react-router-dom';
import dataContext from '../../Context API/dataContext';

const Cart = (props) => {

  const { FormatPrice,paymentHandler} = useContext(dataContext);
  const data = useSelector(state=>state.cart)
  const subtotal = data.data && data.subtotal;
  const cart = data.data?.getAllCarts || [];
    const dispatch = useDispatch();
    const handlePayment= ()=>{
      let paymentObj = {
        amount:parseInt(subtotal+40),
        details:{
          "d":""
        }
      }
      paymentHandler();
    }
    
    useEffect(()=>{

      dispatch(cartFetch());
    },[dispatch])
  return (
    
    <>
<div>
  {/* <h1>{quantity}</h1> */}
  <div className="breadcrumb">
    {/* <button onClick={(e)=>dispatch(addItem(cart))}>add item</button> */}
    <div className="container">
      <div className="breadcrumb-inner">
        <ul className="list-inline list-unstyled">
          <li><a href="#">Home</a></li>
          <li className="active">Shopping Cart</li>
        </ul>
      </div>{/* /.breadcrumb-inner */}
    </div>{/* /.container */}
  </div>{/* /.breadcrumb */}
  <div className="body-content outer-top-xs">
    <div className="container">
      <div className="row ">
        <div className="shopping-cart">
          {
            data.data?.getAllCarts?.length>0? <> <div className="shopping-cart-table ">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th className="cart-romove item">Remove</th>
                    <th className="cart-description item">Image</th>
                    <th className="cart-product-name item">Product Name</th>
                    <th className="cart-qty item">Quantity</th>
                    <th className="cart-sub-total item">Price</th>
                    <th className="cart-total last-item">Grandtotal</th>
                  </tr>
                </thead>{/* /thead */}
                <tbody>

     {cart.map((item,i)=>{
        return <CartItem key={i} item={item}  host={props.host} />
})}
                </tbody>{/* /tbody */}
                <tfoot>
                  <tr>
                    <td colSpan={7}>
                      <div className="shopping-cart-btn">
                        <span >
                          <Link to={'/'} className="btn btn-upper btn-primary outer-left-xs">Continue Shopping</Link>
                        </span>
                      </div>{/* /.shopping-cart-btn */}
                    </td>
                  </tr>
                </tfoot>
              </table>{/* /table */}
            </div>
            </div>
            </> :
            <>
             <div className='display-flex align-center flex-column'>
              <h1>No items in cart.</h1>
              <img height={300} width={400} src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-file-formats--state-no-items-zero-page-added-states-pack-design-development-illustrations-4610092.png?f=webp" alt="" />
                        <Link to={'/'} className="btn btn-primary margin-bottom-2rem">Continue Shopping</Link>
            </div>



            </>
           
            
          }
          
         {/* /.estimate-ship-tax */}
          <div className="col-md-8 col-sm-12 estimate-ship-tax">
            <table className="table">
              <thead>
                <tr>
                  <th>
                    <span className="estimate-title">Discount Code</span>
                    <p>Enter your coupon code if you have one..</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="form-group">
                      <input type="text" className="form-control unicase-form-control text-input" placeholder="You Coupon.." />
                    </div>
                    <div className="clearfix pull-right">
                      <button type="submit" className="btn-upper btn btn-primary">APPLY COUPON</button>
                    </div>
                  </td>
                </tr>
              </tbody>{/* /tbody */}
            </table>{/* /table */}
          </div>{/* /.estimate-ship-tax */}
          <div className="col-md-4 col-sm-12 cart-shopping-total">
            <table className="table">
              <thead>
                <tr>
                  <th>
                    <div className="cart-sub-total">
                      Subtotal<span className="inner-left-md">{FormatPrice(subtotal)}</span>
                    </div>
                    <div className="cart-sub-total">
                      Shipping Charges<span className="inner-left-md">{FormatPrice(40)}</span>
                    </div>
                    <div className="cart-grand-total">
                      Grand Total<span className="inner-left-md">{FormatPrice(subtotal+ 40)} </span>
                    </div>
                  </th>
                </tr>
              </thead>{/* /thead */}
              <tbody>
                <tr>
                  <td>
                    <div className="cart-checkout-btn pull-right">
                      <Link to={'/checkout'} className="btn btn-primary checkout-btn">PROCCED TO CHEKOUT</Link>
                      {/* <button className='btn btn-primary' onClick={handlePayment}>Checkout</button> */}
                    </div>
                  </td>
                </tr>
              </tbody>{/* /tbody */}
            </table>{/* /table */}
          </div>{/* /.cart-shopping-total */}			</div>{/* /.shopping-cart */}
      </div> {/* /.row */}
      {/* ============================================== BRANDS CAROUSEL ============================================== */}
      <div id="brands-carousel" className="logo-slider wow fadeInUp">
        <div className="logo-slider-inner">	
          <div id="brand-slider" className="owl-carousel brand-slider custom-carousel owl-theme">
            <div className="item m-t-15">
              <a href="#" className="image">
                <img data-echo="assets/images/brands/brand1.png" src="assets/images/blank.gif" alt="loading" />
              </a>	
            </div>{/*/.item*/}
            <div className="item m-t-10">
              <a href="#" className="image">
                <img data-echo="assets/images/brands/brand2.png" src="assets/images/blank.gif" alt="loading" />
              </a>	
            </div>{/*/.item*/}
            <div className="item">
              <a href="#" className="image">
                <img data-echo="assets/images/brands/brand3.png" src="assets/images/blank.gif" alt="loading" />
              </a>	
            </div>{/*/.item*/}
            <div className="item">
              <a href="#" className="image">
                <img data-echo="assets/images/brands/brand4.png" src="assets/images/blank.gif" alt="loading" />
              </a>	
            </div>{/*/.item*/}
            <div className="item">
              <a href="#" className="image">
                <img data-echo="assets/images/brands/brand5.png" src="assets/images/blank.gif" alt="loading" />
              </a>	
            </div>{/*/.item*/}
            <div className="item">
              <a href="#" className="image">
                <img data-echo="assets/images/brands/brand6.png" src="assets/images/blank.gif" alt="loading" />
              </a>	
            </div>{/*/.item*/}
            <div className="item">
              <a href="#" className="image">
                <img data-echo="assets/images/brands/brand2.png" src="assets/images/blank.gif" alt="loading" />
              </a>	
            </div>{/*/.item*/}
            <div className="item">
              <a href="#" className="image">
                <img data-echo="assets/images/brands/brand4.png" src="assets/images/blank.gif" alt="loading" />
              </a>	
            </div>{/*/.item*/}
            <div className="item">
              <a href="#" className="image">
                <img data-echo="assets/images/brands/brand1.png" src="assets/images/blank.gif" alt="loading" />
              </a>	
            </div>{/*/.item*/}
            <div className="item">
              <a href="#" className="image">
                <img data-echo="assets/images/brands/brand5.png" src="assets/images/blank.gif" alt="loading" />
              </a>	
            </div>{/*/.item*/}
          </div>{/* /.owl-carousel #logo-slider */}
        </div>{/* /.logo-slider-inner */}
      </div>{/* /.logo-slider */}
      {/* ============================================== BRANDS CAROUSEL : END ============================================== */}	</div>{/* /.container */}
  </div>{/* /.body-content */}
  {/* ============================================================= FOOTER ============================================================= */}
  {/* ============================================== INFO BOXES ============================================== */}
  <div className="row our-features-box">
    <div className="container">
      <ul>
        <li>
          <div className="feature-box">
            <div className="icon-truck" />
            <div className="content-blocks">We ship worldwide</div>
          </div>
        </li>
        <li>
          <div className="feature-box">
            <div className="icon-support" />
            <div className="content-blocks">call 
              +1 800 789 0000</div>
          </div>
        </li>
        <li>
          <div className="feature-box">
            <div className="icon-money" />
            <div className="content-blocks">Money Back Guarantee</div>
          </div>
        </li>
        <li>
          <div className="feature-box">
            <div className="icon-return" />
            <div className="content">30 days return</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>

    </>
  )
}

export default Cart
