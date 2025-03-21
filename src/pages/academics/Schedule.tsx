import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
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
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import Iconify from 'components/iconify';
import CustomInput from 'components/forms/CustomInput';

// Types
interface Period {
  subject: string;
  teacher: string;
  className: string;
  room: string;
}

interface ScheduleData {
  [className: string]: {
    [day: string]: Period[];
  };
}

interface FormData {
  subject: string;
  teacher: string;
  className: string;
  room: string;
}

// Configuration
const WEEKDAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const PERIODS = ['8:00 - 8:45', '8:50 - 9:35', '9:40 - 10:25', '10:40 - 11:25', '11:30 - 12:15', '12:20 - 13:05'];

const CLASSES = ['10A', '10B', '11A', '11B'];
const TEACHERS = [
  'Mr. Smith',
  'Ms. Johnson',
  'Dr. Brown',
  'Mrs. Davis',
  'Coach Wilson',
  'Mr. Taylor',
  'Ms. Anderson',
  'Mr. Lee',
  'Mrs. Clark',
  'Ms. White',
];

// Initial schedule data
const INITIAL_SCHEDULE: ScheduleData = {
  '10A': {
    Monday: [
      { subject: 'Mathematics', teacher: 'Mr. Smith', className: '10A', room: '101' },
      { subject: 'English', teacher: 'Ms. Johnson', className: '10A', room: '102' },
      { subject: 'Physics', teacher: 'Dr. Brown', className: '10A', room: '103' },
      { subject: 'Chemistry', teacher: 'Mrs. Davis', className: '10A', room: '104' },
      { subject: 'Physical Education', teacher: 'Coach Wilson', className: '10A', room: 'Gym' },
      { subject: 'History', teacher: 'Mr. Taylor', className: '10A', room: '105' },
    ],
    Tuesday: [
      { subject: 'Biology', teacher: 'Ms. Anderson', className: '10A', room: '106' },
      { subject: 'Mathematics', teacher: 'Mr. Smith', className: '10A', room: '101' },
      { subject: 'English', teacher: 'Ms. Johnson', className: '10A', room: '102' },
      { subject: 'Computer Science', teacher: 'Mr. Lee', className: '10A', room: 'Lab 1' },
      { subject: 'Geography', teacher: 'Mrs. Clark', className: '10A', room: '107' },
      { subject: 'Physics', teacher: 'Dr. Brown', className: '10A', room: '103' },
    ],
    Wednesday: [
      { subject: 'Chemistry', teacher: 'Mrs. Davis', className: '10A', room: '104' },
      { subject: 'History', teacher: 'Mr. Taylor', className: '10A', room: '105' },
      { subject: 'Mathematics', teacher: 'Mr. Smith', className: '10A', room: '101' },
      { subject: 'English', teacher: 'Ms. Johnson', className: '10A', room: '102' },
      { subject: 'Art', teacher: 'Ms. White', className: '10A', room: 'Art Room' },
      { subject: 'Biology', teacher: 'Ms. Anderson', className: '10A', room: '106' },
    ],
    Thursday: [
      { subject: 'Physics', teacher: 'Dr. Brown', className: '10A', room: '103' },
      { subject: 'Geography', teacher: 'Mrs. Clark', className: '10A', room: '107' },
      { subject: 'Chemistry', teacher: 'Mrs. Davis', className: '10A', room: '104' },
      { subject: 'Mathematics', teacher: 'Mr. Smith', className: '10A', room: '101' },
      { subject: 'English', teacher: 'Ms. Johnson', className: '10A', room: '102' },
      { subject: 'Computer Science', teacher: 'Mr. Lee', className: '10A', room: 'Lab 1' },
    ],
    Friday: [
      { subject: 'English', teacher: 'Ms. Johnson', className: '10A', room: '102' },
      { subject: 'Physical Education', teacher: 'Coach Wilson', className: '10A', room: 'Gym' },
      { subject: 'History', teacher: 'Mr. Taylor', className: '10A', room: '105' },
      { subject: 'Biology', teacher: 'Ms. Anderson', className: '10A', room: '106' },
      { subject: 'Mathematics', teacher: 'Mr. Smith', className: '10A', room: '101' },
      { subject: 'Art', teacher: 'Ms. White', className: '10A', room: 'Art Room' },
    ],
  },
  // Add more classes with empty schedules
  '10B': { Monday: [], Tuesday: [], Wednesday: [], Thursday: [], Friday: [] },
  '11A': { Monday: [], Tuesday: [], Wednesday: [], Thursday: [], Friday: [] },
  '11B': { Monday: [], Tuesday: [], Wednesday: [], Thursday: [], Friday: [] },
};

