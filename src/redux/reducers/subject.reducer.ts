import { createSlice } from "@reduxjs/toolkit";

export interface SubjectType {
  id: string;
  title: string;
  assigned_teacher: string;
}

const initialState: { list: SubjectType[] } = {
  list: [],
};

export const subjectSlice = createSlice({
  name: "subjects",
  initialState,
  reducers: {
    setAllSubjects: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setAllSubjects } = subjectSlice.actions;
export default subjectSlice.reducer;
