import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  Container,
  Typography,
  Box,
  Button,
  Divider,
  Stack,
} from '@mui/material';
import CustomInput from 'components/forms/CustomInput';
import Iconify from 'components/iconify';

const loginSchema = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
}).required();

type LoginFormData = yup.InferType<typeof loginSchema>;

export default function Login() {
  const { control, handleSubmit } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = (data: LoginFormData) => {
    console.log('Login data:', data);
    // Implement login logic here
  };

  const handleGoogleLogin = () => {
    console.log('Google login');
    // Implement Google login logic
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, p: 4, boxShadow: 3, borderRadius: 2, bgcolor: 'background.paper' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
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
            
            <CustomInput
              name="password"
              control={control}
              label="Password"
              placeholder="Enter your password"
              type="password"
              fullWidth
            />
            
            <Button type="submit" variant="contained" size="large">
              Login
            </Button>
          </Stack>
        </form>

        <Divider sx={{ my: 3 }}>OR</Divider>

        <Button
          variant="outlined"
          startIcon={<Iconify icon="flat-color-icons:google" />}
          onClick={handleGoogleLogin}
          fullWidth
          size="large"
        >
          Login with Google
        </Button>

        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          Forgot password? <a href="/reset-password">Reset it</a>
        </Typography>
        <Typography variant="body2" align="center">
          Don't have an account? <a href="/signup">Sign up</a>
        </Typography>
      </Box>
    </Container>
  );
}