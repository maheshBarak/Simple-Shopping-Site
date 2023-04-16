import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const cartItem = state.cart.find((item) => item.id == action.payload.id);
      if (cartItem) {
        cartItem.quantity += 1;
        return;
      }
      state.cart.push({
        quantity: 1,
        id: action.payload.id,
        title: action.payload.title,
        image: action.payload.image,
        price: action.payload.price,
      });
    },
    removeFromCart: (state, action) => {
      const cartItem = state.cart.find((item) => item.id === action.payload);
      if (cartItem) {
        cartItem.quantity -= 1;
        if (cartItem.quantity === 0) {
          state.cart = state.cart.filter((item) => item.id !== action.payload);
        }
      }
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, removeItem } = cartSlice.actions;
