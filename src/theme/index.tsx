import PropTypes from 'prop-types'
import { useMemo } from 'react'
// @mui
import { CssBaseline } from '@mui/material'
import { ThemeProvider as MUIThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles'
//
import { generatePalette } from "./palette";
import shadows from "./shadows";
import typography from "./typography";
import GlobalStyles from "./globalStyles";
import customShadows from "./customShadows";
import componentsOverride, { CustomTheme } from "./overrides";
import { useAppSelector } from "src/redux/hooks";

// ----------------------------------------------------------------------

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export interface ThemeOptionTypes {
  palette: any;
  shape: { borderRadius: number };
  typography: any;
  shadows: any;
  customShadows: any;
}

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { mode } = useAppSelector((state) => state.theme);
  const themeOptions: ThemeOptionTypes = useMemo(
    () => ({
      palette: generatePalette(mode),
      shape: { borderRadius: 6 },
      typography,
      shadows: shadows(),
      customShadows: customShadows(),
    }),
    [mode]
  );

  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme as CustomTheme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
