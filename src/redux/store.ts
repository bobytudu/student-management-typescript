import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth.reducer";
import staffReducer from "./reducers/staff.reducer";
import studentReducer from "./reducers/student.reducer";
import classReducer from "./reducers/class.reducer";
import subjectReducer from "./reducers/subject.reducer";
import teacherReducer from "./reducers/teacher.reducer";
import examReducer from "./reducers/exam.reducer";
import examResultReducer from "./reducers/exam_result.reducer";
import themeReducer from "./reducers/theme.reducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    class: classReducer,
    staff: staffReducer,
    student: studentReducer,
    subject: subjectReducer,
    teacher: teacherReducer,
    exam: examReducer,
    exam_result: examResultReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
