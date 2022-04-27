import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { fromUnixTime, format, millisecondsToSeconds } from "date-fns";

const customStyles = {
  margin: "20px",
};
export function DataCard({ earthquake }) {
  const timeStamp = fromUnixTime(
    millisecondsToSeconds(earthquake.properties.time)
  );
  return (
    <Card variant="outlined" sx={customStyles}>
      <CardContent>
        <Typography component="p" sx={{ mb: 1.5 }}>
          Location: {earthquake.properties.place}
        </Typography>
        <Typography component="p">
          Longitude: {earthquake.geometry.coordinates[0]}°
        </Typography>
        <Typography component="p">
          Latitude: {earthquake.geometry.coordinates[1]}°
        </Typography>
        <Typography>Magnitude: {earthquake.properties.mag}</Typography>
        <Typography color="text.secondary">
          Date, Time: {format(timeStamp, "Pp")}
        </Typography>
      </CardContent>
    </Card>
    //alternative time format string Pp
  );
}

export default DataCard;
// TODO: DATACARD STYLING ETC
