import React from "react";
import { Box } from "@mui/material";
import SearchUI from "./SearchUI";
import FilterBox from "./FilterBox";

const PageHeader = ({ setSearchContact, setFromDate, setToDate }: any) => {
  return (
    <>
      <Box className="card-header border-0 pt-6">
        <SearchUI setDebouncedSearchTerm={setSearchContact} />

        <Box className="card-toolbar">
          <FilterBox setFromDate={setFromDate} setToDate={setToDate} />
        </Box>
      </Box>
    </>
  );
};

export default PageHeader;
