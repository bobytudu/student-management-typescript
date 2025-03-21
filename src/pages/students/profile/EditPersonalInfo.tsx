import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Helmet } from 'react-helmet-async';
import {
  Card,
  Container,
  Typography,
  Stack,
  Grid,
  Button,
  Divider,
  IconButton,
} from '@mui/material';
import { useForm, useFieldArray } from 'react-hook-form';
import Iconify from "components/iconify";
import CustomInput from "components/forms/CustomInput";
import { useNavigate } from 'react-router-dom';

type FormValues = {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  email: string;
  phone: string;
  address: string;
  emergencyContact: string;
  customFields: { label: string; value: string }[];
};

const schema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  dateOfBirth: yup.string().required('Date of birth is required'),
  gender: yup.string().required('Gender is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  address: yup.string().required('Address is required'),
  emergencyContact: yup.string().required('Emergency contact is required'),
  customFields: yup.array().of(
    yup.object().shape({
      label: yup.string().required('Field label is required'),
      value: yup.string().required('Field value is required')
    })
  ).default([])
});

export default function EditProfilePage() {
  const defaultValues: FormValues = {
    firstName: 'John',
    lastName: 'Doe',
    dateOfBirth: '2005-05-15',
    gender: 'Male',
    email: 'john.doe@example.com',
    phone: '+1 234 567 8901',
    address: '123 School Lane, Education City, Learning State, 12345',
    emergencyContact: 'Jane Doe (Mother) - +1 234 567 8902',
    customFields: [],
  };

  const {
    control,
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'customFields',
  });
  const navigate = useNavigate();

  const onSubmit = (data: FormValues) => {
    console.log('Form submitted:', data);
    navigate('/students/profile');
  };

  return (
    <>
      <Helmet>
        <title>Edit Student Profile | School Management System</title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Edit Student Profile
          </Typography>
          <Button
            variant="contained"
            startIcon={<Iconify icon="eva:save-fill" />}
            onClick={handleSubmit(onSubmit)}
          >
            Save Changes
          </Button>
        </Stack>

        <Card sx={{ p: 3 }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <CustomInput
                  name="firstName"
                  control={control}
                  label="First Name"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <CustomInput
                  name="lastName"
                  control={control}
                  label="Last Name"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <CustomInput
                  name="dateOfBirth"
                  control={control}
                  label="Date of Birth"
                  type="date"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <CustomInput
                  name="gender"
                  control={control}
                  label="Gender"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <CustomInput
                  name="email"
                  control={control}
                  label="Email"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <CustomInput
                  name="phone"
                  control={control}
                  label="Phone"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12}>
                <CustomInput
                  name="address"
                  control={control}
                  label="Address"
                  multiline
                  rows={2}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12}>
                <CustomInput
                  name="emergencyContact"
                  control={control}
                  label="Emergency Contact"
                  fullWidth
                />
              </Grid>

              {/* Custom Fields Section */}
              <Grid item xs={12}>
                <Divider sx={{ my: 2 }} />
                <Typography variant="h6" gutterBottom>
                  Custom Fields
                </Typography>
                {fields.map((field, index) => (
                  <Stack key={field.id} direction="row" spacing={2} mb={2}>
                    <CustomInput
                      name={`customFields.${index}.label`}
                      control={control}
                      label="Field Label"
                      fullWidth
                    />
                    <CustomInput
                      name={`customFields.${index}.value`}
                      control={control}
                      label="Field Value"
                      fullWidth
                    />
                    <IconButton
                      color="error"
                      onClick={() => remove(index)}
                    >
                      <Iconify icon="eva:trash-2-outline" />
                    </IconButton>
                  </Stack>
                ))}
                <Button
                  variant="outlined"
                  startIcon={<Iconify icon="eva:plus-fill" />}
                  onClick={() => append({ label: '', value: '' })}
                >
                  Add Custom Field
                </Button>
              </Grid>
            </Grid>
          </form>
        </Card>
      </Container>
    </>
  );
}