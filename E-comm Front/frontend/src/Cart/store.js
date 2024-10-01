import  { configureStore} from '@reduxjs/toolkit';
import { incrementQuantity } from './cartSlice';
export const store = configureStore({
    reducer:incrementQuantity
})