import React, { useEffect, useState } from "react";
import axios from "axios";
import { createPortal } from "react-dom";
import { Modal } from "react-bootstrap";
import ModalBody from "./ModalBody";
import { KTIcon } from "../../../../../_metronic/helpers";
import { Box } from "@mui/material";
import useStaticData from "../../../../StaticData";

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
  setSnackbar,
}: any) => {
  const { baseUrl } = useStaticData();

  const [modalInput, setModalInput] = useState(initialValue);
  const [formError, setFormError] = React.useState<boolean>(false);
  const [editData, setEditData] = React.useState<boolean>(true);
  const storedUserName = sessionStorage.getItem("userName");

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
        // const storedData = sessionStorage.getItem("whatsAppStoredData");
        // let whatsAppStoredData;
        // if (storedData) whatsAppStoredData = JSON.parse(storedData);

        const url = `${baseUrl}/addConfigurationDetails.php?channelName=dialogflowcx`;

        const response = await axios.post(
          url,
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
              updatedBy: storedUserName,
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

        setSnackbar({
          showSnackbar: true,
          severitySnackBar: "success",
          messageSnackBar: response?.data?.message
            ? response?.data?.message
            : "Successfully updated Dialog Flow CX Configuration!",
        });
      } catch (error) {
        console.error("Error:", error);
        // Handle error

        setSnackbar({
          showSnackbar: true,
          severitySnackBar: "error",
          messageSnackBar: error?.response?.data?.message
            ? error?.response?.data?.message
            : "Failed to update Dialog Flow CX Configuration!",
        });
      } finally {
        setRefetch((preValue: boolean) => !preValue);
        handleClose();
        setEditData(true);
      }
    }
  };

  React.useEffect(() => {
    setEditData(true);
  }, [show]);

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

        <Box className="d-flex flex-start gap-3">
          <button
            type="button"
            className="btn btn-lg btn-secondary"
            onClick={() => setEditData(false)}
          >
            Edit
            {/* <KTIcon iconName="arrow-right" className="fs-3 ms-2 me-0" /> */}
          </button>

          <Box
            className="btn btn-sm btn-icon btn-active-color-primary"
            onClick={handleClose}
          >
            <KTIcon className="fs-1" iconName="cross" />
          </Box>
        </Box>
      </Box>

      <ModalBody
        modalInput={modalInput}
        handleInputChange={handleInputChange}
        formError={formError}
        readOnly={editData}
      />

      <Box className="d-flex flex-end py-3 px-8">
        <button
          type="button"
          className="btn btn-lg btn-primary"
          data-kt-stepper-action="submit"
          onClick={handleSubmit}
          disabled={editData}
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
