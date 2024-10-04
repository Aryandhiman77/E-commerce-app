import React,{useContext, useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import dataContext from '../../Context API/dataContext';
import { cartFetch, removeItem, updateItem } from '../Cart/cartSlice';
import { Link } from 'react-router-dom';


const CartItem = ({item,host}) => {
  const {FormatPrice} = useContext(dataContext)

    const dispatch = useDispatch();
    const [quantity, setquantity] = useState(item.quantity);

    
    let cartid = item._id;
    const incrementQnty =(e)=> {
    let product_id = e.target.value;
        console.log('incrementing.')
        if(item.product_id){
            quantity >=1 ? (quantity<item.product_id.stock_quantity?setquantity(quantity+1):"") : '';
              dispatch(updateItem({cartid,product_id,quantity:quantity+1})).then(()=>{
                dispatch(cartFetch());
              })
            
        }else if(item.product_varient_id){
            quantity >=1 ? (item.product_varient_id.stock_quantity>quantity?setquantity(quantity+1):"") : '';
              dispatch(updateItem({cartid,product_varient_id:item.product_varient_id,quantity:quantity+1})).then(()=>{
                dispatch(cartFetch());
              })
        }
       
      }

      const decrementQuantity=(e)=>{
        
         quantity<=1 ? '' : setquantity(quantity-1)
        let product_idOrVarient_id = e.target.value;
        if(item.product_id){
            dispatch(updateItem({cartid,product_id:product_idOrVarient_id,quantity:quantity-1})).then(()=>{
                dispatch(cartFetch());
              })
        }
        if(item.product_varient_id){
            dispatch(updateItem({cartid,product_varient_id:product_idOrVarient_id,quantity:quantity-1})).then(()=>{
                dispatch(cartFetch());
              })
        }
      }
      const removeItemFromCart = (e)=>{
        dispatch(removeItem({ cartid: e.target.value })).then(() => {
            dispatch(cartFetch()); // Fetch updated cart after item removal
          });
      }

      
  return (
    <>
      <tr style={{background:item.product_id?.stock_quantity<=0||item.product_varient_id?.stock_quantity<=0?'#fff1f1':''}}>
          {
            !item.product_varient_id && <>
            <td className="romove-item"><button  title="Remove Item" className="fa fa-trash icon" value={item._id} onClick={removeItemFromCart} style={{borderRadius: "20px",
    height: "3rem",
    width: "5rem",
    border: "1px",
    color: "red",fontSize:'1.5rem'}}></button></td>
            <td className="cart-image">
              <Link className="entry-thumbnail" to={`http://localhost:5173/product/${item.product_id.product_url_slug}`}>
              <img src={`${host}${item.product_id.image}`} alt="loading" />
              </Link>
            </td>
            <td className="cart-product-name-info" style={{textAlign:"center"}}>
              <h4 className="cart-product-description"><Link to={`http://localhost:5173/product/${item.product_id.product_url_slug}`}>{item.product_id.product_name}</Link></h4>
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
            {
                    item.product_id.stock_quantity<=0? <h5 className='text-danger'>Out of stock.</h5>:
                
              <div className="quant-input">
                <div className="arrows">
                  <div className="arrow plus gradient"><span className="ir" ><button onClick={incrementQnty} value={item.product_id._id} className="incDecIcons icon fa fa-sort-asc" />
                  </span></div>
                  <div className="arrow minus gradient"><span className="ir" ><button onClick={decrementQuantity} value={item.product_id._id} className="incDecIcons icon fa fa-sort-desc" /></span></div>
                </div>
                
                <input type="text" value={quantity}  readOnly/>
              </div>  
              }  
            </td>
            <td className="cart-product-sub-total"><span className="cart-sub-total-price">{FormatPrice(item.product_id.price)} </span></td>
            <td className="cart-product-grand-total"><span className="cart-grand-total-price">{FormatPrice(item.product_id.price * item.quantity)} </span></td>
            </>
          }
          {
            !item.product_id && <>
            <td className="romove-item"><button  title="cancel" className="fa fa-trash icon" value={item._id} onClick={removeItemFromCart} style={{borderRadius: "20px",
    height: "3rem",
    width: "5rem",
    border: "1px",
    color: "red",fontSize:'1.5rem'}}></button></td>
            <td className="cart-image">
              <Link className="entry-thumbnail" href="detail.html">
              <img src={`${host}${item.product_varient_id.varient_images[0]}`} alt="loading" />
              </Link>
            </td>
            <td className="cart-product-name-info" style={{textAlign:"center"}}>
              <h4 className="cart-product-description"><Link href="detail.html">{item.product_varient_id.varient_name}</Link></h4>
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
                    {
                        item.product_id&&<><div className="arrow plus gradient"><span className="ir" ><button onClick={incrementQnty} value={item.product_id._id}  className="incDecIcons icon fa fa-sort-asc" />
                        </span></div>
                        <div className="arrow minus gradient" ><span className="ir" onClick={decrementQuantity}><button className="incDecIcons icon fa fa-sort-desc" /></span></div></>
                        
                        
                    }
                    {
                        item.product_varient_id&&<><div className="arrow plus gradient"><span className="ir" ><button onClick={incrementQnty} value={item.product_varient_id._id}  className="incDecIcons icon fa fa-sort-asc" />
                        </span></div>
                        <div className="arrow minus gradient" ><span className="ir"><button className="incDecIcons icon fa fa-sort-desc" onClick={decrementQuantity} value={item.product_varient_id._id} /></span></div></>
                    }
                    
                  
                </div>
                
                <input type="text" value={quantity}  readOnly/>
              </div>    
            </td>
            <td className="cart-product-sub-total"><span className="cart-sub-total-price">{FormatPrice(item.product_varient_id.price) } </span></td>
            <td className="cart-product-grand-total"><span className="cart-grand-total-price" >{FormatPrice(item.product_varient_id.price * quantity)} </span></td>
            </>
          }
                    
        </tr>
    </>
  )}

export default CartItem
