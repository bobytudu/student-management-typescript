import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

export const staffSlice = createSlice({
  name: "staff",
  initialState,
  reducers: {},
});

export const {} = staffSlice.actions;
export default staffSlice.reducer;
