// @mui
import {
  Box,
  Card,
  Paper,
  Typography,
  CardHeader,
  CardContent,
} from "@mui/material";
// utils
import { fShortenNumber } from "../../../utils/formatNumber";

// ----------------------------------------------------------------------

interface AppTrafficBySiteProps {
  title: string;
  subheader?: string;
  list: any[];
}

export default function AppTrafficBySite({
  title,
  subheader,
  list,
  ...other
}: AppTrafficBySiteProps) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <CardContent>
        <Box
          sx={{
            display: "grid",
            gap: 2,
            gridTemplateColumns: "repeat(2, 1fr)",
          }}
        >
          {list.map((site) => (
            <Paper
              key={site.name}
              variant="outlined"
              sx={{ py: 2.5, textAlign: "center" }}
            >
              <Box sx={{ mb: 0.5 }}>{site.icon}</Box>

              <Typography variant="h6">{fShortenNumber(site.value)}</Typography>

              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {site.name}
              </Typography>
            </Paper>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
