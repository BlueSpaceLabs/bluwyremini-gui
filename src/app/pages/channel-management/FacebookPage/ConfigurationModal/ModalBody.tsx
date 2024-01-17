import React from "react";
import { Box } from "@mui/material";

const CustomInputCard = ({
  labelTitle,
  tooltipTitle,
  inputValue,
  inputName,
  handleInputChange,
  formError,
}: any) => {
  return (
    <Box className=" fv-row mb-10 " sx={{ width: "45%" }}>
      <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
        <span className="required">{labelTitle}</span>
        {tooltipTitle && (
          <i
            className="fas fa-exclamation-circle ms-2 fs-7"
            data-bs-toggle="tooltip"
            title={tooltipTitle}
          ></i>
        )}
      </label>
      <input
        type="text"
        className="form-control form-control-lg form-control-solid"
        name={inputName}
        value={inputValue}
        onChange={handleInputChange}
      />
      {inputValue?.length < 2 && formError && (
        <Box className="fv-plugins-message-container">
          <Box className="fv-help-block">{labelTitle} is Required.</Box>
        </Box>
      )}
    </Box>
  );
};

const ModalBody = ({ modalInput, handleInputChange, formError }: any) => {
  return (
    <Box className="modal-body py-lg-10 px-lg-10">
      <Box className="d-flex  flex-wrap flex-row justify-content-between align-items-start">
        <CustomInputCard
          labelTitle={"App Id"}
          inputValue={modalInput.appId}
          inputName={"appId"}
          handleInputChange={handleInputChange}
          formError={formError}
        />
        <CustomInputCard
          labelTitle={"Business Id"}
          inputValue={modalInput.businessId}
          inputName={"businessId"}
          handleInputChange={handleInputChange}
          formError={formError}
        />
        <CustomInputCard
          labelTitle={"Facebook Access Token"}
          inputValue={modalInput.fbAccessToken}
          inputName={"fbAccessToken"}
          handleInputChange={handleInputChange}
          formError={formError}
        />
        <CustomInputCard
          labelTitle={"Facebook Webhook Token"}
          inputValue={modalInput.fbWebhookToken}
          inputName={"fbWebhookToken"}
          handleInputChange={handleInputChange}
          formError={formError}
        />
        <CustomInputCard
          labelTitle={"Facebook Webhook Url"}
          inputValue={modalInput.fbWebhookUrl}
          inputName={"fbWebhookUrl"}
          handleInputChange={handleInputChange}
          formError={formError}
        />
        <CustomInputCard
          labelTitle={"Page Id"}
          inputValue={modalInput.pageId}
          inputName={"pageId"}
          handleInputChange={handleInputChange}
          formError={formError}
        />
      </Box>
    </Box>
  );
};

export default ModalBody;
