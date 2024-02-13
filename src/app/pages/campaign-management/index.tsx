import React, { useState } from "react";
import { PageTitle } from "../../../_metronic/layout/core";
import ActiveUserDetails from "./ActiveUser";
import CampaignManagement from "./CampaignManagement";
import { Box } from "@mui/material";

const CampaignManagementPage = () => {
  const [campaignType, setCampaignType] = useState("");
  return (
    <div style={{ marginTop: -30 }}>
      <PageTitle breadcrumbs={[]}>Campaign Management</PageTitle>

      <div className="card mb-1 mb-xl-1">
        <div className="card-body pt-2 pb-2">
          {/* <div className="w-100 py-3 d-flex gap-8 fw-bold fs-6 "> */}
          <Box
            display={"flex"}
            justifyContent={campaignType === "" ? "space-between" : ""}
            minHeight={campaignType === "" ? 500 : "auto"}
            gap={3}
            p={1}
          >
            <Box
              className="btn btn-primary align-self-center"
              onClick={() => setCampaignType("active")}
              display={"inline-block"}
              // p={campaignType === "" ? 5 : 0}
            >
              Active User Campaign
            </Box>

            <Box
              className="btn btn-primary align-self-center"
              onClick={() => setCampaignType("inactive")}
            >
              Pushed Based Campaign
            </Box>
          </Box>
          {/* </div> */}
        </div>
      </div>

      <br />

      {campaignType === "active" && <ActiveUserDetails />}

      {campaignType === "inactive" && <CampaignManagement />}
    </div>
  );
};

export default CampaignManagementPage;
