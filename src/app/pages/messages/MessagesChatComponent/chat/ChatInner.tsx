import React, { FC, useState } from "react";
import clsx from "clsx";
import {
  defaultMessages,
  defaultUserInfos,
  MessageModel,
  UserInfoModel,
  messageFromClient,
} from "../../../../../_metronic/helpers";
import { useMutation } from "react-query";
import axios from "axios";
// type Props = {
//   selectedKeyWord?: string;
//   isDrawer?: boolean;
// };

const bufferMessages = defaultMessages;

const ChatConversation = ({
  isDrawer = false,
  selectedKeyWord,
  conversationData,
  selectedInbox,
  setSendMessageClick,
}: any) => {
  const [chatUpdateFlag, toggleChatUpdateFlat] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<MessageModel[]>(bufferMessages);
  const chatContainerRef = React.useRef<HTMLDivElement | null>(null);

  // const [userInfos] = useState<UserInfoModel[]>(defaultUserInfos);

  // console.log("selectedInbox", selectedInbox);

  const handleSendMessageClick = async () => {
    const storedData = sessionStorage.getItem("whatsAppStoredData");
    let whatsAppStoredData;
    if (storedData) whatsAppStoredData = JSON.parse(storedData);

    if (message.length > 0)
      try {
        const response = await axios.post(
          "http://3.108.229.60:8082/php-dialogflowcx-backend-service/channelWhatsapp/chatWithUser.php",
          {
            message: message,
            phoneNo: selectedInbox.custNumber,
            custName: selectedInbox.custName,
            userType: "agent",
            accesskey: whatsAppStoredData?.accessToken,
            displayPhoneNo: whatsAppStoredData?.displayNo,
            phoneNoId: whatsAppStoredData?.phoneNoId,
          }
        );

        setMessage("");
        // console.log("subhro 01", response);
        if (response?.status === 200) {
          // console.log("refetch 1");
          setSendMessageClick((preValue: boolean) => !preValue);
          //logic to refetch data
        }
        // Handle the response as needed
        // console.log(response.data);
      } catch (error) {
        // Handle errors
        console.error("Error:", error);
      }
  };

  const handleEndChatClick = async () => {
    const storedData = sessionStorage.getItem("whatsAppStoredData");
    let whatsAppStoredData;
    if (storedData) whatsAppStoredData = JSON.parse(storedData);

    try {
      const response = await axios.post(
        "http://3.108.229.60:8082/php-dialogflowcx-backend-service/channelWhatsapp/chatWithUser.php",
        {
          message:
            "Thank you. Please enter *Hi* to start new conversion for any query.",
          close_chat: 1,
          phoneNo: selectedInbox.custNumber,
          custName: selectedInbox.custName,
          userType: "agent",
          tenant: "bsl",
          accesskey: whatsAppStoredData?.accessToken,
          displayPhoneNo: whatsAppStoredData?.displayNo,
          phoneNoId: whatsAppStoredData?.phoneNoId,
        }
      );

      setMessage("");
      // console.log("subhro 01", response);
      // if (response?.status === 200) {
      //   // console.log("refetch 1");
      //   setSendMessageClick((preValue: boolean) => !preValue);
      //   //logic to refetch data
      // }
      // Handle the response as needed
      // console.log(response.data);
    } catch (error) {
      // Handle errors
      console.error("Error:", error);
    }
  };

  const onEnterPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      handleSendMessageClick();
    }
  };

  // const sendMessage = () => {
  //   const newMessage: MessageModel = {
  //     user: 2,
  //     type: "out",
  //     text: message,
  //     time: "Just now",
  //   };

  //   bufferMessages.push(newMessage);
  //   setMessages(bufferMessages);
  //   toggleChatUpdateFlat(!chatUpdateFlag);
  //   setMessage("");
  //   setTimeout(() => {
  //     bufferMessages.push(messageFromClient);
  //     setMessages(() => bufferMessages);
  //     toggleChatUpdateFlat((flag) => !flag);
  //   }, 1000);
  // };

  React.useEffect(() => {
    if (selectedKeyWord) setMessage(selectedKeyWord);
  }, [selectedKeyWord]);

  const calculateTimeDifference = (chatTime: number) => {
    const currentDate: any = new Date();
    const givenDate: any = new Date(chatTime);

    const differenceInMilliseconds = Math.abs(givenDate - currentDate);

    const days = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (differenceInMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (differenceInMilliseconds % (1000 * 60 * 60)) / (1000 * 60)
    );

    if (days > 0) return `${days} days`;
    else if (hours > 0) return `${hours} hrs`;
    else return `${minutes} mins`;
  };

  const handleNameInitialsFinder = (inputString: string) => {
    const words = inputString.split(" ");
    const initials = words.map((word) => word[0].toUpperCase());

    return initials.join("");
  };

  React.useEffect(() => {
    if (chatContainerRef.current) {
      const chatContainer = chatContainerRef.current;
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [conversationData]);

  return (
    <div
      className="card-body"
      id={isDrawer ? "kt_drawer_chat_messenger_body" : "kt_chat_messenger_body"}
    >
      <div
        className={clsx(
          "scroll-y me-n5 pe-5 h-250px"
          // , {
          //   "h-150px h-lg-auto": !isDrawer,
          // }
        )}
        data-kt-element="messages"
        data-kt-scroll="true"
        data-kt-scroll-activate="{default: false, lg: true}"
        data-kt-scroll-max-height="auto"
        data-kt-scroll-dependencies={
          isDrawer
            ? "#kt_drawer_chat_messenger_header, #kt_drawer_chat_messenger_footer"
            : "#kt_header, #kt_app_header, #kt_app_toolbar, #kt_toolbar, #kt_footer, #kt_app_footer, #kt_chat_messenger_header, #kt_chat_messenger_footer"
        }
        data-kt-scroll-wrappers={
          isDrawer
            ? "#kt_drawer_chat_messenger_body"
            : "#kt_content, #kt_app_content, #kt_chat_messenger_body"
        }
        data-kt-scroll-offset={isDrawer ? "0px" : "5px"}
        ref={chatContainerRef}
      >
        {conversationData.length > 0 ? (
          conversationData.map((message: any, index: number) => {
            // const userInfo = userInfos[message.custName];
            const state = message.userType === "customer" ? "info" : "primary";
            // const templateAttr = {};
            // if (message.template) {
            //   Object.defineProperty(templateAttr, "data-kt-element", {
            //     value: `template-${message.type}`,
            //   });
            // }
            // const contentClass = `${isDrawer ? "" : "d-flex"} justify-content-${
            //   message.type === "in" ? "start" : "end"
            // } mb-10`;

            return (
              <div
                key={`message${index}`}
                // className={clsx("d-flex", contentClass, "mb-10", {
                //   "d-none": message.template,
                // })}
                // {...templateAttr}
              >
                <div
                  className={clsx(
                    "d-flex flex-column align-items",
                    `align-items-${
                      message.userType === "customer" ? "start" : "end"
                    }`
                  )}
                >
                  <div className="d-flex align-items-center mb-2">
                    {message.userType === "customer" ? (
                      <>
                        {/* <div className="symbol  symbol-35px symbol-circle ">
                        <img
                          alt="Pic"
                          src={toAbsoluteUrl(`media/${userInfo.avatar}`)}
                        />
                      </div> */}
                        <div className="ms-3 d-flex gap-1 align-items-end">
                          <div className="symbol symbol-45px symbol-circle">
                            <span className="symbol-label bg-light-warning text-warning fs-6 fw-bolder">
                              {handleNameInitialsFinder(message.custName)}
                            </span>
                          </div>
                          {/* <a
                            // href="#"
                            className="fs-5 fw-bolder text-gray-900 text-hover-primary me-1"
                          >
                            {handleNameInitialsFinder(message.custName)}
                          </a> */}
                          <span className="text-muted fs-7 mb-1">
                            {calculateTimeDifference(
                              message.lastInteractionDatetime
                            )}
                            {/* {message.lastInteractionDatetime} */}
                          </span>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* <div className="me-3"> */}
                        {/* <span className="text-muted fs-7 mb-1">
                            {calculateTimeDifference(
                              message.lastInteractionDatetime
                            )}
                          </span> */}
                        {/* <a
                            href="#"
                            className="fs-5 fw-bolder text-gray-900 text-hover-primary ms-1"
                          >
                            You
                          </a> */}
                        {/* </div> */}

                        <div className="ms-3 d-flex gap-1 align-items-end">
                          <span className="text-muted fs-7 mb-1">
                            {calculateTimeDifference(
                              message.lastInteractionDatetime
                            )}
                          </span>

                          <div className="symbol symbol-45px symbol-circle">
                            <span className="symbol-label bg-light-warning text-warning fs-6 fw-bolder">
                              You
                            </span>
                          </div>
                        </div>
                        <div className="symbol  symbol-35px symbol-circle ">
                          {/* <img
                          alt="Pic"
                          src={toAbsoluteUrl(`media/${userInfo.avatar}`)}
                        /> */}
                        </div>
                      </>
                    )}
                  </div>

                  <div
                    className={clsx(
                      "p-5 rounded",
                      `bg-light-${state}`,
                      "text-gray-900 fw-bold mw-lg-400px",
                      `text-${
                        message.userType === "customer" ? "start" : "end"
                      }`
                    )}
                    data-kt-element="message-text"
                    dangerouslySetInnerHTML={{ __html: message.userInput }}
                  ></div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="fs-7 fw-bold text-gray-500">No messages to show.</div>
        )}
      </div>

      <div
        className="card-footer pt-4"
        id={
          isDrawer
            ? "kt_drawer_chat_messenger_footer"
            : "kt_chat_messenger_footer"
        }
      >
        <textarea
          className="form-control form-control-flush mb-3"
          rows={1}
          data-kt-element="input"
          placeholder="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={onEnterPress}
        ></textarea>

        <div className="d-flex flex-stack">
          <div className="d-flex align-items-center me-2">
            <button
              className="btn btn-sm btn-icon btn-active-light-primary me-1"
              type="button"
              data-bs-toggle="tooltip"
              title="Coming soon"
            >
              <i className="bi bi-paperclip fs-3"></i>
            </button>
            <button
              className="btn btn-sm btn-icon btn-active-light-primary me-1"
              type="button"
              data-bs-toggle="tooltip"
              title="Coming soon"
            >
              <i className="bi bi-upload fs-3"></i>
            </button>
            <button
              className="btn btn-sm btn-icon btn-active-light-primary me-1"
              type="button"
              data-bs-toggle="tooltip"
              title="Close Session"
              onClick={handleEndChatClick}
            >
              <i className="bi bi-x-circle fs-3"></i>
            </button>
          </div>
          <button
            className="btn btn-primary"
            type="button"
            data-kt-element="send"
            // onClick={sendMessage}
            onClick={handleSendMessageClick}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export { ChatConversation };
