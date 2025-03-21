import { useChart } from "components/chart";
import React from "react";
import ReactApexChart from "react-apexcharts";
import students from "utils/json/students.json";
import exam_result from "utils/json/student_exam_subject.json";

export default function AllSubjectRankings() {
  const [labels, setLabels] = React.useState<string[]>([]);
  const [data, setData] = React.useState<number[]>([]);
  const tempOptions = useChart({
    xaxis: {
      categories: labels,
    },
    yaxis: {
      min: 0,
      max: 500,
    },
  });
  React.useEffect(() => {
    const total = exam_result
      .map((item) => {
        const student = students.find(
          (student) => student.id.$oid === item.student_id.$oid
        );
        return {
          student: `${student?.first_name} ${student?.last_name}`,
          total:
            item.subject_1_mark +
            item.subject_2_mark +
            item.subject_3_mark +
            item.subject_4_mark +
            item.subject_5_mark,
        };
      })
      .sort((a, b) => b.total - a.total)
      .slice(0, 5);
    const tempLabels: string[] = [];
    const tempData: number[] = [];
    total.forEach((item) => {
      tempLabels.push(item.student);
      tempData.push(item.total);
    });
    setLabels(tempLabels);
    setData(tempData);
  }, []);
  return (
    <div>
      <ReactApexChart
        type="bar"
        series={[{ data, name: "Total Marks" }]}
        options={tempOptions}
        height={364}
      />
    </div>
  );
}
