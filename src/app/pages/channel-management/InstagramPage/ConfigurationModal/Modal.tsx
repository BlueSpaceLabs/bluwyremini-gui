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
  appId: "",
  businessId: "",
  instaWebhookToken: "",
  instaWebhookUrl: "",
  instagramId: "",
};

const InstagramConfigModal = ({
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
      appId: initialModalData?.appId ? initialModalData?.appId : "",
      businessId: initialModalData?.businessId
        ? initialModalData?.businessId
        : "",
      instaWebhookToken: initialModalData?.instaWebhookToken
        ? initialModalData?.instaWebhookToken
        : "",
      instaWebhookUrl: initialModalData?.instaWebhookUrl
        ? initialModalData?.instaWebhookUrl
        : "",
      instagramId: initialModalData?.instagramId
        ? initialModalData?.instagramId
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
    if (
      modalInput?.appId.length < 2 ||
      modalInput?.businessId.length < 2 ||
      modalInput?.instaWebhookToken.length < 2 ||
      modalInput?.instaWebhookUrl.length < 2 ||
      modalInput?.instagramId.length < 2
    ) {
      setFormError(true);
    } else {
      setFormError(false);

      // const storedData = sessionStorage.getItem("whatsAppStoredData");
      // let whatsAppStoredData;
      // if (storedData) whatsAppStoredData = JSON.parse(storedData);

      try {
        const url = `${baseUrl}/addConfigurationDetails.php?channelName=instagram`;

        const response = await axios.post(
          url,
          {
            tenant: "bsl",
            accessKey:
              "$2y$10$0MNB6SNrJCDmXpZgb14Cgu7r3ZcEVlbbk8XvmRn2x9hKZXebK5Grm",
            customer_data: {
              appId: modalInput.appId,
              businessId: modalInput.businessId,
              instaId: modalInput.instagramId,
              instaWebhookUrl: modalInput.instaWebhookUrl,
              instaWebhookToken: modalInput.instaWebhookToken,
              updatedBy: storedUserName,
            },
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        // console.log(response.data);
        // Handle success

        setSnackbar({
          showSnackbar: true,
          severitySnackBar: "success",
          messageSnackBar: response?.data?.message
            ? response?.data?.message
            : "Successfully updated Instagram Configuration!",
        });
      } catch (error) {
        console.error("Error:", error);
        // Handle error

        setSnackbar({
          showSnackbar: true,
          severitySnackBar: "error",
          messageSnackBar: error?.response?.data?.message
            ? error?.response?.data?.message
            : "Failed to update Instagram Configuration!",
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
        <h2>Configure Instagram Channel</h2>

        <Box className="d-flex flex-start gap-3">
          <button
            type="button"
            className="btn btn-lg btn-secondary"
            // onClick={submit}
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

export default InstagramConfigModal;
