import React from "react";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import Tab4 from "./Tab4";

const StaticDataPages = ({ staticDataTabSelected }: any) => {
  if (staticDataTabSelected === "tab1") {
    return <Tab1 />;
  } else if (staticDataTabSelected === "tab2") {
    return <Tab2 />;
  } else if (staticDataTabSelected === "tab3") {
    return <Tab3 />;
  } else if (staticDataTabSelected === "tab4") {
    return <Tab4 />;
  } else {
    return null;
  }
};

export default StaticDataPages;
