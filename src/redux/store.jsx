import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import userSlice from "../redux/userSlice";

export const store = configureStore({
   reducer: {
      user: userSlice,
   },
});

export const persistor = persistStore(store);
