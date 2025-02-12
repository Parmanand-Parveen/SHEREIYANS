import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Slices/ProductSlice";
import cartSlice from "./Slices/CartSlice";


const store  = configureStore({
    reducer:{
       product:productSlice,
       cart : cartSlice
    }
})

export default store