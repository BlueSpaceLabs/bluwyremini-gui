import React from "react";
import WhatsappPage from "./WhatsappPage/WhatsappPage";
import TelegramPage from "./TelegramPage/TelegramPage";
import InstagramPage from "./InstagramPage/InstagramPage";
import FacebookPage from "./FacebookPage/FacebookPage";
import DialogFlowCXPage from "./DialogFlowCX/DialogFlowCXPage";

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
    return <DialogFlowCXPage />;
  } else {
    return null;
  }
};

export default ChannelManagementPages;
