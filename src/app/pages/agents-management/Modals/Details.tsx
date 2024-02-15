import React from "react";
import { createPortal } from "react-dom";
import { Modal } from "react-bootstrap";
import { KTIcon } from "../../../../_metronic/helpers";
import EditAgentsModal from "./Edit";

// type Props = {
//   show: boolean;
//   handleClose: () => void;
// };

const DetailCard = ({ title, description }: any) => {
  return (
    <div className="row mb-7">
      <label className="col-lg-4 fw-bold text-muted">{title}</label>
      <div className="col-lg-8">
        <span className="fw-bolder fs-6 text-gray-900">{description}</span>
      </div>
    </div>
  );
};

const modalsRoot = document.getElementById("root-modals") || document.body;

const DetailAgentsModal = ({
  show,
  handleClose,
  detailData,
  setRefetchList,
}: any) => {
  const [showEditAgentsModal, setShowEditAgentsModal] =
    React.useState<boolean>(false);

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
        <h2>Agent Details </h2>

        <div className="d-flex gap-3">
          <button
            type="button"
            className="btn btn-lg btn-secondary"
            onClick={() => setShowEditAgentsModal(true)}
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
      </div>

      <div className="modal-body py-lg-10 px-lg-10">
        <DetailCard title={"Agent Id"} description={detailData.id} />

        <DetailCard
          title={"Agent Name"}
          description={`${detailData.firstName} ${detailData.lastName}`}
        />

        <DetailCard
          title={"Agent Address"}
          description={detailData.agentAddress}
        />

        <DetailCard title={"Agent Type"} description={detailData.agentType} />

        <DetailCard title={"Agent Company"} description={detailData.company} />

        <DetailCard
          title={"Agent Company Website"}
          description={detailData.companyWebsite}
        />

        <DetailCard title={"Agent Country"} description={detailData.country} />

        <DetailCard
          title={"Agent Created Date"}
          description={detailData.createdDatetime}
        />

        <DetailCard title={"Agent Email Id"} description={detailData.emailId} />

        <DetailCard
          title={"Agent Language"}
          description={detailData.language}
        />

        <DetailCard
          title={"Agent Mobile Number"}
          description={detailData.mobileNo}
        />

        <DetailCard
          title={"Agent Country"}
          description={detailData.modifiedDatetime}
        />

        <DetailCard title={"Agent Role"} description={detailData.role} />

        <DetailCard
          title={"Agent Time Zone"}
          description={detailData.timezone}
        />

        <DetailCard
          title={"Agent User Name"}
          description={detailData.username}
        />
      </div>

      <div className="d-flex flex-end py-3 px-8 gap-3">
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

      <EditAgentsModal
        show={showEditAgentsModal}
        handleClose={() => setShowEditAgentsModal(false)}
        detailData={detailData}
        setRefetchList={setRefetchList}
        closeDetailModal={handleClose}
      />
    </Modal>,
    modalsRoot
  );
};

export default DetailAgentsModal;
