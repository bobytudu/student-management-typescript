import Page from "components/page/Page";
import { Container, Grid, Paper, Typography } from "@mui/material";
import CustomSelect from "components/forms/CustomSelect";
import { useForm } from "react-hook-form";
import CustomInput from "components/forms/CustomInput";
import subjects from "utils/json/subjects.json";
import Button from "@mui/material/Button";
// import exams from 'utils/exams'
import students from "utils/json/students.json";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const yupvalidationSchema = yup.object().shape({
  student: yup.string().required("Student is required"),
  subject: yup.string().required("Subject is required"),
  exam: yup.string().required("Exam is required"),
  marks: yup.string().required("Marks is required"),
  class: yup.string().required("Class is required"),
});
export default function MarkEntryPage() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      class: "",
      student: "",
      subject: "",
      exam: "",
      marks: "",
    },
    resolver: yupResolver(yupvalidationSchema),
  });
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <Page title={"Marks Entry"}>
      <Container
        maxWidth="sm"
        component={Paper}
        sx={{ p: 3, border: 1, borderColor: "divider" }}
      >
        <Typography variant="h3" color="text.primary">
          Marks Entry
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <CustomSelect
              name="class"
              control={control}
              label="Class"
              options={students.map((item) => ({
                label: item.first_name,
                value: item.id.$oid,
              }))}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomSelect
              name="student"
              control={control}
              label="Student"
              options={students.map((item) => ({
                label: item.first_name,
                value: item.id.$oid,
              }))}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomSelect
              name="subject"
              control={control}
              label="Subjects"
              options={subjects.map((item) => ({
                label: item.title,
                value: item.id.$oid,
              }))}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomSelect
              name="exam"
              control={control}
              label="Exams"
              options={[]}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomInput
              type="number"
              fullWidth
              name="marks"
              control={control}
              label="Marks"
            />
          </Grid>
          <Grid item xs={12} container justifyContent="flex-end">
            <Button variant="contained" color='primary' onClick={handleSubmit(onSubmit)}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
