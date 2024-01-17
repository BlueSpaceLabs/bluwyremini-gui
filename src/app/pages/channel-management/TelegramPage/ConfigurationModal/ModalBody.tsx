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
          labelTitle={"Telegram Token"}
          inputValue={modalInput.telegramToken}
          inputName={"telegramToken"}
          handleInputChange={handleInputChange}
          formError={formError}
        />

        <CustomInputCard
          labelTitle={"Telegram Webhook Url"}
          inputValue={modalInput.telegramWebhookUrl}
          inputName={"telegramWebhookUrl"}
          handleInputChange={handleInputChange}
          formError={formError}
        />
        <CustomInputCard
          labelTitle={"telegram Webhook Token"}
          inputValue={modalInput.telegramWebookToken}
          inputName={"telegramWebookToken"}
          handleInputChange={handleInputChange}
          formError={formError}
        />
      </Box>
    </Box>
  );
};

export default ModalBody;
