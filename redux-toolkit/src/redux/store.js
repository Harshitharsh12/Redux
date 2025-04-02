import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import nameReducer from "../features/counter/nameSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    name: nameReducer,
  },
});
