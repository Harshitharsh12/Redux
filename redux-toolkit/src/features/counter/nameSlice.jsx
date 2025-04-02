import { createSlice } from "@reduxjs/toolkit";

export const nameSlice = createSlice({
  name: "name",
  initialState: {
    value: "Harshit",
  },
  reducers: {
    change: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { change } = nameSlice.actions;

export default nameSlice.reducer;
