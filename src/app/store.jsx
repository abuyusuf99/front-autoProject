import { configureStore } from "@reduxjs/toolkit";
import autoSlice from "../Features/autoSlice";


export const store = configureStore({
    reducer :{
        autoSlice
    }
})
