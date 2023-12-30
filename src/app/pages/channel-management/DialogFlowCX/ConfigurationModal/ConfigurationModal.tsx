import React from "react";
import { createPortal } from "react-dom";
import { Modal } from "react-bootstrap";
// import { defaultCreateAppData, ICreateAppData } from "./IAppModels";
import { KTIcon } from "../../../../../_metronic/helpers";
// import { StepperComponent } from "../../../../../_metronic/assets/ts/components";

// type Props = {
//   show: boolean;
//   handleClose: () => void;
// };

const modalsRoot = document.getElementById("root-modals") || document.body;

const WhatsappConfigurationModal = ({ show, handleClose, setData }: any) => {
  const [config1Data, setConfig1Data] = React.useState<string>("");
  const [config2Data, setConfig2Data] = React.useState<string>("");
  const [config3Data, setConfig3Data] = React.useState<string>("");
  const [config4Data, setConfig4Data] = React.useState<string>("");
  const [config5Data, setConfig5Data] = React.useState<string>("");
  const [config6Data, setConfig6Data] = React.useState<string>("");

  const [formError, setFormError] = React.useState<boolean>(false);

  const handleSubmitForm = () => {
    if (
      config1Data.length < 2 ||
      config2Data.length < 2 ||
      config3Data.length < 2 ||
      config4Data.length < 2 ||
      config5Data.length < 2 ||
      config6Data.length < 2
    ) {
      setFormError(true);
    } else {
      setData({
        ["channelName"]: "whatsapp",
        ["config1Data"]: config1Data,
        ["config2Data"]: config2Data,
        ["config3Data"]: config3Data,
        ["config4Data"]: config4Data,
        ["config5Data"]: config5Data,
        ["config6Data"]: config6Data,
      });
      setFormError(false);
      handleClose();
    }
  };
  return createPortal(
    <Modal
      tabIndex={-1}
      aria-hidden="true"
      dialogClassName="modal-dialog modal-dialog-centered mw-900px"
      show={show}
      onHide={handleClose}
      backdrop={true}
    >
      <div className="modal-header">
        <h2>Configure DialogFlow CX</h2>
        {/* begin::Close */}
        <div
          className="btn btn-sm btn-icon btn-active-color-primary"
          onClick={handleClose}
        >
          <KTIcon className="fs-1" iconName="cross" />
        </div>
        {/* end::Close */}
      </div>

      <div className="modal-body py-lg-10 px-lg-10">
        {/*begin::Form Group */}
        <div className="d-flex  flex-wrap flex-row justify-content-between align-items-start">
          <div className=" fv-row mb-10 " style={{ width: "45%" }}>
            <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
              <span className="required">Configuration 1 Data</span>
              <i
                className="fas fa-exclamation-circle ms-2 fs-7"
                data-bs-toggle="tooltip"
                title="Specify Channel Configuration 1 Data."
              ></i>
            </label>
            <input
              type="text"
              className="form-control form-control-lg form-control-solid"
              name="config1Data"
              placeholder="Enter Configuration 1 Data"
              value={config1Data}
              onChange={(event) => {
                setConfig1Data(event.target.value);
              }}
            />
            {config1Data.length < 2 && formError && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">
                  Configuration Data 1 is Required.
                </div>
              </div>
            )}
          </div>

          <div className="fv-row mb-10" style={{ width: "45%" }}>
            <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
              <span className="required">Configuration 2 Data</span>
              <i
                className="fas fa-exclamation-circle ms-2 fs-7"
                data-bs-toggle="tooltip"
                title="Specify Channel Configuration 2 Data."
              ></i>
            </label>
            <input
              type="text"
              className="form-control form-control-lg form-control-solid"
              name="config2Data"
              placeholder="Enter Configuration 2 Data"
              value={config2Data}
              onChange={(event) => {
                setConfig2Data(event.target.value);
              }}
            />
            {config2Data.length < 2 && formError && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">
                  Configuration 2 Data is Required.
                </div>
              </div>
            )}
          </div>

          <div className="fv-row mb-10" style={{ width: "45%" }}>
            <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
              <span className="required">Configuration 3 Data</span>
              <i
                className="fas fa-exclamation-circle ms-2 fs-7"
                data-bs-toggle="tooltip"
                title="Specify Channel Configuration 3 Data."
              ></i>
            </label>
            <input
              type="text"
              className="form-control form-control-lg form-control-solid"
              name="config3Data"
              placeholder="Enter Configuration 3 Data"
              value={config3Data}
              onChange={(event) => {
                setConfig3Data(event.target.value);
              }}
            />
            {config3Data.length < 2 && formError && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">
                  Configuration 3 Data is Required.
                </div>
              </div>
            )}
          </div>

          <div className="fv-row mb-10" style={{ width: "45%" }}>
            <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
              <span className="required">Configuration 4 Data</span>
              <i
                className="fas fa-exclamation-circle ms-2 fs-7"
                data-bs-toggle="tooltip"
                title="Specify Channel Configuration 4 Data."
              ></i>
            </label>
            <input
              type="text"
              className="form-control form-control-lg form-control-solid"
              name="config4Data"
              placeholder="Enter Configuration 4 Data"
              value={config4Data}
              onChange={(event) => {
                setConfig4Data(event.target.value);
              }}
            />
            {config4Data.length < 2 && formError && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">
                  Configuration 4 Data is Required.
                </div>
              </div>
            )}
          </div>

          <div className="fv-row mb-10" style={{ width: "45%" }}>
            <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
              <span className="required">Configuration 5 Data</span>
              <i
                className="fas fa-exclamation-circle ms-2 fs-7"
                data-bs-toggle="tooltip"
                title="Specify Channel Configuration 5 Data."
              ></i>
            </label>
            <input
              type="text"
              className="form-control form-control-lg form-control-solid"
              name="config5Data"
              placeholder="Enter Configuration 5 Data"
              value={config5Data}
              onChange={(event) => {
                setConfig5Data(event.target.value);
              }}
            />
            {config5Data.length < 2 && formError && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">
                  Configuration 5 Data is Required.
                </div>
              </div>
            )}
          </div>

          <div className="fv-row mb-10" style={{ width: "45%" }}>
            <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
              <span className="required">Configuration 6 Data</span>
              <i
                className="fas fa-exclamation-circle ms-2 fs-7"
                data-bs-toggle="tooltip"
                title="Specify Channel Configuration 6 Data."
              ></i>
            </label>
            <input
              type="text"
              className="form-control form-control-lg form-control-solid"
              name="config6Data"
              placeholder="Enter Configuration 6 Data"
              value={config6Data}
              onChange={(event) => {
                setConfig6Data(event.target.value);
              }}
            />
            {config6Data.length < 2 && formError && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">
                  Configuration 6 Data is Required.
                </div>
              </div>
            )}
          </div>
        </div>

        {/*end::Form Group */}
      </div>

      <div className="d-flex flex-end py-3 px-8">
        <button
          type="button"
          className="btn btn-lg btn-primary"
          data-kt-stepper-action="submit"
          // onClick={submit}
          onClick={handleSubmitForm}
        >
          Submit
          <KTIcon iconName="arrow-right" className="fs-3 ms-2 me-0" />
        </button>
      </div>
    </Modal>,
    modalsRoot
  );
};

export default WhatsappConfigurationModal;
