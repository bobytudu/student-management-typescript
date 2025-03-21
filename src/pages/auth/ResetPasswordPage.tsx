import { Helmet } from 'react-helmet-async';
// @mui
import {
  Card,
  Container,
  Typography,
  Stack,
  TextField,
  Button,
} from '@mui/material';

export default function ResetPasswordPage() {
  return (
    <>
      <Helmet>
        <title> Reset Password | School Management System </title>
      </Helmet>

      <Container maxWidth="sm">
        <Stack spacing={3} sx={{ my: 5 }}>
          <Typography variant="h4" align="center">
            Reset Password
          </Typography>

          <Card sx={{ p: 4 }}>
            <Stack spacing={3}>
              <Typography variant="body1">
                Enter your email address and we'll send you a link to reset your password.
              </Typography>
              <TextField label="Email" fullWidth />
              <Button variant="contained" size="large">
                Send Reset Link
              </Button>
            </Stack>
          </Card>
        </Stack>
      </Container>
    </>
  );
} 