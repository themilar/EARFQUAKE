import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const customStyles = {
  margin: "20px",
};
export function DataCard({ earthquake }) {
  return (
    <Card variant="outlined" sx={customStyles}>
      <Typography component="span">Location:</Typography>
      <CardHeader title={earthquake.properties.place} />
      <CardContent>Magnitude: {earthquake.properties.mag}</CardContent>
    </Card>
  );
}

export default DataCard;
