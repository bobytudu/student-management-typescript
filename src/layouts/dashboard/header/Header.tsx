// @mui
import { styled } from "@mui/material/styles";
import { Box, Stack, AppBar, Toolbar, IconButton } from "@mui/material";
// utils
import { bgBlur } from "../../../utils/cssStyles";
// components
import Iconify from "../../../components/iconify";
//
import Searchbar from "./Searchbar";
import AccountPopover from "./AccountPopover";
// import LanguagePopover from "./LanguagePopover";
import NotificationsPopover from "./NotificationsPopover";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import { switchToDark, switchToLight } from "src/redux/reducers/theme.reducer";

// ----------------------------------------------------------------------

const NAV_WIDTH = 280;

const HEADER_MOBILE = 64;

const HEADER_DESKTOP = 64;

const StyledRoot = styled(AppBar)(
  ({ theme }) =>
    ({
      ...bgBlur({ color: theme.palette.background.default }),
      boxShadow: "none",
      [theme.breakpoints.up("lg")]: {
        width: `calc(100% - ${NAV_WIDTH + 1}px)`,
      },
    } as any)
);

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  [theme.breakpoints.up("lg")]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

// ----------------------------------------------------------------------

interface HeaderProps {
  onOpenNav: () => void;
}

export default function Header({ onOpenNav }: HeaderProps) {
  const { mode } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();
  return (
    <StyledRoot>
      <StyledToolbar>
        <IconButton
          onClick={onOpenNav}
          sx={{
            mr: 1,
            color: "text.primary",
            display: { lg: "none" },
          }}
        >
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>

        <Searchbar />
        <Box sx={{ flexGrow: 1 }} />

        <Stack
          direction="row"
          alignItems="center"
          spacing={{
            xs: 0.5,
            sm: 1,
          }}
        >
          {mode === "light" ? (
            <IconButton
              onClick={() => dispatch(switchToDark())}
              sx={{ width: 40, height: 40 }}
            >
              <Iconify
                icon="line-md:sun-rising-loop"
                sx={{
                  color: "orange",
                  width: 40,
                  height: 40,
                  minWidth: 40,
                }}
              />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => dispatch(switchToLight())}
              sx={{ width: 40, height: 40 }}
            >
              <Iconify
                icon="fa6-solid:cloud-moon"
                sx={{ color: "skyblue", width: 40, height: 40, minWidth: 40 }}
              />
            </IconButton>
          )}
          {/* <LanguagePopover /> */}
          <NotificationsPopover />
          <AccountPopover />
        </Stack>
      </StyledToolbar>
    </StyledRoot>
  );
}
