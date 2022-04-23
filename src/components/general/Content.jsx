import { DataList } from "./DataList";
import Map from "../map/MapChart";

export const Content = ({ tab, features }) => {
  switch (tab) {
    default:
    case "home":
      return <DataList features={features} />;
    case "map":
      return <Map features={features} />;
    case "summary":
      return;
  }
};
