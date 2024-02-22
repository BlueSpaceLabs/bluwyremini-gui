import { useState } from "react";
import * as Yup from "yup";
import clsx from "clsx";
import { Link } from "react-router-dom";
import useAuthentication from "../../../useAuthentication";

export function SignInPageUI() {
  const [loading, setLoading] = useState(false);
  const {
    inputUserName,
    setInputUserName,
    inputUserPassword,
    setInputUserPassword,
    handleLoginClick,
  } = useAuthentication();

  return (
    <div
      className="form w-100"
      //onSubmit={formik.handleSubmit}
      noValidate
      id="kt_login_signin_form_testlogin"
    >
      {/* begin::Heading */}
      <div className="text-center mb-11">
        <h1 className="text-gray-900 fw-bolder mb-3">Sign In</h1>
        <div className="text-gray-500 fw-semibold fs-6">
          Your Social Campaigns
        </div>
      </div>
      {/* begin::Heading */}

      <div className="mb-10 bg-light-info p-8 rounded">
        <div className="text-info">
          Use account <strong>admin@demo.com</strong> and password{" "}
          <strong>demo</strong> to continue.
        </div>
      </div>

      {/* begin::Form group */}
      <div className="fv-row mb-8">
        <label className="form-label fs-6 fw-bolder text-gray-900">Email</label>
        <input
          placeholder="Email"
          className={clsx("form-control bg-transparent")}
          type="email"
          name="email"
          autoComplete="off"
          value={inputUserName}
          onChange={(e) => setInputUserName(e.target.value)}
        />

        {/*}        <div className='fv-plugins-message-container'>
            <span role='alert'>formik.errors.email</span>
          </div>*/}
      </div>
      {/* end::Form group */}

      {/* begin::Form group */}
      <div className="fv-row mb-3">
        <label className="form-label fw-bolder text-gray-900 fs-6 mb-0">
          Password
        </label>
        <input
          type="password"
          autoComplete="off"
          className={clsx("form-control bg-transparent")}
          value={inputUserPassword}
          onChange={(e) => setInputUserPassword(e.target.value)}
        />

        {/*}
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>formik.errors.password</span>
            </div>
          </div>*/}
      </div>
      {/* end::Form group */}

      {/* begin::Wrapper */}
      <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
        <div />

        {/* begin::Link */}
        <Link to="/auth/forgot-password" className="link-primary">
          Forgot Password ?
        </Link>
        {/* end::Link */}
      </div>
      {/* end::Wrapper */}

      {/* begin::Action */}
      <div className="d-grid mb-10">
        <button
          type="submit"
          id="kt_sign_in_submit"
          className="btn btn-primary"
          onClick={handleLoginClick}

          //disabled={formik.isSubmitting || !formik.isValid}
        >
          {/* {!loading && <span className='indicator-label'>Continue</span>}
          {loading && (
            <span className='indicator-progress' style={{display: 'block'}}>
              Please wait...
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
          )} */}
          Sign In
        </button>
      </div>
      {/* end::Action */}

      <div className="text-gray-500 text-center fw-semibold fs-6">
        Not a Member yet?{" "}
        <Link to="/auth/registration" className="link-primary">
          Sign up
        </Link>
      </div>
    </div>
  );
}
