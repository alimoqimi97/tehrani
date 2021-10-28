import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "../features/LoginSlice.js";
import SelectProduct from "../features/ProductIdSlice.js";

export const store = configureStore({
    reducer: {
        logIn: LoginReducer,
        select: SelectProduct
    }
});