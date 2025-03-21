import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  Container,
  Typography,
  Box,
  Button,
  Stack,
} from '@mui/material';
import CustomInput from 'components/forms/CustomInput';

const resetSchema = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
}).required();

type ResetFormData = yup.InferType<typeof resetSchema>;

export default function ResetPassword() {
  const { control, handleSubmit } = useForm<ResetFormData>({
    resolver: yupResolver(resetSchema),
    defaultValues: { email: '' },
  });

  const onSubmit = (data: ResetFormData) => {
    console.log('Reset password data:', data);
    // Implement reset password logic here
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, p: 4, boxShadow: 3, borderRadius: 2, bgcolor: 'background.paper' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Reset Password
        </Typography>
        <Typography variant="body2" align="center" color="text.secondary" sx={{ mb: 3 }}>
          Enter your email address and we'll send you a link to reset your password
        </Typography>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3}>
            <CustomInput
              name="email"
              control={control}
              label="Email"
              placeholder="Enter your email"
              type="email"
              fullWidth
            />
            
            <Button type="submit" variant="contained" size="large">
              Send Reset Link
            </Button>
          </Stack>
        </form>

        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          Remember your password? <a href="/login">Login</a>
        </Typography>
      </Box>
    </Container>
  );
}