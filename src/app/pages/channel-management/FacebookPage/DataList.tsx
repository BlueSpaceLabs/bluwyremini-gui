import { Box } from "@mui/material";
import React from "react";

const ListCard = ({ labelTitle, tooltip, listData, textareaData }: any) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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
        {textareaData ? (
          <textarea
            rows={4}
            cols={70}
            value={
              textareaData
                ? showPassword
                  ? textareaData
                  : "*".repeat(textareaData.length)
                : "No Data to show."
            }
            onClick={togglePasswordVisibility}
            readOnly
          />
        ) : (
          <span className="fw-bolder fs-6 me-2">
            {listData ? listData : "No Data to show."}
          </span>
        )}
      </Box>
    </Box>
  );
};

const FacebookDataList = ({ facebookData }: any) => {
  // console.log("facebookData", facebookData);

  return (
    <Box
      className="card-body p-9"
      style={{ backgroundColor: "lavender", padding: 10, borderRadius: 10 }}
    >
      <ListCard labelTitle={"App Id"} listData={facebookData?.appId} />
      <ListCard
        labelTitle={"Business Id"}
        listData={facebookData?.businessId}
      />
      <ListCard
        labelTitle={"Facebook Access Token"}
        textareaData={facebookData?.fbAccessToken}
      />
      <ListCard
        labelTitle={"Facebook Webhook Token"}
        listData={facebookData?.fbWebhookToken}
      />
      <ListCard
        labelTitle={"Facebook Webhook Url"}
        listData={facebookData?.fbWebhookUrl}
      />
      <ListCard labelTitle={"Page Id"} listData={facebookData?.pageId} />
    </Box>
  );
};

export default FacebookDataList;
