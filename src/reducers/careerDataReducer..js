import { createSlice } from "@reduxjs/toolkit";
import { ALL_CAREER_DATA} from "../constant/singleUserSlice";

export const careerSlice = createSlice({
    name: 'career', // optional never use this line in future 

    initialState: {  // initial state 
        [ALL_CAREER_DATA.CAREER_INFO]: []
    },

    reducers: {   // set product data 
        setCareerData: (state, action) => {
            state[ALL_CAREER_DATA.CAREER_INFO] = action.payload
        } 
    }

})

export const { setCareerData } = careerSlice.actions // hook data 
export default careerSlice.reducer; // exporting reducer 
