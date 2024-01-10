import React from "react";
import TelegramConfigurationModal from "./ConfigurationModal/ConfigurationModal";

const initialValue = {
  channelName: null,
  config1Data: null,
  config2Data: null,
  config3Data: null,
  config4Data: null,
};

const TelegramPage = () => {
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [channelConfigurationData, setChannelConfigurationData] =
    React.useState<any>(initialValue);

  console.log("channelConfigurationData", channelConfigurationData);
  return (
    <div>
      <div className="card mb-5 mb-xl-10" id="kt_profile_details_view">
        <div className="card-header ">
          <div className="card-title m-0">
            <h3 className="fw-bolder m-0">Telegram Configuration Details</h3>
          </div>

          <button
            className="btn btn-primary align-self-center"
            onClick={() => setShowModal(true)}
          >
            Telegram Channel Configuration
          </button>
        </div>

        <div className="card-body p-9">
          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">Channel Name</label>

            <div className="col-lg-8">
              <span className="fw-bolder fs-6 text-gray-900">Telegram</span>
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">
              Configuration Data 1
              {/* <i
                className="fas fa-exclamation-circle ms-1 fs-7"
                data-bs-toggle="tooltip"
                title="Configuration Data 1 Tooltip"
              ></i> */}
            </label>

            <div className="col-lg-8 d-flex align-items-center">
              <span className="fw-bolder fs-6 me-2">
                {channelConfigurationData.config1Data
                  ? channelConfigurationData.config1Data
                  : "No Data to show."}
              </span>
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">
              Configuration Data 2
              {/* <i
                className="fas fa-exclamation-circle ms-1 fs-7"
                data-bs-toggle="tooltip"
                title="Configuration Data 2 Tooltip"
              ></i> */}
            </label>

            <div className="col-lg-8 d-flex align-items-center">
              <span className="fw-bolder fs-6 me-2">
                {channelConfigurationData.config2Data
                  ? channelConfigurationData.config2Data
                  : "No Data to show."}
              </span>
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">
              Configuration Data 3
              {/* <i
                className="fas fa-exclamation-circle ms-1 fs-7"
                data-bs-toggle="tooltip"
                title="Configuration Data 3 Tooltip"
              ></i> */}
            </label>

            <div className="col-lg-8 d-flex align-items-center">
              <span className="fw-bolder fs-6 me-2">
                {channelConfigurationData.config3Data
                  ? channelConfigurationData.config3Data
                  : "No Data to show."}
              </span>
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">
              Configuration Data 4
              {/* <i
                className="fas fa-exclamation-circle ms-1 fs-7"
                data-bs-toggle="tooltip"
                title="Configuration Data 4 Tooltip"
              ></i> */}
            </label>

            <div className="col-lg-8 d-flex align-items-center">
              <span className="fw-bolder fs-6 me-2">
                {channelConfigurationData.config4Data
                  ? channelConfigurationData.config4Data
                  : "No Data to show."}
              </span>
            </div>
          </div>
        </div>
      </div>

      <TelegramConfigurationModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        setData={setChannelConfigurationData}
      />
    </div>
  );
};

export default TelegramPage;
