import { Helmet } from 'react-helmet-async';
// @mui
import {
  Card,
  Container,
  Typography,
  Stack,
  Grid,
  Box,
} from '@mui/material';
// components
import Iconify from "components/iconify";

export default function AdminDashboardPage() {
  return (
    <>
      <Helmet>
        <title> Admin Dashboard | School Management System </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Admin Dashboard
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 3 }}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Box sx={{ p: 2, bgcolor: 'primary.lighter', borderRadius: 2 }}>
                  <Iconify icon="mdi:account-group" width={40} height={40} color="primary.main" />
                </Box>
                <Box>
                  <Typography variant="h6">Total Students</Typography>
                  <Typography variant="h4">1,234</Typography>
                </Box>
              </Stack>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 3 }}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Box sx={{ p: 2, bgcolor: 'info.lighter', borderRadius: 2 }}>
                  <Iconify icon="mdi:teach" width={40} height={40} color="info.main" />
                </Box>
                <Box>
                  <Typography variant="h6">Total Teachers</Typography>
                  <Typography variant="h4">87</Typography>
                </Box>
              </Stack>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 3 }}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Box sx={{ p: 2, bgcolor: 'success.lighter', borderRadius: 2 }}>
                  <Iconify icon="mdi:google-classroom" width={40} height={40} color="success.main" />
                </Box>
                <Box>
                  <Typography variant="h6">Total Classes</Typography>
                  <Typography variant="h4">42</Typography>
                </Box>
              </Stack>
            </Card>
          </Grid>
          
          <Grid item xs={12}>
            <Card sx={{ p: 3, height: '400px' }}>
              <Typography variant="h6" gutterBottom>
                Recent Activities
              </Typography>
              <Typography variant="body2">
                Activity charts and logs will be displayed here
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
} 