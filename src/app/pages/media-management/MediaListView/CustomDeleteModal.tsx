import React from "react";
import { createPortal } from "react-dom";
import { Modal } from "react-bootstrap";
import { KTIcon } from "../../../../_metronic/helpers";
import axios from "axios";
import useStaticData from "../../../StaticData";

// type Props = {
//   show: boolean;
//   handleClose: () => void;
// };

const modalsRoot = document.getElementById("root-modals") || document.body;

const CustomDeleteModal = ({
  show,
  handleClose,
  selectedId,
  selectedMediaName,
  handleEditModalClose,
  setSnackbar,
}: any) => {
  const { baseUrl } = useStaticData();

  const handleDeleteClick = async () => {
    try {
      const url = `${baseUrl}/deleteMediaDetails.php`;
      const accessKey = sessionStorage.getItem("accessKey");

      const response = await axios.post(url, null, {
        params: {
          accessKey,
          id: selectedId,
          mediaName: selectedMediaName,
        },
      });

      // console.log("Response:", response?.data);

      setSnackbar({
        showSnackbar: true,
        severitySnackBar: "success",
        messageSnackBar: response?.data?.message
          ? response?.data?.message
          : "Successfully Deleted Media !",
      });
    } catch (error) {
      console.error("Error:", error);

      setSnackbar({
        showSnackbar: true,
        severitySnackBar: "error",
        messageSnackBar: error?.response?.data?.message
          ? error?.response?.data?.message
          : "Failed to Delete Media !",
      });
    } finally {
      console.log("Request completed.");
      handleEditModalClose();
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
        <h2>Delete Media </h2>
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
          <div className="text-gray-600 fw-bold fs-5">
            Confirm to Delete {selectedMediaName} !
          </div>
        </div>

        {/*end::Form Group */}
      </div>

      <div className="d-flex flex-end py-3 px-8 gap-2">
        <button
          type="button"
          className="btn btn-lg btn-primary"
          data-kt-stepper-action="submit"
          onClick={handleClose}
        >
          Cancel
          <KTIcon iconName="arrow-right" className="fs-3 ms-2 me-0" />
        </button>
        <button
          type="button"
          className="btn btn-lg btn-primary"
          data-kt-stepper-action="submit"
          onClick={handleDeleteClick}
        >
          Confirm
          <KTIcon iconName="arrow-right" className="fs-3 ms-2 me-0" />
        </button>
      </div>
    </Modal>,
    modalsRoot
  );
};

export default CustomDeleteModal;