export default function SchedulePage() {
  const [schedule, setSchedule] = useState<ScheduleData>(INITIAL_SCHEDULE);
  const [selectedClass, setSelectedClass] = useState<string>('10A');
  const [openDialog, setOpenDialog] = useState(false);
  const [editingCell, setEditingCell] = useState<{ day: string; periodIndex: number } | null>(null);

  const { control, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      subject: '',
      teacher: '',
      className: selectedClass,
      room: '',
    },
  });

  const handleClassChange = (event: SelectChangeEvent<string>) => {
    setSelectedClass(event.target.value);
  };

  const handleEdit = (day: string, periodIndex: number) => {
    setEditingCell({ day, periodIndex });
    const period = schedule[selectedClass][day][periodIndex] || {
      subject: '',
      teacher: '',
      className: selectedClass,
      room: '',
    };
    reset(period);
    setOpenDialog(true);
  };

  const onSubmit = (data: FormData) => {
    if (editingCell) {
      const newSchedule = { ...schedule };
      const daySchedule = newSchedule[data.className][editingCell.day];
      // If period doesn't exist, pad array with empty periods
      while (daySchedule.length <= editingCell.periodIndex) {
        daySchedule.push({ subject: '', teacher: '', className: data.className, room: '' });
      }
      daySchedule[editingCell.periodIndex] = data;
      setSchedule(newSchedule);
      setSelectedClass(data.className);
    }
    handleClose();
  };

  const handleClose = () => {
    setOpenDialog(false);
    setEditingCell(null);
    reset({ subject: '', teacher: '', className: selectedClass, room: '' });
  };

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
          <Box>
            <FormControl sx={{ minWidth: 120, mr: 2 }}>
              <InputLabel>Class</InputLabel>
              <Select
                value={selectedClass}
                onChange={handleClassChange}
                label="Class"
              >
                {CLASSES.map((className) => (
                  <MenuItem key={className} value={className}>
                    {className}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button variant="contained">Export Schedule</Button>
          </Box>
        </Stack>

        <Card>
          <Box sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Class {selectedClass} - Weekly Schedule
            </Typography>
            
            <TableContainer component={Paper} sx={{ mt: 3 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ minWidth: 120 }}>Day / Time</TableCell>
                    {PERIODS.map((period, index) => (
                      <TableCell key={index} sx={{ minWidth: 150 }}>{period}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {WEEKDAYS.map((day) => (
                    <TableRow key={day}>
                      <TableCell component="th" scope="row">
                        {day}
                      </TableCell>
                      {PERIODS.map((_, periodIndex) => {
                        const period = schedule[selectedClass][day][periodIndex] || {
                          subject: '',
                          teacher: '',
                          className: selectedClass,
                          room: '',
                        };
                        return (
                          <TableCell key={periodIndex}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                              <Box>
                                <Typography variant="body2">{period.subject || '-'}</Typography>
                                <Typography variant="caption" color="text.secondary">
                                  {period.teacher || '-'}
                                </Typography>
                                <Typography variant="caption" color="text.secondary" display="block">
                                  Room: {period.room || '-'}
                                </Typography>
                              </Box>
                              <IconButton
                                size="small"
                                onClick={() => handleEdit(day, periodIndex)}
                              >
                                <Iconify icon="mdi:pencil" />
                              </IconButton>
                            </Box>
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Card>

        {/* Edit Dialog */}
        <Dialog open={openDialog} onClose={handleClose} maxWidth="sm" fullWidth>
          <DialogTitle>Edit Class Period</DialogTitle>
          <form onSubmit={handleSubmit(onSubmit)}>
            <DialogContent>
              <Stack spacing={3} sx={{ mt: 1 }}>
                <Controller
                  name="className"
                  control={control}
                  rules={{ required: 'Class is required' }}
                  render={({ field }) => (
                    <FormControl fullWidth error={!!errors.className}>
                      <InputLabel>Class</InputLabel>
                      <Select
                        {...field}
                        label="Class"
                      >
                        {CLASSES.map((className) => (
                          <MenuItem key={className} value={className}>
                            {className}
                          </MenuItem>
                        ))}
                      </Select>
                      {errors.className && (
                        <Typography color="error" variant="caption">
                          {errors.className.message}
                        </Typography>
                      )}
                    </FormControl>
                  )}
                />
                <CustomInput
                  name="subject"
                  control={control}
                  label="Subject"
                  fullWidth
                  error={!!errors.subject}
                  helperText={errors.subject?.message}
                />
                <Controller
                  name="teacher"
                  control={control}
                  rules={{ required: 'Teacher is required' }}
                  render={({ field }) => (
                    <FormControl fullWidth error={!!errors.teacher}>
                      <InputLabel>Teacher</InputLabel>
                      <Select
                        {...field}
                        label="Teacher"
                      >
                        {TEACHERS.map((teacher) => (
                          <MenuItem key={teacher} value={teacher}>
                            {teacher}
                          </MenuItem>
                        ))}
                      </Select>
                      {errors.teacher && (
                        <Typography color="error" variant="caption">
                          {errors.teacher.message}
                        </Typography>
                      )}
                    </FormControl>
                  )}
                />
                <CustomInput
                  name="room"
                  control={control}
                  label="Room"
                  fullWidth
                  error={!!errors.room}
                  helperText={errors.room?.message}
                />
              </Stack>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit" variant="contained">Save</Button>
            </DialogActions>
          </form>
        </Dialog>
      </Container>
    </>
  );
}