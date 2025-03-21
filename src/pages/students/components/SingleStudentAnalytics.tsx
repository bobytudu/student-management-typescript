import React from "react";
import { useForm } from "react-hook-form";
import ReactApexChart from "react-apexcharts";
import { useChart } from "components/chart";
import { colors } from "components/chart/useChart";

//json
import students from "utils/json/students.json";
import exam_result from "utils/json/student_exam_subject.json";
import CustomAutoComplete from "components/forms/CustomAutoComplete";

export default function SingleStudentAnalytics() {
  const [labels, setLabels] = React.useState<string[]>([]);
  const [data, setData] = React.useState<number[]>([]);
  const tempOptions = useChart({
    labels: {
      style: {
        colors: colors,
        fontSize: "12px",
      },
    },
    yaxis: {
      min: 0,
      max: 100,
    },
    xaxis: {
      categories: labels,
    },
    plotOptions: {
      bar: {
        columnWidth: "20%",
        distributed: true,
        borderRadius: 4,
      },
    },
    noData: {
      text: "No Data",
    },
  });
  const { control, watch } = useForm<any>({
    defaultValues: {
      student: "",
    },
  });
  const student = watch("student");
  const options = students.map((student) => ({
    label: `${student.first_name} ${student.last_name}`,
    value: student.id.$oid,
  }));
  React.useEffect(() => {
    if (student) {
      const result: any = exam_result.find((item) => {
        return item.student_id.$oid === student.value;
      });
      const labels: string[] = [];
      const data: number[] = [];
      Array.from(Array(6).keys()).forEach((item, index: number) => {
        if (index > 0) {
          labels.push(result[`subject_${index}_title`] as any);
          data.push(result[`subject_${index}_mark`]);
        }
      });
      setData(data);
      setLabels(labels);
    }
  }, [student]);
  return (
    <div style={{ paddingLeft: 16, paddingTop: 24 }}>
      <CustomAutoComplete
        name="student"
        control={control}
        label="Select Student"
        options={options}
        sx={{ maxWidth: 400 }}
      />
      <ReactApexChart
        type="bar"
        series={[
          {
            data,
          },
        ]}
        options={tempOptions}
        height={364}
      />
    </div>
  );
}
