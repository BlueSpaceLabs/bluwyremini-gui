import React from "react";
import { Box, Paper } from "@mui/material";
import Tab4DataList from "./DataList";
import PageHeader from "./PageHeader";

const Tab4: React.FC = () => {
  return (
    <React.Fragment>
      <Box component={Paper} px={3} py={2}>
        <PageHeader />

        <hr />

        <Tab4DataList dataList={{}} />
      </Box>
    </React.Fragment>
  );
};

export default Tab4;
