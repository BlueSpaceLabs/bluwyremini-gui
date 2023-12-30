import { FC } from "react";
import { KTIcon } from "../../../../../../_metronic/helpers";
import { Link } from "react-router-dom";

const Step5: FC = () => {
  return (
    <div className="w-100">
      <div className="pb-8 pb-lg-10">
        <h2 className="fw-bolder text-gray-900">Your Are Done!</h2>

        <div className="text-gray-500 fw-bold fs-6">
          If you need more info, please
          <Link to="/auth/login" className="link-primary fw-bolder">
            {" "}
            Sign In
          </Link>
          .
        </div>
      </div>

      <div className="mb-0">
        <div className="fs-6 text-gray-600 mb-5">
          Submit the campaign and you will receive an email with with the
          summary of your newly created campaign!
        </div>

        <div className="notice d-flex bg-light-warning rounded border-warning border border-dashed p-6">
          <KTIcon
            iconName="information-5"
            className="fs-2tx text-warning me-4"
          />
          <div className="d-flex flex-stack flex-grow-1">
            <div className="fw-bold">
              <h4 className="text-gray-800 fw-bolder">
                We need your attention!
              </h4>
              <div className="fs-6 text-gray-600">
                Please read the details guidelines before triggering the
                campaign.
                <a href="/dashboard" className="fw-bolder">
                  {" "}
                  Docs
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Step5 };
