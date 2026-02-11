import { createSlice } from "@reduxjs/toolkit";
import { USER_DATA } from "../constant/singleUserSlice";

export const singleDataSlice = createSlice({
    name: 'single', // optional neven use this line in future 

    initialState: {  // initial state 
        [USER_DATA.SINGLE_USER]:[]
    },

    reducers:{   // set product data 
        setSingleUser:(state,action)=>{
            state[USER_DATA.SINGLE_USER]=action.payload
        }
    }

})

export const {setSingleUser}=singleDataSlice.actions // hook data 
export default singleDataSlice.reducer; // exporting reducer 
