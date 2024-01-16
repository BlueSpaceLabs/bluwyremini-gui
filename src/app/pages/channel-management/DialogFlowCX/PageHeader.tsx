import React from "react";
import { Box } from "@mui/material";

const PageHeader = ({ setShowModal }: any) => {
  return (
    <Box className="card-header">
      <Box className="card-title m-0">
        <h3 className="fw-bolder m-0">DialogFlow CX Configuration Details</h3>
      </Box>

      <button
        className="btn btn-primary align-self-center"
        onClick={() => setShowModal(true)}
      >
        DialogFlow CX Configuration
      </button>
    </Box>
  );
};

export default PageHeader;
