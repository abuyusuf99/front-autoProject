import { configureStore } from "@reduxjs/toolkit";
import autoSlice from "../Features/autoSlice";
import brandSlice from "../Features/brandSlice";


export const store = configureStore({
    reducer :{
        autoSlice,
        brandSlice
    }
})
