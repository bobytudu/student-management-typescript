import { alpha } from "@mui/material/styles";
import { CustomTheme } from ".";

// ----------------------------------------------------------------------

export default function Backdrop(theme: CustomTheme) {
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(theme.palette.grey[800], 0.8),
        },
        invisible: {
          background: "transparent",
        },
      },
    },
  };
}
