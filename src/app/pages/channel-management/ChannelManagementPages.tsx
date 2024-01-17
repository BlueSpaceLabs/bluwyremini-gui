import React from "react";
import WhatsappPage from "./WhatsappPage/WhatsappPage";
import InstagramPage from "./InstagramPage/InstagramPage";
import TelegramPage from "./TelegramPage";
import FacebookPage from "./FacebookPage";
import DialogFlowCXPage from "./DialogFlowCX";

const ChannelManagementPages = ({ channelTab, accessKey }: any) => {
  if (channelTab === "whatsapp") {
    return <WhatsappPage channelName={channelTab} accessKey={accessKey} />;
  } else if (channelTab === "telegram") {
    return <TelegramPage />;
  } else if (channelTab === "facebook") {
    return <FacebookPage />;
  } else if (channelTab === "instagram") {
    return <InstagramPage />;
  } else if (channelTab === "dialogFlowCX") {
    return <DialogFlowCXPage channelName={channelTab} accessKey={accessKey} />;
  } else {
    return null;
  }
};

export default ChannelManagementPages;
