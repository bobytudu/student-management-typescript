import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import TextField, { TextFieldProps } from '@mui/material/TextField'
import get from 'lodash/get'
import { Controller } from 'react-hook-form'
import CustomTypo from "./CustomTypo";

type PropTypes = TextFieldProps & {
  control: any;
  name: string;
  label?: string;
  type?: string;
  rows?: string | number;
  multiline?: boolean;
  disabled?: boolean;
  placeholder?: string;
};

const CustomInput = ({
  control,
  name,
  label,
  sx = {},
  inputProps,
  ...rest
}: PropTypes) => (
  <Controller
    control={control}
    name={name}
    render={({ field: { value, onChange }, formState: { errors } }) => (
      <Box sx={{ width: "100%" }}>
        <CustomTypo fs={14} sx={{ mb: 0.6 }}>
          {label}
        </CustomTypo>
        <TextField
          value={value}
          {...rest}
          variant={get(rest, "variant", "outlined")}
          onChange={(e) => onChange(e.target.value)}
          error={Boolean(get(errors, name))}
          sx={{ maxWidth: !rest.fullWidth ? 400 : "auto", ...sx }}
          helperText={<>{get(errors, `${name}.message`, "")}</>}
          inputProps={inputProps}
        />
        {!get(errors, name) && (
          <InputLabel sx={{ color: "transparent" }}>
            <>{get(errors, name, "")}</>
          </InputLabel>
        )}
      </Box>
    )}
  />
);

export default CustomInput
