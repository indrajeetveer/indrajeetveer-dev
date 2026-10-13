import { createSlice } from "@reduxjs/toolkit";

export let cartSlice = createSlice({
  name: "Cart",
  initialState: {
    cart: localStorage.getItem("Cart")
      ? JSON.parse(localStorage.getItem("Cart"))
      : [],
  },
  reducers: {
    addTocart: (state, reqData) => {
      let { obj } = reqData.payload;
      state.cart = [obj, ...state.cart];
      localStorage.setItem("Cart", JSON.stringify(state.cart));
    },
    deleteCart: (state, reqData) => {
      let { id } = reqData.payload;
      state.cart = state.cart.filter((obj) => obj.id != id);
      localStorage.setItem("Cart", JSON.stringify(state.cart));
    },
    changeQty: (state) => {},
  },
});

export const { addTocart, deleteCart, changeQty } = cartSlice.actions;
export default cartSlice.reducer;
