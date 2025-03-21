import { Icon } from "@iconify/react";
// ----------------------------------------------------------------------

function CustomIcon({ icon }: { icon: string }) {
  return <Icon icon={icon} style={{ fontSize: 18 }} />;
}

export interface NavConfigProps {
  title: string;
  path: string;
  icon: JSX.Element;
  info?: JSX.Element;
  children?: NavConfigProps[];
}

const navConfig: NavConfigProps[] = [
  {
    title: "dashboard",
    path: "/dashboard",
    icon: <CustomIcon icon="ic:round-dashboard" />,
  },
  {
    title: "Authentication",
    path: "/auth",
    icon: <CustomIcon icon="mdi:shield-lock" />,
    children: [
      {
        title: "Login",
        path: "/auth/login",
        icon: <CustomIcon icon="mdi:login" />,
      },
      {
        title: "Password Reset",
        path: "/auth/reset-password",
        icon: <CustomIcon icon="mdi:lock-reset" />,
      },
    ],
  },
  {
    title: "Dashboards",
    path: "/dashboards",
    icon: <CustomIcon icon="mdi:view-dashboard" />,
    children: [
      {
        title: "Admin Dashboard",
        path: "/dashboards/admin",
        icon: <CustomIcon icon="mdi:shield-crown" />,
      },
      {
        title: "Teacher Dashboard",
        path: "/dashboards/teacher",
        icon: <CustomIcon icon="mdi:teach" />,
      },
      {
        title: "Student Dashboard",
        path: "/dashboards/student",
        icon: <CustomIcon icon="mdi:school" />,
      },
      {
        title: "Staff Dashboard",
        path: "/dashboards/staff",
        icon: <CustomIcon icon="mdi:account-group" />,
      },
    ],
  },
  {
    title: "Students",
    path: "/students",
    icon: <CustomIcon icon="fontisto:persons" />,
    children: [
      {
        title: "Student Directory",
        path: "/students/directory",
        icon: <CustomIcon icon="mdi:folder-account" />,
      },
      {
        title: "Student Profile",
        path: "/students/profile",
        icon: <CustomIcon icon="mdi:account-details" />,
        children: [
          {
            title: "Personal Information",
            path: "/students/profile",
            icon: <CustomIcon icon="mdi:card-account-details" />,
          },
          {
            title: "Academic Records",
            path: "/students/academics",
            icon: <CustomIcon icon="mdi:school" />,
          },
          {
            title: "Attendance",
            path: "/students/attendance",
            icon: <CustomIcon icon="mdi:calendar-check" />,
          },
          {
            title: "Discipline Records",
            path: "/students/discipline",
            icon: <CustomIcon icon="mdi:gavel" />,
          },
          {
            title: "Parent Information",
            path: "/students/parents",
            icon: <CustomIcon icon="mdi:account-child" />,
          },
          {
            title: "Medical Records",
            path: "/students/medical",
            icon: <CustomIcon icon="mdi:medical-bag" />,
          },
          {
            title: "Documents",
            path: "/students/documents",
            icon: <CustomIcon icon="mdi:file-document" />,
          },
        ],
      },
    ],
  },
  {
    title: "Academics",
    path: "/academics",
    icon: <CustomIcon icon="mdi:book-education" />,
    children: [
      {
        title: "Class Schedule",
        path: "/academics/schedule",
        icon: <CustomIcon icon="mdi:calendar" />,
      },
      {
        title: "Gradebook",
        path: "/academics/gradebook",
        icon: <CustomIcon icon="mdi:book-open" />,
      },
      {
        title: "Report Cards",
        path: "/academics/reports",
        icon: <CustomIcon icon="mdi:file-chart" />,
      },
      {
        title: "Assignments",
        path: "/academics/assignments",
        icon: <CustomIcon icon="mdi:clipboard-text" />,
      },
      {
        title: "Exams",
        path: "/academics/exams",
        icon: <CustomIcon icon="game-icons:paper-boat" />,
        children: [
          {
            title: "Schedule",
            path: "/academics/exams/schedule",
            icon: <CustomIcon icon="mdi:calendar-clock" />,
          },
          {
            title: "Results",
            path: "/academics/exams/results",
            icon: <CustomIcon icon="mdi:trophy" />,
          },
        ],
      },
      {
        title: "Course Registration",
        path: "/academics/registration",
        icon: <CustomIcon icon="mdi:clipboard-plus" />,
      },
    ],
  },
  {
    title: "Teachers",
    path: "/teachers",
    icon: <CustomIcon icon="mdi:teach" />,
    children: [
      {
        title: "Teacher Directory",
        path: "/teachers/directory",
        icon: <CustomIcon icon="mdi:folder-account" />,
      },
      {
        title: "Profile Management",
        path: "/teachers/profile",
        icon: <CustomIcon icon="mdi:account-cog" />,
      },
      {
        title: "Class Assignment",
        path: "/teachers/classes",
        icon: <CustomIcon icon="mdi:google-classroom" />,
      },
      {
        title: "Attendance Management",
        path: "/teachers/attendance",
        icon: <CustomIcon icon="mdi:calendar-check" />,
      },
      {
        title: "Grade Entry",
        path: "/teachers/grades",
        icon: <CustomIcon icon="mdi:pencil-box" />,
      },
      {
        title: "Leave Management",
        path: "/teachers/leave",
        icon: <CustomIcon icon="mdi:calendar-clock" />,
      },
      {
        title: "Teaching Schedule",
        path: "/teachers/schedule",
        icon: <CustomIcon icon="mdi:calendar" />,
      },
    ],
  },
  {
    title: "Staff",
    path: "/staff",
    icon: <CustomIcon icon="fa6-solid:users" />,
    children: [
      {
        title: "Staff Directory",
        path: "/staff/directory",
        icon: <CustomIcon icon="mdi:folder-account" />,
      },
      {
        title: "Role Management",
        path: "/staff/roles",
        icon: <CustomIcon icon="mdi:shield-account" />,
      },
      {
        title: "Attendance",
        path: "/staff/attendance",
        icon: <CustomIcon icon="mdi:calendar-check" />,
      },
      {
        title: "Leave Management",
        path: "/staff/leave",
        icon: <CustomIcon icon="mdi:calendar-clock" />,
      },
      {
        title: "Performance Records",
        path: "/staff/performance",
        icon: <CustomIcon icon="mdi:chart-line" />,
      },
    ],
  },
  {
    title: "Administration",
    path: "/admin",
    icon: <CustomIcon icon="mdi:shield-crown" />,
    children: [
      {
        title: "School Calendar",
        path: "/admin/calendar",
        icon: <CustomIcon icon="mdi:calendar" />,
      },
      {
        title: "Announcements",
        path: "/admin/announcements",
        icon: <CustomIcon icon="mdi:bullhorn" />,
      },
      {
        title: "Document Management",
        path: "/admin/documents",
        icon: <CustomIcon icon="mdi:file-document" />,
      },
      {
        title: "Fee Management",
        path: "/admin/fees",
        icon: <CustomIcon icon="mdi:cash" />,
      },
      {
        title: "Admissions",
        path: "/admin/admissions",
        icon: <CustomIcon icon="mdi:account-plus" />,
      },
      {
        title: "Resource Management",
        path: "/admin/resources",
        icon: <CustomIcon icon="mdi:toolbox" />,
      },
      {
        title: "Reports",
        path: "/admin/reports",
        icon: <CustomIcon icon="mdi:file-chart" />,
      },
    ],
  },
  {
    title: "Communication",
    path: "/communication",
    icon: <CustomIcon icon="material-symbols:communication" />,
    children: [
      {
        title: "Messages",
        path: "/communication/messages",
        icon: <CustomIcon icon="mdi:message" />,
      },
      {
        title: "Notice Board",
        path: "/communication/notices",
        icon: <CustomIcon icon="mdi:bulletin-board" />,
      },
      {
        title: "Parent Portal",
        path: "/communication/parent-portal",
        icon: <CustomIcon icon="mdi:account-child" />,
      },
      {
        title: "Events",
        path: "/communication/events",
        icon: <CustomIcon icon="mdi:calendar-star" />,
      },
      {
        title: "Newsletter",
        path: "/communication/newsletter",
        icon: <CustomIcon icon="mdi:newspaper" />,
      },
    ],
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <CustomIcon icon="mdi:cog" />,
    children: [
      {
        title: "Academic Year",
        path: "/settings/academic-year",
        icon: <CustomIcon icon="mdi:calendar-clock" />,
      },
      {
        title: "Class Management",
        path: "/settings/classes",
        icon: <CustomIcon icon="mdi:google-classroom" />,
      },
      {
        title: "Subject Management",
        path: "/settings/subjects",
        icon: <CustomIcon icon="mdi:book" />,
      },
      {
        title: "User Roles",
        path: "/settings/roles",
        icon: <CustomIcon icon="mdi:shield-account" />,
      },
      {
        title: "System Settings",
        path: "/settings/system",
        icon: <CustomIcon icon="mdi:cog-box" />,
      },
    ],
  },
];

export default navConfig;
