import React from "react";
import { createPortal } from "react-dom";
import { Modal } from "react-bootstrap";
import { KTIcon } from "../../../../_metronic/helpers";

// type Props = {
//   show: boolean;
//   handleClose: () => void;
// };

const modalsRoot = document.getElementById("root-modals") || document.body;
const storedData = sessionStorage.getItem("whatsappConfig");
  let whatsAppStoredData;
    if (storedData) whatsAppStoredData = JSON.parse(storedData);

const CustomEditModal = ({ show, handleClose, detailTemplateData }: any) => {
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
        <h2>Template Details : {detailTemplateData.id}</h2>
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
        {/*begin::Detail List Group */}

        <div className="row mb-7">
          <label className="col-lg-4 fw-bold text-muted">Template Id</label>
          <div className="col-lg-8">
            <span className="fw-bolder fs-6 text-gray-900">
              {detailTemplateData.id}
            </span>
          </div>
        </div>

        <div className="row mb-7">
          <label className="col-lg-4 fw-bold text-muted">Template Name</label>

          <div className="col-lg-8 fv-row">
            <span className="fw-bold fs-6">{detailTemplateData.name}</span>
          </div>
        </div>

        <div className="row mb-7">
          <label className="col-lg-4 fw-bold text-muted">
            Template Language
            <i
              className="fas fa-exclamation-circle ms-1 fs-7"
              data-bs-toggle="tooltip"
              title="Phone number must be active"
            ></i>
          </label>

          <div className="col-lg-8 d-flex align-items-center">
            <span className="fw-bolder fs-6 me-2">
              {detailTemplateData.language}
            </span>
          </div>
        </div>

        <div className="row mb-7">
          <label className="col-lg-4 fw-bold text-muted">
            Template Category
          </label>

          <div className="col-lg-8">
            <a
              href="#"
              className="fw-bold fs-6 text-gray-900 text-hover-primary"
            >
              {detailTemplateData.category}
            </a>
          </div>
        </div>

        <div className="row mb-7">
          <label className="col-lg-4 fw-bold text-muted">
            Template Components
            <i
              className="fas fa-exclamation-circle ms-1 fs-7"
              data-bs-toggle="tooltip"
              title="Country of origination"
            ></i>
          </label>

          <div className="col-lg-8">
            {detailTemplateData.components[0]?.text && (
              <>
                <span className="fw-bolder fs-6 text-gray-900">
                  {detailTemplateData.components[0]?.text}
                </span>
                <br />
              </>
            )}
            {detailTemplateData.components[1]?.text && (
              <>
                <span className="fw-bolder fs-7 text-gray-700">
                  {detailTemplateData.components[1]?.text}
                </span>
                <br />
              </>
            )}
            {detailTemplateData.components[2]?.text && (
              <>
                <span className="fw-bolder fs-8 text-gray-500">
                  {detailTemplateData.components[2]?.text}
                </span>
                <br />
              </>
            )}
          </div>
        </div>

        <div className="row mb-7">
          <label className="col-lg-4 fw-bold text-muted">Template Status</label>

          <div className="col-lg-8">
            <span className="fw-bolder fs-6 text-gray-900">
              {detailTemplateData.status}
            </span>
          </div>
        </div>

        {/*end::Detail List Group */}
      </div>


      <div className="d-flex flex-end py-3 px-8 ">
      <a
            className="btn btn-primary"
            href={`https://business.facebook.com/wa/manage/message-templates/?business_id=1343361919334988&waba_id=116042751363278&id=${detailTemplateData.id}`}
            target="_blank"
          >
            Edit
          </a>
          &nbsp;&nbsp;
          <a
            className="btn btn-primary"
            href={`https://business.facebook.com/wa/manage/message-templates/?business_id=${whatsAppStoredData.businessId}&waba_id=${whatsAppStoredData.accessToken}&id=${detailTemplateData.id}`}
            target="_blank"
          >
            Delete
          </a>
          &nbsp;&nbsp;
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

export default CustomEditModal;
