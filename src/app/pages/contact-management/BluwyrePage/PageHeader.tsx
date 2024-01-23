import React from "react";
import { Box } from "@mui/material";
import SearchUI from "./SearchUI";
import FilterBox from "./FilterBox";

const PageHeader = () => {
  return (
    <>
      <Box className="card-header border-0 pt-6">
        <SearchUI />

        <Box className="card-toolbar">
          {/* {[].length > 0 ? <UsersListGrouping /> : <UsersListToolbar />} */}
          <FilterBox />
        </Box>
      </Box>
    </>
  );
};

export default PageHeader;
