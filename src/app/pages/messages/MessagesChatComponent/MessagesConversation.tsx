import React from "react";
import { ChatInner, Dropdown1 } from "../../../../_metronic/partials";
import { KTIcon } from "../../../../_metronic/helpers";

const MessagesConversation = ({ setShowProfile }) => {
  return (
    <React.Fragment>
      <div className="card" id="kt_chat_messenger">
        <div className="card-header" id="kt_chat_messenger_header">
          <div className="card-title">
            <div className="symbol-group symbol-hover"></div>
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
                className="btn btn-active-light-primary"
                data-kt-menu-trigger="click"
                data-kt-menu-placement="bottom-end"
                data-kt-menu-flip="top-end"
                onClick={() => setShowProfile(true)}
              >
                Profile Details
              </button>
              <Dropdown1 />
            </div>
          </div>
        </div>
        <ChatInner />
      </div>
    </React.Fragment>
  );
};

export default MessagesConversation;
