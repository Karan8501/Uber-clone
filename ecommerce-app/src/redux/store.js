import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slices/appSlice";
import userReducer from "./slices/userSlice";
import productReducer from "./slices/productSlice";

const reducer = {
  appState: appReducer,
  userState: userReducer,
  productState: productReducer,
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
