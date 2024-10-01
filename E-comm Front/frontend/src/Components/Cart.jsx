import React, { useContext, useEffect, useState } from 'react'
import dataContext from '../../Context API/dataContext'
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const context = useContext(dataContext);
    const {cart,removeItemsFromCart,getCart} = context;
    
    const incrementQuantity = ()=>{
        if(quantity>=0){
            setQuantity(quantity+1);
            console.log(quantity)
        }
    }
    const decrementQuantity = ()=>{
        if(quantity>0){
            setQuantity(quantity-1);
            console.log(quantity)
        }
        
    }
    const removeItems = (e)=>{

        removeItemsFromCart(e.target.value)
    }
    useEffect(()=>{
      getCart();
    },[])
  return (
    <>
<div>
  <div className="breadcrumb">
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
            cart.length>0? <> <div className="shopping-cart-table ">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th className="cart-romove item">Remove</th>
                    <th className="cart-description item">Image</th>
                    <th className="cart-product-name item">Product Name</th>
                    <th className="cart-qty item">Quantity</th>
                    <th className="cart-sub-total item">Subtotal</th>
                    <th className="cart-total last-item">Grandtotal</th>
                  </tr>
                </thead>{/* /thead */}
                <tbody>

     {cart.map((item,i)=>{
        return <tr key={i}>
          {
            !item.product_varient_id && <>
            <td className="romove-item"><button  title="cancel" className="fa fa-trash icon" value={item._id} onClick={removeItems} style={{borderRadius: "20px",
    height: "3rem",
    width: "5rem",
    border: "1px",
    color: "red",fontSize:'1.5rem'}}></button></td>
            <td className="cart-image">
              <a className="entry-thumbnail" href="detail.html">
              <img src={`${props.host}${item.product_id.image}`} alt="loading" />
              </a>
            </td>
            <td className="cart-product-name-info" style={{textAlign:"center"}}>
              <h4 className="cart-product-description"><a href="detail.html">{item.product_id.product_name}</a></h4>
              <div className="row">
                <div className="col-sm-12">
                  <div className="rating rateit-small" />
                </div>
                <div className="col-sm-12">
                  <div className="reviews">
                    (06 Reviews)
                  </div>
                </div>
              </div>{/* /.row */}
            </td>
            <td className="cart-product-quantity">
              <div className="quant-input">
                <div className="arrows">
                  <div className="arrow plus gradient"><span className="ir" onClick={incrementQuantity}><i className="icon fa fa-sort-asc" />
                  </span></div>
                  <div className="arrow minus gradient"><span className="ir" onClick={decrementQuantity}><i className="icon fa fa-sort-desc" /></span></div>
                </div>
                <input type="text" defaultValue={quantity} />
              </div>    
            </td>
            <td className="cart-product-sub-total"><span className="cart-sub-total-price">₹{item.product_id.price} </span></td>
            <td className="cart-product-grand-total"><span className="cart-grand-total-price">₹{item.product_id.price} </span></td>
            </>
          }
          {
            !item.product_id && <>
            <td className="romove-item"><button  title="cancel" className="fa fa-trash icon" value={item._id} onClick={removeItems} style={{borderRadius: "20px",
    height: "3rem",
    width: "5rem",
    border: "1px",
    color: "red",fontSize:'1.5rem'}}></button></td>
            <td className="cart-image">
              <a className="entry-thumbnail" href="detail.html">
              <img src={`${props.host}${item.product_varient_id.varient_images[0]}`} alt="loading" />
              </a>
            </td>
            <td className="cart-product-name-info" style={{textAlign:"center"}}>
              <h4 className="cart-product-description"><a href="detail.html">{item.product_varient_id.varient_name}</a></h4>
              <div className="row">
                <div className="col-sm-12">
                  <div className="rating rateit-small" />
                </div>
                <div className="col-sm-12">
                  <div className="reviews">
                    (06 Reviews)
                  </div>
                </div>
              </div>{/* /.row */}
            </td>

            <td className="cart-product-quantity">
              <div className="quant-input">
                <div className="arrows">
                  <div className="arrow plus gradient"><span className="ir" onClick={incrementQuantity}><i className="icon fa fa-sort-asc" />
                  </span></div>
                  <div className="arrow minus gradient"><span className="ir" onClick={decrementQuantity}><i className="icon fa fa-sort-desc" /></span></div>
                </div>
                <input type="text" defaultValue={quantity} />
              </div>    
            </td>
            <td className="cart-product-sub-total"><span className="cart-sub-total-price">₹{item.product_varient_id.price} </span></td>
            <td className="cart-product-grand-total"><span className="cart-grand-total-price">₹{item.product_varient_id.price} </span></td>
            </>
          }
                    
                  </tr>
})}
                </tbody>{/* /tbody */}
                <tfoot>
                  <tr>
                    <td colSpan={7}>
                      <div className="shopping-cart-btn">
                        <span >
                          <a href="#" className="btn btn-upper btn-primary outer-left-xs">Continue Shopping</a>
                          <a href="#" className="btn btn-upper btn-primary pull-right outer-right-xs">Update shopping cart</a>
                        </span>
                      </div>{/* /.shopping-cart-btn */}
                    </td>
                  </tr>
                </tfoot>
              </table>{/* /table */}
            </div>
            </div>
            </> :
            <div>
              <h1>No Items in Cart.</h1>
            </div>
          }
          
         <div className="col-md-4 col-sm-12 estimate-ship-tax">
            <table className="table">
              <thead>
                <tr>
                  <th>
                    <span className="estimate-title">Estimate shipping and tax</span>
                    <p>Enter your destination to get shipping and tax.</p>
                  </th>
                </tr>
              </thead>{/* /thead */}
              <tbody>
                <tr>
                  <td>
                    <div className="form-group">
                      <label className="info-title control-label">Country <span>*</span></label>
                      <select className="form-control unicase-form-control selectpicker">
                        <option>--Select options--</option>
                        <option>India</option>
                        <option>SriLanka</option>
                        <option>united kingdom</option>
                        <option>saudi arabia</option>
                        <option>united arab emirates</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="info-title control-label">State/Province <span>*</span></label>
                      <select className="form-control unicase-form-control selectpicker">
                        <option>--Select options--</option>
                        <option>TamilNadu</option>
                        <option>Kerala</option>
                        <option>Andhra Pradesh</option>
                        <option>Karnataka</option>
                        <option>Madhya Pradesh</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="info-title control-label">Zip/Postal Code</label>
                      <input type="text" className="form-control unicase-form-control text-input" placeholder="Zip Code.."/>
                    </div>
                    <div className="pull-right">
                      <button type="submit" className="btn-upper btn btn-primary">GET A QOUTE</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>{/* /.estimate-ship-tax */}
          <div className="col-md-4 col-sm-12 estimate-ship-tax">
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
                      Subtotal<span className="inner-left-md">₹{cart.subtotal?cart.subtotal:0}</span>
                    </div>
                    <div className="cart-sub-total">
                      Shipping Charges<span className="inner-left-md">{cart.subtotal?'₹40':'₹0'}</span>
                    </div>
                    <div className="cart-grand-total">
                      Grand Total<span className="inner-left-md">₹ {cart.subtotal?cart.subtotal+ 40:0} </span>
                    </div>
                  </th>
                </tr>
              </thead>{/* /thead */}
              <tbody>
                <tr>
                  <td>
                    <div className="cart-checkout-btn pull-right">
                      <button type="submit" className="btn btn-primary checkout-btn">PROCCED TO CHEKOUT</button>
                      <span >Checkout with multiples address!</span>
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
