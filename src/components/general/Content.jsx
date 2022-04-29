import DataList from "./DataList";
import Map from "../map/MapChart";
import Summary from "./Summary";

export const Content = ({ tab, features, metadata, children }) => {
  switch (tab) {
    default:
    case "home":
      return (
        <>
          <DataList features={features} /> {children}
        </>
      );
    case "map":
      return <Map features={features} />;
    case "summary":
      return <Summary metadata={metadata} />;
  }
};
