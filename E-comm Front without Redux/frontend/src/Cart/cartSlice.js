import {createSlice} from '@reduxjs/toolkit'

const initialState = {
   carts:[{
    price:0,
    quantity:0,
    subtotal:0
   }]
}

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        incrementQuantity:(state,action)=>{
            state.carts.push({
                price:action.payload.price,
                quantity:action.payload.quantity+1,
                subtotal:action.payload.price*action.payload.quantity
            });
        }
    }
})

export const incrementQuantity = cartSlice.actions;
export default cartSlice.reducer;