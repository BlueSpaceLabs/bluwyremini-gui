import React from "react";
import { Box, Paper } from "@mui/material";
import Tab1DataList from "./DataList";
import PageHeader from "./PageHeader";

const Tab1: React.FC = () => {
  return (
    <React.Fragment>
      <Box component={Paper} px={3} py={2}>
        <PageHeader />

        <hr />

        <Tab1DataList dataList={{}} />
      </Box>
    </React.Fragment>
  );
};

export default Tab1;
