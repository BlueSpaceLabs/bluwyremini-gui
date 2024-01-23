import React from "react";
import HeaderTab from "./HeaderTab";
import StaticDataPages from "./StaticDataPages";
import { Box } from "@mui/material";
import { PageTitle } from "../../../_metronic/layout/core";

const StaticDataManagement = () => {
  const [staticDataTabSelected, setStaticDataTabSelected] =
    React.useState("tab1");
  return (
    <Box display={"flex"} flexDirection={"column"} gap={3}>
      <PageTitle breadcrumbs={[]}>Static Data</PageTitle>

      <HeaderTab
        tabHeading={staticDataTabSelected}
        setTabHeading={setStaticDataTabSelected}
      />
      <StaticDataPages staticDataTabSelected={staticDataTabSelected} />
    </Box>
  );
};

export default StaticDataManagement;
