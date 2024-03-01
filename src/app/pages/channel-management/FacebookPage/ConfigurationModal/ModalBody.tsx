import React from "react";
import { Box } from "@mui/material";

const CustomInputCard = ({
  labelTitle,
  required,
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
        <span className={required && "required"}>{labelTitle}</span>
        {tooltipTitle && !readOnly && (
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
      {required && inputValue?.length < 2 && formError && (
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
          tooltipTitle={"App Id"}
          required={true}
          inputValue={modalInput.appId}
          inputName={"appId"}
          handleInputChange={handleInputChange}
          formError={formError}
          readOnly={readOnly}
        />
        <CustomInputCard
          labelTitle={"Business Id"}
          tooltipTitle={"Business Id"}
          required={true}
          inputValue={modalInput.businessId}
          inputName={"businessId"}
          handleInputChange={handleInputChange}
          formError={formError}
          readOnly={readOnly}
        />
        <CustomInputCard
          labelTitle={"Facebook Access Token"}
          tooltipTitle={"Facebook Access Token"}
          inputValue={modalInput.fbAccessToken}
          inputName={"fbAccessToken"}
          handleInputChange={handleInputChange}
          formError={formError}
          readOnly={readOnly}
        />
        <CustomInputCard
          labelTitle={"Facebook Webhook Token"}
          tooltipTitle={"Facebook Webhook Token"}
          inputValue={modalInput.fbWebhookToken}
          inputName={"fbWebhookToken"}
          handleInputChange={handleInputChange}
          formError={formError}
          readOnly={readOnly}
        />
        <CustomInputCard
          labelTitle={"Facebook Webhook Url"}
          tooltipTitle={"Facebook Webhook Url"}
          inputValue={modalInput.fbWebhookUrl}
          inputName={"fbWebhookUrl"}
          handleInputChange={handleInputChange}
          formError={formError}
          readOnly={readOnly}
        />
        <CustomInputCard
          labelTitle={"Page Id"}
          tooltipTitle={"Page Id"}
          inputValue={modalInput.pageId}
          inputName={"pageId"}
          handleInputChange={handleInputChange}
          formError={formError}
          readOnly={readOnly}
        />
      </Box>
    </Box>
  );
};

export default ModalBody;
