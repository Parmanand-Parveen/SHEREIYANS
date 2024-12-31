import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Slices/ProductSlice";

const store  = configureStore({
    reducer:{
       product:productSlice
    }
})

export default store