import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/slices/counterSlice";
import nameReducer from "../features/slices/nameSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    name: nameReducer,
  },
});
