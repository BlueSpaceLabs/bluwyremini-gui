import React from "react";

const AuditLogs = () => {
  const [detailData, setDetailData] = React.useState({
    verified_name: null,
    throughput: null,
    quality_rating: null,
  });

  //   const [data, setData] = React.useState(null);

  //   React.useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await axios.get(
  //           "http://3.108.229.60:8082/bluwyremini-backend/info/getWabaBusinessInfo.php",
  //           {
  //             params: {
  //               accessKey:
  //                 "$2y$10$0MNB6SNrJCDmXpZgb14Cgu7r3ZcEVlbbk8XvmRn2x9hKZXebK5Grm",
  //               phoneNoId: channelConfigurationData?.phoneNoId,
  //               accessToken: channelConfigurationData?.accessToken,
  //               channelName: "whatsapp",
  //             },
  //           }
  //         );
  //         if (response.data) {
  //           setDetailData({
  //             verified_name: response.data.verifiedName,
  //             throughput: response.data.throughputLevel,
  //             quality_rating: response.data.qualityRating,
  //           });
  //         }

  //         setData(response.data);
  //       } catch (error) {
  //         console.error("Error fetching data:", error);
  //       }
  //     };

  //     fetchData();
  //   }, []);

  return (
    <React.Fragment>
      <div className="row mb-7">
        <label className="col-lg-4 fw-bold text-muted">
          User Name
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
          Date and Timestamp
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
          Field Updated
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

      <div className="row mb-7">
        <label className="col-lg-4 fw-bold text-muted">
          Status
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

      <div className="row mb-7">
        <label className="col-lg-4 fw-bold text-muted">
          Old Value
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

      <div className="row mb-7">
        <label className="col-lg-4 fw-bold text-muted">
          Updated Value
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

export default AuditLogs;
