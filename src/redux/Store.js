import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Product/productSlice";
import authReducer from "./Auth/AuthSlice"

export const store = configureStore({
    reducer: {
      product: productReducer,
      user: authReducer
    },
});
