import { Box } from "@mui/material";
import React from "react";

const ListCard = ({ labelTitle, tooltip, listData }: any) => {
  return (
    <Box className="row mb-7">
      <label className="col-lg-4 fw-bold text-muted">
        {labelTitle}
        {tooltip && (
          <i
            className="fas fa-exclamation-circle ms-1 fs-7"
            data-bs-toggle="tooltip"
            title={tooltip}
          ></i>
        )}
      </label>

      <Box className="col-lg-8 d-flex align-items-center">
        <span className="fw-bolder fs-6 me-2">
          {listData ? listData : "No Data to show."}
        </span>
      </Box>
    </Box>
  );
};

const TelegramDataList = ({ telegramData }: any) => {
  // console.log("telegramData", telegramData);

  return (
    <Box className="card-body p-9">
      <ListCard
        labelTitle={"Telegram Token"}
        listData={telegramData?.telegramToken}
      />
      <ListCard
        labelTitle={"Telegram Webhook Token"}
        listData={telegramData?.telegramWebhookToken}
      />
      <ListCard
        labelTitle={"Telegram Webhook Url"}
        listData={telegramData?.telegramWebhookUrl}
      />
    </Box>
  );
};

export default TelegramDataList;
