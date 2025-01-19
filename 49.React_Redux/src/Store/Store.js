import {configureStore} from "@reduxjs/toolkit"
import productSlice from "./Reducers/ProductSlices"



export const store = configureStore({
reducer:{
    product: productSlice
}

})