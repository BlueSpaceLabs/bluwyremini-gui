import React from "react";
import { createPortal } from "react-dom";
import { Modal } from "react-bootstrap";
import { KTIcon } from "../../../../../_metronic/helpers";
// import { defaultCreateAppData, ICreateAppData } from "./IAppModels";
// import { StepperComponent } from "../../../../../_metronic/assets/ts/components";

// type Props = {
//   show: boolean;
//   handleClose: () => void;
// };

const modalsRoot = document.getElementById("root-modals") || document.body;

const TicketsModal = ({ show, handleClose, setData }: any) => {
  const [config1Data, setConfig1Data] = React.useState<string>("");
  const [config2Data, setConfig2Data] = React.useState<string>("");
  const [config3Data, setConfig3Data] = React.useState<string>("");
  const [config4Data, setConfig4Data] = React.useState<string>("");
  const [selectPriority, setSelectPriority] =
    React.useState<string>("high_priority");

  const [formError, setFormError] = React.useState<boolean>(false);

  const handleSelectChange = (event: any) => {
    setSelectPriority(event.target.value);
  };

  const handleSubmitForm = () => {
    if (
      config1Data.length < 2 ||
      config2Data.length < 2 ||
      config3Data.length < 2 ||
      config4Data.length < 2
    ) {
      setFormError(true);
    } else {
      setData({
        ["channelName"]: "whatsapp",
        ["config1Data"]: config1Data,
        ["config2Data"]: config2Data,
        ["config3Data"]: config3Data,
        ["config4Data"]: config4Data,
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
        <h2>Create New Ticket</h2>
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
              <span className="required">Customer Name</span>
              <i
                className="fas fa-exclamation-circle ms-2 fs-7"
                data-bs-toggle="tooltip"
                title="Specify Customer Name."
              ></i>
            </label>
            <input
              type="text"
              className="form-control form-control-lg form-control-solid"
              name="config1"
              placeholder=""
              value={config1Data}
              onChange={(event) => {
                setConfig1Data(event.target.value);
              }}
            />
            {config1Data.length < 2 && formError && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">Customer Name is Required.</div>
              </div>
            )}
          </div>

          <div className="fv-row mb-10" style={{ width: "45%" }}>
            <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
              <span className="required">Customer Number</span>
              <i
                className="fas fa-exclamation-circle ms-2 fs-7"
                data-bs-toggle="tooltip"
                title="Specify Customer Number."
              ></i>
            </label>
            <input
              type="text"
              className="form-control form-control-lg form-control-solid"
              name="config1"
              placeholder=""
              value={config2Data}
              onChange={(event) => {
                setConfig2Data(event.target.value);
              }}
            />
            {config2Data.length < 2 && formError && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">
                  Customer Number is Required.
                </div>
              </div>
            )}
          </div>

          <div className="fv-row mb-10" style={{ width: "45%" }}>
            <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
              <span className="required">Customer Email</span>
              <i
                className="fas fa-exclamation-circle ms-2 fs-7"
                data-bs-toggle="tooltip"
                title="Specify Customer Email."
              ></i>
            </label>
            <input
              type="text"
              className="form-control form-control-lg form-control-solid"
              name="config1"
              placeholder=""
              value={config3Data}
              onChange={(event) => {
                setConfig3Data(event.target.value);
              }}
            />
            {config3Data.length < 2 && formError && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">Customer Email is Required.</div>
              </div>
            )}
          </div>

          <div className="fv-row mb-10" style={{ width: "45%" }}>
            <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
              <span className="required">Customer Issue</span>
              <i
                className="fas fa-exclamation-circle ms-2 fs-7"
                data-bs-toggle="tooltip"
                title="Specify Customer Issue."
              ></i>
            </label>
            <input
              type="text"
              className="form-control form-control-lg form-control-solid"
              name="config1"
              placeholder=""
              value={config4Data}
              onChange={(event) => {
                setConfig4Data(event.target.value);
              }}
            />
            {config4Data.length < 2 && formError && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">Customer Issue is Required.</div>
              </div>
            )}
          </div>
        </div>

        <div className="fv-row mb-10" style={{ width: "45%" }}>
          <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
            <span className="required">Ticket Priority</span>
            <i
              className="fas fa-exclamation-circle ms-2 fs-7"
              data-bs-toggle="tooltip"
              title="Specify Ticket Priority."
            ></i>
          </label>
          <select
            className="form-select form-select-solid form-select-lg"
            value={selectPriority}
            onChange={handleSelectChange}
          >
            <option value="high_priority">High Priority</option>
            <option value="medium_priority">Medium Priority</option>
            <option value="low_priority">Low Priority</option>
          </select>
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
          Create Ticket
          <KTIcon iconName="arrow-right" className="fs-3 ms-2 me-0" />
        </button>
      </div>
    </Modal>,
    modalsRoot
  );
};

export default TicketsModal;
