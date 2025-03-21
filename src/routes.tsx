import DashboardLayout from "layouts/dashboard/DashboardLayout";
import DashboardAppPage from "pages/DashboardAppPage";
import MarkEntryPage from "pages/MarkEntryPage";
import UserPage from "pages/UserPage";
import ClassRoomAnalytics from "pages/classRoom/ClassRoomAnalytics";
import ClassRoomOverview from "pages/classRoom/ClassRoomOverview";
import ClassRoomRanking from "pages/classRoom/ClassRoomRanking";
import ExamPage from "pages/exam/ExamPage";
import News from "pages/experimental/news/News";
import StaffAnalytics from "pages/staffs/StaffAnalytics";
import StaffOverview from "pages/staffs/StaffOverview";
import StaffRanking from "pages/staffs/StaffRanking";
import StudentAnalytics from "pages/students/StudentAnalytics";
import StudentOverview from "pages/students/StudentOverview";
import StudentRanking from "pages/students/StudentRanking";
import { Navigate, useRoutes } from "react-router-dom";

// Auth pages
import LoginPage from "pages/auth/LoginPage";
import ResetPasswordPage from "pages/auth/ResetPasswordPage";
import Signup from "pages/auth/Signup";
import AdminDashboardPage from "pages/auth/dashboards/AdminDashboardPage";
// import TeacherDashboardPage from "pages/auth/dashboards/TeacherDashboardPage";
// import StudentDashboardPage from "pages/auth/dashboards/StudentDashboardPage";
// import StaffDashboardPage from "pages/auth/dashboards/StaffDashboardPage";

// Student pages
import DirectoryPage from "pages/students/DirectoryPage";
import PersonalInfoPage from "pages/students/profile/PersonalInfoPage";
import StudentAttendance from "pages/students/StudentAttendance";
import EditPersonalInfo from "pages/students/profile/EditPersonalInfo";
// import AcademicsPage from "pages/students/profile/AcademicsPage";
// import AttendancePage from "pages/students/profile/AttendancePage";
// import DisciplinePage from "pages/students/profile/DisciplinePage";
// import ParentsPage from "pages/students/profile/ParentsPage";
// import MedicalPage from "pages/students/profile/MedicalPage";
// import DocumentsPage from "pages/students/profile/DocumentsPage";

// Academics pages
import SchedulePage from "pages/academics/Schedule";
// import GradebookPage from "pages/academics/GradebookPage";
// import ReportsPage from "pages/academics/ReportsPage";
// import AssignmentsPage from "pages/academics/AssignmentsPage";
// import ExamSchedulePage from "pages/academics/exams/SchedulePage";
// import ExamResultsPage from "pages/academics/exams/ResultsPage";
// import RegistrationPage from "pages/academics/RegistrationPage";

// ----------------------------------------------------------------------

function HandleRoute() {
  return <Navigate to="/dashboard" />;
}

export default function Router() {
  const routes = useRoutes([
    // DASHBOARD
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        { element: <DashboardAppPage />, index: true },
        { path: "mark-entry", element: <MarkEntryPage /> },
        { path: "user", element: <UserPage /> },
        { path: "exam", element: <ExamPage /> },
      ],
    },
    // AUTH
    {
      path: "/auth",
      element: <DashboardLayout />,
      children: [
        { path: "login", element: <LoginPage /> },
        { path: "reset-password", element: <ResetPasswordPage /> },
        { path: "signup", element: <Signup /> },
        {
          path: "dashboards",
          children: [
            { path: "admin", element: <AdminDashboardPage /> },
            // { path: "teacher", element: <TeacherDashboardPage /> },
            // { path: "student", element: <StudentDashboardPage /> },
            // { path: "staff", element: <StaffDashboardPage /> },
          ],
        },
      ],
    },
    //CLASSROOM
    {
      path: "/classroom",
      element: <DashboardLayout />,
      children: [
        { path: "overview", element: <ClassRoomOverview /> },
        { path: "analytics", element: <ClassRoomAnalytics /> },
        { path: "rankings", element: <ClassRoomRanking /> },
      ],
    },
    // STAFF
    {
      path: "/staff",
      element: <DashboardLayout />,
      children: [
        { path: "overview", element: <StaffOverview /> },
        { path: "analytics", element: <StaffAnalytics /> },
        { path: "rankings", element: <StaffRanking /> },
        // { path: "directory", element: <TemplatePage title="Staff Directory" /> },
        // { path: "roles", element: <TemplatePage title="Role Management" /> },
        // { path: "attendance", element: <TemplatePage title="Staff Attendance" /> },
        // { path: "leave", element: <TemplatePage title="Leave Management" /> },
        // { path: "performance", element: <TemplatePage title="Performance Records" /> },
      ],
    },
    // STUDENT
    {
      path: "/students",
      element: <DashboardLayout />,
      children: [
        { path: "overview", element: <StudentOverview /> },
        { path: "analytics", element: <StudentAnalytics /> },
        { path: "rankings", element: <StudentRanking /> },
        { path: "directory", element: <DirectoryPage /> },
        { path: "attendance", element: <StudentAttendance /> },
        {
          path: "profile",
          children: [
            { index: true, element: <PersonalInfoPage /> },
            { path: "edit", element: <EditPersonalInfo /> },
            // { path: "academics", element: <AcademicsPage /> },
            // { path: "attendance", element: <AttendancePage /> },
            // { path: "discipline", element: <DisciplinePage /> },
            // { path: "parents", element: <ParentsPage /> },
            // { path: "medical", element: <MedicalPage /> },
            // { path: "documents", element: <DocumentsPage /> },
          ],
        },
      ],
    },
    // ACADEMICS
    {
      path: "/academics",
      element: <DashboardLayout />,
      children: [
        { path: "schedule", element: <SchedulePage /> },
        // { path: "gradebook", element: <GradebookPage /> },
        // { path: "reports", element: <ReportsPage /> },
        // { path: "assignments", element: <AssignmentsPage /> },
        {
          path: "exams",
          children: [
            // { path: "schedule", element: <ExamSchedulePage /> },
            // { path: "results", element: <ExamResultsPage /> },
            // { path: "registration", element: <RegistrationPage /> },
          ],
        },
      ],
    },
    {
      path: "/experimental",
      element: <DashboardLayout />,
      children: [{ path: "news", element: <News /> }],
    },
    {
      path: "*",
      element: <HandleRoute />,
    },
  ]);

  return routes;
}
