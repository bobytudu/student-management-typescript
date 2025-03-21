import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Iconify from "components/iconify";

export default function PageTitle({
  title,
  buttonLabel,
  onClick,
  showAdd,
}: {
  title: string;
  buttonLabel?: string;
  onClick?: () => void;
  showAdd?: boolean;
}) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      mb={5}
    >
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      {showAdd && (
        <Button
          onClick={onClick}
          variant="contained"
          startIcon={<Iconify icon="eva:plus-fill" />}
        >
          {buttonLabel}
        </Button>
      )}
    </Stack>
  );
}
