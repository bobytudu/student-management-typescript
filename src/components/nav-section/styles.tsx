// @mui
import { styled } from '@mui/material/styles';
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton, {
  ListItemButtonProps,
} from "@mui/material/ListItemButton";
import { ThemeOptionTypes } from "theme/index";

// ----------------------------------------------------------------------

export const StyledNavItem = styled((props: ListItemButtonProps & any) => (
  <ListItemButton disableGutters {...props} />
))(({ theme }: { theme: ThemeOptionTypes }) => ({
  ...theme.typography.body2,
  height: 48,
  position: "relative",
  textTransform: "capitalize",
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius,
  "&:hover": {
    color: 'black'
  },
  "&.Mui-selected": {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.action.selected,
  },
}));

export const StyledNavItemIcon = styled(ListItemIcon)({
  width: 22,
  height: 22,
  color: "inherit",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
