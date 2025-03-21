import { Helmet } from 'react-helmet-async';
// @mui
import {
  Card,
  Container,
  Typography,
  Stack,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

const WEEKDAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const PERIODS = ['8:00 - 8:45', '8:50 - 9:35', '9:40 - 10:25', '10:40 - 11:25', '11:30 - 12:15', '12:20 - 13:05'];

const SCHEDULE = [
  ['Mathematics', 'English', 'Physics', 'Chemistry', 'Physical Education', 'History'],
  ['Biology', 'Mathematics', 'English', 'Computer Science', 'Geography', 'Physics'],
  ['Chemistry', 'History', 'Mathematics', 'English', 'Art', 'Biology'],
  ['Physics', 'Geography', 'Chemistry', 'Mathematics', 'English', 'Computer Science'],
  ['English', 'Physical Education', 'History', 'Biology', 'Mathematics', 'Art'],
];

export default function SchedulePage() {
  return (
    <>
      <Helmet>
        <title> Class Schedule | School Management System </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Class Schedule
          </Typography>
        </Stack>

        <Card>
          <Box sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Class 10A - Weekly Schedule
            </Typography>
            
            <TableContainer component={Paper} sx={{ mt: 3 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Day / Time</TableCell>
                    {PERIODS.map((period, index) => (
                      <TableCell key={index}>{period}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {WEEKDAYS.map((day, dayIndex) => (
                    <TableRow key={day}>
                      <TableCell component="th" scope="row">
                        {day}
                      </TableCell>
                      {SCHEDULE[dayIndex].map((subject, periodIndex) => (
                        <TableCell key={periodIndex}>
                          <Typography variant="body2">{subject}</Typography>
                          <Typography variant="caption" color="text.secondary">
                            Room {101 + periodIndex}
                          </Typography>
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Card>
      </Container>
    </>
  );
} 