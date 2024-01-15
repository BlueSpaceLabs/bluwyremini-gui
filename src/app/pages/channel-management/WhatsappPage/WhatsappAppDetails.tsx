import React from "react";
import axios from "axios";

const WhatsappAppDetails = ({ channelConfigurationData }: any) => {
  console.log({ channelConfigurationData });
  const [detailData, setDetailData] = React.useState({
    verified_name: null,
    throughput: null,
    quality_rating: null,
  });

  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     const url =
  //       "http://3.108.229.60:8082/bluwyremini-backend/info/getWabaBusinessInfo.php";
  //     try {
  //       const params = {
  //         accessKey:
  //           "$2y$10$0MNB6SNrJCDmXpZgb14Cgu7r3ZcEVlbbk8XvmRn2x9hKZXebK5Grm",
  //         // channelConfigurationData.accessToken,
  //         phoneNoId: channelConfigurationData.phoneNoId,
  //         accessToken: channelConfigurationData.permanentToken,
  //         channelName: "whatsapp",
  //       };
  //       const response = await axios.get(url, { params });

  //       console.log({ params });

  //       console.log("subhro 01", response.data);
  //       if (response.data) {
  //         setDetailData({
  //           verified_name: response.data.verifiedName,
  //           throughput: response.data.throughputLevel,
  //           quality_rating: response.data.qualityRating,
  //         });
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://3.108.229.60:8082/bluwyremini-backend/info/getWabaBusinessInfo.php",
          {
            params: {
              accessKey:
                "$2y$10$0MNB6SNrJCDmXpZgb14Cgu7r3ZcEVlbbk8XvmRn2x9hKZXebK5Grm",
              phoneNoId: "104801782499737",
              accessToken:
                "EAAvZAe0w3fFoBOZC5HtjhN0HAZAE1GQfc5jKrJuakkd7bAas84EohnNiO4aZBFxXRheZAwub30Ib6jbh8uthqq4xZA9JXD1NmTarNJ7ah4iVk3bVZC1csEHGw1pJNuHuf5uRxxqUU05G2UTdMWodn82PkDhEJSv9NUvaSJYWW16IQPy6XZCBJY9fy6X5R482tMai",
              channelName: "whatsapp",
            },
          }
        );
        if (response.data) {
          setDetailData({
            verified_name: response.data.verifiedName,
            throughput: response.data.throughputLevel,
            quality_rating: response.data.qualityRating,
          });
        }

        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after the initial render

  console.log("subhro 009", data);

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