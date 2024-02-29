import { Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ActiveUserCampaignModal from "./Modal";
import useStaticData from "../../../StaticData";

const DetailCardUI = ({
  channel,
  activeUser,
  setCampaignData,
  showModal,
}: any) => {
  const handleCreateCampaignClick = () => {
    setCampaignData((prevData) => ({
      ...prevData,
      campaignChannel: channel.toLowerCase(),
      userActiveCount: activeUser,
    }));
    showModal(true);
  };

  return (
    <Box display={"flex"} justifyContent={"space-between"} mb={2}>
      <Box width={"40%"} className="fw-bold text-muted">
        {channel}
      </Box>
      <Box width={"20%"} className="fw-bolder fs-6 me-2">
        {activeUser ? activeUser : 0}
      </Box>
      <Box width={"30%"}>
        <button
          className="btn btn-secondary align-self-center"
          onClick={handleCreateCampaignClick}
          disabled={activeUser === "0"}
        >
          Create Campaign
        </button>
      </Box>
    </Box>
  );
};

const initialCampaignData = {
  campaignName: "",
  campaignGoal: "",
  campaignDescription: "",
  campaignUploadFile: "",
  campaignChannel: "",
  selectedTime: "",
  userActiveCount: "",
};

const accessKey =
  "$2y$10$0MNB6SNrJCDmXpZgb14Cgu7r3ZcEVlbbk8XvmRn2x9hKZXebK5Grm";

const tenant = "bsl";

const ActiveUserDetails = () => {
  const { baseUrl } = useStaticData();

  const [data, setData] = useState(null);

  const [activeUserCampaignData, setActiveUserCampaignData] =
    useState(initialCampaignData);

  const [showActiveUserCampaignModal, setShowActiveUserCampaignModal] =
    useState<boolean>(false);
  const [steps, setSteps] = useState<number>(1);
  const [showCampaignMessage, setShowCampaignMessage] = React.useState("");

  useEffect(() => {
    const url = `${baseUrl}/getActiveUserCampaignDetails.php`;

    const params = {
      accessKey: accessKey,
    };

    const fetchData = async () => {
      try {
        const response = await axios.get(url, { params });

        console.log("subhro 007", response.data);
        setData(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        console.log("getActiveUserCampaignDetails");
      }
    };

    fetchData();
  }, []);

  const handleActiveUserCampaignSubmit = async () => {
    // console.log('campaignName',campaignInputData.campaignName)
    //console.log('uploadfile ',campaignInputData.campaignUploadFile)
    const formData = new FormData();

    //prepare form for submission
    formData.append("accessKey", accessKey);
    formData.append("tenant", tenant);
    formData.append("campaignName", activeUserCampaignData.campaignName);
    formData.append(
      "campaignDescription",
      activeUserCampaignData.campaignDescription
    );
    formData.append("campaignGoal", activeUserCampaignData.campaignGoal);
    formData.append("campaignChannel", activeUserCampaignData.campaignChannel);
    formData.append("selectedTime", activeUserCampaignData.selectedTime);
    formData.append("avatar", activeUserCampaignData.campaignUploadFile);

    try {
      const url = `${baseUrl}/addCampaignDetailsRealTime.php`;

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
    <React.Fragment>
      <div className="card card-body p-9">
        <DetailCardUI
          channel="WhatsApp"
          activeUser={data?.wabaCount}
          setCampaignData={setActiveUserCampaignData}
          showModal={setShowActiveUserCampaignModal}
        />

        <DetailCardUI
          channel="Facebook"
          activeUser={data?.fbmCount}
          setCampaignData={setActiveUserCampaignData}
          showModal={setShowActiveUserCampaignModal}
        />

        <DetailCardUI
          channel="Instagram"
          activeUser={data?.instaCount}
          setCampaignData={setActiveUserCampaignData}
          showModal={setShowActiveUserCampaignModal}
        />

        <DetailCardUI
          channel="Telegram"
          activeUser={data?.telegarmCount}
          setCampaignData={setActiveUserCampaignData}
          showModal={setShowActiveUserCampaignModal}
        />
      </div>

      <ActiveUserCampaignModal
        show={showActiveUserCampaignModal}
        handleClose={() => {
          setShowActiveUserCampaignModal(false);
          setSteps(1);
        }}
        steps={steps}
        setSteps={setSteps}
        campaignInputData={activeUserCampaignData}
        setCampaignInputData={setActiveUserCampaignData}
        handleCampaignSubmit={handleActiveUserCampaignSubmit}
        // showCampaignMessage={showCampaignMessage}
      />
    </React.Fragment>
  );
};

export default ActiveUserDetails;
