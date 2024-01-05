import React from "react";
// import { Link, useLocation } from "react-router-dom";

const ContactManagementHeader = ({ channelTab, setChannelTab }: any) => {
  // const location = useLocation();

  return (
    <div className="card mb-5 mb-xl-10">
      <div className="card-body pt-2 pb-2">
        <div className="w-100 py-3 d-flex gap-8 fw-bold fs-6 ">
          <div
            className={`${
              channelTab === "whatsapp" ? "text-primary" : "text-gray-500"
            } `}
            style={{ cursor: "pointer" }}
            onClick={() => setChannelTab("whatsapp")}
          >
            Whatsapp
          </div>
          <div
            className={`${
              channelTab === "facebook" ? "text-primary" : "text-gray-500"
            } `}
            style={{ cursor: "pointer" }}
            onClick={() => setChannelTab("facebook")}
          >
            Messenger
          </div>
          <div
            className={`${
              channelTab === "instagram" ? "text-primary" : "text-gray-500"
            } `}
            style={{ cursor: "pointer" }}
            onClick={() => setChannelTab("instagram")}
          >
            Instagram
          </div>

          <div
            className={`${
              channelTab === "telegram" ? "text-primary" : "text-gray-500"
            } `}
            style={{ cursor: "pointer" }}
            onClick={() => setChannelTab("telegram")}
          >
            Telegram
          </div>

          <div
            className={`${
              channelTab === "bluwyre" ? "text-primary" : "text-gray-500"
            } `}
            style={{ cursor: "pointer" }}
            onClick={() => setChannelTab("bluwyre")}
          >
            Bluwyre
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactManagementHeader;
