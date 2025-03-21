import Card from "./Card";
import Paper from "./Paper";
import Input from "./Input";
import Table from "./Table";
import Button from "./Button";
import Tooltip from "./Tooltip";
import Backdrop from "./Backdrop";
import Typography from "./Typography";
import Autocomplete from "./Autocomplete";
import { Theme } from "@mui/material";
import { PaletteType } from "theme/palette";
import { Shadows } from "theme/customShadows";
import Select from "./Select";
import ListItemText from "./ListItemText";

// ----------------------------------------------------------------------
export type CustomTheme = Theme & {
  customShadows: Shadows;
  palette: PaletteType;
};
export default function ComponentsOverrides(theme: CustomTheme) {
  return Object.assign(
    Card(theme),
    Table(theme),
    Input(theme),
    Paper(),
    Select(),
    Button(theme),
    Tooltip(theme),
    Backdrop(theme),
    Typography(theme),
    Autocomplete(theme),
    ListItemText(),
  );
}
