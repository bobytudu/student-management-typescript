import { Helmet } from 'react-helmet-async';
// @mui
import {
  Card,
  Container,
  Typography,
  Stack,
  Grid,
  Avatar,
  Divider,
  Button,
} from '@mui/material';
// components
import Iconify from "components/iconify";
import { useNavigate } from 'react-router-dom';
export default function PersonalInfoPage() {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title> Student Personal Information | School Management System </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Student Profile
          </Typography>
          <Button variant="contained" startIcon={<Iconify icon="eva:edit-fill" />} onClick={() => navigate('/students/profile/edit')}>
            Edit Profile
          </Button>
        </Stack>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 3, textAlign: 'center' }}>
              <Avatar
                src="/assets/images/avatars/avatar_1.jpg"
                alt="John Doe"
                sx={{ width: 120, height: 120, mx: 'auto', mb: 2 }}
              />
              <Typography variant="h5">John Doe</Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Student ID: ST12345
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Class: 10A
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Stack spacing={1}>
                <Button fullWidth variant="outlined" startIcon={<Iconify icon="mdi:file-document" />}>
                  View Documents
                </Button>
                <Button fullWidth variant="outlined" startIcon={<Iconify icon="mdi:calendar-check" />}>
                  Attendance Record
                </Button>
              </Stack>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={8}>
            <Card sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Personal Information
              </Typography>
              <Divider sx={{ mb: 3 }} />
              
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Stack spacing={0.5}>
                    <Typography variant="body2" color="text.secondary">
                      First Name
                    </Typography>
                    <Typography variant="body1">John</Typography>
                  </Stack>
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <Stack spacing={0.5}>
                    <Typography variant="body2" color="text.secondary">
                      Last Name
                    </Typography>
                    <Typography variant="body1">Doe</Typography>
                  </Stack>
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <Stack spacing={0.5}>
                    <Typography variant="body2" color="text.secondary">
                      Date of Birth
                    </Typography>
                    <Typography variant="body1">15-05-2005</Typography>
                  </Stack>
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <Stack spacing={0.5}>
                    <Typography variant="body2" color="text.secondary">
                      Gender
                    </Typography>
                    <Typography variant="body1">Male</Typography>
                  </Stack>
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <Stack spacing={0.5}>
                    <Typography variant="body2" color="text.secondary">
                      Email
                    </Typography>
                    <Typography variant="body1">john.doe@example.com</Typography>
                  </Stack>
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <Stack spacing={0.5}>
                    <Typography variant="body2" color="text.secondary">
                      Phone
                    </Typography>
                    <Typography variant="body1">+1 234 567 8901</Typography>
                  </Stack>
                </Grid>
                
                <Grid item xs={12}>
                  <Stack spacing={0.5}>
                    <Typography variant="body2" color="text.secondary">
                      Address
                    </Typography>
                    <Typography variant="body1">
                      123 School Lane, Education City, Learning State, 12345
                    </Typography>
                  </Stack>
                </Grid>
                
                <Grid item xs={12}>
                  <Stack spacing={0.5}>
                    <Typography variant="body2" color="text.secondary">
                      Emergency Contact
                    </Typography>
                    <Typography variant="body1">
                      Jane Doe (Mother) - +1 234 567 8902
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
} 