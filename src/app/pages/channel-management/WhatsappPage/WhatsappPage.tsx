import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import WhatsappConfigurationModal from "./ConfigurationModal/ConfigurationModal";
import CustomSnackBar from "./ConfigurationModal/CustomSnackBar";
import WhatsappAppDetails from "./WhatsappAppDetails";

const serviceAxiosGetWhatsappData = async ({ channelName, accessKey }: any) => {
  const response = await axios.get(
    // `https://api.npoint.io/5688efdb520c99d97744`
    `http://3.108.229.60:8082/bluwyremini-backend/info/getChannelDetails.php?channelName=${channelName}&accessKey=${accessKey}`
  );
  return response.data;
};

const initialValue = {
  channelName: "Whatsapp",
  accessToken: null,
  appId: null,
  businessId: null,
  displayNo: null,
  permanentToken: null,
  phoneNoId: null,
  waWebhookToken: null,
  waWebhookUrl: null,
};

const WhatsappPage = ({ channelName, accessKey }: any) => {
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [showSnackBar, setShowSnackBar] = React.useState<boolean>(false);
  const [severitySnackBar, setSeveritySnackBar] = React.useState<string>("");
  const [messageSnackBar, setMessageSnackBar] = React.useState<string>("");
  const [channelConfigurationData, setChannelConfigurationData] =
    React.useState<any>(initialValue);
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const {
    data: getWhatsappData,
    isLoading: isLoadingWhatsappData,
    error: errorWhatsappData,
    refetch: refetchGetWhatsappData,
  } = useQuery("getWhatsappData", () =>
    serviceAxiosGetWhatsappData({ channelName, accessKey })
  );

  console.log(
    { getWhatsappData },
    { isLoadingWhatsappData },
    { errorWhatsappData }
  );

  React.useEffect(() => {
    const respData = getWhatsappData?.data;
    console.log({ respData });

    if (respData) {
      setChannelConfigurationData({
        channelName: "Whatsapp",
        accessToken: respData?.accessToken,
        appId: respData?.appId,
        businessId: respData?.businessId,
        displayNo: respData?.displayNo,
        permanentToken: respData?.permanentToken,
        phoneNoId: respData?.phoneNoId,
        waWebhookToken: respData?.waWebhookToken,
        waWebhookUrl: respData?.waWebhookUrl,
      });
    }
  }, [getWhatsappData?.data]);

  return (
    <div>
      <div className="card mb-5 mb-xl-10" id="kt_profile_details_view">
        <div className="card-header ">
          <div className="card-title m-0">
            <h3 className="fw-bolder m-0">Whatsapp Configuration Details</h3>
          </div>

          <button
            className="btn btn-primary align-self-center"
            onClick={() => setShowModal(true)}
          >
            Whatsapp Channel Configuration
          </button>
        </div>

        <div className="card-body p-9">
          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">
              Channel Name
              {/* <i
                className="fas fa-exclamation-circle ms-1 fs-7"
                data-bs-toggle="tooltip"
                title="channelName Tooltip"
              ></i> */}
            </label>

            <div className="col-lg-8 d-flex align-items-center">
              <span className="fw-bolder fs-6 me-2">
                {channelConfigurationData.channelName
                  ? channelConfigurationData.channelName
                  : "No Data to show."}
              </span>
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">
              Access Token
              {/* <i
                className="fas fa-exclamation-circle ms-1 fs-7"
                data-bs-toggle="tooltip"
                title="Access Token Tooltip"
              ></i> */}
            </label>

            <div className="col-lg-8 d-flex align-items-center">
              {/* <span className="fw-bolder fs-6 me-2">
                {channelConfigurationData.accessToken
                  ? channelConfigurationData.accessToken
                  : "No Data to show."}
              </span> */}

              <input
                type={showPassword ? "text" : "password"}
                className="form-control form-control-lg form-control-solid"
                value={
                  channelConfigurationData.accessToken
                    ? channelConfigurationData.accessToken
                    : "No Data to show."
                }
                onClick={togglePasswordVisibility}
              />
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">
              Application Id
              {/* <i
                className="fas fa-exclamation-circle ms-1 fs-7"
                data-bs-toggle="tooltip"
                title="App Id Tooltip"
              ></i> */}
            </label>

            <div className="col-lg-8 d-flex align-items-center">
              <span className="fw-bolder fs-6 me-2">
                {channelConfigurationData.appId
                  ? channelConfigurationData.appId
                  : "No Data to show."}
              </span>
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">
              Business Id
              {/* <i
                className="fas fa-exclamation-circle ms-1 fs-7"
                data-bs-toggle="tooltip"
                title="Business Id Tooltip"
              ></i> */}
            </label>

            <div className="col-lg-8 d-flex align-items-center">
              <span className="fw-bolder fs-6 me-2">
                {channelConfigurationData.businessId
                  ? channelConfigurationData.businessId
                  : "No Data to show."}
              </span>
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">
              Display Number
              {/* <i
                className="fas fa-exclamation-circle ms-1 fs-7"
                data-bs-toggle="tooltip"
                title="Display Number Tooltip"
              ></i> */}
            </label>

            <div className="col-lg-8 d-flex align-items-center">
              <span className="fw-bolder fs-6 me-2">
                {channelConfigurationData.displayNo
                  ? channelConfigurationData.displayNo
                  : "No Data to show."}
              </span>
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">
              Permanent Token
              {/* <i
                className="fas fa-exclamation-circle ms-1 fs-7"
                data-bs-toggle="tooltip"
                title="Permanent Token Tooltip"
              ></i> */}
            </label>

            <div className="col-lg-8 d-flex align-items-center">
              {/* <span className="fw-bolder fs-6 me-2">
                {channelConfigurationData.permanentToken
                  ? channelConfigurationData.permanentToken
                  : "No Data to show."}
              </span> */}

              <input
                type={showPassword ? "text" : "password"}
                className="form-control form-control-lg form-control-solid"
                value={
                  channelConfigurationData.permanentToken
                    ? channelConfigurationData.permanentToken
                    : "No Data to show."
                }
                onClick={togglePasswordVisibility}
              />
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">
              Phone Number Id
              {/* <i
                className="fas fa-exclamation-circle ms-1 fs-7"
                data-bs-toggle="tooltip"
                title="Phone Number Id Tooltip"
              ></i> */}
            </label>

            <div className="col-lg-8 d-flex align-items-center">
              <span className="fw-bolder fs-6 me-2">
                {channelConfigurationData.phoneNoId
                  ? channelConfigurationData.phoneNoId
                  : "No Data to show."}
              </span>
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">
              WA Webhook Token
              {/* <i
                className="fas fa-exclamation-circle ms-1 fs-7"
                data-bs-toggle="tooltip"
                title="WA Webhook Token Tooltip"
              ></i> */}
            </label>

            <div className="col-lg-8 d-flex align-items-center">
              <span className="fw-bolder fs-6 me-2">
                {channelConfigurationData.waWebhookToken
                  ? channelConfigurationData.waWebhookToken
                  : "No Data to show."}
              </span>
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">
              WA Webhook Url
              {/* <i
                className="fas fa-exclamation-circle ms-1 fs-7"
                data-bs-toggle="tooltip"
                title="WA Webhook Url Tooltip"
              ></i> */}
            </label>

            <div className="col-lg-8 d-flex align-items-center">
              <span className="fw-bolder fs-6 me-2">
                {channelConfigurationData.waWebhookUrl
                  ? channelConfigurationData.waWebhookUrl
                  : "No Data to show."}
              </span>
            </div>
          </div>
          {channelConfigurationData.appId && (
            <WhatsappAppDetails
              channelConfigurationData={channelConfigurationData}
            />
          )}
        </div>
      </div>

      <WhatsappConfigurationModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        initialModalData={channelConfigurationData}
        refetchGetWhatsappData={refetchGetWhatsappData}
        accessKey={accessKey}
        setShowSnackBar={setShowSnackBar}
        setSeveritySnackBar={setSeveritySnackBar}
        setMessageSnackBar={setMessageSnackBar}
      />

      <CustomSnackBar
        openSnackBar={showSnackBar}
        setShowSnackBar={setShowSnackBar}
        severitySnackBar={severitySnackBar}
        messageSnackBar={messageSnackBar}
      />
    </div>
  );
};

export default WhatsappPage;
