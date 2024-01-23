import React from "react";
import { Box, Paper } from "@mui/material";

const ListCard = ({ labelTitle, tooltip, listData }: any) => {
  return (
    <Box className="row mb-7">
      <label className="col-lg-4 fw-bold text-muted">
        {labelTitle}
        {tooltip && (
          <i
            className="fas fa-exclamation-circle ms-1 fs-7"
            data-bs-toggle="tooltip"
            title={tooltip}
          ></i>
        )}
      </label>

      <Box className="col-lg-8 d-flex align-items-center">
        <span className="fw-bolder fs-6 me-2">
          {listData ? listData : "No Data to show."}
        </span>
      </Box>
    </Box>
  );
};

const Tab2DataList = ({ dataList }: any) => {
  // console.log("dataList", dataList);

  return (
    <Box>
      <ListCard labelTitle={"Data 1"} listData={"Data Details 1"} />

      <ListCard labelTitle={"Data 2"} listData={"Data Details 2"} />

      <ListCard labelTitle={"Data 3"} listData={"Data Details 3"} />

      <ListCard labelTitle={"Data 4"} listData={"Data Details 4"} />
    </Box>
  );
};

export default Tab2DataList;
