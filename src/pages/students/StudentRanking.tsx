import PageContainer from "components/page/PageContainer";
import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabPanel from "components/tab/TabPanel";
import AllSubjectRankings from "./components/AllSubjectRankings";
import SubjectWiseRankings from "./components/SubjectWiseRankings";

export default function StudentRanking() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <PageContainer title="Student Rankings">
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Student Rankings Tabs"
      >
        <Tab label="All Subjects" />
        <Tab label="Subject wise" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <AllSubjectRankings />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SubjectWiseRankings />
      </TabPanel>
    </PageContainer>
  );
}
