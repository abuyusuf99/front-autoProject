import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    auto : [],
}


export const fetchAuto = createAsyncThunk("auto/fetch",
async () =>{
    const res = await fetch ("http://localhost:8500/auto");
    const auto = await res.json()
    return auto
}
);

export const fetchAutoByBrand = createAsyncThunk("autoBrand/fetch", 
    async (id, thunkAPI) => {
        try {
            const res = await fetch(`http://localhost:8500/auto/brand/${id}`)
            const auto = await res.json()
            return auto
        } catch (error) {
            thunkAPI.rejectWithValue(error)
        }
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

    .addCase(fetchAutoByBrand.fulfilled, (state, action)=>{
        state.auto = action.payload
    })

      
    
    }
})


export default autoSlice.reducer



