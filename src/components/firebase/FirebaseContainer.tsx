import { collection, onSnapshot, getDoc } from "firebase/firestore";
import React from "react";
import { useAppDispatch } from "../../redux/hooks";
import { setAllStudents } from "../../redux/reducers/student.reducer";
import { db } from "services/firebase";
import { setAllClass } from "../../redux/reducers/class.reducer";
import { setAllSubjects } from "../../redux/reducers/subject.reducer";
import { setAllTeacher } from "../../redux/reducers/teacher.reducer";
import { setAllExamResult } from "../../redux/reducers/exam_result.reducer";
import { setAllExam } from "../../redux/reducers/exam.reducer";

export default function FirebaseContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    const classUnsubscribe = onSnapshot(
      collection(db, "classes"),
      async (snapshot: any) => {
        let data = snapshot.docs.map((doc: any) => ({
          id: doc.id,
          ...doc.data(),
        }));
        data = await Promise.all(
          data.map(async (item: any) => {
            const teacher = await getDoc(item.class_teacher);
            return {
              ...item,
              class_teacher: teacher.data(),
            };
          })
        );
        dispatch(setAllClass(data));
      }
    );
    const studentUnsubscribe = onSnapshot(
      collection(db, "student"),
      async (snapshot: any) => {
        let data = snapshot.docs.map((doc: any) => ({
          id: doc.id,
          ...doc.data(),
        }));
        data = await Promise.all(
          data.map(async (item: any) => {
            const classData = await getDoc(item.class);
            return {
              ...item,
              class: classData.data(),
            };
          })
        );
        dispatch(setAllStudents(data));
      }
    );

    const subjectUnsubscribe = onSnapshot(
      collection(db, "subject"),
      async (snapshot: any) => {
        let data = snapshot.docs.map((doc: any) => ({
          id: doc.id,
          ...doc.data(),
        }));
        data = await Promise.all(
          data.map(async (item: any) => {
            const teacher = await getDoc(item.assigned_teacher);
            return {
              ...item,
              assigned_teacher: teacher.data(),
            };
          })
        );
        dispatch(setAllSubjects(data));
      }
    );

    const teacherUnsubscribe = onSnapshot(
      collection(db, "teacher"),
      (snapshot: any) => {
        let data = snapshot.docs.map((doc: any) => ({
          id: doc.id,
          ...doc.data(),
        }));
        dispatch(setAllTeacher(data));
      }
    );

    const resultUnsubscribe = onSnapshot(
      collection(db, "exam_result"),
      async (snapshot: any) => {
        let data = snapshot.docs.map((doc: any) => ({
          id: doc.id,
          ...doc.data(),
        }));
        data = await Promise.all(
          data.map(async (item: any) => {
            const student = await getDoc(item.student_id);
            const exam = await getDoc(item.exam_id);
            const subject = await getDoc(item.subject_id);
            return {
              ...item,
              student_id: student.data(),
              exam_id: exam.data(),
              subject_id: subject.data(),
            };
          })
        );
        dispatch(setAllExamResult(data));
      }
    );

    const examUnsubscribe = onSnapshot(
      collection(db, "exam"),
      (snapshot: any) => {
        let data = snapshot.docs.map((doc: any) => ({
          id: doc.id,
          ...doc.data(),
        }));
        dispatch(setAllExam(data));
      }
    );

    return () => {
      classUnsubscribe();
      studentUnsubscribe();
      subjectUnsubscribe();
      teacherUnsubscribe();
      resultUnsubscribe();
      examUnsubscribe();
    };
  }, []);

  return <div>{children}</div>;
}
