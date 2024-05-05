import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    auto : []
}

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
    }
})
export default autoSlice.reducer