import React, { useState } from "react";
import { KTCard, KTIcon } from "../../../_metronic/helpers";
import CustomInput from "./components/CustomInput";
import CustomTextArea from "./components/CustomTextArea";
import useStaticData from "../../StaticData";
import axios from "axios";

const initialData = {
  contactName: "",
  contactEmailId: "",
  contactMobile: "",
  contactAddress: "",
  contactMessage: "",
};

const ContactFormUI = ({ setSnackbar }: any) => {
  const { baseUrl } = useStaticData();

  const [ContactInputData, setContactInputData] = useState(initialData);
  const [formError, setFormError] = React.useState<boolean>(false);

  const handleSendMessageSubmit = async () => {
    if (
      ContactInputData.contactName.length < 2 ||
      ContactInputData.contactEmailId.length < 2 ||
      ContactInputData.contactMobile.length < 2 ||
      ContactInputData.contactAddress.length < 2 ||
      ContactInputData.contactMessage.length < 2
    ) {
      setFormError(true);
    } else {
      setFormError(false);

      try {
        console.log({ ContactInputData });

        const accessKey = sessionStorage.getItem("accessKey");
        const tenantName = sessionStorage.getItem("tenantName");

        const data = {
          tenant: tenantName,
          accessKey: accessKey,
          agent_data: {
            mobileNo: ContactInputData.contactMobile,
            fullName: ContactInputData.contactName,
            emailId: ContactInputData.contactEmailId,
            contactAddress: ContactInputData.contactAddress,
            query: ContactInputData.contactMessage,
          },
        };

        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        const response = await axios.post(
          `${baseUrl}/addContactUsFormDetails.php?accessKey=${accessKey}`,
          data,
          config
        );

        // console.log("response:", response);

        if (response?.data?.code === 0) {
          setSnackbar({
            showSnackbar: true,
            severitySnackBar: "success",
            messageSnackBar: response?.data?.message
              ? response?.data?.message
              : "Successfully Message Sent",
          });
        } else {
          setSnackbar({
            showSnackbar: true,
            severitySnackBar: "error",
            messageSnackBar: response?.data?.message
              ? response?.data?.message
              : "Failed to send Message",
          });
        }
      } catch (error) {
        // console.error("Error:", error);

        setSnackbar({
          showSnackbar: true,
          severitySnackBar: "error",
          messageSnackBar: error?.response?.data?.message
            ? error?.response?.data?.message
            : "Failed to send Message",
        });
      } finally {
        setContactInputData(initialData);
      }
    }
  };

  const handleInputChange = (e: any) => {
    setContactInputData({
      ...ContactInputData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <React.Fragment>
      <KTCard>
        <div className="p-3">
          <div className="modal-header">
            <h2>Send Us Your Query</h2>
            {/* <div className="btn btn-sm btn-icon btn-active-color-primary">
              <KTIcon className="fs-1" iconName="cross" />
            </div> */}
          </div>

          <div className="modal-body py-lg-3 px-lg-3">
            <div className="d-flex  flex-wrap flex-row justify-content-between align-items-start">
              <div className=" fv-row mb-3 w-100 ">
                <CustomInput
                  labelTitle={"Name"}
                  required={"required"}
                  tooltip={"Specify Your Name."}
                  inputName={"contactName"}
                  inputValue={ContactInputData?.contactName}
                  inputChange={handleInputChange}
                  inputError={formError}
                  inputErrorMessage={"Name is Required."}
                />
              </div>

              <div className=" fv-row mb-3 w-100 ">
                <CustomInput
                  labelTitle={"Email Id"}
                  required={"required"}
                  tooltip={"Specify Your Email Id."}
                  inputName={"contactEmailId"}
                  inputValue={ContactInputData?.contactEmailId}
                  inputChange={handleInputChange}
                  inputError={formError}
                  inputErrorMessage={"Email Id is Required."}
                />
              </div>

              <div className=" fv-row mb-3 w-100 ">
                <CustomInput
                  labelTitle={"Mobile Number"}
                  required={"required"}
                  tooltip={"Specify Your Mobile Number."}
                  inputName={"contactMobile"}
                  inputValue={ContactInputData?.contactMobile}
                  inputChange={handleInputChange}
                  inputError={formError}
                  inputErrorMessage={"Mobile Number is Required."}
                />
              </div>

              <div className=" fv-row mb-3 w-100 ">
                <CustomInput
                  labelTitle={"Address"}
                  required={"required"}
                  tooltip={"Specify Your Address."}
                  inputName={"contactAddress"}
                  inputValue={ContactInputData?.contactAddress}
                  inputChange={handleInputChange}
                  inputError={formError}
                  inputErrorMessage={"Address is Required."}
                />
              </div>

              <div className=" fv-row mb-3 w-100 ">
                <CustomTextArea
                  labelTitle={"Message"}
                  required={"required"}
                  tooltip={"Specify Your Message."}
                  inputName={"contactMessage"}
                  inputValue={ContactInputData?.contactMessage}
                  inputChange={handleInputChange}
                  inputError={formError}
                  inputErrorMessage={"Message is Required."}
                />
              </div>
            </div>
          </div>

          <div className="d-flex flex-end py-1 px-3">
            <button
              type="button"
              className="btn btn-lg btn-primary"
              data-kt-stepper-action="submit"
              onClick={handleSendMessageSubmit}
            >
              Send
              <KTIcon iconName="arrow-right" className="fs-3 ms-2 me-0" />
            </button>
          </div>
        </div>
      </KTCard>
    </React.Fragment>
  );
};

export default ContactFormUI;
