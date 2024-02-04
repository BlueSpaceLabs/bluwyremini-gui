import React from "react";
import { useMutation } from "react-query";
import { createPortal } from "react-dom";
import { Modal } from "react-bootstrap";
import { KTIcon } from "../../../../../_metronic/helpers";
import { postAddWhatsappContact } from "../../../../services/ContactManagement";

// type Props = {
//   show: boolean;
//   handleClose: () => void;
// };

const modalsRoot = document.getElementById("root-modals") || document.body;

const initialValue = {
  firstChannel: "",
  lastInteractedChannel: "",
  mobileNo: "",
  crmFullname: "",
  nameToAddress: "",
  wabaMobileNo: "",
  wabaName: "",
};

const AddWhatsAppContactModal = ({
  show,
  handleClose,
  accessKey,
  channelName,
  // refetchWhatsAppContactListData,
  setRefetchData,
  setShowSnackbar,
  setSeveritySnackBar,
  setMessageSnackBar,
}: any) => {
  const { mutateAsync } = useMutation(postAddWhatsappContact);

  const [addWhatsappContactInput, setAddWhatsappContactInput] =
    React.useState<any>(initialValue);

  const [formError, setFormError] = React.useState<boolean>(false);

  const handleInputChange = (event: any) => {
    setAddWhatsappContactInput({
      ...addWhatsappContactInput,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmitForm = async () => {
    if (
      addWhatsappContactInput?.firstChannel.length < 2 ||
      addWhatsappContactInput?.lastInteractedChannel.length < 2 ||
      addWhatsappContactInput?.mobileNo.length < 2 ||
      addWhatsappContactInput?.crmFullname.length < 2 ||
      addWhatsappContactInput?.nameToAddress.length < 2 ||
      addWhatsappContactInput?.wabaMobileNo.length < 2 ||
      addWhatsappContactInput?.wabaName.length < 2
    ) {
      setFormError(true);
    } else {
      mutateAsync(
        {
          channelName: channelName,
          requestData: {
            tenant: "bsl",
            accessKey: accessKey,
            contact_data: {
              mobileNo: addWhatsappContactInput?.mobileNo,
              firstChannel: addWhatsappContactInput?.firstChannel,
              lastInteractedChannel:
                addWhatsappContactInput?.lastInteractedChannel,
              crmFullname: addWhatsappContactInput?.crmFullname,
              nameToAddress: addWhatsappContactInput?.nameToAddress,
              wabaMobileNo: addWhatsappContactInput?.wabaMobileNo,
              wabaName: addWhatsappContactInput?.wabaName,
            },
          },
        },
        {
          onSuccess: () => {
            setShowSnackbar(true);
            setSeveritySnackBar("success");
            setMessageSnackBar("Successfully added Contact Details !");
            // refetchWhatsAppContactListData();
            setRefetchData((preValue: boolean) => !preValue);
          },
          onError: () => {
            setShowSnackbar(true);
            setSeveritySnackBar("error");
            setMessageSnackBar("Failed to add Contact Details !");
          },
          onSettled: () => {
            setFormError(false);
            handleClose();
          },
        }
      );
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
        <h2>Add Facebook Contact</h2>
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
              <span className="required">First Channel</span>
              <i
                className="fas fa-exclamation-circle ms-2 fs-7"
                data-bs-toggle="tooltip"
                title="Specify Channel firstChannel."
              ></i>
            </label>
            <input
              type="text"
              className="form-control form-control-lg form-control-solid"
              name="firstChannel"
              value={addWhatsappContactInput?.firstChannel}
              onChange={handleInputChange}
            />
            {addWhatsappContactInput?.firstChannel?.length < 2 && formError && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">firstChannel is Required.</div>
              </div>
            )}
          </div>

          <div className=" fv-row mb-10 " style={{ width: "45%" }}>
            <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
              <span className="required">Last Interacted Channel</span>
              <i
                className="fas fa-exclamation-circle ms-2 fs-7"
                data-bs-toggle="tooltip"
                title="Specify Channel Last Interacted Channel."
              ></i>
            </label>
            <input
              type="text"
              className="form-control form-control-lg form-control-solid"
              name="lastInteractedChannel"
              value={addWhatsappContactInput?.lastInteractedChannel}
              onChange={handleInputChange}
            />
            {addWhatsappContactInput?.lastInteractedChannel?.length < 2 &&
              formError && (
                <div className="fv-plugins-message-container">
                  <div className="fv-help-block">
                    Last Interacted Channel is Required.
                  </div>
                </div>
              )}
          </div>

          <div className=" fv-row mb-10 " style={{ width: "45%" }}>
            <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
              <span className="required">Mobile Number</span>
              <i
                className="fas fa-exclamation-circle ms-2 fs-7"
                data-bs-toggle="tooltip"
                title="Specify Channel Mobile Number."
              ></i>
            </label>
            <input
              type="text"
              className="form-control form-control-lg form-control-solid"
              name="mobileNo"
              value={addWhatsappContactInput?.mobileNo}
              onChange={handleInputChange}
            />
            {addWhatsappContactInput?.mobileNo?.length < 2 && formError && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">Mobile Number is Required.</div>
              </div>
            )}
          </div>

          <div className=" fv-row mb-10 " style={{ width: "45%" }}>
            <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
              <span className="required">Customer Full Name</span>
              <i
                className="fas fa-exclamation-circle ms-2 fs-7"
                data-bs-toggle="tooltip"
                title="Specify Channel Customer Full Name."
              ></i>
            </label>
            <input
              type="text"
              className="form-control form-control-lg form-control-solid"
              name="crmFullname"
              value={addWhatsappContactInput?.crmFullname}
              onChange={handleInputChange}
            />
            {addWhatsappContactInput?.crmFullname?.length < 2 && formError && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">
                  Customer Full Name is Required.
                </div>
              </div>
            )}
          </div>

          <div className=" fv-row mb-10 " style={{ width: "45%" }}>
            <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
              <span className="required">Name To Address</span>
              <i
                className="fas fa-exclamation-circle ms-2 fs-7"
                data-bs-toggle="tooltip"
                title="Specify Channel Name To Address."
              ></i>
            </label>
            <input
              type="text"
              className="form-control form-control-lg form-control-solid"
              name="nameToAddress"
              value={addWhatsappContactInput?.nameToAddress}
              onChange={handleInputChange}
            />
            {addWhatsappContactInput?.nameToAddress?.length < 2 &&
              formError && (
                <div className="fv-plugins-message-container">
                  <div className="fv-help-block">
                    Name To Address is Required.
                  </div>
                </div>
              )}
          </div>

          <div className=" fv-row mb-10 " style={{ width: "45%" }}>
            <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
              <span className="required">WABA Mobile Number</span>
              <i
                className="fas fa-exclamation-circle ms-2 fs-7"
                data-bs-toggle="tooltip"
                title="Specify Channel WABA Mobile Number."
              ></i>
            </label>
            <input
              type="text"
              className="form-control form-control-lg form-control-solid"
              name="wabaMobileNo"
              value={addWhatsappContactInput?.wabaMobileNo}
              onChange={handleInputChange}
            />
            {addWhatsappContactInput?.wabaMobileNo?.length < 2 && formError && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">
                  WABA Mobile Number is Required.
                </div>
              </div>
            )}
          </div>

          <div className=" fv-row mb-10 " style={{ width: "45%" }}>
            <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
              <span className="required">WABA Name</span>
              <i
                className="fas fa-exclamation-circle ms-2 fs-7"
                data-bs-toggle="tooltip"
                title="Specify Channel WABA Name."
              ></i>
            </label>
            <input
              type="text"
              className="form-control form-control-lg form-control-solid"
              name="wabaName"
              value={addWhatsappContactInput?.wabaName}
              onChange={handleInputChange}
            />
            {addWhatsappContactInput?.wabaName?.length < 2 && formError && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">WABA Name is Required.</div>
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

export default AddWhatsAppContactModal;
