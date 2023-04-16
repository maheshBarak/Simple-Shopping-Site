import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("product/fetch", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  return await response.json(); //returning the promise
});

const productSlice = createSlice({
  name: "productSlice",
  initialState: {
    product: [],
    status: "idle", // it generally has 4 values == idle, loading, success, failed
    error: null,
  },
  /*   reducers: {
    loadProduct: (state, action) => {
      state.product = action.payload;
    },
  }, */
  extraReducers: function (builder) {
    builder
      .addCase(fetchData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.product = action.payload;
        state.status = "success";
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { loadProduct } = productSlice.actions;
export default productSlice.reducer;
