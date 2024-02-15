import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Modal } from "react-bootstrap";
import { KTIcon } from "../../../../_metronic/helpers";
import axios from "axios";
import DeleteAgentsModal from "./Delete";
// import { KTIcon } from "../../../../../../_metronic/helpers";
// import { url } from "inspector";

// import { StepperComponent } from "../../../../../_metronic/assets/ts/components";

// type Props = {
//   show: boolean;
//   handleClose: () => void;
// };

const modalsRoot = document.getElementById("root-modals") || document.body;

const initialData = {
  mobileNo: "",
  firstName: "",
  lastName: "",
  emailAddress: "",
  designation: "",
  address: "",
  country: "",
  company: "",
  companyWebsite: "",
  agentUsername: "",
  agentPassword: "",
  agentType: "",
  language: "",
  timeZone: "",
};

const EditAgentsModal = ({
  show,
  handleClose,
  detailData,
  setRefetchList,
  closeDetailModal,
}: any) => {
  const [agentInputData, setAgentInputData] = useState(initialData);

  const [formError, setFormError] = React.useState<boolean>(false);
  const [showDeleteAgentsModal, setShowDeleteAgentsModal] =
    React.useState<boolean>(false);

  const handleEditAgentsSubmit = async () => {
    if (
      agentInputData.mobileNo.length < 2 ||
      agentInputData.firstName.length < 2 ||
      agentInputData.lastName.length < 2 ||
      agentInputData.emailAddress.length < 2 ||
      agentInputData.designation.length < 2 ||
      agentInputData.address.length < 2 ||
      agentInputData.country.length < 2 ||
      agentInputData.company.length < 2 ||
      agentInputData.companyWebsite.length < 2 ||
      // agentInputData.agentUsername.length < 2 ||
      // agentInputData.agentPassword.length < 2 ||
      agentInputData.agentType.length < 2
      // agentInputData.language.length < 2 ||
      // agentInputData.timeZone.length < 2
    ) {
      setFormError(true);
    } else {
      setFormError(false);

      try {
        const data = {
          tenant: "bsl",
          accessKey:
            "$2y$10$0MNB6SNrJCDmXpZgb14Cgu7r3ZcEVlbbk8XvmRn2x9hKZXebK5Grm",
          agent_data: {
            mobileNo: agentInputData.mobileNo,
            firstName: agentInputData.firstName,
            lastName: agentInputData.lastName,
            emailAddress: agentInputData.emailAddress,
            designation: agentInputData.designation,
            address: agentInputData.address,
            country: agentInputData.country,
            company: agentInputData.company,
            comapanyWebsite: agentInputData.companyWebsite,
            // agentUsername: agentInputData.agentUsername,
            // agentPassword: agentInputData.agentPassword,
            agentType: agentInputData.agentType,
            // language: agentInputData.language,
            // timeZone: agentInputData.timeZone,
          },
        };

        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        const selectedId = detailData.id;

        const response = await axios.put(
          `http://3.108.229.60:8082/bluwyremini-backend/info/modifyAgentProfileDetails.php?id=${selectedId}`,

          data,
          config
        );

        setRefetchList((preV: boolean) => !preV);
        // console.log("response", response);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setAgentInputData(initialData);

        handleClose();
        closeDetailModal();
      }
    }
  };

  useEffect(() => {
    setAgentInputData({
      ...agentInputData,
      mobileNo: detailData?.mobileNo,
      firstName: detailData?.firstName,
      lastName: detailData?.lastName,
      emailAddress: detailData?.emailId,
      designation: detailData?.role,
      address: detailData?.agentAddress,
      country: detailData?.country,
      company: detailData?.company,
      companyWebsite: detailData?.companyWebsite,
      agentUsername: detailData?.username,
      agentType: detailData?.agentType,
      language: detailData?.language,
      timeZone: detailData?.timezone,
    });
    // agentPassword: detailData?.,
  }, [detailData]);

  const handleInputChange = (e: any) => {
    setAgentInputData({ ...agentInputData, [e.target.name]: e.target.value });
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
        <h2>Edit Agent Details</h2>
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
          {/* begin::Input group */}
          {/* <div className="fv-row mb-7"> */}
          {/* begin::Label */}
          {/* end::Label */}

          {/* begin::Image input */}
          {/* <div className="image-input image-input-outline"> */}
          {/* begin::Preview existing avatar */}
          {/* <div
                className="image-input-wrapper w-125px h-125px"
                style={{
                  backgroundImage: `url('${mediaFile}')`,
                }}
              ></div> */}
          {/* end::Preview existing avatar */}

          {/* <div className="d-flex flex-end pt-5">
                <input
                  type="file"
                  onChange={(e: any) =>
                    setMediaFile(URL.createObjectURL(e?.target?.files[0]))
                  }
                />

                <button
                  type="button"
                  className="btn btn-secondary"
                  // onClick={submit}
                  //   onClick={handleSubmitForm}
                >
                  Upload Media
                  <KTIcon iconName="add-files" className="fs-3 ms-2 me-0" />
                </button>
              </div> */}
          {/* </div> */}
          {/* end::Image input */}
          {/* </div> */}
          {/* end::Input group */}

          <div className=" fv-row mb-3 w-100 ">
            <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
              <span className="required">Agent Type</span>
              {/* <i
                className="fas fa-exclamation-circle ms-2 fs-7"
                data-bs-toggle="tooltip"
                title="Specify KeyWords."
              ></i> */}
            </label>

            <select
              className="form-select form-select-solid fw-bolder"
              data-kt-select2="true"
              data-placeholder="Select option"
              data-allow-clear="true"
              data-kt-user-table-filter="two-step"
              data-hide-search="true"
              name="agentType"
              onChange={handleInputChange}
              value={agentInputData.agentType}
            >
              <option value="Agent">Agent</option>
              <option value="Admin">Admin</option>
            </select>

            {agentInputData.agentType.length < 2 && formError && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">Agent Type is Required.</div>
              </div>
            )}
          </div>

          <div className=" fv-row mb-3 w-100 ">
            <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
              <span className="required">Mobile Number</span>
              {/* <i
                className="fas fa-exclamation-circle ms-2 fs-7"
                data-bs-toggle="tooltip"
                title="Specify KeyWords."
              ></i> */}
            </label>

            <input
              type="text"
              className="form-control form-control-lg form-control-solid"
              name="mobileNo"
              placeholder=""
              value={agentInputData.mobileNo}
              onChange={handleInputChange}
            />
            {agentInputData.mobileNo.length < 2 && formError && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">Mobile Number is Required.</div>
              </div>
            )}
          </div>

          <div className=" fv-row mb-3 w-100 ">
            <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
              <span className="required">First Name</span>
              {/* <i
                className="fas fa-exclamation-circle ms-2 fs-7"
                data-bs-toggle="tooltip"
                title="Specify KeyWords."
              ></i> */}
            </label>

            <input
              type="text"
              className="form-control form-control-lg form-control-solid"
              name="firstName"
              placeholder=""
              value={agentInputData.firstName}
              onChange={handleInputChange}
            />
            {agentInputData.firstName.length < 2 && formError && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">First Name is Required.</div>
              </div>
            )}
          </div>

          <div className=" fv-row mb-3 w-100 ">
            <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
              <span className="required">Last Name</span>
              {/* <i
                className="fas fa-exclamation-circle ms-2 fs-7"
                data-bs-toggle="tooltip"
                title="Specify KeyWords."
              ></i> */}
            </label>

            <input
              type="text"
              className="form-control form-control-lg form-control-solid"
              name="lastName"
              placeholder=""
              value={agentInputData.lastName}
              onChange={handleInputChange}
            />
            {agentInputData.lastName.length < 2 && formError && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">Last Name is Required.</div>
              </div>
            )}
          </div>

          <div className=" fv-row mb-3 w-100 ">
            <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
              <span className="required">Email Id</span>
              {/* <i
                className="fas fa-exclamation-circle ms-2 fs-7"
                data-bs-toggle="tooltip"
                title="Specify KeyWords."
              ></i> */}
            </label>

            <input
              type="text"
              className="form-control form-control-lg form-control-solid"
              name="emailAddress"
              placeholder=""
              value={agentInputData.emailAddress}
              onChange={handleInputChange}
            />
            {agentInputData.emailAddress.length < 2 && formError && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">Email Id is Required.</div>
              </div>
            )}
          </div>

          <div className=" fv-row mb-3 w-100 ">
            <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
              <span className="required">Designation</span>
              {/* <i
                className="fas fa-exclamation-circle ms-2 fs-7"
                data-bs-toggle="tooltip"
                title="Specify KeyWords."
              ></i> */}
            </label>

            <input
              type="text"
              className="form-control form-control-lg form-control-solid"
              name="designation"
              placeholder=""
              value={agentInputData.designation}
              onChange={handleInputChange}
            />
            {agentInputData.designation.length < 2 && formError && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">Designation is Required.</div>
              </div>
            )}
          </div>

          <div className=" fv-row mb-3 w-100 ">
            <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
              <span className="required">Agent Address</span>
              {/* <i
                className="fas fa-exclamation-circle ms-2 fs-7"
                data-bs-toggle="tooltip"
                title="Specify KeyWords."
              ></i> */}
            </label>

            <input
              type="text"
              className="form-control form-control-lg form-control-solid"
              name="address"
              placeholder=""
              value={agentInputData.address}
              onChange={handleInputChange}
            />
            {agentInputData.address.length < 2 && formError && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">Agent Address is Required.</div>
              </div>
            )}
          </div>

          <div className=" fv-row mb-3 w-100 ">
            <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
              <span className="required">Agent Country</span>
              {/* <i
                className="fas fa-exclamation-circle ms-2 fs-7"
                data-bs-toggle="tooltip"
                title="Specify KeyWords."
              ></i> */}
            </label>

            <input
              type="text"
              className="form-control form-control-lg form-control-solid"
              name="country"
              placeholder=""
              value={agentInputData.country}
              onChange={handleInputChange}
            />
            {agentInputData.country.length < 2 && formError && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">Agent Country is Required.</div>
              </div>
            )}
          </div>

          <div className=" fv-row mb-3 w-100 ">
            <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
              <span className="required">Agent Company</span>
              {/* <i
                className="fas fa-exclamation-circle ms-2 fs-7"
                data-bs-toggle="tooltip"
                title="Specify KeyWords."
              ></i> */}
            </label>

            <input
              type="text"
              className="form-control form-control-lg form-control-solid"
              name="company"
              placeholder=""
              value={agentInputData.company}
              onChange={handleInputChange}
            />
            {agentInputData.company.length < 2 && formError && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">Agent Company is Required.</div>
              </div>
            )}
          </div>

          <div className=" fv-row mb-3 w-100 ">
            <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
              <span className="required">Agent Company Website</span>
              {/* <i
                className="fas fa-exclamation-circle ms-2 fs-7"
                data-bs-toggle="tooltip"
                title="Specify KeyWords."
              ></i> */}
            </label>

            <input
              type="text"
              className="form-control form-control-lg form-control-solid"
              name="companyWebsite"
              placeholder=""
              value={agentInputData.companyWebsite}
              onChange={handleInputChange}
            />
            {agentInputData.companyWebsite.length < 2 && formError && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">
                  Agent Company Website is Required.
                </div>
              </div>
            )}
          </div>

          {/* <div className=" fv-row mb-3 w-100 ">
            <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
              <span className="required">Agent User Name</span>
            </label>

            <input
              type="text"
              className="form-control form-control-lg form-control-solid"
              name="agentUsername"
              placeholder=""
              value={agentInputData.agentUsername}
              onChange={handleInputChange}
            />
            {agentInputData.agentUsername.length < 2 && formError && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">
                  Agent User Name is Required.
                </div>
              </div>
            )}
          </div> */}

          {/* <div className=" fv-row mb-3 w-100 ">
            <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
              <span className="required">Agent Password</span>
            </label>

            <input
              type="text"
              className="form-control form-control-lg form-control-solid"
              name="agentPassword"
              placeholder=""
              value={agentInputData.agentPassword}
              onChange={handleInputChange}
            />
            {agentInputData.agentPassword.length < 2 && formError && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">Agent Password is Required.</div>
              </div>
            )}
          </div> */}

          {/* <div className=" fv-row mb-3 w-100 ">
            <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
              <span className="required">Agent Language</span>
            </label>

            <input
              type="text"
              className="form-control form-control-lg form-control-solid"
              name="language"
              placeholder=""
              value={agentInputData.language}
              onChange={handleInputChange}
            />
            {agentInputData.language.length < 2 && formError && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">Agent Language is Required.</div>
              </div>
            )}
          </div> */}

          {/* <div className=" fv-row mb-3 w-100 ">
            <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
              <span className="required">Agent Time Zone</span>
            </label>

            <input
              type="text"
              className="form-control form-control-lg form-control-solid"
              name="timeZone"
              placeholder=""
              value={agentInputData.timeZone}
              onChange={handleInputChange}
            />
            {agentInputData.timeZone.length < 2 && formError && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">
                  Agent Time Zone is Required.
                </div>
              </div>
            )}
          </div> */}
        </div>

        {/*end::Form Group */}
      </div>

      <div className="d-flex flex-end py-3 px-8 gap-3">
        <button
          type="button"
          className="btn btn-lg btn-primary"
          data-kt-stepper-action="submit"
          onClick={handleEditAgentsSubmit}
        >
          Submit
          <KTIcon iconName="arrow-right" className="fs-3 ms-2 me-0" />
        </button>
        <button
          type="button"
          className="btn btn-lg btn-primary"
          data-kt-stepper-action="submit"
          onClick={() => setShowDeleteAgentsModal(true)}
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
          Cancel
          <KTIcon iconName="arrow-right" className="fs-3 ms-2 me-0" />
        </button>
      </div>

      <DeleteAgentsModal
        show={showDeleteAgentsModal}
        handleClose={() => setShowDeleteAgentsModal(false)}
        closeEditModal={handleClose}
        closeDetailModal={closeDetailModal}
        detailData={detailData}
        setRefetchList={setRefetchList}
      />
    </Modal>,
    modalsRoot
  );
};

export default EditAgentsModal;
