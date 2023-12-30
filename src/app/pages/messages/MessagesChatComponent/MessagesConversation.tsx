import React from "react";
// import {  Dropdown1 } from "../../../../_metronic/partials";
// import { KTIcon } from "../../../../_metronic/helpers";
import { ChatConversation } from "./chat/ChatInner";

const MessagesConversation = ({ setShowProfile }: any) => {
  const [selectedKeyWord, setSelectedKeyWord] = React.useState("");

  const handleSelectChange = (event: any) => {
    setSelectedKeyWord(event.target.value);
  };

  return (
    <React.Fragment>
      <div className="card" id="kt_chat_messenger">
        <div className="card-header" id="kt_chat_messenger_header">
          <div className="card-title">
            <div className="symbol-group symbol-hover"></div>
            <div className="d-flex justify-content-center flex-column me-3">
              <span
                className="fs-4 fw-bolder text-gray-900 text-hover-primary me-1 mb-2 lh-1"
                style={{ cursor: "pointer" }}
                onClick={() => setShowProfile(true)}
              >
                Brian Cox
              </span>

              <div className="mb-0 lh-1">
                <span className="badge badge-success badge-circle w-10px h-10px me-1"></span>
                <span className="fs-7 fw-bold text-gray-500">Active</span>
              </div>
            </div>
          </div>

          <div className="card-toolbar">
            <div className="col-lg-8 fv-row" style={{ width: "200px" }}>
              <select
                className="form-select form-select-solid form-select-lg"
                value={selectedKeyWord}
                onChange={handleSelectChange}
              >
                <option value="" selected disabled>
                  Select KeyWord
                </option>
                <option value="kayword_1">KeyWord 1</option>
                <option value="kayword_2">KeyWord 2</option>
                <option value="kayword_3">KeyWord 3</option>
                <option value="kayword_4">KeyWord 4</option>
              </select>
            </div>
            {/* <div className="me-n3">
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
            </div> */}
          </div>
        </div>
        <ChatConversation selectedKeyWord={selectedKeyWord} />
      </div>
    </React.Fragment>
  );
};

export default MessagesConversation;
