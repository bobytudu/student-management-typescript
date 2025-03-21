import { Helmet } from 'react-helmet-async';
// @mui
import {
  Card,
  Container,
  Typography,
  Stack,
  TextField,
  Button,
  Box,
} from '@mui/material';

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title> Login | School Management System </title>
      </Helmet>

      <Container maxWidth="sm">
        <Stack spacing={3} sx={{ my: 5 }}>
          <Typography variant="h4" align="center">
            Login
          </Typography>

          <Card sx={{ p: 4 }}>
            <Stack spacing={3}>
              <TextField label="Email" fullWidth />
              <TextField label="Password" type="password" fullWidth />
              <Button variant="contained" size="large">
                Login
              </Button>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="body2">
                  Forgot password? <Button variant="text">Reset</Button>
                </Typography>
              </Box>
            </Stack>
          </Card>
        </Stack>
      </Container>
    </>
  );
} 