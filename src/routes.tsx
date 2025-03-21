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
