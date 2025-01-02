import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axiosConfige";


const initialState = {
  product: JSON.parse(localStorage.getItem("product")),
  getDetails: {},
};

// export const getProduct = createAsyncThunk("/product", async () => {
//   try {
//     const allProduct = await axios.get("/products");
//     return allProduct.data;
//   } catch (error) {
//     console.log("Get error while fetching all the product", error);
//   }
// });
 

export const getProductDetails = createAsyncThunk("/product/productdetails", async (id) => {
  try {
    const productDetails = await axios.get(`/products/${id}`);
    return productDetails.data;
  } catch (error) {
    console.log("Get error while fetching all the product", error);
  }
})

 const productSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
     deleteItem :(state, action)=>{
      state.product = state.product.filter((item) => item.id !== action.payload)
      localStorage.setItem("product", JSON.stringify(state.product))
     },
     addNewProduct :(state, action)=>{
      state.product.push(action.payload)
      localStorage.setItem("product", JSON.stringify(state.product))
     },
     editProduct :(state, action)=>{
      console.log(action.payload)
      state.product = state.product.map((item) => item.id === action.payload.id ? action.payload : item)
      localStorage.setItem("product", JSON.stringify(state.product))
     }
     


  },
  extraReducers: (builder) => {
    builder
     .addCase(getProductDetails.rejected, (state) => {
        state.getDetails = {};
      })
      .addCase(getProductDetails.pending, (state) => {
        state.getDetails = {};
      })
      .addCase(getProductDetails.fulfilled,(state, action)=>{
        state.getDetails = action.payload
      });
  },
});



export const {deleteItem,addNewProduct,editProduct} = productSlice.actions

export default productSlice.reducer