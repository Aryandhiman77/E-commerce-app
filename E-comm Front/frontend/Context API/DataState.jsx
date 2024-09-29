import dataContext from "./dataContext";

import React, { useState } from 'react'
const DataState = (props) => {
    const [products,setProducts] = useState([]);
    const [categories,setCategories] = useState([]);
    const [cart,setCart] = useState([]);
    const [wishlist,setWishlist] = useState([]);
    const [viewProduct,setViewProduct] = useState({});
    const [productImages,setProductImages] = useState([]);
    const [categoryProducts,setCategoryProducts]= useState([]);
    const [viewVarient,setViewVarient] = useState([]);
    const [varientImages,setVarientImages] = useState([]);
    

    const Toast = Swal.mixin({
        toast: true,
        position: "bottom",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      
    const fetchProducts=async()=>{
        const fetchProducts = await fetch(`${props.host}api/v1/product/`,{
            headers:{
                "authorization":`bearer ${JSON.parse(JSON.stringify(localStorage.getItem("token")))}`,
                "Content-type":"application/json",
                "isactive":true,

            }
        })
        const data = await fetchProducts.json();
        if(data.success){
            setProducts(data.products)
            
        }else{
            console.log(data);
        }   
    }
    const getProduct=async(slug)=>{
        const fetchProducts = await fetch(`${props.host}api/v1/product/detail/${slug}`,{
            headers:{
                "authorization":`bearer ${JSON.parse(JSON.stringify(localStorage.getItem("token")))}`,
                "Content-type":"application/json",
                "isactive":true,
            }
        })
        const data = await fetchProducts.json();
        if(data.success){
            setViewProduct(data.product)
            let setImages=[] ;
            setImages.push(props.host+data.product.image);
            data.product.product_images.map((image)=>{
                setImages.push(props.host+image);
            })
            setProductImages(setImages)
            
        }else{
            console.log(data);
        }   
    }
    const getProductVarients=async(slug)=>{
        const fetchProducts = await fetch(`${props.host}api/v1/varient/`,{
            headers:{
                "authorization":`bearer ${JSON.parse(JSON.stringify(localStorage.getItem("token")))}`,
                "Content-type":"application/json",
                "isactive":true,
                "slug":slug
            }
        })
        const data = await fetchProducts.json();
        if(data.success){
            // console.log(data.varient)
            setViewVarient(data.varient)
            let setImages=[] ;
            data.varient.varient_images.map((image)=>{
                setImages.push(props.host+image);
            })
            setImages = setImages.filter((image)=>{
                return image !=="http://localhost:8000/defaultProductImage/defaultProduct.jpg"
            })
            setVarientImages(setImages)
            console.log(data);
            
        }else{
            console.log(data);
        }   
    }
    
    const fetchCategories = async()=>{
        const response = await fetch(`${props.host}api/v1/category`,{
            headers:{
                "authorization":`bearer ${JSON.parse(JSON.stringify(localStorage.getItem("token")))}`,
                "Content-type":"application/json",
                "isactive":true
            },
            
        })
        const data = await response.json();
        if(data.success){
            setCategories(data.categories)
        }else{
            console.log(data);
        }
    }
    const capitalizeFirstLetter=(str)=>{
        return str.charAt(0).toUpperCase()+str.slice(1).toLowerCase();
    }
    const addToCart = async(details)=>{
        const response = await fetch(`${props.host}api/v1/cart/`,{
            method:"POST",
            headers:{
                "authorization":`bearer ${JSON.parse(JSON.stringify(localStorage.getItem("token")))}`,
                "Content-type":"application/json",
            },
            body:JSON.stringify({
                product_id:details.productid,
                quantity:details.quantity,
                product_varient_id:details.varientid
            })
        })
        const result = await response.json();
        if(result.success){
            getCart();
            Toast.fire({
                icon: "success",
                title: `<h5>${capitalizeFirstLetter(result.message)}</h5>`
              });
        }else{
            if(result.message==="Please login first."){
                Toast.fire({
                    icon: "error",
                    title: `<h5>${capitalizeFirstLetter(result.message)}</h5>`
                  });
            }else{
                removeItemsFromCart(result.checkProductInCart[0]._id);
            }
        }
    }
    const getCart = async()=>{
        const response = await fetch(`${props.host}api/v1/cart/`,{
            headers:{
                "authorization":`bearer ${JSON.parse(JSON.stringify(localStorage.getItem("token")))}`,
                "Content-type":"application/json",
            }
        })
        const result = await response.json();
        if(result.success){
            let subtotal=0;
            result.getAllCarts.forEach(item => {
                if(!item.product_id){
                    subtotal = subtotal + item.product_varient_id.price * item.quantity;
                }
                else if (!item.product_varient_id){
                    subtotal = subtotal + item.product_id.price * item.quantity;
                }

            });
            result.getAllCarts.subtotal=subtotal;
            setCart(result.getAllCarts)
            
        }else{
            console.log(result)
        }
    }
    const removeItemsFromCart = async(itemid)=>{
        const response = await fetch(`${props.host}api/v1/cart/${itemid}`,{
            method:"DELETE",
            headers:{
                "authorization":`bearer ${JSON.parse(JSON.stringify(localStorage.getItem("token")))}`,
                "Content-type":"application/json",
            }
        })
        const result = await response.json();
        if(result.success){
            // setCart(...cart,deleteItem)
            getCart();
            Toast.fire({
                icon: "success",
                title: `<h5>${capitalizeFirstLetter(result.message)}</h5>`
              });
            
        }else{
            Toast.fire({
                icon: "error",
                title: `<h5>${capitalizeFirstLetter(result.message)}</h5>`
              });
        }
    }
    const addToWishlist = async(details)=>{
        const response = await fetch(`${props.host}api/v1/wishlist/`,{
            method:"POST",
            headers:{
                "authorization":`bearer ${JSON.parse(JSON.stringify(localStorage.getItem("token")))}`,
                "Content-type":"application/json",
            },
            body:JSON.stringify({
                product_id:details.productid
            })
        })
        const result = await response.json();
        if(result.success){
            getWishlist();
            Toast.fire({
                icon: "success",
                title: `<h5>${capitalizeFirstLetter(result.message)}</h5>`
              });
        }else{
            if(result.message==="Please login first."){
                Toast.fire({
                    icon: "error",
                    title: `<h5>${capitalizeFirstLetter(result.message)}</h5>`
                  });
            }else{
                removeItemsFromWishlist(result.checkProductInWishlist[0]._id)
            }
            
        }
    }

    const getWishlist = async()=>{
        const response = await fetch(`${props.host}api/v1/wishlist/`,{
            headers:{
                "authorization":`bearer ${JSON.parse(JSON.stringify(localStorage.getItem("token")))}`,
                "Content-type":"application/json",
            }
        })
        const result = await response.json();
        if(result.success){
            setWishlist(result.wishlist)
        }else{
            console.log(result)
        }
    }
    const removeItemsFromWishlist = async(itemid)=>{
        const response = await fetch(`${props.host}api/v1/wishlist/${itemid}`,{
            method:"DELETE",
            headers:{
                "authorization":`bearer ${JSON.parse(JSON.stringify(localStorage.getItem("token")))}`,
                "Content-type":"application/json",
            }
        })
        const result = await response.json();
        if(result.success){
            // setCart(...cart,deleteItem)
            getWishlist();
            Toast.fire({
                icon: "success",
                title: `<h5>${capitalizeFirstLetter(result.message)}</h5>`
              });
            
        }else{
            Toast.fire({
                icon: "error",
                title: `<h5>${capitalizeFirstLetter(result.message)}</h5>`
              });
        }
    }
    const getCategoryProducts = async(cat_slug)=>{
        const response = await fetch(`${props.host}api/v1/product/catProducts/${cat_slug}`,{
            method:"GET",
            headers:{
                "authorization":`bearer ${JSON.parse(JSON.stringify(localStorage.getItem("token")))}`,
                "Content-type":"application/json",
                "isactive":true
            }
        })
        const result = await response.json();
        if(result.success){
            setCategoryProducts(result.products)
            console.log(result)
            // getWishlist();
            // Toast.fire({
            //     icon: "success",
            //     title: `<h5>${capitalizeFirstLetter(result.message)}</h5>`
            //   });
            
        }else{
            // Toast.fire({
            //     icon: "error",
            //     title: `<h5>${capitalizeFirstLetter(result.message)}</h5>`
            //   });
            console.log(result)
        }
    }
    

    
  return (
    <dataContext.Provider value = {{fetchProducts,products,fetchCategories,categories,capitalizeFirstLetter,addToCart,cart,getCart,removeItemsFromCart,getProduct,viewProduct,productImages,getWishlist,wishlist,addToWishlist,removeItemsFromWishlist,getCategoryProducts,categoryProducts,getProductVarients,viewVarient,varientImages}}>
      {props.children}
    </dataContext.Provider>
  )
}

export default DataState
