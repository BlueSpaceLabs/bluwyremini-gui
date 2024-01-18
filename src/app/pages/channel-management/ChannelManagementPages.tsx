import React from "react";
import WhatsappPage from "./WhatsappPage/WhatsappPage";
import TelegramPage from "./TelegramPage";
import FacebookPage from "./FacebookPage";
import DialogFlowCXPage from "./DialogFlowCX";
import InstagramPage from "./InstagramPage";

const ChannelManagementPages = ({ channelTab, accessKey }: any) => {
  if (channelTab === "whatsapp") {
    return <WhatsappPage channelName={channelTab} accessKey={accessKey} />;
  } else if (channelTab === "telegram") {
    return <TelegramPage channelName={channelTab} accessKey={accessKey} />;
  } else if (channelTab === "facebook") {
    return <FacebookPage channelName={channelTab} accessKey={accessKey} />;
  } else if (channelTab === "instagram") {
    return <InstagramPage channelName={channelTab} accessKey={accessKey} />;
  } else if (channelTab === "dialogFlowCX") {
    return <DialogFlowCXPage channelName={channelTab} accessKey={accessKey} />;
  } else {
    return null;
  }
};

export default ChannelManagementPages;
