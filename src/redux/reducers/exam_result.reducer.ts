import { createSlice } from "@reduxjs/toolkit";
import { ExamType } from "./exam.reducer";
import { StudentsType } from "./student.reducer";
import { SubjectType } from "./subject.reducer";

interface ExamResultType {
  id: string;
  exam_id: ExamType;
  student_id: StudentsType;
  score: string;
  subject_id: SubjectType;
}

const initialState: { list: ExamResultType[] } = {
  list: [],
};

export const examResultSlice = createSlice({
  name: "exam_result",
  initialState,
  reducers: {
    setAllExamResult: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setAllExamResult } = examResultSlice.actions;
export default examResultSlice.reducer;
