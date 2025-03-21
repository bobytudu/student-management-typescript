import React from "react";
import Stack from "@mui/material/Stack";
import StyledTypo from "components/forms/CustomTypo";
import Divider from "@mui/material/Divider";
import ReactApexChart from "react-apexcharts";
import { useChart } from "components/chart";
import { useAppSelector } from "../../redux/hooks";
import { useForm } from "react-hook-form";
import CustomSelect from "components/forms/CustomSelect";
import groupBy from "lodash/groupBy";
import PageContainer from "components/page/PageContainer";

export default function ExamPage() {
  const [chartData, setChartData] = React.useState<any>([]);
  const [chartLabels, setChartLabels] = React.useState<any>([]);
  const { control, watch } = useForm({
    defaultValues: {
      exam: "",
      class: "",
      subject: "",
    },
  });
  const { exam, classes, examResult, subjects } = useAppSelector((state) => ({
    exam: state.exam.list,
    classes: state.class.list,
    subjects: state.subject.list,
    examResult: state.exam_result.list,
  }));

  const watchExam = watch("exam");
  const watchClass = watch("class");
  const watchSubject = watch("subject");

  const chartOptions = useChart({
    xaxis: {
      categories: chartLabels,
    },
  });

  React.useEffect(() => {
    //filter data according to selection
    const subjectWise = examResult.filter((item) => {
      let applyClassFilter =
        watchClass && item.student_id.class.id === watchClass;
      let applyExamFilter = watchExam && item.exam_id.id === watchExam;
      let applySubjectFilter =
        watchSubject && item.subject_id.id === watchSubject;

      return (
        (!watchClass || applyClassFilter) &&
        (!watchExam || applyExamFilter) &&
        (!watchSubject || applySubjectFilter)
      );
    });

    //group data by student
    let overAllResult: any = groupBy(
      subjectWise.map((item) => ({
        ...item,
        student: `${item.student_id.first_name} ${item.student_id.last_name}`,
        subject: item.subject_id.title,
      })),
      (item) => item.student_id.id
    );

    //calculate total score of each student
    overAllResult = Object.keys(overAllResult).map((item) => ({
      data: overAllResult[item],
      total: overAllResult[item].reduce(
        (acc: any, curr: any) => acc + curr.score,
        0
      ),
    }));
    const chartData = overAllResult.map((item: any) => item.total);
    const chartLabels = overAllResult.map((item: any) => item.data[0].student);
    setChartData([
      {
        data: chartData.sort((a: any, b: any) => b - a).slice(0, 5),
        name: "Total marks",
      },
    ]);
    setChartLabels(chartLabels.sort((a: any, b: any) => b - a).slice(0, 5));
  }, [watchSubject, watchClass, watchExam]);

  return (
    <PageContainer title="Exam">
      <StyledTypo variant="h4">Exam performance</StyledTypo>
      <Divider sx={{ mt: 1, mb: 3 }} />
      <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
        <CustomSelect
          control={control}
          name="class"
          label="Class"
          options={classes.map((item) => ({
            label: `Class - ${item.name}`,
            value: item.id,
          }))}
          sx={{ maxWidth: 300 }}
        />
        <CustomSelect
          control={control}
          name="exam"
          label="Exam"
          options={exam.map((item) => ({
            label: `Exam - ${item.month}`,
            value: item.id,
          }))}
          sx={{ maxWidth: 300 }}
        />
        <CustomSelect
          control={control}
          name="subject"
          label="Subject"
          options={subjects.map((item) => ({
            label: `Subject - ${item.title}`,
            value: item.id,
          }))}
          sx={{ maxWidth: 300 }}
        />
      </Stack>
      <ReactApexChart
        type="bar"
        series={chartData}
        options={chartOptions}
        height={364}
      />
    </PageContainer>
  );
}
