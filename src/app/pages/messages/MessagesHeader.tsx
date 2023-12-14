import React from "react";
// import { Link, useLocation } from "react-router-dom";

const MessagesHeader = ({ messageTab, SetMessageTab }: any) => {
  //   const location = useLocation();

  return (
    <div className="card mb-5 mb-xl-10">
      <div className="card-body pt-2 pb-2">
        <div className="w-100 py-3 d-flex gap-8 fw-bold fs-6 ">
          <div
            className={`${
              messageTab === "all_messages" ? "text-primary" : "text-gray-500"
            } `}
            style={{ cursor: "pointer" }}
            onClick={() => SetMessageTab("all_messages")}
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
      </div>
    </div>
  );
};

export { MessagesHeader };
