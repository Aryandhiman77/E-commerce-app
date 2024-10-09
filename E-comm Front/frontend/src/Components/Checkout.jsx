import React, { useContext, useEffect, useRef, useState } from "react";
import dataContext from "../../Context API/dataContext";
import Address from "./Account/SavedAddress";
import { useNavigate, useSearchParams } from "react-router-dom";
import Spinner from "./Elements/Spinner";
import { Link } from "react-router-dom";  
import orderplaced from '../assets/images/orderplaced.gif'
import staticImage from "../assets/images/staticimage.png"
import {
  Box,
  Button,
  ChakraProvider,
  Divider,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import PaymentStatus from "./PaymentStatus";
import { cartFetch } from "../Cart/cartSlice";
const Checkout = ({ host }) => {
  const gif = useRef(null);

  const [searchParams] = useSearchParams();

  const reference = searchParams.get('reference');
  const oid = searchParams.get('oid');
  const tid = searchParams.get('tid');
  
  console.log(reference,oid,tid)
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const [chosenAddress, setChosenAddress] = useState("");
  const [details, setDetails] = useState({});
  const [indexVar, setindex] = useState(0);
  const dispatch = useDispatch()
  // const [paymentMethod, setPaymentMethod] = React.useState('1')
  

  const { getAllShippingAddresses, shippingAddresses, FormatPrice,paymentHandler,Toast } =
    useContext(dataContext);
  const cartItems = cart?.data?.getAllCarts || [];
  const cartItemsIds = cartItems?.map(item => {
    // Check if product_id exists
    if (item.product_id) {
      return `p_id-${item.product_id._id}-${item.quantity}`; // Return product ID
    } 
    // If product_id does not exist, ensure product_varient_id is also available
    if (item.product_varient_id) {
      return `p_v_id-${item.product_varient_id._id}-${item.quantity}`; // Return variant ID with quantity
    }
    return null; // Return null if neither ID is available
  }).filter(id => id !== null); // Remove null values from the final array
  
  console.log(cartItemsIds)

  const subtotal = cart?.subtotal;
  const steps = [
    { title: "Initiate order", description: "" },
    { title: "Shipping Information", description: " " },
    { title: "Payment", description: " " },
    { title: "Order Placed", description: " " },
  ];

  
  if(reference && tid && oid){
    setTimeout(() => {
      gif.current.style.height="135px";
        gif.current.style.width="135px";
        gif.current.src=staticImage; 
        gif.current.style.marginLeft="4px"; 
        gif.current.style.marginBottom="10px"; 
        window.stop();
      }, 2500) 
}

  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });
  const continuebtn = () => {
    setindex(indexVar + 1);
    
  };


  const onchange = (e) => {
    if(!details.paymentMethod){
      details.paymentMethod="card"
    }
      setDetails({ ...details, [e.target.name]: e.target.value });
    
  };

  const makePayment = ()=>{
    if(!details.amount){
      details.amount=subtotal;
    }
    
    if(!details.discountAmount){
      details.discountAmount=0
    }
    if(!details.grossAmount){
      details.grossAmount=subtotal
    }
    if(!details.netAmount){
      details.netAmount=subtotal
    }
    if(!details.shippingAmount){
      details.shippingAmount=40
    }
    paymentHandler(details,cartItemsIds)
  }
  

  useEffect(() => {
    if (cart?.data?.getAllCarts?.length > 0) {
      if (indexVar <= 0) {
        setindex(1);
      }
    }else if(reference && oid && tid){
      setindex(4);
    }
    else {
      navigate("/cart");
      Toast.fire({
        icon:"error",
        title:"<b className='alert'>No items in cart</b>"
      })

    }
    dispatch(cartFetch());
    getAllShippingAddresses();
  }, [indexVar]);
  return (
    <div className="container" >
      <ChakraProvider>
        <Stepper size="lg" colorScheme="red" index={indexVar} mt={5}>
          {steps.map((step, index) => (
            <Step key={index}>
              <StepIndicator>
                <StepStatus
                  complete={<StepIcon />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
                />
              </StepIndicator>

              <Box flexShrink="0">
                <StepTitle m={0}>
                  <h4>{step.title}</h4>
                </StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </Box>
              <StepSeparator />
            </Step>
          ))}
        </Stepper>
        {indexVar === 1 && (
          <>
            <RadioGroup
              onChange={setChosenAddress}
              value={chosenAddress}
              mt={30}
            >
              <Stack direction="column" spacing={4}>
                {!shippingAddresses ? (
                  <Spinner />
                ) : (
                  shippingAddresses?.map((address, i) => (
                    <Box
                    onClick={()=> window.scrollTo({
                      top: 1000,
                      behavior: 'smooth',
                  })}
                      key={i}
                      as="label"
                      width="100%"
                      p={4}
                      borderWidth="1px"
                      borderRadius="md"
                      cursor="pointer"
                      _hover={{ bg: "gray.100" }}
                      _checked={{ bg: "blue.50", borderColor: "blue.600" }}
                    >
                      <Radio
                      
                        value={address._id}
                        name="shippingAddress"
                        onChange={onchange}
                      />
                      <Address address={address} hideButtons={true} />
                    </Box>
                  ))
                )}
              </Stack>
            </RadioGroup>
            {chosenAddress ? (
              <button className="btn btn-primary mtop-2 margin-bottom-2rem"  onClick={continuebtn}>
                Continue
              </button>
            ) : (
              ""
            )}
          </>
        )}
        {indexVar === 2 && (
          <>
            <TableContainer mt={20} border={"0px"}>
              <Table w={"100%"} fontSize={"1.4rem"}>
                <TableCaption>Order Summary</TableCaption>
                <Thead>
                  <Tr>
                    <Th fontSize={"2rem"} fonts>
                      Item Image
                    </Th>
                    <Th fontSize={"2rem"} fonts>
                      Item Name
                    </Th>
                    <Th fontSize={"2rem"} isNumeric>
                      Quantity
                    </Th>
                    <Th fontSize={"2rem"} isNumeric>
                      Price
                    </Th>
                    <Th fontSize={"2rem"} isNumeric>
                      Subtotal
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {cartItems?.map((item) => {
                    return (
                      <Tr>
                        <Td>
                          <Card
                            direction={{ base: "column", sm: "row" }}
                            overflow="hidden"
                            variant="outline"
                            maxW={"fit-content"}
                          >
                            <Image
                              objectfit="cover"
                              maxW={{ base: "100%", sm: "100px" }}
                              maxH={{ base: "100%", sm: "100px" }}
                              src={`${host}/${
                                item.product_id
                                  ? item.product_id.image
                                  : item.product_varient_id?.varient_images[0]
                              }`}
                              alt="Caffe Latte"
                            />
                          </Card>
                        </Td>

                        <Td>
                          <b>
                            {item.product_id
                              ? item.product_id.product_name
                              : item.product_varient_id?.varient_name}
                          </b>
                        </Td>
                        <Td isNumeric>{item.quantity}</Td>
                        <Td isNumeric>
                          {FormatPrice(
                            item.product_id
                              ? item.product_id.price
                              : item.product_varient_id?.price
                          )}
                        </Td>
                        <Td isNumeric>
                          {FormatPrice(
                            item.quantity *
                              (item.product_id
                                ? item.product_id.price
                                : item.product_varient_id?.price)
                          )}
                        </Td>
                      </Tr>
                    );
                  })}

                  <Tr>
                    <Td fontSize={"4xl"}>
                      <b>Payable Amount</b>
                    </Td>
                    <Td></Td>
                    <Td isNumeric></Td>
                    <Td isNumeric></Td>
                    <Td isNumeric fontSize={"2xl"}>
                      <i>{FormatPrice(subtotal)}</i>
                    </Td>
                    {/* <Td isNumeric><button className="btn btn-danger">Pay {FormatPrice(subtotal)}</button></Td> */}
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
            <Divider/>
            <h2 className="text-center" style={{marginTop:'2rem',marginBottom:'4rem'}}>Choose payment method</h2>
            <div className="grid">
  <label className="card">
    <input name="paymentMethod" value={"card"} onChange={onchange} className="radio" type="radio" defaultChecked />
    <span className="plan-details">
      <span className="plan-type">Card</span>
      <span className="plan-cost">{FormatPrice(cart.subtotal)}</span>
      <img 
      objectfit="cover"
      width={190}
        src="https://www.mastercard.us/content/dam/public/mastercardcom/na/us/en/smb/other/mc-business-card-1280x720.png"
        class="img-fluid rounded-top"
        alt=""
      />
    </span>
  
  </label>
  <label className="card">
    <input name="paymentMethod" value={"netbanking"} onChange={onchange} className="radio" type="radio"  />
    <span className="plan-details">
      <span className="plan-type">Netbanking</span>
      <span className="plan-cost">{FormatPrice(cart.subtotal)}</span>
      <img 
      objectfit="cover"
      width={105}
        src="https://cdn.iconscout.com/icon/free/png-256/free-netbanking-icon-download-in-svg-png-gif-file-formats--credit-debit-card-bank-transaction-payment-methods-vol-3-pack-business-icons-32318.png"
        class="img-fluid rounded-top"
        alt=""
      />
    </span>
  
  </label>
  <label className="card">
    <input name="paymentMethod" value={"cod"} onChange={onchange} className="radio" type="radio" />
    {/* <span className="hidden-visually">Pro - $50 per month, 5 team members, 500 GB per month, 5 concurrent builds</span> */}
    <span className="plan-details" aria-hidden="true">
      <span className="plan-type">Cash on Delivery</span>
      <span className="plan-cost">{FormatPrice(cart.subtotal)}</span>
      {/* <span>5 team members</span>
      <span>500 GB/mo</span>
      <span>5 concurrent builds</span> */}
      
      <img width={105}
        src="https://static.vecteezy.com/system/resources/previews/020/574/330/original/cash-on-delivery-badge-pack-free-png.png"
        class="img-fluid rounded-top"
        alt=""
      />
      
      
    </span>
  </label>
  <label className="card">
    <input name="paymentMethod" value={"upi"} onChange={onchange} className="radio" type="radio" />
    <span className="hidden-visually">Business - $200 per month, 5+ team members, 1000 GB per month, Unlimited builds</span>
    <span className="plan-details" aria-hidden="true">
      <span className="plan-type">UPI</span>
      <span className="plan-cost">{FormatPrice(cart.subtotal)}</span>
      <img width={100}
        src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/upi-icon.png"
        class="img-fluid rounded-top"
        alt=""
      />
      
    </span>
  </label>
</div>
{details.paymentMethod && (
  <div style={{display:'flex',justifyContent:'center'}}>
  <button className="btn btn-danger mtop-2"
              style={{marginBottom:"4rem"}}
              onClick={makePayment}>
                Pay {FormatPrice(subtotal)}
              </button>
  </div>
              
            )
}
          </>
        )}
       
        {
          indexVar===4 && (!reference && !oid &&!tid ? <Spinner/> : <div>
          {(
              <div className="display-flex justify-center align-center" style={{flexFlow:'column',marginTop:'4rem',background:'#f7f7f7',minHeight:'50rem'}}>
                <h1 style={{zIndex:'5',color:"#8a8d90"}} >Order Placed Successfully.</h1>
                <div style={{height:"220px",width:'320px',display:"flex",justifyContent:'center',alignItems:'center'}}>
                <img ref={gif} src={orderplaced} alt=""  />
                </div>
                <p>Your Order id is <b>{oid}</b></p>
                <p>Your payment reference id is <b>{reference}</b></p>
                {
                  tid.length===6?<p>Your payment Auth code is <b>{tid}</b></p>:<p>Your payment transaction id is <b>{tid}</b></p>
                }
                
                
                <p>You can use your order id to track your order.</p>
                <Link to={'/my-account/orders'} className="btn btn-success capitalize mtop-2 margin-bottom-2rem">Check your orders</Link>
                <button className="btn btn-primary capitalize margin-bottom-2rem" onClick={()=>navigate('/')}>Continue shopping</button>
            </div>
           
          )}
        </div>)
        }
      </ChakraProvider>
    </div>
  );
};

export default Checkout;


