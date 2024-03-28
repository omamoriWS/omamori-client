import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import { UseSelector } from "react-redux";

export const store = configureStore({
  reducer: { userReducer },
});
