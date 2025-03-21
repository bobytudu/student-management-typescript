import { createSlice } from "@reduxjs/toolkit";

export interface ExamType {
  id: string;
  month: string;
  year: string;
  total_marks: string;
}

const initialState: { list: ExamType[] } = {
  list: [],
};

export const examSlice = createSlice({
  name: "exam",
  initialState,
  reducers: {
    setAllExam: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setAllExam } = examSlice.actions;
export default examSlice.reducer;
