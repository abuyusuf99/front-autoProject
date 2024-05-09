import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    brand: [],
    loading: false
}

export const fetchBrand = createAsyncThunk(
    'brand/fetch', 
    async (data, thunkAPI) => {
        try {
            const res = await fetch ('http://localhost:8500/brand')
            const brand = await res.json()
            if(brand.error){
                return thunkAPI.rejectWithValue(brand.error)
            }
            return brand
        } catch (error) {
            thunkAPI.rejectWithValue(error)
        }
    }
)

const brandSlice = createSlice({
    name: 'brand',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchBrand.fulfilled, (state, action) => {
            state.loading = false
            state.brand = action.payload
        })
        .addCase(fetchBrand.pending, (state, action) => {
            state.loading = true
        })
    }
})

export default brandSlice.reducer