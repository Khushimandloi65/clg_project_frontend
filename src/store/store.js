import { configureStore } from "@reduxjs/toolkit";
import { authenticationSlice } from "../reducers/authentication";
import { careerSlice } from "../reducers/careerDataReducer.";
import { feedbackDataSlice } from "../reducers/feedbackDataReducer";
import { privateDataSlice } from "../reducers/getAllPrivateReducer";
import { singleDataSlice } from "../reducers/singleUserReducer";

// this is react store :) by using this fike we can store our data in store while 
// creating every hook we need to make store    thankyou 
export default configureStore({
    reducer: {

        //  here key name depends on the developer 
        singleDetails: singleDataSlice.reducer,
        privateDetails: privateDataSlice.reducer,
        careerDataStore: careerSlice.reducer,
        feedbackDataStore:feedbackDataSlice.reducer,
        authenticationStore:authenticationSlice.reducer
    },
})