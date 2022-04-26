import Box from "@mui/material/Box";
export const Summary = ({ metadata }) => (
  <Box>There have been {metadata.count} earthquakes in the past day.</Box>
);

export default Summary;
