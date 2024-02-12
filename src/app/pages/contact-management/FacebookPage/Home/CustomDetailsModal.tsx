import React from "react";
import { createPortal } from "react-dom";
import { Modal } from "react-bootstrap";
import { KTIcon } from "../../../../../_metronic/helpers";

// type Props = {
//   show: boolean;
//   handleClose: () => void;
// };

const modalsRoot = document.getElementById("root-modals") || document.body;

const CustomDetailsModal = ({
  show,
  handleClose,
  detailContactData,
  openEditModal,
}: any) => {
  const handleEditButtonClick = () => {
    openEditModal();
    handleClose();
  };

  console.log("detailContactData", detailContactData);
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
        <h2>Template Details : {detailContactData.bluwyreId}</h2>
        {/* begin::Close */}

        <div className="d-flex gap-3">
          <button
            type="button"
            className="btn btn-lg btn-secondary"
            onClick={handleEditButtonClick}
          >
            Edit
            {/* <KTIcon iconName="arrow-right" className="fs-3 ms-2 me-0" /> */}
          </button>

          <div
            className="btn btn-sm btn-icon btn-active-color-primary"
            onClick={handleClose}
          >
            <KTIcon className="fs-1" iconName="cross" />
          </div>
        </div>
        {/* end::Close */}
      </div>

      <div className="modal-body py-lg-10 px-lg-10">
        {/*begin::Detail List Group */}

        <div className="row mb-7">
          <label className="col-lg-4 fw-bold text-muted">Bluwyre Id</label>
          <div className="col-lg-8">
            <span className="fw-bolder fs-6 text-gray-900">
              {detailContactData.bluwyreId}
            </span>
          </div>
        </div>

        <div className="row mb-7">
          <label className="col-lg-4 fw-bold text-muted">
            Created Date Time
          </label>

          <div className="col-lg-8 fv-row">
            <span className="fw-bold fs-6">
              {detailContactData.createdDatetime}
            </span>
          </div>
        </div>

        <div className="row mb-7">
          <label className="col-lg-4 fw-bold text-muted">
            CRM Full Name
            <i
              className="fas fa-exclamation-circle ms-1 fs-7"
              data-bs-toggle="tooltip"
              title="Phone number must be active"
            ></i>
          </label>

          <div className="col-lg-8 d-flex align-items-center">
            <span className="fw-bolder fs-6 me-2">
              {detailContactData.crmFullname}
            </span>
          </div>
        </div>

        <div className="row mb-7">
          <label className="col-lg-4 fw-bold text-muted">
            Last Interaction Date Time
          </label>

          <div className="col-lg-8">
            <a
              href="#"
              className="fw-bold fs-6 text-gray-900 text-hover-primary"
            >
              {detailContactData.lastInteractionDatetime}
            </a>
          </div>
        </div>

        <div className="row mb-7">
          <label className="col-lg-4 fw-bold text-muted">
            Last Modified Date Time
            <i
              className="fas fa-exclamation-circle ms-1 fs-7"
              data-bs-toggle="tooltip"
              title="Country of origination"
            ></i>
          </label>

          <div className="col-lg-8">
            <a
              href="#"
              className="fw-bold fs-6 text-gray-900 text-hover-primary"
            >
              {detailContactData.lastModifiedDatetime}
            </a>
          </div>
        </div>

        <div className="row mb-7">
          <label className="col-lg-4 fw-bold text-muted">Mobile Number</label>

          <div className="col-lg-8">
            <span className="fw-bolder fs-6 text-gray-900">
              {detailContactData.mobileNo}
            </span>
          </div>
        </div>

        <div className="row mb-7">
          <label className="col-lg-4 fw-bold text-muted">Email</label>

          <div className="col-lg-8">
            <span className="fw-bolder fs-6 text-gray-900">
              {detailContactData.email}
            </span>
          </div>
        </div>

        <div className="row mb-7">
          <label className="col-lg-4 fw-bold text-muted">Tags</label>

          <div className="col-lg-8">
            <span className="fw-bolder fs-6 text-gray-900">
              {detailContactData.tags}
            </span>
          </div>
        </div>

        <hr />

        <div className="row mb-7">
          <label className="col-lg-4 fw-bold text-muted">Name To Address</label>

          <div className="col-lg-8">
            <span className="fw-bolder fs-6 text-gray-900">
              {detailContactData.nameToAddress}
            </span>
          </div>
        </div>

        <div className="row mb-7">
          <label className="col-lg-4 fw-bold text-muted">
            WABA Created Date Time
          </label>

          <div className="col-lg-8">
            <span className="fw-bolder fs-6 text-gray-900">
              {detailContactData.wabaCreatedDatetime}
            </span>
          </div>
        </div>

        <div className="row mb-7">
          <label className="col-lg-4 fw-bold text-muted">
            WABA Last Interaction Date Time
          </label>

          <div className="col-lg-8">
            <span className="fw-bolder fs-6 text-gray-900">
              {detailContactData.wabaLastInteractionDatetime}
            </span>
          </div>
        </div>

        <div className="row mb-7">
          <label className="col-lg-4 fw-bold text-muted">
            WABA Mobile Number
          </label>

          <div className="col-lg-8">
            <span className="fw-bolder fs-6 text-gray-900">
              {detailContactData.wabaMobileNo}
            </span>
          </div>
        </div>

        <div className="row mb-7">
          <label className="col-lg-4 fw-bold text-muted">WABA Name</label>

          <div className="col-lg-8">
            <span className="fw-bolder fs-6 text-gray-900">
              {detailContactData.wabaName}
            </span>
          </div>
        </div>

        {/*end::Detail List Group */}
      </div>

      <div className="d-flex flex-end py-3 px-8 ">
        <button
          type="button"
          className="btn btn-lg btn-primary"
          data-kt-stepper-action="submit"
          onClick={handleClose}
        >
          Close
          <KTIcon iconName="arrow-right" className="fs-3 ms-2 me-0" />
        </button>
      </div>
    </Modal>,
    modalsRoot
  );
};

export default CustomDetailsModal;
