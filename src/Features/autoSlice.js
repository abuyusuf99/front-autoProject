import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    auto : [],
    brands: []
}


export const  fetchBrand = createAsyncThunk("brand/fetch",
async ()=>{
    const res = await fetch("http://localhost:8500/brand");
    const brand = await res.json()
    return brand
})


export const fetchAuto = createAsyncThunk("auto/fetch",
async () =>{
    const res = await fetch ("http://localhost:8500/auto");
    const auto = await res.json()
    return auto
}
)

const autoSlice = createSlice({
    name : "Auto",
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder 
        .addCase(fetchAuto.fulfilled, (state,action)=>{
            state.auto = action.payload
        })
        .addCase(fetchBrand.fulfilled,(state,action)=>{
            state.brands = action.payload
        })
    }
})
export default autoSlice.reducer