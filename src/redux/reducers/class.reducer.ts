import { createSlice } from "@reduxjs/toolkit";

export interface ClassType {
  class_teacher: string;
  id: string;
  name: string;
}

const initialState: { list: ClassType[] } = {
  list: [],
};

export const studentSlice = createSlice({
  name: "class",
  initialState,
  reducers: {
    setAllClass: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setAllClass } = studentSlice.actions;
export default studentSlice.reducer;
