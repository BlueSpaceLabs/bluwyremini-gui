import { FC } from "react";
import { KTIcon } from "../../../../../../_metronic/helpers";
import { ErrorMessage, Field } from "formik";

const Step1: FC = () => {
  return (
    <div className="w-100">
      <div className="pb-10 pb-lg-15">
        <h2 className="fw-bolder d-flex align-items-center text-gray-900">
          Setup Campaign
          <i
            className="fas fa-exclamation-circle ms-2 fs-7"
            data-bs-toggle="tooltip"
            title="Campaign Details needs to be set up."
          ></i>
        </h2>

        <div className="text-gray-500 fw-bold fs-6">
          If you need more info, please check out
          <a href="/dashboard" className="link-primary fw-bolder">
            {" "}
            Help Page
          </a>
          .
        </div>
      </div>

      <div className="fv-row">
        <div className="row">
          <h2 className="fw-bolder d-flex align-items-center text-gray-900">
            Select Channel
            <i
              className="fas fa-exclamation-circle ms-2 fs-7"
              data-bs-toggle="tooltip"
              title="Select the channel here."
            ></i>
          </h2>
          <div className="col-lg-6">
            <Field
              type="radio"
              className="btn-check"
              name="accountType"
              value="personal"
              id="kt_create_account_form_account_type_personal"
            />
            <label
              className="btn btn-outline btn-outline-dashed btn-outline-default p-2 d-flex align-items-center mb-10"
              htmlFor="kt_create_account_form_account_type_personal"
            >
              <KTIcon iconName="address-book" className="fs-3x me-5" />

              <span className="d-block fw-bold text-start">
                <span className="text-gray-900 fw-bolder d-block fs-4 mb-2">
                  Whatsapp
                </span>
              </span>
            </label>
          </div>

          <div className="col-lg-6">
            <Field
              type="radio"
              className="btn-check"
              name="accountType"
              value="corporate"
              id="kt_create_account_form_account_type_corporate"
            />
            <label
              className="btn btn-outline btn-outline-dashed btn-outline-default p-2 d-flex align-items-center"
              htmlFor="kt_create_account_form_account_type_corporate"
            >
              <KTIcon iconName="briefcase" className="fs-3x me-5" />

              <span className="d-block fw-bold text-start">
                <span className="text-gray-900 fw-bolder d-block fs-4 mb-2">
                  Telegram
                </span>
              </span>
            </label>
          </div>
          <div className="col-lg-6">
            <Field
              type="radio"
              className="btn-check"
              name="accountType"
              value="personal"
              id="kt_create_account_form_account_type_personal"
            />
            <label
              className="btn btn-outline btn-outline-dashed btn-outline-default p-2 d-flex align-items-center mb-10"
              htmlFor="kt_create_account_form_account_type_personal"
            >
              <KTIcon iconName="address-book" className="fs-3x me-5" />

              <span className="d-block fw-bold text-start">
                <span className="text-gray-900 fw-bolder d-block fs-4 mb-2">
                  Facebook
                </span>
              </span>
            </label>
          </div>
          <div className="col-lg-6">
            <Field
              type="radio"
              className="btn-check"
              name="accountType"
              value="personal"
              id="kt_create_account_form_account_type_personal"
            />
            <label
              className="btn btn-outline btn-outline-dashed btn-outline-default p-2 d-flex align-items-center mb-10"
              htmlFor="kt_create_account_form_account_type_personal"
            >
              <KTIcon iconName="address-book" className="fs-3x me-5" />

              <span className="d-block fw-bold text-start">
                <span className="text-gray-900 fw-bolder d-block fs-4 mb-2">
                  Instagram
                </span>
              </span>
            </label>
          </div>

          <div className="text-danger mt-2">
            <ErrorMessage name="accountType" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Step1 };
