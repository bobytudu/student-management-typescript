import { DatePicker } from "@mui/x-date-pickers";
import { Controller } from "react-hook-form";
import Box from "@mui/material/Box";
import CustomTypo from "./CustomTypo";
import moment from "moment";

interface CustomDatePickerProps {
  control: any;
  label: string;
  name: string;
  fullWidth?: boolean;
}

export default function CustomDatePicker({
  control,
  label,
  name,
  fullWidth = true,
}: CustomDatePickerProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => (
        <Box sx={{ width: "100%" }}>
          <CustomTypo fs={14} sx={{ mb: 0.6 }}>
            {label}
          </CustomTypo>
          <DatePicker
            disableFuture
            value={moment(value)}
            onChange={(value) => onChange(value)}
            slotProps={{
              textField: {
                fullWidth: fullWidth,
              },
            }}
          />
        </Box>
      )}
    />
  );
}
