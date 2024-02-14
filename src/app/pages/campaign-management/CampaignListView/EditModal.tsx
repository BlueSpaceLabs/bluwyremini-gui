import React from "react";
import { createPortal } from "react-dom";
import { Modal } from "react-bootstrap";
import { KTIcon } from "../../../../_metronic/helpers";
// import EditKeyWordModal from "./Edit";

// type Props = {
//   show: boolean;
//   handleClose: () => void;
// };

const modalsRoot = document.getElementById("root-modals") || document.body;

const EditCampaignModal = ({
  show,
  handleClose,
  campaignDetailData,
  setRefetchList,
}: any) => {
  // console.log("campaignDetailData", campaignDetailData);

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
        <h2>Edit Campaign : {campaignDetailData?.campaignName} </h2>

        <div className="d-flex gap-3">
          <div
            className="btn btn-sm btn-icon btn-active-color-primary"
            onClick={handleClose}
          >
            <KTIcon className="fs-1" iconName="cross" />
          </div>
        </div>
      </div>

      <div className="modal-body py-lg-10 px-lg-10">
        <label className="fs-6 fw-semibold mb-2 required">
          Campaign Execution
        </label>

        <input
          className="form-control form-control-solid  flatpickr-input"
          placeholder="Pick date & time"
          id="kt_modal_create_campaign_datepicker"
          // type="hidden"
          type="datetime-local"
          // value={campaignInputData.selectedTime}
          // min={campaignInputData.selectedTime}
          // onChange={(e) =>
          //   setCampaignInputData({
          //     ...campaignInputData,
          //     selectedTime: e.target.value,
          //   })
          // }
        />
      </div>

      <div className="d-flex flex-end py-3 px-8 gap-3">
        <button
          type="button"
          className="btn btn-lg btn-primary"
          data-kt-stepper-action="submit"
          //   onClick={() => setShowDeleteModal(true)}
          onClick={handleClose}
        >
          Update
          <KTIcon iconName="arrow-right" className="fs-3 ms-2 me-0" />
        </button>
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

export default EditCampaignModal;
