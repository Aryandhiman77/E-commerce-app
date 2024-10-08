import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom';
const host = import.meta.env.VITE_REACT_API_URL;
const Toast = Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  

export const cartFetch = createAsyncThunk('cartFetch',async()=>{
    console.log('fetching cart data.')
    const response = await fetch(`${host}api/v1/cart/`,{
        headers:{
            "authorization":`bearer ${JSON.parse(JSON.stringify(localStorage.getItem("token")))}`,
            "Content-type":"application/json",
        }
    })
    const result = await response.json();
    
    return result
    
})

export const addItem = createAsyncThunk('addItem',async(state,action)=>{
    
    const response = await fetch(`${host}api/v1/cart/`,{
        method:"POST",  
        headers:{
            "authorization":`bearer ${JSON.parse(JSON.stringify(localStorage.getItem("token")))}`,
            "Content-type":"application/json",
        },
        body:JSON.stringify({
            product_id:state.product_id,
            quantity:state.quantity,
            product_varient_id:state.product_varient_id
        })
    })
    const result = await response.json();
    
    return result

},  )


export const updateItem = createAsyncThunk('updateItem',async(state,action)=>{
    const response = await fetch(`${host}api/v1/cart/${state.cartid}`,{
        method:"PUT",  
        headers:{
            "authorization":`bearer ${JSON.parse(JSON.stringify(localStorage.getItem("token")))}`,
            "Content-type":"application/json",
        },
        body:JSON.stringify({
            product_id:state.product_id,
            quantity:state.quantity,
            product_varient_id:state.product_varient_id
        })
    })
    const result = await response.json();
// console.log(action)  
    return result
})

export const removeItem = createAsyncThunk('removeItem',async(state,action)=>{
    const response = await fetch(`${host}api/v1/cart/${state.cartid}`,{
        method:"DELETE",  
        headers:{
            "authorization":`bearer ${JSON.parse(JSON.stringify(localStorage.getItem("token")))}`,
            "Content-type":"application/json",
        },
        
    })
    const result = await response.json();
    return result
})
// const [quantity, setQuantity] = useState(0)

const cartSlice = createSlice({
    name:'Cart',
    initialState:{
        isLoading:false,
        data:[],
        isError:false,
        subtotal:null,
        quantity:1
    },
    reducers:{
        incrementer:(state,action)=>{
            state.quantity<1?'':state.quantity = state.quantity+1;
        },
        decrementer:(state,action)=>{
            state.quantity<=1?'':state.quantity = state.quantity-1;
        },
    },
    extraReducers:(builder)=>{
        
        builder.addCase(cartFetch.pending,(state,action)=>{
            state.isLoading=true;
        })
        builder.addCase(cartFetch.rejected,(state,action)=>{
            state.isError=true;
            // console.log(action.payload)
            // setInterval(() => {
                Toast.fire({
                    icon: "error",
                    title: "Something went wrong. Please check your internet connection."
                  });
                  
            // }, 1000);
            
        })
        builder.addCase(cartFetch.fulfilled,(state,action)=>{
            state.data= action.payload;
            let arr = [];
            action.payload.getAllCarts?.forEach((item)=>{
                if(!item.product_id){
                    arr.push({price:item.product_varient_id.price,quantity:item.quantity})
                }
                if (!item.product_varient_id){
                    arr.push({price:item.product_id.price,quantity:item.quantity})
                }
                
            });
            state.subtotal = arr.reduce((initialVal,cartItem)=>{
                return initialVal + cartItem.price * cartItem.quantity;
            },0)
            

            state.isLoading=false;
            
        })

        builder.addCase(addItem.pending,(state,action)=>{
            state.isLoading=true;
        })
        builder.addCase(addItem.fulfilled,(state,action)=>{
            if(action.payload.success){
                Toast.fire({
                    icon: "success",
                    title: `<b class="alert">${action.payload.message}</b>`
                  });
                  state.data= action.payload;
                  
                  
            }else{
                
                Toast.fire({
                    icon: "error",
                    title: `<b class="alert">${action.payload.message}</b>`
                  });
            }
            
            state.isLoading=false;
           
        })
        builder.addCase(addItem.rejected,(state,action)=>{
            state.isError=true;
            Toast.fire({
                icon: "error",
                title: action.payload.message
              });
            console.log("Error",action.payload)
          
        })
        builder.addCase(updateItem.pending,(state,action)=>{
            state.isLoading=true;
        })
        builder.addCase(updateItem.fulfilled,(state,action)=>{
            if(action.payload.success){
                Toast.fire({
                    icon: "success",
                    title: `<b class="alert">${action.payload.message}</b>`
                  });
                  
            }else{
                Toast.fire({
                    icon: "error",
                    title: `<b class="alert">${action.payload.message}</b>`
                  });
            }
            state.isLoading=false;
           
        })
        builder.addCase(updateItem.rejected,(state,action)=>{
            state.isError=true;
            Toast.fire({
                icon: "error",
                title: action.payload.message
              });
            console.log("Error",action.payload)
          
        })


        builder.addCase(removeItem.pending,(state,action)=>{
            state.isLoading=true;
        })
        builder.addCase(removeItem.fulfilled,(state,action)=>{

            if(action.payload.success){
                Toast.fire({
                    icon: "success",
                    title: `<b class="alert">${action.payload.message}</b>`
                  });
                  
            }else{
                Toast.fire({
                    icon: "error",
                    title: `<b class="alert">${action.payload.message}</b>`
                  });
                }
            state.isLoading=false;
            
           
        })
        builder.addCase(removeItem.rejected,(state,action)=>{
            state.isError=true;
            Toast.fire({
                icon: "error",
                title: action.payload.message
              });
            console.log("Error",action.payload)
            
          
        })
        
        
    }
});

export const {incrementer,decrementer} = cartSlice.actions;
export default cartSlice.reducer;