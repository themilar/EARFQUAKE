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
    <Typography variant="subtitle1">
      The numbers displayed above markers on the map indicate the siginificance
      of the event, they are determined by a number of factors, including
      magnitude, felt report, estimated impact, maximum mmi (The maximum
      estimated instrumental intensity for the event).
    </Typography>
  </Box>
);

export default Summary;
