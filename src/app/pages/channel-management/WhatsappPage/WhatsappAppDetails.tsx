import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const serviceAppDetailData = async () => {
  const response = await axios.get(
    "https://graph.facebook.com/v18.0/104801782499737",
    {
      headers: {
        Authorization:
          "Bearer EAAvZAe0w3fFoBOZC5HtjhN0HAZAE1GQfc5jKrJuakkd7bAas84EohnNiO4aZBFxXRheZAwub30Ib6jbh8uthqq4xZA9JXD1NmTarNJ7ah4iVk3bVZC1csEHGw1pJNuHuf5uRxxqUU05G2UTdMWodn82PkDhEJSv9NUvaSJYWW16IQPy6XZCBJY9fy6X5R482tMai",
      },
    }
  );
  return response.data;
};

const WhatsappAppDetails = ({ appId }: any) => {
  console.log({ appId });
  const [detailData, setDetailData] = React.useState({
    verified_name: null,
    throughput: null,
    quality_rating: null,
  });

  const {
    data: appDetailData,
    isLoading,
    isError,
  } = useQuery("appDetailData", serviceAppDetailData);

  React.useEffect(() => {
    console.log({ appDetailData });
    if (appDetailData) {
      setDetailData(appDetailData);
    }
  }, [appDetailData]);

  // React.useEffect(() => {
  //   const resp = serviceAppDetailData();
  //   console.log("resp", resp);
  // }, [appId]);

  return (
    <React.Fragment>
      <div className="row mb-7">
        <label className="col-lg-4 fw-bold text-muted">
          Verified Name
          {/* <i
              className="fas fa-exclamation-circle ms-1 fs-7"
              data-bs-toggle="tooltip"
              title="channelName Tooltip"
            ></i> */}
        </label>

        <div className="col-lg-8 d-flex align-items-center">
          <span className="fw-bolder fs-6 me-2">
            {detailData.verified_name
              ? detailData.verified_name
              : "No Data to show."}
          </span>
        </div>
      </div>

      <div className="row mb-7">
        <label className="col-lg-4 fw-bold text-muted">
          Quality Rating
          {/* <i
              className="fas fa-exclamation-circle ms-1 fs-7"
              data-bs-toggle="tooltip"
              title="Access Token Tooltip"
            ></i> */}
        </label>

        <div className="col-lg-8 d-flex align-items-center">
          <span className="fw-bolder fs-6 me-2">
            {detailData.quality_rating
              ? detailData.quality_rating
              : "No Data to show."}
          </span>
        </div>
      </div>

      <div className="row mb-7">
        <label className="col-lg-4 fw-bold text-muted">
          Throughput Level
          {/* <i
              className="fas fa-exclamation-circle ms-1 fs-7"
              data-bs-toggle="tooltip"
              title="App Id Tooltip"
            ></i> */}
        </label>

        <div className="col-lg-8 d-flex align-items-center">
          <span className="fw-bolder fs-6 me-2">
            {detailData.throughput ? detailData.throughput : "No Data to show."}
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WhatsappAppDetails;
