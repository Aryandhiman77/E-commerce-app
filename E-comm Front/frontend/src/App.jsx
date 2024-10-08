import "./App.css";
import Home from "./Components/Home";
import Register from "./Components/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthState from "../Context API/AuthState";
import DataState from "../Context API/DataState";
import ProductDetail from "./Components/ProductDetail";
import Cart from "./Components/Cart";
import { useEffect, useState } from "react";
import Swal from 'sweetalert2'
import Checkout from "./Components/Checkout";
import Login from "./Components/login";
import Wishlist from "./Components/Wishlist";
import CategoryProducts from "./Components/CategoryProducts";
import ProductVarient from "./Components/ProductVarient";
import Header from "./Components/Header";
import PageNotFound from "./Components/PageNotFound";
import MyAccount from "./Components/MyAccount";
import ManageAddress from "./Components/Account/ManageAddress";
import OrderPage from "./Components/OrderPage";
import PaymentStatus from "./Components/PaymentStatus";
import ChakraRadioCard from "./Components/Elements/chakraRadioCard";
import TrackOrders from "./Components/TrackOrders";
import MyOrders from "./Components/Account/MyOrders";
import PrivateRoutes from "./Components/PrivateRoutes";
function App() {
  const host = import.meta.env.VITE_REACT_API_URL;
  
  const [alert, setAlert] = useState({
    success:"",
    message:"",
  })


  return (
    <Router>
      <AuthState host={host}>
      <DataState host={host}>
      <Header host={host} />
      <Routes>
      <Route exact path="/" element={<Home host={host}  />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />

        <Route exact path="/" element={<PrivateRoutes/>}>
        <Route exact path="/" element={<Home host={host}  />} />
        <Route exact path="my-account" element={<MyAccount host={host} />} >
          <Route exact path="my-account/profile" element={<MyAccount />} />
          <Route exact path="addresses" element={<MyAccount />} />
          <Route exact path="orders" element={<MyOrders/>} />
        </Route>

        
        <Route exact path="/product/:productSlug" element={<ProductDetail host={host} />} />
        <Route exact path="/cart" element={<Cart host={host} />} />
        <Route exact path="/wishlist" element={<Wishlist host={host} />} />
        
        <Route exact path="/checkout" element={<Checkout host={host} />} />
       
        <Route exact path="/:category" element={<CategoryProducts host={host} />} />
        <Route path="/product/:productSlug/:varient" element={<ProductVarient host={host} />} />
        <Route path="/order" element={<OrderPage/>} />
        <Route path="/paymentSuccess" element={<PaymentStatus/>} />
        
        <Route exact path="/trackOrders" element={<TrackOrders/>} />
        <Route path="*" element={<PageNotFound/>} />
        </Route>
        
      </Routes>
      </DataState>
    </AuthState>
    </Router>
  );
}

export default App;
