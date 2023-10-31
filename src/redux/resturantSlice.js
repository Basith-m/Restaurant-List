import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// redux is synchrounous so we use createAsyncThunk to Make API call
export const fetchResturants = createAsyncThunk('resturantList/fetchResturants',()=>{
    // API call
    return axios.get('/restaurants.json').then(Response=>Response.data.restaurants)
})

const resturantSlice = createSlice({
    name : 'resturantList',
    initialState : {
        loading : false,
        allResturants:[],
        allResturantContainer : [],
        error : ''
    },
    reducers : {
        searchResturant:(state,action)=>{
            state.allResturants = state.allResturantContainer.filter(item=>item.neighborhood.toLowerCase().includes(action.payload))
        }
    },
    extraReducers : (builder)=>{
        builder.addCase(fetchResturants.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(fetchResturants.fulfilled,(state,action)=>{
            state.loading = false
            state.allResturants = action.payload
            state.allResturantContainer = action.payload
            state.error = ""
        })
        builder.addCase(fetchResturants.rejected,(state,action)=>{
            state.loading = false
            state.allResturants = []
            state.error = action.error.message
        })
    }
})
export const {searchResturant} = resturantSlice.actions
export default resturantSlice.reducer