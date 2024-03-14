import React from "react";
// import { useMutation } from "react-query";
import { createPortal } from "react-dom";
import { Modal } from "react-bootstrap";
import { KTIcon } from "../../../../_metronic/helpers";
// import { postAddWhatsappContact } from "../../../services/ContactManagement";
import axios from "axios";
import useStaticData from "../../../StaticData";
import CustomInput from "../components/CustomInput";
import CustomSelect from "../components/CustomSelect";

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
  channelName,
  // refetchWhatsAppContactListData,
  setRefetchData,
  setSnackbar,
}: any) => {
  const { baseUrl } = useStaticData();

  // const { mutateAsync } = useMutation(postAddWhatsappContact);

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
      // addWhatsappContactInput?.lastInteractedChannel.length < 2 ||
      addWhatsappContactInput?.mobileNo.length < 2 ||
      addWhatsappContactInput?.crmFullname.length < 2
      // addWhatsappContactInput?.nameToAddress.length < 2 ||
      // addWhatsappContactInput?.wabaMobileNo.length < 2 ||
      // addWhatsappContactInput?.wabaName.length < 2
    ) {
      setFormError(true);
    } else {
      setFormError(false);

      try {
        const accessKey = sessionStorage.getItem("accessKey");

        const data = {
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
        };

        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        const url = `${baseUrl}/addContactInfo.php?channelName=${channelName}`;

        const response = await axios.post(url, data, config);

        console.log("response", response);

        // refetchWhatsAppContactListData();
        setRefetchData((preValue: boolean) => !preValue);

        setAddWhatsappContactInput(initialValue);

        setSnackbar({
          showSnackbar: true,
          severitySnackBar: "success",
          messageSnackBar: response?.data?.message
            ? response?.data?.message
            : "Successfully added Contact Details !",
        });

        // setRefetchList((preV: boolean) => !preV);
      } catch (error) {
        console.error("Error:", error);

        setSnackbar({
          showSnackbar: true,
          severitySnackBar: "error",
          messageSnackBar: error?.response?.data?.message
            ? error?.response?.data?.message
            : "Failed to add Contact Details !",
        });
      } finally {
        setFormError(false);
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
      <div className="modal-header">
        <h2>Add Whatsapp Contact</h2>
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
            <CustomSelect
              labelTitle={"First Channel"}
              required={"required"}
              tooltip={"Specify Channel First Channel."}
              inputName={"firstChannel"}
              inputValue={addWhatsappContactInput?.firstChannel}
              defaultOption={"Select Channel"}
              inputOptionsArray={[
                {
                  value: "whatsapp",
                  title: "Whatsapp",
                },
                {
                  value: "messenger",
                  title: "Messenger",
                },
                {
                  value: "instagram",
                  title: "Instagram",
                },
                {
                  value: "telegram",
                  title: "Telegram",
                },
              ]}
              inputChange={handleInputChange}
              inputError={formError}
              inputErrorMessage={"First Channel is Required."}
            />
          </div>

          <div className=" fv-row mb-10 " style={{ width: "45%" }}>
            <CustomSelect
              labelTitle={"Last Interacted Channel"}
              // required={"required"}
              tooltip={"Specify Channel Last Interacted Channel."}
              inputName={"lastInteractedChannel"}
              inputValue={addWhatsappContactInput?.lastInteractedChannel}
              defaultOption={"Select Channel"}
              inputOptionsArray={[
                {
                  value: "whatsapp",
                  title: "Whatsapp",
                },
                {
                  value: "messenger",
                  title: "Messenger",
                },
                {
                  value: "instagram",
                  title: "Instagram",
                },
                {
                  value: "telegram",
                  title: "Telegram",
                },
              ]}
              inputChange={handleInputChange}
              inputError={formError}
              inputErrorMessage={"Last Interacted Channel is Required."}
            />
          </div>

          <div className=" fv-row mb-10 " style={{ width: "45%" }}>
            <CustomInput
              labelTitle={"Mobile Number"}
              required={"required"}
              tooltip={"Specify Channel Mobile Number."}
              inputName={"mobileNo"}
              inputValue={addWhatsappContactInput?.mobileNo}
              inputChange={handleInputChange}
              inputError={formError}
              inputErrorMessage={"Mobile Number is Required."}
            />
          </div>

          <div className=" fv-row mb-10 " style={{ width: "45%" }}>
            <CustomInput
              labelTitle={"Customer Full Name"}
              required={"required"}
              tooltip={"Specify Channel Customer Full Name."}
              inputName={"crmFullname"}
              inputValue={addWhatsappContactInput?.crmFullname}
              inputChange={handleInputChange}
              inputError={formError}
              inputErrorMessage={"Customer Full Name is Required."}
            />
          </div>

          <div className=" fv-row mb-10 " style={{ width: "45%" }}>
            <CustomInput
              labelTitle={"Name To Address"}
              // required={"required"}
              tooltip={"Specify Channel Name To Address."}
              inputName={"nameToAddress"}
              inputValue={addWhatsappContactInput?.nameToAddress}
              inputChange={handleInputChange}
              inputError={formError}
              inputErrorMessage={"Name To Address is Required."}
            />
          </div>

          <div className=" fv-row mb-10 " style={{ width: "45%" }}>
            <CustomInput
              labelTitle={"WABA Mobile Number"}
              // required={"required"}
              tooltip={"Specify Channel WABA Mobile Number."}
              inputName={"wabaMobileNo"}
              inputValue={addWhatsappContactInput?.wabaMobileNo}
              inputChange={handleInputChange}
              inputError={formError}
              inputErrorMessage={"WABA Mobile Number is Required."}
            />
          </div>

          <div className=" fv-row mb-10 " style={{ width: "45%" }}>
            <CustomInput
              labelTitle={"WABA Name"}
              // required={"required"}
              tooltip={"Specify Channel WABA Name."}
              inputName={"wabaName"}
              inputValue={addWhatsappContactInput?.wabaName}
              inputChange={handleInputChange}
              inputError={formError}
              inputErrorMessage={"WABA Name is Required."}
            />
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
