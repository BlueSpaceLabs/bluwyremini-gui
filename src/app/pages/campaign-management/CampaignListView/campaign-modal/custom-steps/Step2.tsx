import React from "react";

const Step2 = ({
  show,
  handleClose,
  setSteps,
  campaignInputData,
  setCampaignInputData,
}: any) => {
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleDivClick = () => {
    // Trigger a click on the hidden file input
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      // console.log("Selected File:", file);

      setCampaignInputData({
        ...campaignInputData,
        campaignUploadFile: file,
      });
    }
  };

  const handleDeleteFile = () => {
    setCampaignInputData({
      ...campaignInputData,
      campaignUploadFile: null,
    });
    setSteps(2);
  };

  if (show)
    return (
      <div
        className="modal fade show"
        id="kt_modal_create_campaign"
        tabIndex={-1}
        aria-modal="true"
        role="dialog"
        style={{ display: "block" }}
      >
        {/*begin::Modal dialog*/}
        <div className="modal-dialog modal-fullscreen p-9">
          {/*begin::Modal content*/}
          <div className="modal-content modal-rounded">
            {/*begin::Modal header*/}
            <div className="modal-header py-7 d-flex justify-content-between">
              {/*begin::Modal title*/}
              <h2>Create Campaign</h2>
              {/*end::Modal title*/}
              {/*begin::Close*/}
              <div
                className="btn btn-sm btn-icon btn-active-color-primary"
                data-bs-dismiss="modal"
                onClick={handleClose}
              >
                <i className="ki-outline ki-cross fs-1" />{" "}
              </div>
              {/*end::Close*/}
            </div>
            {/*begin::Modal header*/}
            {/*begin::Modal body*/}
            <div className="modal-body scroll-y m-5">
              {/*begin::Stepper*/}
              <div
                className="stepper stepper-links d-flex flex-column between"
                id="kt_modal_create_campaign_stepper"
                data-kt-stepper="true"
              >
                {/*begin::Nav*/}
                <div className="stepper-nav justify-content-center py-2">
                  {/*begin::Step 1*/}
                  <div
                    className="stepper-item me-5 me-md-15 completed"
                    data-kt-stepper-element="nav"
                  >
                    <h3 className="stepper-title">Campaign Details</h3>
                  </div>
                  {/*end::Step 1*/}
                  {/*begin::Step 2*/}
                  <div
                    // className="stepper-item me-5 me-md-15 current"
                    className="stepper-item me-5 me-md-15 completed"
                    data-kt-stepper-element="nav"
                  >
                    {/* <h3 className="stepper-title">Creative Uploads</h3> */}
                    <h3 className="stepper-title">Channel</h3>
                  </div>
                  {/*end::Step 2*/}
                  {/*begin::Step 3*/}
                  <div
                    className="stepper-item me-5 me-md-15 current"
                    // className="stepper-item me-5 me-md-15 pending"
                    data-kt-stepper-element="nav"
                  >
                    <h3 className="stepper-title">Creative Uploads</h3>
                    {/* <h3 className="stepper-title">Channel</h3> */}
                  </div>
                  {/*end::Step 3*/}
                  {/*begin::Step 4*/}
                  <div
                    className="stepper-item me-5 me-md-15 pending"
                    data-kt-stepper-element="nav"
                  >
                    <h3 className="stepper-title">Schedule Campaign</h3>
                  </div>
                  {/*end::Step 4*/}
                  {/*begin::Step 5*/}
                  <div
                    className="stepper-item pending"
                    data-kt-stepper-element="nav"
                  >
                    <h3 className="stepper-title">Completed</h3>
                  </div>
                  {/*end::Step 5*/}
                </div>
                {/*end::Nav*/}
                {/*begin::Form*/}
                <form
                  className="mx-auto w-100 mw-600px pt-15 pb-10 fv-plugins-bootstrap5 fv-plugins-framework"
                  noValidate={true}
                  id="kt_modal_create_campaign_stepper_form"
                >
                  {/*begin::Step 1*/}
                  <div className="completed" data-kt-stepper-element="content">
                    {/*begin::Wrapper*/}
                    <div className="w-100">
                      {/*begin::Heading*/}
                      <div className="pb-10 pb-lg-15">
                        {/*begin::Title*/}
                        <h2 className="fw-bold d-flex align-items-center text-gray-900">
                          Setup Campaign Details
                          <span
                            className="ms-1"
                            data-bs-toggle="tooltip"
                            aria-label="Campaign name will be used as reference within your campaign reports"
                            data-bs-original-title="Campaign name will be used as reference within your campaign reports"
                            data-kt-initialized={1}
                          >
                            <i className="ki-outline ki-information-5 text-gray-500 fs-6" />
                          </span>{" "}
                        </h2>
                        {/*end::Title*/}
                        {/*begin::Notice*/}
                        <div className="text-muted fw-semibold fs-6">
                          If you need more info, please check out
                          <a href="#" className="link-primary fw-bold">
                            Help Page
                          </a>
                          .
                        </div>
                        {/*end::Notice*/}
                      </div>
                      {/*end::Heading*/}
                      {/*begin::Input group*/}
                      <div className="mb-10 fv-row fv-plugins-icon-container fv-plugins-bootstrap5-row-valid">
                        {/*begin::Label*/}
                        <label className="required form-label mb-3">
                          Campaign Name
                        </label>
                        {/*end::Label*/}
                        {/*begin::Input*/}
                        <input
                          type="text"
                          className="form-control form-control-lg form-control-solid"
                          name="campaign_name"
                          placeholder=""
                          defaultValue=""
                        />
                        {/*end::Input*/}
                        <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Input group*/}
                      <div className="fv-row mb-10 fv-plugins-icon-container fv-plugins-bootstrap5-row-valid">
                        {/*begin::Label*/}
                        <label className="d-block fw-semibold fs-6 mb-5">
                          <span className="required">Company Logo</span>
                          <span
                            className="ms-1"
                            data-bs-toggle="tooltip"
                            aria-label="E.g. Select a logo to represent the company that's running the campaign."
                            data-bs-original-title="E.g. Select a logo to represent the company that's running the campaign."
                            data-kt-initialized={1}
                          >
                            <i className="ki-outline ki-information-5 text-gray-500 fs-6" />
                          </span>{" "}
                        </label>
                        {/*end::Label*/}
                        {/*begin::Image input placeholder*/}
                        <style
                          dangerouslySetInnerHTML={{
                            __html:
                              "\n                .image-input-placeholder {\n                    background-image: url('/metronic8/demo33/assets/media/svg/files/blank-image.svg');\n                }\n\n                [data-bs-theme=\"dark\"] .image-input-placeholder {\n                    background-image: url('/metronic8/demo33/assets/media/svg/files/blank-image-dark.svg');\n                }                \n            ",
                          }}
                        />
                        {/*end::Image input placeholder*/}
                        {/*begin::Image input*/}
                        <div
                          className="image-input image-input-outline image-input-placeholder image-input-changed"
                          data-kt-image-input="true"
                        >
                          {/*begin::Preview existing avatar*/}
                          <div
                            className="image-input-wrapper w-125px h-125px"
                            style={{ backgroundImage: 'url("data:image/png' }}
                          />
                          {/*end::Preview existing avatar*/}
                          {/*begin::Label*/}
                          <label
                            className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                            data-kt-image-input-action="change"
                            data-bs-toggle="tooltip"
                            aria-label="Change avatar"
                            data-bs-original-title="Change avatar"
                            data-kt-initialized={1}
                          >
                            <i className="ki-outline ki-pencil fs-7" />
                            {/*begin::Inputs*/}
                            <input
                              type="file"
                              name="avatar"
                              accept=".png, .jpg, .jpeg"
                            />
                            <input type="hidden" name="avatar_remove" />
                            {/*end::Inputs*/}
                          </label>
                          {/*end::Label*/}
                          {/*begin::Cancel*/}
                          <span
                            className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                            data-kt-image-input-action="cancel"
                            data-bs-toggle="tooltip"
                            aria-label="Cancel avatar"
                            data-bs-original-title="Cancel avatar"
                            data-kt-initialized={1}
                          >
                            <i className="ki-outline ki-cross fs-2" />{" "}
                          </span>
                          {/*end::Cancel*/}
                          {/*begin::Remove*/}
                          <span
                            className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                            data-kt-image-input-action="remove"
                            data-bs-toggle="tooltip"
                            aria-label="Remove avatar"
                            data-bs-original-title="Remove avatar"
                            data-kt-initialized={1}
                          >
                            <i className="ki-outline ki-cross fs-2" />{" "}
                          </span>
                          {/*end::Remove*/}
                        </div>
                        {/*end::Image input*/}
                        {/*begin::Hint*/}
                        <div className="form-text">
                          Allowed file types: png, jpg, jpeg.
                        </div>
                        {/*end::Hint*/}
                        <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Input group*/}
                      <div className="mb-10">
                        {/*begin::Label*/}
                        <label className="required fw-semibold fs-6 mb-5">
                          Campaign Goal
                        </label>
                        {/*end::Label*/}
                        {/*begin::Roles*/}
                        {/*begin::Input row*/}
                        <div className="d-flex fv-row">
                          {/*begin::Radio*/}
                          <div className="form-check form-check-custom form-check-solid">
                            {/*begin::Input*/}
                            <input
                              className="form-check-input me-3"
                              name="user_role"
                              type="radio"
                              defaultValue={0}
                              id="kt_modal_update_role_option_0"
                              defaultChecked={true}
                            />
                            {/*end::Input*/}
                            {/*begin::Label*/}
                            <label
                              className="form-check-label"
                              htmlFor="kt_modal_update_role_option_0"
                            >
                              <div className="fw-bold text-gray-800">
                                Get more visitors
                              </div>
                              <div className="text-gray-600">
                                Increase impression traffic onto the platform
                              </div>
                            </label>
                            {/*end::Label*/}
                          </div>
                          {/*end::Radio*/}
                        </div>
                        {/*end::Input row*/}
                        <div className="separator separator-dashed my-5" />{" "}
                        {/*begin::Input row*/}
                        <div className="d-flex fv-row">
                          {/*begin::Radio*/}
                          <div className="form-check form-check-custom form-check-solid">
                            {/*begin::Input*/}
                            <input
                              className="form-check-input me-3"
                              name="user_role"
                              type="radio"
                              defaultValue={1}
                              id="kt_modal_update_role_option_1"
                            />
                            {/*end::Input*/}
                            {/*begin::Label*/}
                            <label
                              className="form-check-label"
                              htmlFor="kt_modal_update_role_option_1"
                            >
                              <div className="fw-bold text-gray-800">
                                Get more messages on chat
                              </div>
                              <div className="text-gray-600">
                                Increase community interaction and communication
                              </div>
                            </label>
                            {/*end::Label*/}
                          </div>
                          {/*end::Radio*/}
                        </div>
                        {/*end::Input row*/}
                        <div className="separator separator-dashed my-5" />{" "}
                        {/*begin::Input row*/}
                        <div className="d-flex fv-row">
                          {/*begin::Radio*/}
                          <div className="form-check form-check-custom form-check-solid">
                            {/*begin::Input*/}
                            <input
                              className="form-check-input me-3"
                              name="user_role"
                              type="radio"
                              defaultValue={2}
                              id="kt_modal_update_role_option_2"
                            />
                            {/*end::Input*/}
                            {/*begin::Label*/}
                            <label
                              className="form-check-label"
                              htmlFor="kt_modal_update_role_option_2"
                            >
                              <div className="fw-bold text-gray-800">
                                Get more calls
                              </div>
                              <div className="text-gray-600">
                                Boost telecommunication feedback to provide
                                precise and accurate information
                              </div>
                            </label>
                            {/*end::Label*/}
                          </div>
                          {/*end::Radio*/}
                        </div>
                        {/*end::Input row*/}
                        <div className="separator separator-dashed my-5" />{" "}
                        {/*begin::Input row*/}
                        <div className="d-flex fv-row">
                          {/*begin::Radio*/}
                          <div className="form-check form-check-custom form-check-solid">
                            {/*begin::Input*/}
                            <input
                              className="form-check-input me-3"
                              name="user_role"
                              type="radio"
                              defaultValue={3}
                              id="kt_modal_update_role_option_3"
                            />
                            {/*end::Input*/}
                            {/*begin::Label*/}
                            <label
                              className="form-check-label"
                              htmlFor="kt_modal_update_role_option_3"
                            >
                              <div className="fw-bold text-gray-800">
                                Get more likes
                              </div>
                              <div className="text-gray-600">
                                Increase positive interactivity on social media
                                platforms
                              </div>
                            </label>
                            {/*end::Label*/}
                          </div>
                          {/*end::Radio*/}
                        </div>
                        {/*end::Input row*/}
                        <div className="separator separator-dashed my-5" />{" "}
                        {/*begin::Input row*/}
                        <div className="d-flex fv-row">
                          {/*begin::Radio*/}
                          <div className="form-check form-check-custom form-check-solid">
                            {/*begin::Input*/}
                            <input
                              className="form-check-input me-3"
                              name="user_role"
                              type="radio"
                              defaultValue={4}
                              id="kt_modal_update_role_option_4"
                            />
                            {/*end::Input*/}
                            {/*begin::Label*/}
                            <label
                              className="form-check-label"
                              htmlFor="kt_modal_update_role_option_4"
                            >
                              <div className="fw-bold text-gray-800">
                                Lead generation
                              </div>
                              <div className="text-gray-600">
                                Collect contact information for potential
                                customers
                              </div>
                            </label>
                            {/*end::Label*/}
                          </div>
                          {/*end::Radio*/}
                        </div>
                        {/*end::Input row*/}
                        {/*end::Roles*/}
                      </div>
                      {/*end::Input group*/}
                    </div>
                    {/*end::Wrapper*/}
                  </div>
                  {/*end::Step 1*/}
                  {/*begin::Step 2*/}
                  <div data-kt-stepper-element="content" className="current">
                    {/*begin::Wrapper*/}
                    <div className="w-100">
                      {/*begin::Heading*/}
                      <div className="pb-10 pb-lg-12">
                        {/*begin::Title*/}
                        <h1 className="fw-bold text-gray-900">Upload Files</h1>
                        {/*end::Title*/}
                        {/*begin::Description*/}
                        <div className="text-muted fw-semibold fs-4">
                          If you need more info, please check
                          <a href="#" className="link-primary">
                            Campaign Guidelines
                          </a>
                        </div>
                        {/*end::Description*/}
                      </div>
                      {/*end::Heading*/}
                      {/*begin::Input group*/}
                      <div className="fv-row mb-10">
                        {/*begin::Dropzone*/}
                        <input
                          type="file"
                          ref={fileInputRef}
                          style={{ display: "none" }}
                          onChange={handleFileChange}
                          accept=".csv"
                        />
                        <div
                          className="dropzone dz-clickable"
                          id="kt_modal_create_campaign_files_upload"
                          onClick={handleDivClick}
                        >
                          {/*begin::Message*/}
                          <div className="dz-message needsclick">
                            {/*begin::Icon*/}
                            <i className="ki-outline ki-file-up fs-3hx text-primary" />{" "}
                            {/*end::Icon*/}
                            {/*begin::Info*/}
                            <div className="ms-4">
                              <h3 className="dfs-3 fw-bold text-gray-900 mb-1">
                                Drop campaign file here or click to upload.
                              </h3>
                              <span className="fw-semibold fs-4 text-muted"></span>
                            </div>
                            {/*end::Info*/}
                          </div>
                        </div>
                        {/*end::Dropzone*/}
                      </div>
                      {/*end::Input group*/}

                      {campaignInputData.campaignUploadFile && (
                        <div className="mb-10">
                          {/*begin::Label*/}
                          <label className="fs-6 fw-semibold mb-2">
                            Uploaded File
                          </label>
                          {/*End::Label*/}

                          {/*begin::Files*/}
                          <div className="mh-300px scroll-y me-n7 pe-7">
                            {/*begin::File*/}
                            <div className="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
                              <div className="d-flex align-items-center">
                                {/*begin::Avatar*/}
                                <div className="symbol symbol-35px">
                                  <i
                                    className="bi bi-filetype-csv"
                                    style={{ fontSize: "30px" }}
                                  ></i>
                                </div>
                                {/*end::Avatar*/}
                                {/*begin::Details*/}
                                <div className="ms-6">
                                  <a
                                    href="#"
                                    className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                  >
                                    {campaignInputData.campaignUploadFile?.name}
                                  </a>
                                  <div className="fw-semibold text-muted">
                                    {campaignInputData.campaignUploadFile
                                      ?.size / 1024}{" "}
                                    Kb
                                  </div>
                                </div>
                                {/*end::Details*/}
                              </div>
                              {/*begin::Menu*/}
                              <div className="min-w-100px">
                                {/* <select
                                  className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                                  // data-control="select2"
                                  // data-hide-search="true"
                                  // data-placeholder="Edit"
                                  // data-select2-id="select2-data-13-b6x8"
                                  tabIndex={-1}
                                  // aria-hidden="true"
                                  // data-kt-initialized={1}
                                >
                                  <option value={"Delete"}>Delete</option>
                                </select> */}
                                <button
                                  className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                                  onClick={handleDeleteFile}
                                >
                                  Delete
                                </button>
                              </div>
                              {/*end::Menu*/}
                            </div>
                            {/*end::File*/}
                          </div>
                          {/*end::Files*/}
                        </div>
                      )}
                    </div>
                    {/*end::Wrapper*/}
                  </div>
                  {/*end::Step 2*/}
                  {/*begin::Step 3*/}
                  <div data-kt-stepper-element="content" className="pending">
                    {/*begin::Wrapper*/}
                    <div className="w-100">
                      {/*begin::Heading*/}
                      <div className="pb-10 pb-lg-12">
                        {/*begin::Title*/}
                        <h1 className="fw-bold text-gray-900">
                          Configure Channel
                        </h1>
                        {/*end::Title*/}
                        {/*begin::Description*/}
                        <div className="text-muted fw-semibold fs-4">
                          If you need more info, please check
                          <a href="#" className="link-primary">
                            Campaign Guidelines
                          </a>
                        </div>
                        {/*end::Description*/}
                      </div>
                      {/*end::Heading*/}
                      {/*begin::Input group*/}
                      <div className="fv-row mb-10">
                        {/*begin::Label*/}
                        <label className="fs-6 fw-semibold mb-2">
                          Gender
                          <span
                            className="ms-1"
                            data-bs-toggle="tooltip"
                            aria-label="Show your ads to either men or women, or select 'All' for both"
                            data-bs-original-title="Show your ads to either men or women, or select 'All' for both"
                            data-kt-initialized={1}
                          >
                            <i className="ki-outline ki-information-5 text-gray-500 fs-6" />
                          </span>{" "}
                        </label>
                        {/*End::Label*/}
                        {/*begin::Row*/}
                        <div
                          className="row g-9"
                          data-kt-buttons="true"
                          data-kt-buttons-target="[data-kt-button='true']"
                          data-kt-initialized={1}
                        >
                          {/*begin::Col*/}
                          <div className="col">
                            {/*begin::Option*/}
                            <label
                              className="btn btn-outline btn-outline-dashed btn-active-light-primary active d-flex text-start p-6"
                              data-kt-button="true"
                            >
                              {/*begin::Radio*/}
                              <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="campaign_gender"
                                  defaultValue={1}
                                  defaultChecked={true}
                                />
                              </span>
                              {/*end::Radio*/}
                              {/*begin::Info*/}
                              <span className="ms-5">
                                <span className="fs-4 fw-bold text-gray-800 d-block">
                                  All
                                </span>
                              </span>
                              {/*end::Info*/}
                            </label>
                            {/*end::Option*/}
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col">
                            {/*begin::Option*/}
                            <label
                              className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6"
                              data-kt-button="true"
                            >
                              {/*begin::Radio*/}
                              <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="campaign_gender"
                                  defaultValue={2}
                                />
                              </span>
                              {/*end::Radio*/}
                              {/*begin::Info*/}
                              <span className="ms-5">
                                <span className="fs-4 fw-bold text-gray-800 d-block">
                                  Male
                                </span>
                              </span>
                              {/*end::Info*/}
                            </label>
                            {/*end::Option*/}
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col">
                            {/*begin::Option*/}
                            <label
                              className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6"
                              data-kt-button="true"
                            >
                              {/*begin::Radio*/}
                              <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="campaign_gender"
                                  defaultValue={3}
                                />
                              </span>
                              {/*end::Radio*/}
                              {/*begin::Info*/}
                              <span className="ms-5">
                                <span className="fs-4 fw-bold text-gray-800 d-block">
                                  Female
                                </span>
                              </span>
                              {/*end::Info*/}
                            </label>
                            {/*end::Option*/}
                          </div>
                          {/*end::Col*/}
                        </div>
                        {/*end::Row*/}
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Input group*/}
                      <div className="fv-row mb-10">
                        {/*begin::Label*/}
                        <label className="fs-6 fw-semibold mb-2">
                          Age
                          <span
                            className="ms-1"
                            data-bs-toggle="tooltip"
                            aria-label="Select the minimum and maximum age of the people who will find your ad relevant."
                            data-bs-original-title="Select the minimum and maximum age of the people who will find your ad relevant."
                            data-kt-initialized={1}
                          >
                            <i className="ki-outline ki-information-5 text-gray-500 fs-6" />
                          </span>{" "}
                        </label>
                        {/*End::Label*/}
                        {/*begin::Slider*/}
                        <div className="d-flex flex-stack">
                          <div
                            id="kt_modal_create_campaign_age_min"
                            className="fs-7 fw-semibold text-muted"
                          >
                            18
                          </div>
                          <div
                            id="kt_modal_create_campaign_age_slider"
                            className="noUi-sm w-100 ms-5 me-8 noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr"
                          >
                            <div className="noUi-base">
                              <div className="noUi-connects">
                                <div
                                  className="noUi-connect"
                                  style={{
                                    transform:
                                      "translate(7.46269%, 0px) scale(0.328358, 1)",
                                  }}
                                />
                              </div>
                              <div
                                className="noUi-origin"
                                style={{
                                  transform: "translate(-92.5373%, 0px)",
                                  zIndex: 5,
                                }}
                              >
                                <div
                                  className="noUi-handle noUi-handle-lower"
                                  data-handle={0}
                                  tabIndex={0}
                                  role="slider"
                                  aria-orientation="horizontal"
                                  aria-valuemin={13.0}
                                  aria-valuemax={40.0}
                                  aria-valuenow={18.0}
                                >
                                  <div className="noUi-touch-area" />
                                </div>
                              </div>
                              <div
                                className="noUi-origin"
                                style={{
                                  transform: "translate(-59.7015%, 0px)",
                                  zIndex: 6,
                                }}
                              >
                                <div
                                  className="noUi-handle noUi-handle-upper"
                                  data-handle={1}
                                  tabIndex={0}
                                  role="slider"
                                  aria-orientation="horizontal"
                                  aria-valuemin={18.0}
                                  aria-valuemax={80.0}
                                  aria-valuenow={40.0}
                                >
                                  <div className="noUi-touch-area" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            id="kt_modal_create_campaign_age_max"
                            className="fs-7 fw-semibold text-muted"
                          >
                            40
                          </div>
                        </div>
                        {/*end::Slider*/}
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Input group*/}
                      <div className="fv-row mb-10">
                        {/*begin::Label*/}
                        <label className="fs-6 fw-semibold mb-2">
                          Location
                          <span
                            className="ms-1"
                            data-bs-toggle="tooltip"
                            aria-label="Enter one or more location points for more specific targeting."
                            data-bs-original-title="Enter one or more location points for more specific targeting."
                            data-kt-initialized={1}
                          >
                            <i className="ki-outline ki-information-5 text-gray-500 fs-6" />
                          </span>{" "}
                        </label>
                        {/*End::Label*/}
                        {/*begin::Tagify*/}
                        <input
                          className="form-control d-flex align-items-center"
                          defaultValue=""
                          id="kt_modal_create_campaign_location"
                          data-kt-flags-path="/metronic8/demo33/assets/media/flags/"
                          tabIndex={-1}
                        />

                        {/*end::Tagify*/}
                      </div>
                      {/*end::Input group*/}
                    </div>
                    {/*end::Wrapper*/}
                  </div>
                  {/*end::Step 3*/}
                  {/*begin::Step 4*/}
                  <div data-kt-stepper-element="content" className="pending">
                    {/*begin::Wrapper*/}
                    <div className="w-100">
                      {/*begin::Heading*/}
                      <div className="pb-10 pb-lg-12">
                        {/*begin::Title*/}
                        <h1 className="fw-bold text-gray-900">
                          Budget Estimates
                        </h1>
                        {/*end::Title*/}
                        {/*begin::Description*/}
                        <div className="text-muted fw-semibold fs-4">
                          If you need more info, please check
                          <a href="#" className="link-primary">
                            Campaign Guidelines
                          </a>
                        </div>
                        {/*end::Description*/}
                      </div>
                      {/*end::Heading*/}
                      {/*begin::Input group*/}
                      <div className="fv-row mb-10">
                        {/*begin::Label*/}
                        <label className="fs-6 fw-semibold mb-2">
                          Campaign Duration
                          <span
                            className="ms-1"
                            data-bs-toggle="tooltip"
                            aria-label="Choose how long you want your ad to run for"
                            data-bs-original-title="Choose how long you want your ad to run for"
                            data-kt-initialized={1}
                          >
                            <i className="ki-outline ki-information-5 text-gray-500 fs-6" />
                          </span>{" "}
                        </label>
                        {/*end::Label*/}
                        {/*begin::Duration option*/}
                        <div className="d-flex gap-9 mb-7">
                          {/*begin::Button*/}
                          <button
                            type="button"
                            className="btn btn-outline btn-outline-dashed btn-active-light-primary active"
                            id="kt_modal_create_campaign_duration_all"
                          >
                            Continuous duration
                            <br />
                            <span className="fs-7">
                              Your ad will run continuously for a daily budget.
                            </span>
                          </button>
                          {/*end::Button*/}
                          {/*begin::Button*/}
                          <button
                            type="button"
                            className="btn btn-outline btn-outline-dashed btn-active-light-primary btn-outline-default"
                            id="kt_modal_create_campaign_duration_fixed"
                          >
                            Fixed duration
                            <br />
                            <span className="fs-7">
                              Your ad will run on the specified dates only.
                            </span>
                          </button>
                          {/*end::Button*/}
                        </div>
                        {/*end::Duration option*/}
                        {/*begin::Datepicker*/}
                        <input
                          className="form-control form-control-solid d-none flatpickr-input"
                          placeholder="Pick date & time"
                          id="kt_modal_create_campaign_datepicker"
                          type="hidden"
                        />
                        <input
                          className="form-control form-control-solid d-none form-control input"
                          placeholder="Pick date & time"
                          tabIndex={0}
                          type="text"
                          readOnly={true}
                        />
                        {/*end::Datepicker*/}
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Input group*/}
                      <div className="fv-row mb-10">
                        {/*begin::Label*/}
                        <label className="fs-6 fw-semibold mb-2">
                          Daily Budget
                          <span
                            className="ms-1"
                            data-bs-toggle="tooltip"
                            aria-label="Choose the budget allocated for each day. Higher budget will generate better results"
                            data-bs-original-title="Choose the budget allocated for each day. Higher budget will generate better results"
                            data-kt-initialized={1}
                          >
                            <i className="ki-outline ki-information-5 text-gray-500 fs-6" />
                          </span>{" "}
                        </label>
                        {/*end::Label*/}
                        {/*begin::Slider*/}
                        <div className="d-flex flex-column text-center">
                          <div className="d-flex align-items-start justify-content-center mb-7">
                            <span className="fw-bold fs-4 mt-1 me-2">$</span>
                            <span
                              className="fw-bold fs-3x"
                              id="kt_modal_create_campaign_budget_label"
                            >
                              5
                            </span>
                            <span className="fw-bold fs-3x">.00</span>
                          </div>
                          <div
                            id="kt_modal_create_campaign_budget_slider"
                            className="noUi-sm noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr"
                          >
                            <div className="noUi-base">
                              <div className="noUi-connects" />
                              <div
                                className="noUi-origin"
                                style={{
                                  transform: "translate(-99.1984%, 0px)",
                                  zIndex: 4,
                                }}
                              >
                                <div
                                  className="noUi-handle noUi-handle-lower"
                                  data-handle={0}
                                  tabIndex={0}
                                  role="slider"
                                  aria-orientation="horizontal"
                                  aria-valuemin={1.0}
                                  aria-valuemax={500.0}
                                  aria-valuenow={5.0}
                                >
                                  <div className="noUi-touch-area" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*end::Slider*/}
                      </div>
                      {/*end::Input group*/}
                    </div>
                    {/*end::Wrapper*/}
                  </div>
                  {/*end::Step 4*/}
                  {/*begin::Step 5*/}
                  <div data-kt-stepper-element="content" className="pending">
                    {/*begin::Wrapper*/}
                    <div className="w-100">
                      {/*begin::Heading*/}
                      <div className="pb-12 text-center">
                        {/*begin::Title*/}
                        <h1 className="fw-bold text-gray-900">
                          Campaign Created!
                        </h1>
                        {/*end::Title*/}
                        {/*begin::Description*/}
                        <div className="fw-semibold text-muted fs-4">
                          You will receive an email with with the summary of
                          your newly created campaign!
                        </div>
                        {/*end::Description*/}
                      </div>
                      {/*end::Heading*/}
                      {/*begin::Actions*/}
                      <div className="d-flex flex-center pb-20">
                        <button
                          id="kt_modal_create_campaign_create_new"
                          type="button"
                          className="btn btn-lg btn-light me-3"
                          data-kt-element="complete-start"
                        >
                          Create New Campaign
                        </button>
                        <a
                          href=""
                          className="btn btn-lg btn-primary"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Coming Soon"
                          data-kt-initialized={1}
                        >
                          View Campaign
                        </a>
                      </div>
                      {/*end::Actions*/}
                      {/*begin::Illustration*/}
                      <div className="text-center px-4">
                        <img src="" alt="" className="mww-100 mh-350px" />
                      </div>
                      {/*end::Illustration*/}
                    </div>
                  </div>
                  {/*end::Step 5*/}
                  {/*begin::Actions*/}
                  <div className="d-flex flex-stack pt-10">
                    {/*begin::Wrapper*/}
                    <div className="me-2">
                      <button
                        type="button"
                        className="btn btn-lg btn-light-primary me-3"
                        data-kt-stepper-action="previous"
                        data-kt-stepper-state="hide-on-last-step"
                        onClick={() => setSteps(2)}
                      >
                        <i className="ki-outline ki-arrow-left fs-3 me-1" />{" "}
                        Back
                      </button>
                    </div>
                    {/*end::Wrapper*/}
                    {/*begin::Wrapper*/}
                    <div>
                      <button
                        type="button"
                        className="btn btn-lg btn-primary"
                        data-kt-stepper-action="submit"
                      >
                        <span className="indicator-label">
                          Submit
                          <i className="ki-outline ki-arrow-right fs-3 ms-2 me-0" />{" "}
                        </span>
                        <span className="indicator-progress">
                          Please wait...{" "}
                          <span className="spinner-border spinner-border-sm align-middle ms-2" />
                        </span>
                      </button>
                      <button
                        type="button"
                        className="btn btn-lg btn-primary"
                        data-kt-stepper-action="next"
                        onClick={() => setSteps(4)}
                      >
                        Continue
                        <i className="ki-outline ki-arrow-right fs-3 ms-1 me-0" />{" "}
                      </button>
                    </div>
                    {/*end::Wrapper*/}
                  </div>
                  {/*end::Actions*/}
                </form>
                {/*end::Form*/}
              </div>
              {/*end::Stepper*/}
            </div>
            {/*begin::Modal body*/}
          </div>
        </div>
      </div>
    );
};

export default Step2;
