import Box from "@mui/material/Box";
import DataCard from "./DataCard";
export function DataList({ features }) {
  return (
    <Box>
      {features.map((earthquake) => (
        <DataCard key={earthquake.id} earthquake={earthquake} />
      ))}
    </Box>
  );
}
