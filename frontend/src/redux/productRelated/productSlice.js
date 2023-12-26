import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    loading:false,
    productDetails: [],
    response: "",
    error: "",
    loggedin:false
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
            state.loggedin = true;
        },
        productFailed:(state,action)=>{
            state.loading = false;
            state.response = action.payload;
        },
        productError:(state,action)=>{
            state.error = action.payload;
            state.loading = false;
        },
        productLogout:(state,action)=>{
            state.loading = false;
            state.response = null;
            state.error = null;
            state.loggedin = false;
        },
        currentProductDetails:(state,action)=>{
            state.userDetails = action.payload;
        }
    }
})

export const {productRequest, productSuccess, productFailed, productError, productLogout,currentProductDetails} = productSlice.actions;
export const productReducer = productSlice.reducer;