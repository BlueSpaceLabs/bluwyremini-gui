import React, { useEffect, useState } from "react";
import axios from "axios";
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
import { DateRangeFilter } from "./DateRangeFilter";
import useStaticData from "../../../../../StaticData";

const initialValue = {
  campaignName: "",
  campaignGoal: "",
  campaignDescription: "",
  campaignUploadFile: "",
  campaignChannel: "",
  campaignLanguage: "",
  selectedTime: "now",
  campaignTemplate: "",
};

const tenant = "bsl";

const UsersListToolbar = ({
  showCreateAppModal,
  setShowCreateAppModal,
  setChannelType,
  setFromDate,
  setToDate,
}: any) => {
  const { baseUrl } = useStaticData();

  const [showCampaignMessage, setShowCampaignMessage] = React.useState("");
  const [showExport, setShowExport] = useState<boolean>(false);
  const [campaignInputData, setCampaignInputData] =
    React.useState(initialValue);
  const [steps, setSteps] = useState<number>(1);

  // const { setItemIdForUpdate } = useListView();

  // console.log("campaignInputData", campaignInputData);

  // const { config } = useLayout();

  //const { mutateAsync } = useMutation(postAddCampaign);

  const handleCampaignSubmit = () => {
    const accessKey = sessionStorage.getItem("accessKey");

    // console.log('campaignName',campaignInputData.campaignName)
    //console.log('uploadfile ',campaignInputData.campaignUploadFile)
    const formData = new FormData();

    //prepare form for submission
    formData.append("accessKey", accessKey);
    formData.append("tenant", tenant);
    formData.append("campaignName", campaignInputData.campaignName);
    formData.append(
      "campaignDescription",
      campaignInputData.campaignDescription
    );
    formData.append("campaignGoal", campaignInputData.campaignGoal);
    formData.append("campaignChannel", campaignInputData.campaignChannel);
    formData.append("selectedTime", campaignInputData.selectedTime);
    formData.append("avatar", campaignInputData.campaignUploadFile);

    const templateValue = JSON.parse(campaignInputData.campaignTemplate);

    formData.append("templateId", templateValue.id);
    formData.append("templateName", templateValue.name);

    try {
      const url = `${baseUrl}/addCampaignDetails.php`;

      let res = axios
        .post(url, formData, {
          headers: {
            "content-type": "multipart/form-data",
          },
        })
        .then(function (response) {
          console.log(response.data);

          setShowCampaignMessage(response.data.message);
          console.log(response.data.message);
          return response;
        });

      //console.log(res)
    } catch (error: any) {
      console.log(error.message);

      setShowCampaignMessage(error.message);

      throw error;
    }
  };

  return (
    <div
      className="d-flex justify-content-end"
      data-kt-user-table-toolbar="base"
    >
      <DateRangeFilter setFromDate={setFromDate} setToDate={setToDate} />

      <UsersListFilter setChannelType={setChannelType} />

      {/* begin::Export */}
      {showExport && (
        <button type="button" className="btn btn-light-primary me-3">
          <KTIcon iconName="exit-up" className="fs-2" />
          Export
        </button>
      )}
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
      {/* {config.app?.toolbar?.primaryButton && (
        <a
          href="#"
          onClick={() => setShowCreateAppModal(true)}
          className="btn btn-sm fw-bold btn-primary"
        >
          Add Campaign
        </a>
      )} */}
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
        showCampaignMessage={showCampaignMessage}
      />
    </div>
  );
};

export { UsersListToolbar };
