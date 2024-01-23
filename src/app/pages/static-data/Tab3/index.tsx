import React from "react";
import { Box, Paper } from "@mui/material";
import Tab3DataList from "./DataList";
import PageHeader from "./PageHeader";

const Tab3: React.FC = () => {
  return (
    <React.Fragment>
      <Box component={Paper} px={3} py={2}>
        <PageHeader />

        <hr />

        <Tab3DataList dataList={{}} />
      </Box>
    </React.Fragment>
  );
};

export default Tab3;
