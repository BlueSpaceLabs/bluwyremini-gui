import React from "react";
import { KTIcon } from "../../../../_metronic/helpers";
import { Box } from "@mui/material";
// import {
//   initialQueryState,
//   KTIcon,
//   useDebounce,
// } from "../../../../../../_metronic/helpers";
// import { useQueryRequest } from "../../core/QueryRequestProvider";
const SearchUI = () => {
  return (
    <Box className="card-title">
      {/* begin::Search */}
      <Box className="d-flex align-items-center position-relative my-1">
        <KTIcon iconName="magnifier" className="fs-1 position-absolute ms-6" />
        <input
          type="text"
          data-kt-user-table-filter="search"
          className="form-control form-control-solid w-250px ps-14"
          placeholder="Search Contact"
          // value={searchTerm}
          // onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Box>
      {/* end::Search */}
    </Box>
  );
};

export default SearchUI;
