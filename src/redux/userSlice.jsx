import { createSlice } from "@reduxjs/toolkit";
import { getAuth } from "firebase/auth";

const initialState = {
   uid: "",
};

const fireauth = getAuth();

export const userSlice = createSlice({
   name: "user",
   initialState,
   reducers: {
      useruid: (state, action) => {
         state.uid = action.payload;
      },
   },
});

// Action creators are generated for each case reducer function
export const { useruid } = userSlice.actions;

export default userSlice.reducer;
