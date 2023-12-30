import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    loading:false,
    userDetails: {},
    response: "",
    error: "",
    loggedin:false
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        authRequest:(state)=>{
            state.loading = true;
        },
        authSuccess:(state,action)=>{
            state.loading = false;
            state.response = action.payload;
            state.error = null;
            state.loggedin = true;
        },
        authFailed:(state,action)=>{
            state.loading = false;
            state.response = action.payload;
        },
        authError:(state,action)=>{
            state.error = action.payload;
            state.loading = false;
        },
        authLogout:(state,action)=>{
            state.loading = false;
            state.response = null;
            state.error = null;
            state.loggedin = false;
        },
        currentUserDetails:(state,action)=>{
            state.userDetails = action.payload;
        }
    }
})

export const {authRequest, authSuccess, authFailed, authError, authLogout,currentUserDetails} = userSlice.actions;
export const userReducer = userSlice.reducer;