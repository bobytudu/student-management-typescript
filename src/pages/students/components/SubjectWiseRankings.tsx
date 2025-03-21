import React from "react";
import ReactApexChart from "react-apexcharts";
import students from "utils/json/students.json";
import exam_result from "utils/json/student_exam_subject.json";
import { useChart } from "components/chart";
import sortBy from "lodash/sortBy";

export default function SubjectWiseRankings() {
  const [labels, setLabels] = React.useState<string[]>([]);
  const [data, setData] = React.useState<number[]>([]);
  const [mappings, setMappings] = React.useState<any[]>([]);
  const tempOptions = useChart({
    yaxis: {
      min: 0,
      max: 100,
    },
    xaxis: {
      categories: labels,
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y: any) => {
          if (typeof y !== "undefined") {
            return `${y.toFixed(0)}`;
          }
          return y;
        },
      },
      x: {
        formatter: (x: any) => {
          if (typeof x !== "undefined") {
            const student = mappings.find((item) => item.subject === x);
            return `Name: ${student?.student}`;
          }
          return x;
        },
        show: true,
      },
    },
  });
  React.useEffect(() => {
    const tempData: any[] = [];
    Array.from(Array(5).keys()).forEach((index) => {
      const title = `subject_${index + 1}_title`;
      const marks = `subject_${index + 1}_mark`;

      const topRank: any = sortBy(exam_result, [marks]).reverse()[0];
      const student = students.find(
        (student) => student.id.$oid === topRank.student_id.$oid
      );
      tempData.push({
        student: `${student?.first_name} ${student?.last_name}`,
        marks: topRank[marks],
        subject: topRank[title],
      });
    });
    setMappings(tempData);
    setData(tempData.map((item) => item.marks));
    setLabels(tempData.map((item) => item.subject));
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
