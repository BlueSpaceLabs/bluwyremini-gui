import React, { useEffect, useState } from "react";
import axios from "axios";
import { createPortal } from "react-dom";
import { Modal } from "react-bootstrap";
import ModalBody from "./ModalBody";
import { KTIcon } from "../../../../../_metronic/helpers";
import { Box } from "@mui/material";

// type Props = {
//   show: boolean;
// };

const modalsRoot = document.getElementById("root-modals") || document.body;

const initialValue = {
  dcxAgentName: "",
  dcxApiKey: "",
  dcxClientEmail: "",
  dcxPhoneNo: "",
  dcxLocation: "",
  dcxPrivateKey: "",
  dcxProjectId: "",
};

const DialogFlowCXConfigModal = ({
  show,
  handleClose,
  initialModalData,
  setRefetch,
  setShowSnackbar,
  setSeveritySnackBar,
  setMessageSnackBar,
}: any) => {
  const [modalInput, setModalInput] = useState(initialValue);
  const [formError, setFormError] = React.useState<boolean>(false);

  useEffect(() => {
    setModalInput({
      dcxAgentName: initialModalData?.dcxAgentName
        ? initialModalData?.dcxAgentName
        : "",
      dcxApiKey: initialModalData?.dcxApiKey ? initialModalData?.dcxApiKey : "",
      dcxClientEmail: initialModalData?.dcxClientEmail
        ? initialModalData?.dcxClientEmail
        : "",
      dcxPhoneNo: initialModalData?.dcxPhoneNo
        ? initialModalData?.dcxPhoneNo
        : "",
      dcxLocation: initialModalData?.dcxLocation
        ? initialModalData?.dcxLocation
        : "",
      dcxPrivateKey: initialModalData?.dcxPrivateKey
        ? initialModalData?.dcxPrivateKey
        : "",
      dcxProjectId: initialModalData?.dcxProjectId
        ? initialModalData?.dcxProjectId
        : "",
    });
  }, [initialModalData]);

  const handleInputChange = (event: any) => {
    setModalInput({
      ...modalInput,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async () => {
    console.log();
    if (
      modalInput?.dcxAgentName.length < 2 ||
      modalInput?.dcxApiKey.length < 2 ||
      modalInput?.dcxClientEmail.length < 2 ||
      modalInput?.dcxPhoneNo.length < 2 ||
      modalInput?.dcxLocation.length < 2 ||
      modalInput?.dcxPrivateKey.length < 2 ||
      modalInput?.dcxProjectId.length < 2
    ) {
      setFormError(true);
    } else {
      setFormError(false);

      try {
        const response = await axios.post(
          "http://3.108.229.60:8082/bluwyremini-backend/info/addConfigurationDetails.php?channelName=dialogflowcx",
          {
            tenant: "bsl",
            accessKey:
              "$2y$10$0MNB6SNrJCDmXpZgb14Cgu7r3ZcEVlbbk8XvmRn2x9hKZXebK5Grm",
            customer_data: {
              dcxAgentName: modalInput.dcxAgentName,
              dcxPrivateKey: modalInput.dcxPrivateKey,
              dcxClientEmail: modalInput.dcxClientEmail,
              displayPhoneNo: modalInput.dcxPhoneNo,
              dcxProjectId: modalInput.dcxProjectId,
              dcxLocation: modalInput.dcxLocation,
              dcxApiKey: modalInput.dcxApiKey,
            },
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log(response.data);
        // Handle success

        setShowSnackbar(true);
        setSeveritySnackBar("success");
        setMessageSnackBar(
          "Successfully updated Dialog Flow CX Configuration!"
        );
      } catch (error) {
        console.error("Error:", error);
        // Handle error

        setShowSnackbar(true);
        setSeveritySnackBar("error");
        setMessageSnackBar("Failed to update Dialog Flow CX Configuration!");
      } finally {
        setRefetch((preValue: boolean) => !preValue);
        handleClose();
      }
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
      <Box className="modal-header">
        <h2>Configure DialogFlowCX</h2>
        <Box
          className="btn btn-sm btn-icon btn-active-color-primary"
          onClick={handleClose}
        >
          <KTIcon className="fs-1" iconName="cross" />
        </Box>
      </Box>

      <ModalBody
        modalInput={modalInput}
        handleInputChange={handleInputChange}
        formError={formError}
      />

      <Box className="d-flex flex-end py-3 px-8">
        <button
          type="button"
          className="btn btn-lg btn-primary"
          data-kt-stepper-action="submit"
          onClick={handleSubmit}
        >
          Submit
          <KTIcon iconName="arrow-right" className="fs-3 ms-2 me-0" />
        </button>
      </Box>
    </Modal>,
    modalsRoot
  );
};

export default DialogFlowCXConfigModal;
