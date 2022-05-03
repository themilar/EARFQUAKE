import { useState } from "react";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

import MarkerIcon from "./MarkerIcon";
// ,aterial ui toggle for total or paginated gaetures
export default function Map(props) {
  const [all, setAll] = useState(0);
  const markerFeatures = all ? props.totalFeatures : props.features;
  const markers = markerFeatures.map((f) => ({
    id: f.id,
    title: f.properties.title,
    coordinates: f.geometry.coordinates,
    significance: f.properties.sig,
  }));
  const handleChange = (e, newValue) => setAll(newValue);

  const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

  return (
    <>
      <Tabs
        value={all}
        onChange={handleChange}
        aria-label="toggle between paginated and full view"
        centered
      >
        <Tab label="paginate" />
        <Tab label="all" />
      </Tabs>

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
        {markers.map(({ id, title, coordinates, significance }, pk) => (
          <Marker key={id} coordinates={coordinates}>
            <MarkerIcon />
            <text
              textAnchor="middle"
              y={-25}
              style={{ fontSize: 11, fontFamily: "system-ui", fill: "#5D5A6D" }}
            >
              {significance}
            </text>
          </Marker>
        ))}
      </ComposableMap>
      {!all ? props.children : null}
    </>
  );
}
