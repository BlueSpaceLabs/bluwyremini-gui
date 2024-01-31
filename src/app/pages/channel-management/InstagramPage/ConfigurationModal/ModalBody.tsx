import React from "react";
import { Box } from "@mui/material";

const CustomInputCard = ({
  labelTitle,
  tooltipTitle,
  inputValue,
  inputName,
  handleInputChange,
  formError,
  readOnly,
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
        readOnly={readOnly}
      />
      {inputValue?.length < 2 && formError && (
        <Box className="fv-plugins-message-container">
          <Box className="fv-help-block">{labelTitle} is Required.</Box>
        </Box>
      )}
    </Box>
  );
};

const ModalBody = ({
  modalInput,
  handleInputChange,
  formError,
  readOnly,
}: any) => {
  return (
    <Box className="modal-body py-lg-10 px-lg-10">
      <Box className="d-flex  flex-wrap flex-row justify-content-between align-items-start">
        <CustomInputCard
          labelTitle={"App Id"}
          inputValue={modalInput.appId}
          inputName={"appId"}
          handleInputChange={handleInputChange}
          formError={formError}
          readOnly={readOnly}
        />

        <CustomInputCard
          labelTitle={"Business Id"}
          inputValue={modalInput.businessId}
          inputName={"businessId"}
          handleInputChange={handleInputChange}
          formError={formError}
          readOnly={readOnly}
        />

        <CustomInputCard
          labelTitle={"Instagram Webhook Token"}
          inputValue={modalInput.instaWebhookToken}
          inputName={"instaWebhookToken"}
          handleInputChange={handleInputChange}
          formError={formError}
          readOnly={readOnly}
        />

        <CustomInputCard
          labelTitle={"Instagram Webhook Url"}
          inputValue={modalInput.instaWebhookUrl}
          inputName={"instaWebhookUrl"}
          handleInputChange={handleInputChange}
          formError={formError}
          readOnly={readOnly}
        />

        <CustomInputCard
          labelTitle={"Instagram Id"}
          inputValue={modalInput.instagramId}
          inputName={"instagramId"}
          handleInputChange={handleInputChange}
          formError={formError}
          readOnly={readOnly}
        />
      </Box>
    </Box>
  );
};

export default ModalBody;
