import { createSlice } from "@reduxjs/toolkit";

export interface TeacherType {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
}

const initialState: { list: TeacherType[] } = {
  list: [],
};

export const teacherSlice = createSlice({
  name: "teachers",
  initialState,
  reducers: {
    setAllTeacher: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setAllTeacher } = teacherSlice.actions;
export default teacherSlice.reducer;
