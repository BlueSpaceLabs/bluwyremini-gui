import React from "react";
// import useStaticData from "../../../StaticData";

const AuditLogs = () => {
  // const { baseUrl } = useStaticData();

  const [detailData, setDetailData] = React.useState({
    verified_name: null,
    throughput: null,
    quality_rating: null,
  });

  //   const [data, setData] = React.useState(null);

  //   React.useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  // const accessKey = sessionStorage.getItem("accessKey");

  //         const response = await axios.get(
  //           `${baseUrl}/getWabaBusinessInfo.php``,
  //           {
  //             params: {
  //               accessKey:accessKey,
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
    <div style={{ backgroundColor: "lavender", padding: 10, borderRadius: 10 }}>
      <br />
      <h3>Audit Logs</h3>
      <br />
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
        <label className="col-lg-4 fw-bold text-muted">Modified On</label>

        <div className="col-lg-8 d-flex align-items-center">
          <span className="fw-bolder fs-6 me-2">
            {/* {detailData.modifiedOn
              ? detailData.modifiedOn
              : "No Data to show."} */}
            No Data to show.
          </span>
        </div>
      </div>

      <div className="row mb-7">
        <label className="col-lg-4 fw-bold text-muted">Modified By</label>

        <div className="col-lg-8 d-flex align-items-center">
          <span className="fw-bolder fs-6 me-2">
            {/* {detailData.modifiedBy
              ? detailData.modifiedBy
              : "No Data to show."} */}
            No Data to show.
          </span>
        </div>
      </div>

      {/* <div className="row mb-7">
        <label className="col-lg-4 fw-bold text-muted">Field Updated</label>

        <div className="col-lg-8 d-flex align-items-center">
          <span className="fw-bolder fs-6 me-2">
            {detailData.throughput ? detailData.throughput : "No Data to show."}
          </span>
        </div>
      </div> */}

      {/* <div className="row mb-7">
        <label className="col-lg-4 fw-bold text-muted">Status</label>

        <div className="col-lg-8 d-flex align-items-center">
          <span className="fw-bolder fs-6 me-2">
            {detailData.throughput ? detailData.throughput : "No Data to show."}
          </span>
        </div>
      </div> */}

      {/* <div className="row mb-7">
        <label className="col-lg-4 fw-bold text-muted">Old Value</label>

        <div className="col-lg-8 d-flex align-items-center">
          <span className="fw-bolder fs-6 me-2">
            {detailData.throughput ? detailData.throughput : "No Data to show."}
          </span>
        </div>
      </div> */}

      {/* <div className="row mb-7">
        <label className="col-lg-4 fw-bold text-muted">Updated Value</label>

        <div className="col-lg-8 d-flex align-items-center">
          <span className="fw-bolder fs-6 me-2">
            {detailData.throughput ? detailData.throughput : "No Data to show."}
          </span>
        </div>
      </div> */}
    </div>
  );
};

export default AuditLogs;
