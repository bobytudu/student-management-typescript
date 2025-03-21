import React, { useState } from 'react';
import { 
  Autocomplete, 
  TextField, 
  Box, 
  Typography, 
  Paper, 
  Grid,
  CircularProgress
} from '@mui/material';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Setup date-fns localizer for calendar
// const locales = {
//   'en-US': require('date-fns/locale/en-US')
// };
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
//   locales,
});

// Types
interface Student {
  id: string;
  name: string;
}

interface AttendanceRecord {
  date: Date;
  status: 'present' | 'absent' | 'late';
}

const StudentAttendance: React.FC = () => {
  // State
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [attendanceData, setAttendanceData] = useState<AttendanceRecord[]>([]);
  const [loading, setLoading] = useState(false);

  // Mock student data (replace with API call in real implementation)
  const students: Student[] = [
    { id: '1', name: 'John Doe' },
    { id: '2', name: 'Jane Smith' },
    { id: '3', name: 'Bob Johnson' },
  ];

  // Event style getter for calendar
  const eventStyleGetter = (event: AttendanceRecord) => {
    const style = {
      backgroundColor: 
        event.status === 'present' ? '#4caf50' :
        event.status === 'absent' ? '#f44336' :
        '#ff9800',
      borderRadius: '5px',
      opacity: 0.8,
      color: 'white',
      border: '0px',
      display: 'block'
    };
    return { style };
  };

  // Fetch attendance data when student is selected
  const handleStudentChange = async (_event: any, newValue: Student | null) => {
    setSelectedStudent(newValue);
    if (newValue) {
      setLoading(true);
      // Mock API call
      const mockAttendance: AttendanceRecord[] = [
        { date: new Date(2025, 2, 15), status: 'present' },
        { date: new Date(2025, 2, 16), status: 'absent' },
        { date: new Date(2025, 2, 17), status: 'late' },
      ];
      setAttendanceData(mockAttendance);
      setLoading(false);
    } else {
      setAttendanceData([]);
    }
  };

  // Legend component
  const AttendanceLegend: React.FC = () => (
    <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Box sx={{ width: 20, height: 20, bgcolor: '#4caf50' }} />
        <Typography>Present</Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Box sx={{ width: 20, height: 20, bgcolor: '#f44336' }} />
        <Typography>Absent</Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Box sx={{ width: 20, height: 20, bgcolor: '#ff9800' }} />
        <Typography>Late</Typography>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Student Attendance
      </Typography>
      
      <Paper sx={{ p: 3, mb: 3 }}>
        <Autocomplete
          options={students}
          getOptionLabel={(option) => option.name}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Select Student"
              variant="outlined"
            />
          )}
          onChange={handleStudentChange}
          value={selectedStudent}
          sx={{ maxWidth: 300, mb: 3 }}
        />

        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgress />
          </Box>
        ) : selectedStudent ? (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Box sx={{ height: 600 }}>
                <Calendar
                  localizer={localizer}
                  events={attendanceData}
                  startAccessor="date"
                  endAccessor="date"
                  style={{ height: '100%' }}
                  eventPropGetter={eventStyleGetter}
                  titleAccessor={(event) => event.status}
                  defaultView="month"
                  views={['month', 'week', 'day']}
                />
              </Box>
              <AttendanceLegend />
            </Grid>
          </Grid>
        ) : (
          <Typography>Select a student to view attendance</Typography>
        )}
      </Paper>
    </Box>
  );
};

export default StudentAttendance;