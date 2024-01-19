import React, { useState } from "react";
import { KTIcon } from "../../../../../../_metronic/helpers";
import { Box, Menu, Fade } from "@mui/material";

const DateRangeFilter = ({ setFromDate, setToDate }: any) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [errorStartDate, setErrorStartDate] = useState<string>("");
  const [errorEndDate, setErrorEndDate] = useState<string>("");

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFromDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(event.target.value);
  };

  const handleToDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(event.target.value);
  };

  const handleReset = () => {
    setFromDate("");
    setToDate("");
    setStartDate("");
    setEndDate("");
  };
  const handleSubmit = () => {
    // Validate if a date is selected
    if (!startDate || !endDate) {
      setErrorStartDate("Select Start Date");
      setErrorEndDate("Select End Date");
    } else {
      setFromDate(startDate);
      setToDate(endDate);
      handleClose();
    }
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-light-primary me-3"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <KTIcon iconName="calendar" className="fs-2" />
        Date Range
      </button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        TransitionComponent={Fade}
      >
        <Box
          px={3}
          py={2}
          display={"flex"}
          flexDirection={"column"}
          gap={3}
          minWidth={300}
        >
          <Box>
            <label className="form-label fs-6 fw-bold">
              From Date: {errorStartDate}
            </label>

            <input
              className="form-control form-control-lg form-control-solid"
              type="date"
              value={startDate}
              onChange={handleFromDateChange}
            />
          </Box>
          <Box>
            <label className="form-label fs-6 fw-bold">
              To Date: {errorEndDate}
            </label>

            <input
              className="form-control form-control-lg form-control-solid"
              type="date"
              value={endDate}
              onChange={handleToDateChange}
            />
          </Box>
          <Box display={"flex"} justifyContent={"flex-end"}>
            <button
              type="button"
              onClick={handleReset}
              className="btn btn-light btn-active-light-primary fw-bold me-2 px-6"
            >
              Reset
            </button>
            <button
              type="button"
              className="btn btn-primary fw-bold px-6"
              onClick={handleSubmit}
            >
              Apply
            </button>
          </Box>
        </Box>
      </Menu>
    </>
  );
};

export { DateRangeFilter };
