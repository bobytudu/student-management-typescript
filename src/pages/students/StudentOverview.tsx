import React from "react";
import Container from "@mui/material/Container";
import MaterialTable from "@material-table/core";
import PageTitle from "components/page/PageTitle";
import Page from "components/page/Page";
import Box from "@mui/material/Box";
import DialogContainer from "components/dialog/DialogContainer";
import { useForm } from "react-hook-form";
import CustomInput from "components/forms/CustomInput";
import { Grid, useTheme } from "@mui/material";
import CustomSelect from "components/forms/CustomSelect";
import { genderOptions } from "utils/variable";
import Button from "@mui/material/Button";
import CustomDatePicker from "components/forms/CustomDatePicker";
import CustomTypo from "components/forms/CustomTypo";
import { CustomTheme } from "theme/overrides";
import { useAppSelector } from "../../redux/hooks";

export default function StudentOverview() {
  const theme: CustomTheme = useTheme();
  const { classes, students } = useAppSelector((state) => ({
    classes: state.class.list,
    students: state.student.list,
  }));

  const [open, setOpen] = React.useState(false);
  const { control, watch, setValue } = useForm({
    defaultValues: {
      class: "",
      first_name: "",
      last_name: "",
      email: "",
      gender: "",
      dob: new Date(),
    },
  });
  const selectedClass = watch("class");
  const handleAddStudent = () => {
    setOpen((prev) => !prev);
  };
  React.useEffect(() => {
    if (!selectedClass && classes?.length > 0) {
      setValue("class", classes[0].id);
    }
  }, [selectedClass, classes]);
  return (
    <Page title="Student Overview">
      <DialogContainer
        open={open}
        maxWidth="sm"
        onClose={handleAddStudent}
        title="Add new Student"
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <CustomInput
              control={control}
              name="first_name"
              fullWidth
              label="First name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomInput
              fullWidth
              control={control}
              name="last_name"
              label="Last name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomInput
              fullWidth
              control={control}
              name="email"
              label="Email"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomSelect
              control={control}
              label="Gender"
              name="gender"
              options={genderOptions}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomDatePicker control={control} label="DOB" name="dob" />
          </Grid>
          <Grid item xs={12} container justifyContent="flex-end">
            <Button sx={{ mr: 1 }}>Cancel</Button>
            <Button variant="contained"> Submit</Button>
          </Grid>
        </Grid>
      </DialogContainer>
      <Container>
        <PageTitle
          title="All Students"
          buttonLabel="Add Student"
          onClick={handleAddStudent}
        />
        <CustomSelect
          control={control}
          name="class"
          label="Class"
          options={classes.map((item) => ({
            label: `Class - ${item.name}`,
            value: item.id,
          }))}
          sx={{ maxWidth: 300, mb: 3 }}
        />
        <Box
          sx={{
            " .MuiPaper-root": {
              borderRadius: "12px",
              boxShadow: theme.customShadows.card,
            },
          }}
        >
          <MaterialTable
            data={students.filter(
              selectedClass
                ? (item) => item.class.id === selectedClass
                : () => true
            )}
            title="Students"
            columns={[
              {
                title: "ID",
                field: "id",
                render: (rowData: any) => (
                  <CustomTypo fs={12} fw={400}>
                    {rowData.id}
                  </CustomTypo>
                ),
              },
              { title: "Name", field: "first_name" },
              { title: "Title", field: "last_name" },
              { title: "Gender", field: "gender" },
              { title: "Email", field: "email" },
              { title: "DOB", field: "dob", type: "date" },
            ]}
            options={{
              rowStyle: {
                fontSize: 14,
              },
              searchFieldVariant: "outlined",
              pageSize: 10,
            }}
          />
        </Box>
      </Container>
    </Page>
  );
}
