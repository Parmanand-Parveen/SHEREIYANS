import { createSlice } from "@reduxjs/toolkit"



let initialState = {
  cartItem: JSON.parse(localStorage.getItem("cart")) || []
}


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItem.find(item => item.id == action.payload.id)

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.cartItem.push({ ...action.payload, quantity: 1 })
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItem))
    },
    removeItem: (state, action) => {
      const filterItem = state.cartItem.filter(item => item.id != action.payload)
      console.log(filterItem)
      state.cartItem = filterItem
      localStorage.setItem("cart", JSON.stringify(state.cartItem))
    },
    decreaseQuantity: (state, action) => {
      const item = state.cartItem.find(item => item.id == action.payload.id)
      if (item.quantity > 1) {
        item.quantity -= 1
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItem))
    }
  }
})



export const { addToCart, removeItem, decreaseQuantity } = cartSlice.actions
export default cartSlice.reducer