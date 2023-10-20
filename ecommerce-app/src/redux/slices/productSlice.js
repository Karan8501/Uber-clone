import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  products: undefined,
  product: undefined,
  hasSearched: false,
  cetaogry: undefined,
  minPrice: undefined,
  maxPrice: undefined,
  rating: undefined,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setLoader: (state, action) => {
      state.isLoading = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setHasSearched: (state, action) => {
      state.hasSearched = action.payload;
    },
    setProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { setLoader, setProducts, setProduct, setHasSearched } =
  productSlice.actions;

export default productSlice.reducer;
