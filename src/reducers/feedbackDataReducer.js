import { createSlice } from "@reduxjs/toolkit";
import { ALL_FEEDBACK_DATA } from "../constant/singleUserSlice";

export const feedbackDataSlice = createSlice({
  name: "feedbackData",

  initialState: {
    [ALL_FEEDBACK_DATA.FEEDBACK_DATA]: [],
  },
  reducers: {
    setAllFeedbackData: (state, action) => {
      state[ALL_FEEDBACK_DATA.FEEDBACK_DATA] = action.payload;
    },
  },
});

export const { setAllFeedbackData } = feedbackDataSlice.actions;
export default feedbackDataSlice.reducer;
