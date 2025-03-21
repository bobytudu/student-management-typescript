// src/pages/Signup.tsx
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

const signupSchema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().matches(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number').required('Phone is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
}).required();

type SignupFormData = yup.InferType<typeof signupSchema>;

export default function Signup() {
  const { control, handleSubmit } = useForm<SignupFormData>({
    resolver: yupResolver(signupSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = (data: SignupFormData) => {
    console.log('Signup data:', data);
    // Implement signup logic here
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, p: 4, boxShadow: 3, borderRadius: 2, bgcolor: 'background.paper' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Sign Up
        </Typography>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3}>
            <CustomInput
              name="firstName"
              control={control}
              label="First Name"
              placeholder="Enter your first name"
              fullWidth
            />
            
            <CustomInput
              name="lastName"
              control={control}
              label="Last Name"
              placeholder="Enter your last name"
              fullWidth
            />
            
            <CustomInput
              name="email"
              control={control}
              label="Email"
              placeholder="Enter your email"
              type="email"
              fullWidth
            />
            
            <CustomInput
              name="phone"
              control={control}
              label="Phone"
              placeholder="Enter your phone (+1234567890)"
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
            
            <CustomInput
              name="confirmPassword"
              control={control}
              label="Confirm Password"
              placeholder="Confirm your password"
              type="password"
              fullWidth
            />
            
            <Button type="submit" variant="contained" size="large">
              Sign Up
            </Button>
          </Stack>
        </form>

        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          Already have an account? <a href="/login">Login</a>
        </Typography>
      </Box>
    </Container>
  );
}