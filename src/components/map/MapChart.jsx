import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

import MarkerIcon from "./MarkerIcon";
// ,aterial ui toggle for total or paginated gaetures
export default function Map(props) {
  const markers = props.features.map((f) => ({
    id: f.id,
    title: f.properties.title,
    coordinates: f.geometry.coordinates,
    significance: f.properties.sig,
  }));

  const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

  return (
    <ComposableMap
      // projection="geoAzimuthalEqualArea"
      projectionConfig={{
        // rotate: [58, 20, 0],
        scale: 200,
      }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#EAEAEC"
              stroke="#D6D6DA"
            />
          ))
        }
      </Geographies>
      {markers.map(
        ({ id, title, coordinates, significance, markerOffset }, pk) => (
          <Marker key={id} coordinates={coordinates}>
            <MarkerIcon />
            <text
              textAnchor="middle"
              y={-10}
              style={{ fontSize: 11, fontFamily: "system-ui", fill: "#5D5A6D" }}
            >
              {pk}
            </text>
          </Marker>
        )
      )}
    </ComposableMap>
  );
}
