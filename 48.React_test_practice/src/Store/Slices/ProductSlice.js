import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axiosConfige";

const initialState = {
  product: [],
  getDetails: {},
};

export const getProduct = createAsyncThunk("/product", async () => {
  try {
    const allProduct = await axios.get("/products");
    return allProduct.data;
  } catch (error) {
    console.log("Get error while fetching all the product", error);
  }
});


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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.rejected, (state) => {
        state.product = [];
        state.getDetails = {};
      })
      .addCase(getProduct.pending, (state) => {
        state.product = [];
        state.getDetails = {};
      })
      .addCase(getProduct.fulfilled,(state, action)=>{
        state.product = action.payload,
        state.getDetails = {}
      }).addCase(getProductDetails.rejected, (state) => {
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

export default productSlice.reducer