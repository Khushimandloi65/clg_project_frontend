import { createSlice } from "@reduxjs/toolkit";
import { ALL_PRIVATE_DATA } from "../constant/singleUserSlice";

export const privateDataSlice = createSlice({
    name: 'single', // optional neven use this line in future 

    initialState: {  // initial state 
        [ALL_PRIVATE_DATA.TABLE_DATA]: []
    },

    reducers: {   // set product data 
        setPrivateData: (state, action) => {
            state[ALL_PRIVATE_DATA.TABLE_DATA] = action.payload
        }
    }
})

export const { setPrivateData } = privateDataSlice.actions // hook data 
export default privateDataSlice.reducer; // exporting reducer 
