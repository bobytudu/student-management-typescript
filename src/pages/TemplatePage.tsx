import { Helmet } from 'react-helmet-async';
// @mui
import {
  Card,
  Container,
  Typography,
  Stack,
  Button,
} from '@mui/material';
// components
import Iconify from "components/iconify";

export default function TemplatePage({ title }: { title: string }) {
  return (
    <>
      <Helmet>
        <title> {title} | School Management System </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            {title}
          </Typography>
          <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
            New {title.slice(0, -1)}
          </Button>
        </Stack>

        <Card>
          <Typography variant="body1" sx={{ p: 5, textAlign: 'center' }}>
            {title} content will be implemented here
          </Typography>
        </Card>
      </Container>
    </>
  );
} 