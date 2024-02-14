import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Modal } from "react-bootstrap";
import { KTIcon } from "../../../../_metronic/helpers";
import CustomDeleteModal from "./CustomDeleteModal";
import axios from "axios";
import EditCampaignModal from "./EditModal";
// import EditKeyWordModal from "./Edit";

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

const DetailCampaignModal = ({
  show,
  handleClose,
  selectedId,
  setRefetchList,
}: any) => {
  const [showEditCampaignModal, setShowEditCampaignModal] =
    React.useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = React.useState<boolean>(false);

  const [campaignDetailData, setCampaignDetailData] = useState([]);

  useEffect(() => {
    const url =
      "http://3.108.229.60:8082/bluwyremini-backend/info/getCampaignList.php";
    const params = {
      accessKey: "$2y$10$0MNB6SNrJCDmXpZgb14Cgu7r3ZcEVlbbk8XvmRn2x9hKZXebK5Grm",
      id: selectedId,
    };

    const fetchData = async () => {
      try {
        const response = await axios.get(url, { params });

        // console.log("response", response.data);
        setCampaignDetailData(response.data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [selectedId]);

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
        <h2>Campaign Details </h2>

        <div className="d-flex gap-3">
          {campaignDetailData?.campaignStatus !== "Scheduled" && (
            <button
              type="button"
              className="btn btn-lg btn-secondary"
              onClick={() => setShowEditCampaignModal(true)}
            >
              Edit
              {/* <KTIcon iconName="arrow-right" className="fs-3 ms-2 me-0" /> */}
            </button>
          )}

          <div
            className="btn btn-sm btn-icon btn-active-color-primary"
            onClick={handleClose}
          >
            <KTIcon className="fs-1" iconName="cross" />
          </div>
        </div>
      </div>

      <div className="modal-body py-lg-10 px-lg-10">
        <DetailCard
          title={"Campaign Id"}
          description={campaignDetailData?.id}
        />

        <DetailCard
          title={"Campaign Name"}
          description={campaignDetailData?.campaignName}
        />

        <DetailCard
          title={"Campaign Goal"}
          description={campaignDetailData?.campaignGoal}
        />

        <DetailCard
          title={"Campaign Channel"}
          description={campaignDetailData?.channel}
        />

        <DetailCard
          title={"Delivered Count"}
          description={campaignDetailData?.deliveredCount}
        />

        <DetailCard
          title={"Created Date Time"}
          description={campaignDetailData?.createdDatetime}
        />

        {campaignDetailData?.campaignStatus !== "Scheduled" && (
          <DetailCard
            title={"Completed On"}
            description={campaignDetailData?.executionDatetime}
          />
        )}

        <DetailCard title={"File"} description={campaignDetailData?.file} />

        <DetailCard
          title={"Read Count"}
          description={campaignDetailData?.readCount}
        />

        <DetailCard
          title={"Sent Count"}
          description={campaignDetailData?.sentCount}
        />

        <DetailCard
          title={"Campaign Status"}
          description={campaignDetailData?.campaignStatus}
        />
      </div>

      <div className="d-flex flex-end py-3 px-8 gap-3">
        <button
          type="button"
          className="btn btn-lg btn-primary"
          data-kt-stepper-action="submit"
          onClick={() => setShowDeleteModal(true)}
        >
          Delete
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

      <CustomDeleteModal
        show={showDeleteModal}
        handleClose={() => setShowDeleteModal(false)}
        selectedId={selectedId}
        campaignDetailData={campaignDetailData}
      />

      <EditCampaignModal
        show={showEditCampaignModal}
        handleClose={() => setShowEditCampaignModal(false)}
        campaignDetailData={campaignDetailData}
      />
    </Modal>,
    modalsRoot
  );
};

export default DetailCampaignModal;
