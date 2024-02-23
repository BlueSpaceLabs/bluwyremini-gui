import React from "react";
import ActiveUserDetails from "./ActiveUser";
import { PageTitle } from "../../../_metronic/layout/core";
import { Box } from "@mui/material";

const ActiveCampaign = ({ onBackClick }: any) => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Campaign Management</PageTitle>

      <Box display={"flex"} justifyContent={"flex-end"} pb={2}>
        <button
          className="btn btn-secondary align-self-end"
          onClick={onBackClick}
        >
          Back to Campaign Management
        </button>
      </Box>

      <ActiveUserDetails />
    </>
  );
};

export default ActiveCampaign;
