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

const InstagramDataList = ({ instagramData }: any) => {
  console.log("instagramData", instagramData);

  return (
    <Box className="card-body p-9" style={{backgroundColor:"lavender",padding:10, borderRadius:10}}>
      <ListCard labelTitle={"App Id"} listData={instagramData?.appId} />
      <ListCard
        labelTitle={"Business Id"}
        listData={instagramData?.businessId}
      />
      <ListCard
        labelTitle={"Instagram Webhook Token"}
        listData={instagramData?.instaWebhookToken}
      />
      <ListCard
        labelTitle={"Instagram Webhook Url"}
        listData={instagramData?.instaWebhookUrl}
      />
      <ListCard
        labelTitle={"Instagram Id"}
        listData={instagramData?.instagramId}
      />
    </Box>
  );
};

export default InstagramDataList;
