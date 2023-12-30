import { FC } from "react";
import { Field, ErrorMessage } from "formik";

const Step3: FC = () => {
  return (
    <div className="w-100">
      <div className="pb-10 pb-lg-12">
        <h2 className="fw-bolder text-gray-900">Upload Files</h2>

        <div className="text-gray-500 fw-bold fs-6">
          If you need more info, please check
          <a href="/dashboard" className="link-primary fw-bolder">
            {" "}
            Campaign Guidelines
          </a>
          .
        </div>
      </div>

      {/* begin::Input group */}
      <div className="fv-row mb-10">
        {/*begin::Dropzone*/}
        <div
          className="dropzone dz-clickable"
          id="kt_modal_create_campaign_files_upload"
        >
          {/*begin::Message*/}
          <div className="dz-message needsclick">
            {/*begin::Icon*/}
            <i className="ki-duotone ki-file-up fs-3hx text-primary">
              <span className="path1" />
              <span className="path2" />
            </i>{" "}
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
      {/* end::Input group */}

      {/* <div className="fv-row mb-10">
        <label className="form-label required">Business Name</label>

        <Field
          name="businessName"
          className="form-control form-control-lg form-control-solid"
        />
        <div className="text-danger mt-2">
          <ErrorMessage name="businessName" />
        </div>
      </div> */}

      {/* <div className="fv-row mb-10">
        <label className="d-flex align-items-center form-label">
          <span className="required">Shortened Descriptor</span>
        </label>

        <Field
          name="businessDescriptor"
          className="form-control form-control-lg form-control-solid"
        />
        <div className="text-danger mt-2">
          <ErrorMessage name="businessDescriptor" />
        </div>

        <div className="form-text">
          Customers will see this shortened version of your statement descriptor
        </div>
      </div> */}

      <div className="fv-row mb-10">
        <label className="form-label required">Template Type</label>

        <Field
          as="select"
          name="businessType"
          className="form-select form-select-lg form-select-solid"
        >
          <option></option>
          <option value="1">Template Type 1</option>
          <option value="1">Template Type 2</option>
          <option value="2">Template Type 3</option>
        </Field>
        <div className="text-danger mt-2">
          <ErrorMessage name="businessType" />
        </div>
      </div>

      <div className="fv-row mb-10">
        <label className="form-label">Template Description</label>

        <Field
          as="textarea"
          name="businessDescription"
          className="form-control form-control-lg form-control-solid"
          rows={3}
        ></Field>
      </div>

      {/* <div className="fv-row mb-0">
        <label className="fs-6 fw-bold form-label required">
          Contact Email
        </label>

        <Field
          name="businessEmail"
          className="form-control form-control-lg form-control-solid"
        />
        <div className="text-danger mt-2">
          <ErrorMessage name="businessEmail" />
        </div>
      </div> */}
    </div>
  );
};

export { Step3 };
