// this file is not being used

/* import { createSlice } from "@reduxjs/toolkit";

const itemsInSlice = createSlice({
  name: "itemsInSlice",
  initialState: {
    final_cart: [],
  },
  reducers: {
    final_cartItems: (state, action) => {
      const cartItem = state.final_cart.find(
        (item) => item.id == action.payload
      );
      if (cartItem) {
        cartItem.quantity += 1;
        return;
      }

      state.final_cart.push(action.payload);
    },
  },
});

export default itemsInSlice.reducer;
export const { final_cartItems } = itemsInSlice.actions; */
