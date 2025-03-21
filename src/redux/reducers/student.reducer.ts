import { createSlice } from "@reduxjs/toolkit";
import { ClassType } from "./class.reducer";

export interface StudentsType {
  id: string;
  first_name: string;
  last_name: string;
  dob: string;
  class: ClassType;
}

const initialState: { list: StudentsType[] } = {
  list: [],
};

export const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    setAllStudents: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setAllStudents } = studentSlice.actions;
export default studentSlice.reducer;
