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

      <div className="card mb-1 mb-xl-1" style={{padding:50}}>
        <div className="card-body pt-2 pb-2" style={{padding:100}}>
          {/* <div className="w-100 py-3 d-flex gap-8 fw-bold fs-6 "> */}
         
            <button
              className="btn btn-primary align-self-center"
              onClick={() => setCampaignType("active")}
              style={{padding:100}}
              // p={campaignType === "" ? 5 : 0}
            >
              <h2>Active User Campaign</h2>
            </button>

      &nbsp;&nbsp;
            <button
              className="btn btn-primary align-self-center"
              onClick={() => setCampaignType("inactive")}
              style={{padding:100}}
            >
              <h2>Pushed Based Campaign</h2>
            </button>
          
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
