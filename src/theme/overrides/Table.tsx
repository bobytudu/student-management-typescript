// ----------------------------------------------------------------------

import { CustomTheme } from ".";

export default function Table(theme: CustomTheme) {
  return {
    MuiTableCell: {
      styleOverrides: {
        head: {
          color: theme.palette.text.secondary,
          backgroundColor: theme.palette.background.neutral,
        },
      },
    },
  };
}
