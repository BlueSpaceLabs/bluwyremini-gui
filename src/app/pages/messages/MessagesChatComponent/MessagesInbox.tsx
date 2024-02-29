import React from "react";
import { KTIcon, toAbsoluteUrl } from "../../../../_metronic/helpers";
// import { useQuery } from "react-query";
// import axios from "axios";
// import WhatsAppInbox from "./Inbox/WhatsAppInbox";
// import TelegramInbox from "./Inbox/TelegramInbox";
// import InstagramInbox from "./Inbox/InstagramInbox";
// import FacebookInbox from "./Inbox/FacebookInbox";
import InboxList from "./Inbox/InboxList";

// const serviceInboxListData = async () => {
//   const url =
//     `${baseUrl}/getChatUsersList.php`;
//   const params = {
//     accessKey: "$2y$10$0MNB6SNrJCDmXpZgb14Cgu7r3ZcEVlbbk8XvmRn2x9hKZXebK5Grm",
//     id: "2",
//     channelName: "all",
//   };

//   const response = await axios.get(url, { params });

//   return response.data;
// };

const MessagesInbox = ({
  messageTab,
  setSelectedUser,
  newMessageData,
}: any) => {
  //   const [messageTab, SetMessageTab] = React.useState("all_messages");

  return (
    <React.Fragment>
      <div className="card card-flush">
        <div className="card-header pt-7" id="kt_chat_contacts_header">
          {/* <div className="w-100 py-3 d-flex justify-content-between flex-wrap fw-bold fs-7 text-gray-500">
        <div
          style={{ cursor: "pointer" }}
          onClick={() => SetMessageTab("all_messages")}
        >
          All Messages
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => SetMessageTab("whatsapp")}
        >
          Whatsapp
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => SetMessageTab("telegram")}
        >
          Telegram
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => SetMessageTab("instagram")}
        >
          Instagram
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => SetMessageTab("facebook")}
        >
          Facebook
        </div>
      </div> */}
          <form className="w-100 position-relative" autoComplete="off">
            <KTIcon
              iconName="magnifier"
              className="fs-2 text-lg-1 text-gray-500 position-absolute top-50 ms-5 translate-middle-y"
            />

            <input
              type="text"
              className="form-control form-control-solid px-15"
              name="search"
              placeholder="Search by username or email..."
            />
          </form>
        </div>

        <div
          className="card-body pt-5 scroll-y"
          id="kt_chat_contacts_body"
          style={{ height: "438px" }}
        >
          <InboxList
            inboxChannel={messageTab}
            setSelectedUser={setSelectedUser}
            newMessageData={newMessageData}
          />
          {/* <div
            className="scroll-y me-n5 pe-5 h-200px h-lg-auto"
            data-kt-scroll="true"
            data-kt-scroll-activate="{default: false, lg: true}"
            data-kt-scroll-max-height="auto"
            data-kt-scroll-dependencies="#kt_header, #kt_toolbar, #kt_footer, #kt_chat_contacts_header"
            data-kt-scroll-wrappers="#kt_content, #kt_chat_contacts_body"
            data-kt-scroll-offset="0px"
          > */}
          {/* {(messageTab === "telegram" || messageTab === "all_messages") && (
              <TelegramInbox />
            )}

            <div className="separator separator-dashed d-none"></div> */}

          {/* {(messageTab === "whatsapp" || messageTab === "all_messages") && (
              <WhatsAppInbox inboxListData={inboxListData} />
            )} */}

          {/* <div className="separator separator-dashed d-none"></div>

            {(messageTab === "instagram" || messageTab === "all_messages") && (
              <InstagramInbox />
            )} */}
          {/* 
            <div className="separator separator-dashed d-none"></div>

            {(messageTab === "facebook" || messageTab === "all_messages") && (
              <FacebookInbox />
            )} */}

          {/* <div className="separator separator-dashed d-none"></div> */}

          {/* {(messageTab === "all_messages" || "whatsapp") && (
          <div className="d-flex flex-stack py-4">
            <div className="d-flex align-items-center">
              <div className="symbol symbol-45px symbol-circle">
                <img
                  alt="Pic"
                  src={toAbsoluteUrl("media/avatars/300-9.jpg")}
                />
              </div>

              <div className="ms-5">
                <a
                  href="#"
                  className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                >
                  Francis Mitcham
                </a>
                <div className="fw-bold text-gray-500">
                  f.mitcham@kpmg.com.au
                </div>
              </div>
            </div>

            <div className="d-flex flex-column align-items-end ms-2">
              <span className="text-muted fs-7 mb-1">5 hrs</span>
              <span className="badge badge-sm badge-circle badge-light-success">
                6
              </span>
            </div>
          </div>
        )} */}

          {/* <div className="separator separator-dashed d-none"></div> */}

          {/* {(messageTab === "all_messages" || "whatsapp") && (
          <div className="d-flex flex-stack py-4">
            <div className="d-flex align-items-center">
              <div className="symbol symbol-45px symbol-circle">
                <span className="symbol-label bg-light-danger text-danger fs-6 fw-bolder">
                  O
                </span>
                <div className="symbol-badge bg-success start-100 top-100 border-4 h-15px w-15px ms-n2 mt-n2"></div>
              </div>

              <div className="ms-5">
                <a
                  href="#"
                  className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                >
                  Olivia Wild
                </a>
                <div className="fw-bold text-gray-500">
                  olivia@corpmail.com
                </div>
              </div>
            </div>

            <div className="d-flex flex-column align-items-end ms-2">
              <span className="text-muted fs-7 mb-1">1 week</span>
            </div>
          </div>
        )} */}

          {/* <div className="separator separator-dashed d-none"></div> */}

          {/* {(messageTab === "all_messages" || "whatsapp") && (
          <div className="d-flex flex-stack py-4">
            <div className="d-flex align-items-center">
              <div className="symbol symbol-45px symbol-circle">
                <span className="symbol-label bg-light-primary text-primary fs-6 fw-bolder">
                  N
                </span>
              </div>

              <div className="ms-5">
                <a
                  href="#"
                  className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                >
                  Neil Owen
                </a>
                <div className="fw-bold text-gray-500">
                  owen.neil@gmail.com
                </div>
              </div>
            </div>

            <div className="d-flex flex-column align-items-end ms-2">
              <span className="text-muted fs-7 mb-1">20 hrs</span>
              <span className="badge badge-sm badge-circle badge-light-success">
                6
              </span>
            </div>
          </div>
        )} */}
          {/* </div> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default MessagesInbox;
