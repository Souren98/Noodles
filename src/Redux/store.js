import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import  crudSlice  from "./crudSlice";

export const store = configureStore({
  reducer: {
    authKey: authSlice.reducer,
    crudKey:crudSlice.reducer
  },
});
