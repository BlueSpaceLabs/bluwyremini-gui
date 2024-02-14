import React from "react";
import { PageTitle } from "../../../_metronic/layout/core";
import { useNavigate } from "react-router-dom";

const CampaignManagementPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ marginTop: -30 }}>
      <PageTitle breadcrumbs={[]}>Campaign Management</PageTitle>

      <div className="card mb-1 mb-xl-1" style={{ padding: 50 }}>
        <div className="card-body pt-2 pb-2" style={{ padding: 100 }}>
          <button
            className="btn btn-primary align-self-center"
            onClick={() => navigate("/campaign-management/active")}
            style={{ padding: 100 }}
          >
            <h2>Active User Campaign</h2>
          </button>
          &nbsp;&nbsp;
          <button
            className="btn btn-primary align-self-center"
            onClick={() => navigate("/campaign-management/pushed")}
            style={{ padding: 100 }}
          >
            <h2>Pushed Based Campaign</h2>
          </button>
        </div>
      </div>

      <br />
    </div>
  );
};

export default CampaignManagementPage;
