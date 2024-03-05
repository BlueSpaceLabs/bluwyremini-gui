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
  fbAccessToken: "",
  fbWebhookToken: "",
  fbWebhookUrl: "",
  pageId: "",
};

const FacebookConfigModal = ({
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
      fbAccessToken: initialModalData?.fbAccessToken
        ? initialModalData?.fbAccessToken
        : "",
      fbWebhookToken: initialModalData?.fbWebhookToken
        ? initialModalData?.fbWebhookToken
        : "",
      fbWebhookUrl: initialModalData?.fbWebhookUrl
        ? initialModalData?.fbWebhookUrl
        : "",
      pageId: initialModalData?.pageId ? initialModalData?.pageId : "",
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
      modalInput?.businessId.length < 2
      // modalInput?.fbAccessToken.length < 2 ||
      // modalInput?.fbWebhookToken.length < 2 ||
      // modalInput?.fbWebhookUrl.length < 2 ||
      // modalInput?.pageId.length < 2
    ) {
      setFormError(true);
    } else {
      setFormError(false);

      try {
        // const storedData = sessionStorage.getItem("whatsAppStoredData");
        // let whatsAppStoredData;
        // if (storedData) whatsAppStoredData = JSON.parse(storedData);

        const url = `${baseUrl}/addConfigurationDetails.php?channelName=messenger`;
        const accessKey = sessionStorage.getItem("accessKey");

        const response = await axios.post(
          url,
          {
            tenant: "bsl",
            accessKey: accessKey,
            customer_data: {
              appId: modalInput.appId,
              businessId: modalInput.businessId,
              pageId: modalInput.pageId,
              fbWebhookUrl: modalInput.fbWebhookUrl,
              fbWebhookToken: modalInput.fbWebhookToken,
              fbAccessToken: modalInput.fbAccessToken,
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
            : "Successfully updated Facebook Configuration!",
        });
      } catch (error) {
        console.error("Error:", error);
        // Handle error

        setSnackbar({
          showSnackbar: true,
          severitySnackBar: "error",
          messageSnackBar: error?.response?.data?.message
            ? error?.response?.data?.message
            : "Failed to update Facebook Configuration !",
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
        <h2>Configure Facebook Channel</h2>

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

export default FacebookConfigModal;
