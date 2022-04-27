import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
export const Summary = ({ metadata }) => (
  <Box sx={{ mt: 2 }}>
    <Typography variant="h6">
      This frontend client displays all earthquakes that have occured in the
      past 24 hours
    </Typography>
    <Typography variant="subtitle1">
      There have been {metadata.count} earthquakes in the past day.
    </Typography>
  </Box>
);

export default Summary;
