import React from "react";

const Step1 = ({
  show,
  handleClose,
  setSteps,
  campaignInputData,
  setCampaignInputData,
}: any) => {
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
                className="stepper stepper-links d-flex flex-column"
                id="kt_modal_create_campaign_stepper"
                data-kt-stepper="true"
              >
                {/*begin::Nav*/}
                <div className="stepper-nav justify-content-center py-2">
                  {/*begin::Step 1*/}
                  <div
                    className="stepper-item me-5 me-md-15 current"
                    data-kt-stepper-element="nav"
                  >
                    <h3 className="stepper-title">Campaign Details</h3>
                  </div>
                  {/*end::Step 1*/}
                  {/*begin::Step 2*/}
                  <div
                    className="stepper-item me-5 me-md-15"
                    data-kt-stepper-element="nav"
                  >
                    {/* <h3 className="stepper-title">Creative Uploads</h3> */}
                    <h3 className="stepper-title">Channel</h3>
                  </div>
                  {/*end::Step 2*/}
                  {/*begin::Step 3*/}
                  <div
                    className="stepper-item me-5 me-md-15"
                    data-kt-stepper-element="nav"
                  >
                    {/* <h3 className="stepper-title">Channel</h3> */}
                    <h3 className="stepper-title">Creative Uploads</h3>
                  </div>
                  {/*end::Step 3*/}
                  {/*begin::Step 4*/}
                  <div
                    className="stepper-item me-5 me-md-15"
                    data-kt-stepper-element="nav"
                  >
                    <h3 className="stepper-title">Schedule Campaign</h3>
                  </div>
                  {/*end::Step 4*/}
                  {/*begin::Step 5*/}
                  <div className="stepper-item" data-kt-stepper-element="nav">
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
                  <div className="current" data-kt-stepper-element="content">
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
                      <div className="mb-10 fv-row fv-plugins-icon-container">
                        {/*begin::Label*/}
                        <label className="required form-label mb-3">
                          Campaign Name
                        </label>
                        {/*end::Label*/}
                        {/*begin::Input*/}
                        <input
                          type="text"
                          className="form-control form-control-lg form-control-solid"
                          name="campaignName"
                          // defaultValue=""
                          value={campaignInputData.campaignName}
                          onChange={(e) =>
                            setCampaignInputData({
                              ...campaignInputData,
                              campaignName: e.target.value,
                            })
                          }
                        />
                        {/*end::Input*/}
                        <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Input group*/}

                      {/*end::Input group*/}
                      {/*begin::Input group*/}
                      <div className="mb-10">
                        {/*begin::Label*/}
                        <label className="required fw-semibold fs-6 mb-5">
                          Campaign Goal
                        </label>
                        {/*end::Label*/}
                        {/*begin::Roles*/}

                        <select
                          className="form-select form-select-solid form-select-lg"
                          value={campaignInputData.campaignGoal}
                          onChange={(e) =>
                            setCampaignInputData({
                              ...campaignInputData,
                              campaignGoal: e.target.value,
                            })
                          }
                        >
                          <option value="Get more visitors">
                            Get more visitors
                          </option>
                          <option value="Get more messages on chat">
                            Get more messages on chat
                          </option>
                          <option value="Get more calls">Get more calls</option>
                          <option value="Get more likes">Get more likes</option>
                          <option value="Lead generation">
                            Lead generation
                          </option>
                        </select>

                        {/*end::Roles*/}
                      </div>
                      {/*end::Input group*/}

                      {/*begin::Input group*/}
                      <div className="mb-10 fv-row fv-plugins-icon-container">
                        {/*begin::Label*/}
                        <label className="required form-label mb-3">
                          Campaign Description
                        </label>
                        {/*end::Label*/}
                        {/*begin::Input*/}
                        <input
                          type="text"
                          className="form-control form-control-lg form-control-solid"
                          name="campaignDescription"
                          // defaultValue=""
                          value={campaignInputData.campaignDescription}
                          onChange={(e) =>
                            setCampaignInputData({
                              ...campaignInputData,
                              campaignDescription: e.target.value,
                            })
                          }
                        />
                        {/*end::Input*/}
                        <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                      </div>
                      {/*end::Input group*/}
                    </div>
                    {/*end::Wrapper*/}
                  </div>
                  {/*end::Step 1*/}
                  {/*begin::Step 2*/}
                  <div data-kt-stepper-element="content">
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
                        <div
                          className="dropzone dz-clickable"
                          id="kt_modal_create_campaign_files_upload"
                        >
                          {/*begin::Message*/}
                          <div className="dz-message needsclick">
                            {/*begin::Icon*/}
                            <i className="ki-outline ki-file-up fs-3hx text-primary" />{" "}
                            {/*end::Icon*/}
                            {/*begin::Info*/}
                            <div className="ms-4">
                              <h3 className="dfs-3 fw-bold text-gray-900 mb-1">
                                Drop campaign files here or click to upload.
                              </h3>
                              <span className="fw-semibold fs-4 text-muted">
                                Upload up to 10 files
                              </span>
                            </div>
                            {/*end::Info*/}
                          </div>
                        </div>
                        {/*end::Dropzone*/}
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Input group*/}
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
                                <img src="" alt="icon" />
                              </div>
                              {/*end::Avatar*/}
                              {/*begin::Details*/}
                              <div className="ms-6">
                                <a
                                  href="#"
                                  className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                >
                                  Product Specifications
                                </a>
                                <div className="fw-semibold text-muted">
                                  230kb
                                </div>
                              </div>
                              {/*end::Details*/}
                            </div>
                            {/*begin::Menu*/}
                            <div className="min-w-100px">
                              <select
                                className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                                data-control="select2"
                                data-hide-search="true"
                                data-placeholder="Edit"
                                data-select2-id="select2-data-13-b6x8"
                                tabIndex={-1}
                                aria-hidden="true"
                                data-kt-initialized={1}
                              >
                                <option data-select2-id="select2-data-15-2vcc" />
                                <option value={1}>Remove</option>
                                <option value={2}>Modify</option>
                                <option value={3}>Select</option>
                              </select>
                              <span
                                className="select2 select2-container select2-container--bootstrap5"
                                dir="ltr"
                                data-select2-id="select2-data-14-q90a"
                                style={{ width: "100%" }}
                              >
                                <span className="selection">
                                  <span
                                    className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                                    role="combobox"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    tabIndex={0}
                                    aria-disabled="false"
                                    aria-labelledby="select2-i227-container"
                                    aria-controls="select2-i227-container"
                                  >
                                    <span
                                      className="select2-selection__rendered"
                                      id="select2-i227-container"
                                      role="textbox"
                                      aria-readonly="true"
                                      title="Edit"
                                    >
                                      <span className="select2-selection__placeholder">
                                        Edit
                                      </span>
                                    </span>
                                    <span
                                      className="select2-selection__arrow"
                                      role="presentation"
                                    >
                                      <b role="presentation" />
                                    </span>
                                  </span>
                                </span>
                                <span
                                  className="dropdown-wrapper"
                                  aria-hidden="true"
                                />
                              </span>
                            </div>
                            {/*end::Menu*/}
                          </div>
                          {/*end::File*/}
                          {/*begin::File*/}
                          <div className="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
                            <div className="d-flex align-items-center">
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px">
                                <img src="" alt="icon" />
                              </div>
                              {/*end::Avatar*/}
                              {/*begin::Details*/}
                              <div className="ms-6">
                                <a
                                  href="#"
                                  className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                >
                                  Campaign Creative Poster
                                </a>
                                <div className="fw-semibold text-muted">
                                  2.4mb
                                </div>
                              </div>
                              {/*end::Details*/}
                            </div>
                            {/*begin::Menu*/}
                            <div className="min-w-100px">
                              <select
                                className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                                data-control="select2"
                                data-hide-search="true"
                                data-placeholder="Edit"
                                data-select2-id="select2-data-16-g2bd"
                                tabIndex={-1}
                                aria-hidden="true"
                                data-kt-initialized={1}
                              >
                                <option data-select2-id="select2-data-18-wys4" />
                                <option value={1}>Remove</option>
                                <option value={2}>Modify</option>
                                <option value={3}>Select</option>
                              </select>
                              <span
                                className="select2 select2-container select2-container--bootstrap5"
                                dir="ltr"
                                data-select2-id="select2-data-17-x196"
                                style={{ width: "100%" }}
                              >
                                <span className="selection">
                                  <span
                                    className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                                    role="combobox"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    tabIndex={0}
                                    aria-disabled="false"
                                    aria-labelledby="select2-ovgo-container"
                                    aria-controls="select2-ovgo-container"
                                  >
                                    <span
                                      className="select2-selection__rendered"
                                      id="select2-ovgo-container"
                                      role="textbox"
                                      aria-readonly="true"
                                      title="Edit"
                                    >
                                      <span className="select2-selection__placeholder">
                                        Edit
                                      </span>
                                    </span>
                                    <span
                                      className="select2-selection__arrow"
                                      role="presentation"
                                    >
                                      <b role="presentation" />
                                    </span>
                                  </span>
                                </span>
                                <span
                                  className="dropdown-wrapper"
                                  aria-hidden="true"
                                />
                              </span>
                            </div>
                            {/*end::Menu*/}
                          </div>
                          {/*end::File*/}
                          {/*begin::File*/}
                          <div className="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
                            <div className="d-flex align-items-center">
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px">
                                <img src="" alt="icon" />
                              </div>
                              {/*end::Avatar*/}
                              {/*begin::Details*/}
                              <div className="ms-6">
                                <a
                                  href="#"
                                  className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                >
                                  Campaign Landing Page Source
                                </a>
                                <div className="fw-semibold text-muted">
                                  1.12mb
                                </div>
                              </div>
                              {/*end::Details*/}
                            </div>
                            {/*begin::Menu*/}
                            <div className="min-w-100px">
                              <select
                                className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                                data-control="select2"
                                data-hide-search="true"
                                data-placeholder="Edit"
                                data-select2-id="select2-data-19-kqbi"
                                tabIndex={-1}
                                aria-hidden="true"
                                data-kt-initialized={1}
                              >
                                <option data-select2-id="select2-data-21-112k" />
                                <option value={1}>Remove</option>
                                <option value={2}>Modify</option>
                                <option value={3}>Select</option>
                              </select>
                              <span
                                className="select2 select2-container select2-container--bootstrap5"
                                dir="ltr"
                                data-select2-id="select2-data-20-ygh3"
                                style={{ width: "100%" }}
                              >
                                <span className="selection">
                                  <span
                                    className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                                    role="combobox"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    tabIndex={0}
                                    aria-disabled="false"
                                    aria-labelledby="select2-0wgd-container"
                                    aria-controls="select2-0wgd-container"
                                  >
                                    <span
                                      className="select2-selection__rendered"
                                      id="select2-0wgd-container"
                                      role="textbox"
                                      aria-readonly="true"
                                      title="Edit"
                                    >
                                      <span className="select2-selection__placeholder">
                                        Edit
                                      </span>
                                    </span>
                                    <span
                                      className="select2-selection__arrow"
                                      role="presentation"
                                    >
                                      <b role="presentation" />
                                    </span>
                                  </span>
                                </span>
                                <span
                                  className="dropdown-wrapper"
                                  aria-hidden="true"
                                />
                              </span>
                            </div>
                            {/*end::Menu*/}
                          </div>
                          {/*end::File*/}
                          {/*begin::File*/}
                          <div className="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
                            <div className="d-flex align-items-center">
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px">
                                <img src="" alt="icon" />
                              </div>
                              {/*end::Avatar*/}
                              {/*begin::Details*/}
                              <div className="ms-6">
                                <a
                                  href="#"
                                  className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                >
                                  Landing Page Styling
                                </a>
                                <div className="fw-semibold text-muted">
                                  85kb
                                </div>
                              </div>
                              {/*end::Details*/}
                            </div>
                            {/*begin::Menu*/}
                            <div className="min-w-100px">
                              <select
                                className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                                data-control="select2"
                                data-hide-search="true"
                                data-placeholder="Edit"
                                data-select2-id="select2-data-22-e2bk"
                                tabIndex={-1}
                                aria-hidden="true"
                                data-kt-initialized={1}
                              >
                                <option data-select2-id="select2-data-24-z2pn" />
                                <option value={1}>Remove</option>
                                <option value={2}>Modify</option>
                                <option value={3}>Select</option>
                              </select>
                              <span
                                className="select2 select2-container select2-container--bootstrap5"
                                dir="ltr"
                                data-select2-id="select2-data-23-ow50"
                                style={{ width: "100%" }}
                              >
                                <span className="selection">
                                  <span
                                    className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                                    role="combobox"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    tabIndex={0}
                                    aria-disabled="false"
                                    aria-labelledby="select2-5cf6-container"
                                    aria-controls="select2-5cf6-container"
                                  >
                                    <span
                                      className="select2-selection__rendered"
                                      id="select2-5cf6-container"
                                      role="textbox"
                                      aria-readonly="true"
                                      title="Edit"
                                    >
                                      <span className="select2-selection__placeholder">
                                        Edit
                                      </span>
                                    </span>
                                    <span
                                      className="select2-selection__arrow"
                                      role="presentation"
                                    >
                                      <b role="presentation" />
                                    </span>
                                  </span>
                                </span>
                                <span
                                  className="dropdown-wrapper"
                                  aria-hidden="true"
                                />
                              </span>
                            </div>
                            {/*end::Menu*/}
                          </div>
                          {/*end::File*/}
                          {/*begin::File*/}
                          <div className="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
                            <div className="d-flex align-items-center">
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px">
                                <img src="" alt="icon" />
                              </div>
                              {/*end::Avatar*/}
                              {/*begin::Details*/}
                              <div className="ms-6">
                                <a
                                  href="#"
                                  className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                >
                                  Design Source Files
                                </a>
                                <div className="fw-semibold text-muted">
                                  48mb
                                </div>
                              </div>
                              {/*end::Details*/}
                            </div>
                            {/*begin::Menu*/}
                            <div className="min-w-100px">
                              <select
                                className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                                data-control="select2"
                                data-hide-search="true"
                                data-placeholder="Edit"
                                data-select2-id="select2-data-25-1gdd"
                                tabIndex={-1}
                                aria-hidden="true"
                                data-kt-initialized={1}
                              >
                                <option data-select2-id="select2-data-27-uo92" />
                                <option value={1}>Remove</option>
                                <option value={2}>Modify</option>
                                <option value={3}>Select</option>
                              </select>
                              <span
                                className="select2 select2-container select2-container--bootstrap5"
                                dir="ltr"
                                data-select2-id="select2-data-26-blcs"
                                style={{ width: "100%" }}
                              >
                                <span className="selection">
                                  <span
                                    className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                                    role="combobox"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    tabIndex={0}
                                    aria-disabled="false"
                                    aria-labelledby="select2-733b-container"
                                    aria-controls="select2-733b-container"
                                  >
                                    <span
                                      className="select2-selection__rendered"
                                      id="select2-733b-container"
                                      role="textbox"
                                      aria-readonly="true"
                                      title="Edit"
                                    >
                                      <span className="select2-selection__placeholder">
                                        Edit
                                      </span>
                                    </span>
                                    <span
                                      className="select2-selection__arrow"
                                      role="presentation"
                                    >
                                      <b role="presentation" />
                                    </span>
                                  </span>
                                </span>
                                <span
                                  className="dropdown-wrapper"
                                  aria-hidden="true"
                                />
                              </span>
                            </div>
                            {/*end::Menu*/}
                          </div>
                          {/*end::File*/}
                          {/*begin::File*/}
                          <div className="d-flex flex-stack py-4 ">
                            <div className="d-flex align-items-center">
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px">
                                <img src="" alt="icon" />
                              </div>
                              {/*end::Avatar*/}
                              {/*begin::Details*/}
                              <div className="ms-6">
                                <a
                                  href="#"
                                  className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                >
                                  Campaign Plan Document
                                </a>
                                <div className="fw-semibold text-muted">
                                  27kb
                                </div>
                              </div>
                              {/*end::Details*/}
                            </div>
                            {/*begin::Menu*/}
                            <div className="min-w-100px">
                              <select
                                className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                                data-control="select2"
                                data-hide-search="true"
                                data-placeholder="Edit"
                                data-select2-id="select2-data-28-bgwr"
                                tabIndex={-1}
                                aria-hidden="true"
                                data-kt-initialized={1}
                              >
                                <option data-select2-id="select2-data-30-sh3i" />
                                <option value={1}>Remove</option>
                                <option value={2}>Modify</option>
                                <option value={3}>Select</option>
                              </select>
                              <span
                                className="select2 select2-container select2-container--bootstrap5"
                                dir="ltr"
                                data-select2-id="select2-data-29-qoia"
                                style={{ width: "100%" }}
                              >
                                <span className="selection">
                                  <span
                                    className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                                    role="combobox"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    tabIndex={0}
                                    aria-disabled="false"
                                    aria-labelledby="select2-3pgh-container"
                                    aria-controls="select2-3pgh-container"
                                  >
                                    <span
                                      className="select2-selection__rendered"
                                      id="select2-3pgh-container"
                                      role="textbox"
                                      aria-readonly="true"
                                      title="Edit"
                                    >
                                      <span className="select2-selection__placeholder">
                                        Edit
                                      </span>
                                    </span>
                                    <span
                                      className="select2-selection__arrow"
                                      role="presentation"
                                    >
                                      <b role="presentation" />
                                    </span>
                                  </span>
                                </span>
                                <span
                                  className="dropdown-wrapper"
                                  aria-hidden="true"
                                />
                              </span>
                            </div>
                            {/*end::Menu*/}
                          </div>
                          {/*end::File*/}
                        </div>
                        {/*end::Files*/}
                      </div>
                      {/*end::Input group*/}
                    </div>
                    {/*end::Wrapper*/}
                  </div>
                  {/*end::Step 2*/}
                  {/*begin::Step 3*/}
                  <div data-kt-stepper-element="content">
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
                  <div data-kt-stepper-element="content">
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
                  <div data-kt-stepper-element="content">
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
                        onClick={() => setSteps(2)}
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

export default Step1;
