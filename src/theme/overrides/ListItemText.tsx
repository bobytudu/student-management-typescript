export default function ListItemText() {
  return {
    MuiListItemText: {
      styleOverrides: {
        root: {
          '& .MuiTypography-root': { fontSize: 12 },
        },
      },
    },
  };
}
