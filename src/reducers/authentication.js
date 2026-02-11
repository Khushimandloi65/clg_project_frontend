import { createSlice } from "@reduxjs/toolkit";
import { AUTHENTICATION } from "../constant/singleUserSlice";

export const authenticationSlice = createSlice({
  name: "feedbackData",

  initialState: {
    [AUTHENTICATION.IS_LOGIN]: false,
    [AUTHENTICATION.AUTH_TOKEN]: ''
  },
  reducers: {
    setLogin: (state, action) => {
      state[AUTHENTICATION.IS_LOGIN] = action.payload;
    },
    setToken: (state, action) => {
      state[AUTHENTICATION.AUTH_TOKEN] = action.payload
    }
  },
});

export const { setLogin, setToken } = authenticationSlice.actions;
export default authenticationSlice.reducer;
