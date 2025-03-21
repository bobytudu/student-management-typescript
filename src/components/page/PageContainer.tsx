import { Container } from "@mui/material";
import React from "react";
import PageTitle from "./PageTitle";
import Paper from "@mui/material/Paper";
import { CustomTheme } from "theme/overrides";
import Page from "./Page";

interface PageContainerProps {
  title: string;
  children: React.ReactNode;
}
export default function PageContainer({ title, children }: PageContainerProps) {
  return (
    <Page title={title}>
      <Container>
        <PageTitle title={title} />
        <Paper
          sx={
            {
              p: 3,
              borderRadius: "12px",
              boxShadow: (theme: CustomTheme) => theme.customShadows.card,
            } as any
          }
        >
          {" "}
          {children}
        </Paper>
      </Container>
    </Page>
  );
}
