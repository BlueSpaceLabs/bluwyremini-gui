import React from "react";
import CampaignManagement from "./CampaignManagement";
import { PageTitle } from "../../../_metronic/layout/core";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const PushedCampaign = () => {
  const navigate = useNavigate();

  return (
    <>
      <PageTitle breadcrumbs={[]}>Campaign Management</PageTitle>

      <Box display={"flex"} justifyContent={"flex-end"} pb={2}>
        <button
          className="btn btn-secondary align-self-end"
          onClick={() => navigate("/campaign-management")}
        >
          Back to Campaign Management
        </button>
      </Box>

      <CampaignManagement />
    </>
  );
};

export default PushedCampaign;
