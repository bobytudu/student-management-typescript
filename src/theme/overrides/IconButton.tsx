export default function IconButton() {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          outline: "none !important",
        },
      },
      defaultProps: {
        size: "small",
      },
    },
  };
}
