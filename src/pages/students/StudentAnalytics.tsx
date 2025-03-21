import { Container, Paper, Tab, Tabs } from "@mui/material";
import { useChart } from "components/chart";
import Page from "components/page/Page";
import PageTitle from "components/page/PageTitle";
import ReactApexChart from "react-apexcharts";
// import exam_result from "utils/json/exam_result.json";
// import students from "utils/json/students.json";
import subject_result from "utils/json/student_exam_subject.json";
import { CustomTheme } from "theme/overrides";
import React from "react";
import TabPanel from "components/tab/TabPanel";
import SingleStudentAnalytics from "./components/SingleStudentAnalytics";
import { colors } from "components/chart/useChart";
import PageContainer from "components/page/PageContainer";

interface ChartData {
  name: string;
  type: string;
  fill: string;
  data: number[];
}
type Subjects =
  | "subject_1_title"
  | "subject_2_title"
  | "subject_3_title"
  | "subject_4_title"
  | "subject_5_title";
interface Result {
  subject_1_title: string;
  subject_2_title: string;
  subject_3_title: string;
  subject_4_title: string;
  subject_5_title: string;
  subject_1_mark: number;
  subject_2_mark: number;
  subject_3_mark: number;
  subject_4_mark: number;
  subject_5_mark: number;
}
export default function StudentAnalytics() {
  const [value, setValue] = React.useState(0);

  let tempChartData: ChartData[] = [];
  let tempAvgChartData: any[] = [];
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  subject_result.forEach((item: Result) => {
    const subjects: Subjects[] = [
      "subject_1_title",
      "subject_2_title",
      "subject_3_title",
      "subject_4_title",
      "subject_5_title",
    ];
    subjects.forEach((subject) => {
      const exist = tempChartData.find((i) => {
        if (i && i.name === item[subject]) return true;
        return false;
      });
      if (exist) {
        tempChartData = tempChartData.map((i: ChartData) => {
          if (i && i.name === item[subject]) {
            const tempMark = item[`${subject.slice(0, 9)}_mark` as Subjects];
            return {
              ...i,
              data: [...i.data, tempMark as any],
            };
          }
          return i;
        });
      } else {
        const tempMark = item[`${subject.slice(0, 9)}_mark` as Subjects];
        tempChartData.push({
          name: item[subject],
          type: "line",
          fill: "solid",
          data: [tempMark as any],
        });
      }
    });
  });
  const labels: string[] = [];
  const values: number[] = [];
  tempChartData.forEach((item) => {
    const tempAvg = item.data.reduce((a, b) => a + b, 0) / item.data.length;
    values.push(tempAvg);
    labels.push(item.name);
  });
  tempAvgChartData = [
    {
      name: "Average",
      data: values,
    },
  ];
  const tempOptions = useChart({});
  return (
    <PageContainer title="Student Analytics">
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        <Tab label="All Student average" />
        <Tab label="Single Student" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <ReactApexChart
          type="bar"
          series={tempAvgChartData}
          options={{
            ...tempOptions,
            labels: ["Hindi", "English", "Maths", "Science", "Social"],
          }}
          height={364}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SingleStudentAnalytics />
      </TabPanel>
    </PageContainer>
  );
}
