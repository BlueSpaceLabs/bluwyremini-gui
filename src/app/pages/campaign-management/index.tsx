import React from "react";
import { PageTitle } from "../../../_metronic/layout/core";
import ActiveCampaign from "./ActiveCampaign";
import CampaignManagement from "./CampaignManagement";

const CampaignManagementPage = () => {
  const [showActiveCampaign, setShowActiveCampaign] = React.useState(false);
  const [showCreateAppModal, setShowCreateAppModal] =
    React.useState<boolean>(false);

  return (
    <div style={{ marginTop: -30 }}>
      <PageTitle breadcrumbs={[]}>Campaign Management</PageTitle>

      {showActiveCampaign ? (
        <ActiveCampaign onBackClick={() => setShowActiveCampaign(false)} />
      ) : (
        <>
          <div className="card mb-1 mb-xl-1 p-3 ">
            <div className="card-body pt-2 pb-2 d-flex gap-3">
              <button
                className="btn btn-primary align-self-center"
                onClick={() => setShowActiveCampaign(true)}
              >
                Active User Campaign
              </button>
              <button
                className="btn btn-primary align-self-center"
                onClick={() => setShowCreateAppModal(true)}
              >
                Pushed Based Campaign
              </button>
            </div>
          </div>

          <CampaignManagement
            showCreateAppModal={showCreateAppModal}
            setShowCreateAppModal={setShowCreateAppModal}
          />
        </>
      )}
    </div>
  );
};

export default CampaignManagementPage;
