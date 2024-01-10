import React, { useState } from "react";
import { useMutation } from "react-query";
import { KTIcon } from "../../../../../../_metronic/helpers";
import { useListView } from "../../core/ListViewProvider";
import { UsersListFilter } from "./UsersListFilter";
// import {
//   CreateAppModal,
//   Dropdown1,
// } from "../../../../../../_metronic/partials";
import { useLayout } from "../../../../../../_metronic/layout/core";
// import { CampaignModal } from "../../campaign-modal/CampaignModal";
import CustomStepsModal from "../../campaign-modal/custom-steps";
import { postAddCampaign } from "../../../../../services/CampaignManagement";

const initialValue = {
  campaignName: "Campaign_Name",
  campaignGoal: "Get more visitors",
  campaignDescription: "Campaign_Description",
  campaignUploadFile: null,
  campaignChannel: "whatsapp",
  campaignLanguage: "Campaign_Language",
};

const accessKey =
  "$2y$10$0MNB6SNrJCDmXpZgb14Cgu7r3ZcEVlbbk8XvmRn2x9hKZXebK5Grm";

const UsersListToolbar = () => {
  const { setItemIdForUpdate } = useListView();
  const [campaignInputData, setCampaignInputData] =
    React.useState(initialValue);
  // console.log("campaignInputData", campaignInputData);
  // const openAddUserModal = () => {
  //   setItemIdForUpdate(null);
  // };
  const { config } = useLayout();
  const [showCreateAppModal, setShowCreateAppModal] = useState<boolean>(false);
  const [steps, setSteps] = useState<number>(1);

  const { mutateAsync } = useMutation(postAddCampaign);

  const handleCampaignSubmit = () => {
    mutateAsync({
      requestData: {
        tenant: "bsl",
        accessKey: accessKey,
        contact_data: {
          campaignName: campaignInputData.campaignName,
          campaignGoal: campaignInputData.campaignGoal,
          campaignDescription: campaignInputData.campaignDescription,
          campaignChannel: campaignInputData.campaignChannel,
          campaignLanguage: campaignInputData.campaignLanguage,
        },
      },
    });
  };
  return (
    <div
      className="d-flex justify-content-end"
      data-kt-user-table-toolbar="base"
    >
      <UsersListFilter />

      {/* begin::Export */}
      <button type="button" className="btn btn-light-primary me-3">
        <KTIcon iconName="exit-up" className="fs-2" />
        Export
      </button>
      {/* end::Export */}

      {/* begin::Add user */}
      {/*} <button
        type="button"
        className="btn btn-primary"
        onClick={openAddUserModal}
      >
        <KTIcon iconName="plus" className="fs-2" />
        Add User
  </button>*/}
      {/* end::Add user */}
      {config.app?.toolbar?.primaryButton && (
        <a
          href="#"
          onClick={() => setShowCreateAppModal(true)}
          className="btn btn-sm fw-bold btn-primary"
        >
          Add Campaign
        </a>
      )}
      {/* <CreateAppModal
        show={showCreateAppModal}
        handleClose={() => setShowCreateAppModal(false)}
      /> */}

      {/* <CampaignModal
        show={showCreateAppModal}
        handleClose={() => setShowCreateAppModal(false)}
      /> */}
      <CustomStepsModal
        show={showCreateAppModal}
        handleClose={() => {
          setShowCreateAppModal(false);
          setSteps(1);
        }}
        steps={steps}
        setSteps={setSteps}
        campaignInputData={campaignInputData}
        setCampaignInputData={setCampaignInputData}
        handleCampaignSubmit={handleCampaignSubmit}
      />
    </div>
  );
};

export { UsersListToolbar };
