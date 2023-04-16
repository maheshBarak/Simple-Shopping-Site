import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slice/productSlice";
import cartReducer from "./slice/cartSlice";
//import finalCartReducer from "./slice/ItemsInCartSlice";

export default configureStore({
  reducer: {
    productReducer,
    cartReducer,
    /* finalCartReducer, */
  },
});
