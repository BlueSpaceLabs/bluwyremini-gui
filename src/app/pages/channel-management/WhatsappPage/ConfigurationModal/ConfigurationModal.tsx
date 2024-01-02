import React from "react";
import { useMutation } from "react-query";
import axios from "axios";
import { createPortal } from "react-dom";
import { Modal } from "react-bootstrap";
import { KTIcon } from "../../../../../_metronic/helpers";

// type Props = {
//   show: boolean;
//   handleClose: () => void;
// };

const modalsRoot = document.getElementById("root-modals") || document.body;

const serviceAxiosPostWhatsappData = async (data: any) => {
  try {
    const response = await axios.post(
      "http://3.108.229.60:8082/bluwyremini-backend/info/addConfigurationDetails.php",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response?.data;
  } catch (error: any) {
    throw error?.response ? error?.response?.data : error?.message;
  }
};

const WhatsappConfigurationModal = ({
  show,
  handleClose,
  initialModalData,
  refetchGetWhatsappData,
  accessKey,
  setShowSnackBar,
  setSeveritySnackBar,
  setMessageSnackBar,
}: any) => {
  const { mutate, isLoading, isError, error, isSuccess } = useMutation(
    serviceAxiosPostWhatsappData
  );

  const [whatsappModalInput, setWhatsappModalInput] =
    React.useState<any>(initialModalData);

  const [formError, setFormError] = React.useState<boolean>(false);

  const handleInputChange = (event: any) => {
    setWhatsappModalInput({
      ...whatsappModalInput,
      [event.target.name]: event.target.value,
    });
  };

  console.log({ formError });
  const handleSubmitForm = () => {
    console.log("Submitted Form", whatsappModalInput);

    if (
      whatsappModalInput?.channelName.length < 2 ||
      whatsappModalInput?.accessToken.length < 2 ||
      whatsappModalInput?.appId.length < 2 ||
      whatsappModalInput?.businessId.length < 2 ||
      whatsappModalInput?.displayNo.length < 2 ||
      whatsappModalInput?.permanentToken.length < 2 ||
      whatsappModalInput?.phoneNoId.length < 2 ||
      whatsappModalInput?.waWebhookToken.length < 2 ||
      whatsappModalInput?.waWebhookUrl.length < 2
    ) {
      setFormError(true);
    } else {
      mutate({
        tenant: "bsl",
        accessKey: accessKey,
        customer_data: {
          appId: whatsappModalInput?.appId,
          businessId: whatsappModalInput?.businessId,
          phoneNoId: whatsappModalInput?.phoneNoId,
          displayPhoneNo: whatsappModalInput?.displayNo,
          permanentToken: whatsappModalInput?.permanentToken,
          accessToken: whatsappModalInput?.accessToken,
          webhookUrl: whatsappModalInput?.waWebhookUrl,
          webhookToken: whatsappModalInput?.waWebhookToken,
        },
      });

      setShowSnackBar(true);
      setSeveritySnackBar("success");
      setMessageSnackBar("Successfully updated configuration details !");
      setFormError(false);
      handleClose();
    }
  };

  React.useEffect(() => {
    setWhatsappModalInput(initialModalData);
  }, [initialModalData, show]);

  React.useEffect(() => {
    if (isSuccess) {
      refetchGetWhatsappData();
    }
  }, [isSuccess]);

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
        <h2>Configure Whatsapp Channel</h2>
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
          <div className=" fv-row mb-10 " style={{ width: "45%" }}>
            <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
              <span className="required">Access Token</span>
              <i
                className="fas fa-exclamation-circle ms-2 fs-7"
                data-bs-toggle="tooltip"
                title="Specify Channel Access Token."
              ></i>
            </label>
            <input
              type="text"
              className="form-control form-control-lg form-control-solid"
              name="accessToken"
              placeholder="Enter Access Token"
              value={whatsappModalInput?.accessToken}
              onChange={handleInputChange}
            />
            {whatsappModalInput?.accessToken?.length < 2 && formError && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">Access Token is Required.</div>
              </div>
            )}
          </div>

          <div className=" fv-row mb-10 " style={{ width: "45%" }}>
            <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
              <span className="required">Application Id</span>
              <i
                className="fas fa-exclamation-circle ms-2 fs-7"
                data-bs-toggle="tooltip"
                title="Specify Channel Application Id."
              ></i>
            </label>
            <input
              type="text"
              className="form-control form-control-lg form-control-solid"
              name="appId"
              placeholder="Enter Application Id"
              value={whatsappModalInput?.appId}
              onChange={handleInputChange}
            />
            {whatsappModalInput?.appId?.length < 2 && formError && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">Application Id is Required.</div>
              </div>
            )}
          </div>

          <div className=" fv-row mb-10 " style={{ width: "45%" }}>
            <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
              <span className="required">Business Id</span>
              <i
                className="fas fa-exclamation-circle ms-2 fs-7"
                data-bs-toggle="tooltip"
                title="Specify Channel Business Id."
              ></i>
            </label>
            <input
              type="text"
              className="form-control form-control-lg form-control-solid"
              name="businessId"
              placeholder="Enter Business Id"
              value={whatsappModalInput?.businessId}
              onChange={handleInputChange}
            />
            {whatsappModalInput?.businessId?.length < 2 && formError && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">Business Id is Required.</div>
              </div>
            )}
          </div>

          <div className=" fv-row mb-10 " style={{ width: "45%" }}>
            <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
              <span className="required">Display Number</span>
              <i
                className="fas fa-exclamation-circle ms-2 fs-7"
                data-bs-toggle="tooltip"
                title="Specify Channel Display Number."
              ></i>
            </label>
            <input
              type="text"
              className="form-control form-control-lg form-control-solid"
              name="displayNo"
              placeholder="Enter Display Number"
              value={whatsappModalInput?.displayNo}
              onChange={handleInputChange}
            />
            {whatsappModalInput?.displayNo?.length < 2 && formError && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">Display Number is Required.</div>
              </div>
            )}
          </div>

          <div className=" fv-row mb-10 " style={{ width: "45%" }}>
            <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
              <span className="required">Permanent Token</span>
              <i
                className="fas fa-exclamation-circle ms-2 fs-7"
                data-bs-toggle="tooltip"
                title="Specify Channel Permanent Token."
              ></i>
            </label>
            <input
              type="text"
              className="form-control form-control-lg form-control-solid"
              name="permanentToken"
              placeholder="Enter Permanent Token"
              value={whatsappModalInput?.permanentToken}
              onChange={handleInputChange}
            />
            {whatsappModalInput?.permanentToken?.length < 2 && formError && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">
                  Permanent Token is Required.
                </div>
              </div>
            )}
          </div>

          <div className=" fv-row mb-10 " style={{ width: "45%" }}>
            <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
              <span className="required">Phone Number Id</span>
              <i
                className="fas fa-exclamation-circle ms-2 fs-7"
                data-bs-toggle="tooltip"
                title="Specify Channel Phone Number Id."
              ></i>
            </label>
            <input
              type="text"
              className="form-control form-control-lg form-control-solid"
              name="phoneNoId"
              placeholder="Enter Phone Number Id"
              value={whatsappModalInput?.phoneNoId}
              onChange={handleInputChange}
            />
            {whatsappModalInput?.phoneNoId?.length < 2 && formError && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">
                  Phone Number Id is Required.
                </div>
              </div>
            )}
          </div>

          <div className=" fv-row mb-10 " style={{ width: "45%" }}>
            <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
              <span className="required">WA Webhook Token</span>
              <i
                className="fas fa-exclamation-circle ms-2 fs-7"
                data-bs-toggle="tooltip"
                title="Specify Channel WA Webhook Token."
              ></i>
            </label>
            <input
              type="text"
              className="form-control form-control-lg form-control-solid"
              name="waWebhookToken"
              placeholder="Enter WA Webhook Token"
              value={whatsappModalInput?.waWebhookToken}
              onChange={handleInputChange}
            />
            {whatsappModalInput?.waWebhookToken?.length < 2 && formError && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">
                  WA Webhook Token is Required.
                </div>
              </div>
            )}
          </div>

          <div className=" fv-row mb-10 " style={{ width: "45%" }}>
            <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
              <span className="required">WA Webhook Url</span>
              <i
                className="fas fa-exclamation-circle ms-2 fs-7"
                data-bs-toggle="tooltip"
                title="Specify Channel WA Webhook Url."
              ></i>
            </label>
            <input
              type="text"
              className="form-control form-control-lg form-control-solid"
              name="waWebhookUrl"
              placeholder="Enter WA Webhook Url"
              value={whatsappModalInput?.waWebhookUrl}
              onChange={handleInputChange}
            />
            {whatsappModalInput?.waWebhookUrl?.length < 2 && formError && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">WA Webhook Url is Required.</div>
              </div>
            )}
          </div>
        </div>

        {/*end::Form Group */}
      </div>

      <div className="d-flex flex-end py-3 px-8">
        <button
          type="button"
          className="btn btn-lg btn-primary"
          data-kt-stepper-action="submit"
          // onClick={submit}
          onClick={handleSubmitForm}
        >
          Submit
          <KTIcon iconName="arrow-right" className="fs-3 ms-2 me-0" />
        </button>
      </div>
    </Modal>,
    modalsRoot
  );
};

export default WhatsappConfigurationModal;
