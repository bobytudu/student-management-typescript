# School Management System

This comprehensive school management system provides a complete solution for educational institutions to manage students, teachers, staff, academics, and administrative functions.

## Navigation Structure

### Dashboard
- **Dashboard** (`/dashboard`) - Main overview page with key metrics and information

### Authentication
- **Login** (`/auth/login`) - User authentication page
- **Password Reset** (`/auth/reset-password`) - Reset forgotten passwords
- **Dashboards**
  - **Admin Dashboard** (`/auth/dashboards/admin`) - Administrative control panel
  - **Teacher Dashboard** (`/auth/dashboards/teacher`) - Teacher-specific dashboard
  - **Student Dashboard** (`/auth/dashboards/student`) - Student-specific dashboard
  - **Staff Dashboard** (`/auth/dashboards/staff`) - Staff-specific dashboard

### Students
- **Student Directory** (`/students/directory`) - Complete listing of all students
- **Student Profile**
  - **Personal Information** (`/students/profile/personal`) - Student biographical data
  - **Academic Records** (`/students/profile/academics`) - Academic history and performance
  - **Attendance** (`/students/profile/attendance`) - Attendance records and statistics
  - **Discipline Records** (`/students/profile/discipline`) - Behavioral incidents and actions
  - **Parent Information** (`/students/profile/parents`) - Parent/guardian contact details
  - **Medical Records** (`/students/profile/medical`) - Health information and medical history
  - **Documents** (`/students/profile/documents`) - Student-related documentation

### Academics
- **Class Schedule** (`/academics/schedule`) - Timetables for classes
- **Gradebook** (`/academics/gradebook`) - Grade recording and management
- **Report Cards** (`/academics/reports`) - Academic performance reports
- **Assignments** (`/academics/assignments`) - Homework and project tracking
- **Exams**
  - **Schedule** (`/academics/exams/schedule`) - Examination timetables
  - **Results** (`/academics/exams/results`) - Examination outcomes and analysis
- **Course Registration** (`/academics/registration`) - Subject enrollment management

### Teachers
- **Teacher Directory** (`/teachers/directory`) - Complete listing of all teachers
- **Profile Management** (`/teachers/profile`) - Teacher profile administration
- **Class Assignment** (`/teachers/classes`) - Allocation of teachers to classes
- **Attendance Management** (`/teachers/attendance`) - Teacher attendance tracking
- **Grade Entry** (`/teachers/grades`) - Grade input and management interface
- **Leave Management** (`/teachers/leave`) - Teacher absence and leave tracking
- **Teaching Schedule** (`/teachers/schedule`) - Individual teacher timetables

### Staff
- **Staff Directory** (`/staff/directory`) - Complete listing of all non-teaching staff
- **Role Management** (`/staff/roles`) - Staff position and responsibility assignment
- **Attendance** (`/staff/attendance`) - Staff attendance tracking
- **Leave Management** (`/staff/leave`) - Staff absence and leave tracking
- **Performance Records** (`/staff/performance`) - Staff evaluation and assessment

### Administration
- **School Calendar** (`/admin/calendar`) - Academic year planning and events
- **Announcements** (`/admin/announcements`) - School-wide notifications
- **Document Management** (`/admin/documents`) - Administrative document repository
- **Fee Management** (`/admin/fees`) - Tuition and fee administration
- **Admissions** (`/admin/admissions`) - New student enrollment process
- **Resource Management** (`/admin/resources`) - School resource allocation
- **Reports** (`/admin/reports`) - Administrative reporting and analytics

### Communication
- **Messages** (`/communication/messages`) - Internal messaging system
- **Notice Board** (`/communication/notices`) - Public announcements and notices
- **Parent Portal** (`/communication/parent-portal`) - Parent communication interface
- **Events** (`/communication/events`) - School events management
- **Newsletter** (`/communication/newsletter`) - School newsletter publication

### Settings
- **Academic Year** (`/settings/academic-year`) - School year configuration
- **Class Management** (`/settings/classes`) - Classroom setup and organization
- **Subject Management** (`/settings/subjects`) - Curriculum and subject configuration
- **User Roles** (`/settings/roles`) - System access and permission management
- **System Settings** (`/settings/system`) - General application configuration
