import React from "react";
import Box from "@mui/material/Box";
import { styled, SxProps } from "@mui/material/styles";
import Typography, { TypographyProps } from "@mui/material/Typography";

const StyledTypo = styled((props) => <Typography {...props} />)(
  ({ fs, fw, c }: { fw?: number; fs?: number; c?: string }) => ({
    fontSize: fs || 16,
    fontWeight: fw || 600,
    color: c,
  })
);

interface StyledTypoProps extends TypographyProps {
  fs?: number;
  fw?: number;
  c?: string;
}

export function CustomTypoContainer(props: StyledTypoProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <StyledTypo {...props} />
    </Box>
  );
}

export function TypoContainer({
  children,
  sx,
}: {
  children: React.ReactNode;
  sx?: SxProps;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}

export default function CustomTypo(props: StyledTypoProps) {
  return <StyledTypo {...props} />;
}
