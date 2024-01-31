import React from "react";
import { Box } from "@mui/material";
import { KTIcon } from "../../../../../_metronic/helpers";

const SearchUI = ({ setDebouncedSearchTerm }: any) => {
  const [searchTerm, setSearchTerm] = React.useState<string>("");

  React.useEffect(() => {
    const debounceTime = 1000;

    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, debounceTime);

    return () => clearTimeout(timerId);
  }, [searchTerm]);

  return (
    <Box className="card-title">
      <Box className="d-flex align-items-center position-relative my-1">
        <KTIcon iconName="magnifier" className="fs-1 position-absolute ms-6" />
        <input
          type="text"
          data-kt-user-table-filter="search"
          className="form-control form-control-solid w-250px ps-14"
          placeholder="Search Contact"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Box>
    </Box>
  );
};

export default SearchUI;
