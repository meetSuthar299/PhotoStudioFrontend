import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Product/productSlice";
import authReducer from "./Auth/AuthSlice"
import projectReducer from "./Project/projectSlice";

export const store = configureStore({
    reducer: {
      product: productReducer,
      user: authReducer,
      project: projectReducer
    },
});
