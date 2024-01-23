import React from "react";
import { Box, Paper } from "@mui/material";
import Tab2DataList from "./DataList";
import PageHeader from "./PageHeader";

const Tab2: React.FC = () => {
  return (
    <React.Fragment>
      <Box component={Paper} px={3} py={2}>
        <PageHeader />

        <hr />

        <Tab2DataList dataList={{}} />
      </Box>
    </React.Fragment>
  );
};

export default Tab2;
