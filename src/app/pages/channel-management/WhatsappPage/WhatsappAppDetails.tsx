import React from "react";
import axios from "axios";
import useStaticData from "../../../StaticData";

const WhatsappAppDetails = ({ channelConfigurationData }: any) => {
  const { baseUrl } = useStaticData();

  console.log({ channelConfigurationData });
  const [detailData, setDetailData] = React.useState({
    verified_name: null,
    throughput: null,
    quality_rating: null,
  });

  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     const url =
  //       `${baseUrl}/getWabaBusinessInfo.php`;
  //     try {
  // const accessKey = sessionStorage.getItem("accessKey");

  //       const params = {
  //         accessKey:
  //           accessKey,
  //         // channelConfigurationData.accessToken,
  //         phoneNoId: channelConfigurationData.phoneNoId,
  //         accessToken: channelConfigurationData.permanentToken,
  //         channelName: "whatsapp",
  //       };
  //       const response = await axios.get(url, { params });

  //       console.log({ params });

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
        const url = `${baseUrl}/getWabaBusinessInfo.php`;
        const accessKey = sessionStorage.getItem("accessKey");

        const response = await axios.get(url, {
          params: {
            accessKey: accessKey,
            phoneNoId: channelConfigurationData?.phoneNoId,
            accessToken: channelConfigurationData?.accessToken,
            channelName: "whatsapp",
          },
        });
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
