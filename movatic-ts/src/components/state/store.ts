import { configureStore } from "@reduxjs/toolkit";
import selectedRowReducer from "./storeSlice";

export const store = configureStore({
  reducer: {
    gridRows: selectedRowReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
