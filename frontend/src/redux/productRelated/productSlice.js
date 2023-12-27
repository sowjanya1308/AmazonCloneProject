import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    loading:false,
    productDetails: [],
    response: "",
    error: "",
}

const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
        productRequest:(state)=>{
            state.loading = true;
        },
        productSuccess:(state,action)=>{
            state.loading = false;
            state.response = action.payload;
            state.error = null;
        },
        productFailed:(state,action)=>{
            state.loading = false;
            state.response = action.payload;
        },
        productError:(state,action)=>{
            state.error = action.payload;
            state.loading = false;
        },
        ProductDetails:(state,action)=>{
            state.productDetails = action.payload;
            state.loading = false;
            state.error = false;
        }
    }
})

export const {productRequest, productSuccess, productFailed, productError,ProductDetails} = productSlice.actions;
export const productReducer = productSlice.reducer;