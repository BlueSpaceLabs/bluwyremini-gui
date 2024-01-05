import React from "react";
import { ChatInner, Dropdown1 } from "../../../../_metronic/partials";

//const MessagesProfile = ({ setShowProfile }) => {
  const MessagesProfile = ({ setShowProfile }: { setShowProfile: any }) => {
  return (
    <React.Fragment>
      <div className="card" id="kt_chat_messenger">
        <div className="card-header" id="kt_chat_messenger_header">
          <div className="card-title">
            <div
              className="symbol symbol-45px symbol-circle"
              style={{ marginLeft: "-20px" }}
            >
              <span className="symbol-label bg-light-danger text-danger fs-6 fw-bolder">
                B
              </span>
            </div>
            <div className="d-flex justify-content-center flex-column me-3">
              <a
                href="#"
                className="fs-4 fw-bolder text-gray-900 text-hover-primary me-1 mb-2 lh-1"
              >
                Brian Cox
              </a>

              <div className="mb-0 lh-1">
                <span className="badge badge-success badge-circle w-10px h-10px me-1"></span>
                <span className="fs-7 fw-bold text-gray-500">Active</span>
              </div>
            </div>
          </div>

          <div className="card-toolbar">
            <div className="me-n3">
              <button
                className="btn btn-sm btn-icon btn-active-light-primary"
                data-kt-menu-trigger="click"
                data-kt-menu-placement="bottom-end"
                data-kt-menu-flip="top-end"
                onClick={() => setShowProfile(false)}
              >
                <i className="ki-outline ki-cross fs-2" />{" "}
              </button>
              <Dropdown1 />
            </div>
          </div>
        </div>
        {/* <ChatInner /> */}
        <div className="d-flex flex-column p-4">
          <div className="py-2">
            <div className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2">
              Data 1
            </div>
            <div className="fw-bold text-gray-500">Data Details 1</div>
          </div>

          <div className="py-2">
            <div className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2">
              Data 2
            </div>
            <div className="fw-bold text-gray-500">Data Details 2</div>
          </div>

          <div className="py-2">
            <div className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2">
              Data 3
            </div>
            <div className="fw-bold text-gray-500">Data Details 3</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MessagesProfile;
