import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
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
  console.log(format(timeStamp, "dd/MM/yyyy"));
  return (
    <Card variant="outlined" sx={customStyles}>
      <Typography component="span">
        Location: {earthquake.properties.place}
      </Typography>
      <Typography component="p">
        Longitude: {earthquake.geometry.coordinates[0]}
      </Typography>
      <Typography component="p">
        Latitude: {earthquake.geometry.coordinates[1]}
      </Typography>

      {/* <CardHeader title={earthquake.properties.place} /> */}
      <CardContent>
        Magnitude: {earthquake.properties.mag} Time: {format(timeStamp, "Pp")}
      </CardContent>
    </Card>
    //alternative time format string Pp
  );
}

export default DataCard;
