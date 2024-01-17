import React from "react";
import { KTIcon } from "../../../_metronic/helpers";
import TicketsModal from "./MessagesChatComponent/TicketsModal/TicketsModal";
// import { Link, useLocation } from "react-router-dom";

const initialValue = {
  channelName: null,
  config1Data: null,
  config2Data: null,
  config3Data: null,
  config4Data: null,
};

const MessagesHeader = ({ messageTab, SetMessageTab }: any) => {
  //   const location = useLocation();
  const [showTicketsModal, setShowTicketsModal] =
    React.useState<boolean>(false);
  const [createTicketsData, setCreateTicketsData] =
    React.useState<any>(initialValue);

  return (
    <div className="card mb-5 mb-xl-10">
      <div className="card-body pt-2 pb-2 d-flex align-items-center">
        <div className="w-75 py-3 d-flex gap-8 fw-bold fs-6 ">
          <div
            className={`${
              messageTab === "all" ? "text-primary" : "text-gray-500"
            } `}
            style={{ cursor: "pointer" }}
            onClick={() => SetMessageTab("all")}
          >
            All Messages
          </div>
          <div
            className={`${
              messageTab === "whatsapp" ? "text-primary" : "text-gray-500"
            } `}
            style={{ cursor: "pointer" }}
            onClick={() => SetMessageTab("whatsapp")}
          >
            Whatsapp
          </div>
          <div
            className={`${
              messageTab === "telegram" ? "text-primary" : "text-gray-500"
            } `}
            style={{ cursor: "pointer" }}
            onClick={() => SetMessageTab("telegram")}
          >
            Telegram
          </div>
          <div
            className={`${
              messageTab === "instagram" ? "text-primary" : "text-gray-500"
            } `}
            style={{ cursor: "pointer" }}
            onClick={() => SetMessageTab("instagram")}
          >
            Instagram
          </div>
          <div
            className={`${
              messageTab === "facebook" ? "text-primary" : "text-gray-500"
            } `}
            style={{ cursor: "pointer" }}
            onClick={() => SetMessageTab("facebook")}
          >
            Facebook
          </div>
        </div>
        <div className="w-25 d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setShowTicketsModal(true)}
          >
            <KTIcon iconName="plus" className="fs-2" />
            Create Ticket
          </button>
        </div>
      </div>
      <TicketsModal
        show={showTicketsModal}
        handleClose={() => setShowTicketsModal(false)}
        setData={setCreateTicketsData}
      />
    </div>
  );
};

export { MessagesHeader };
