import React from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";

const ActiveUserCampaignModal = ({
  show,
  handleClose,
  steps,
  setSteps,
  campaignInputData,
  setCampaignInputData,
  handleCampaignSubmit,
  showCampaignMessage,
}: any) => {
  // const handleNextClick = () => {
  //   if (steps < 4) setSteps(steps + 1);
  // };

  // const handleBackClick = () => {
  //   if (steps > 1) setSteps(steps - 1);
  // };

  return (
    <>
      {steps === 1 && (
        <Step1
          show={show}
          handleClose={handleClose}
          setSteps={setSteps}
          campaignInputData={campaignInputData}
          setCampaignInputData={setCampaignInputData}
        />
      )}
      {steps === 2 && (
        <Step2
          show={show}
          handleClose={handleClose}
          setSteps={setSteps}
          campaignInputData={campaignInputData}
          setCampaignInputData={setCampaignInputData}
        />
      )}
      {steps === 3 && (
        <Step3
          show={show}
          handleClose={handleClose}
          setSteps={setSteps}
          campaignInputData={campaignInputData}
          setCampaignInputData={setCampaignInputData}
        />
      )}
      {steps === 4 && (
        <Step4
          show={show}
          handleClose={handleClose}
          setSteps={setSteps}
          campaignInputData={campaignInputData}
          setCampaignInputData={setCampaignInputData}
          handleCampaignSubmit={handleCampaignSubmit}
        />
      )}
      {steps === 5 && (
        <Step5
          show={show}
          handleClose={handleClose}
          setSteps={setSteps}
          showCampaignMessage={showCampaignMessage}
        />
      )}
    </>
  );
};

export default ActiveUserCampaignModal;
