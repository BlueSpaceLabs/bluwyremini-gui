import React from "react";
import WhatsappPage from "./WhatsappPage/WhatsappPage";
import { TelegramPageWrapper } from "./TelegramPage/TelegramPage";
import ChannelDetails from "./BluwyrePage";
import FacebookPage from "./FacebookPage";
import InstagramPage from "./InstagramPage";

const ContactManagementPages = ({ channelTab, accessKey }: any) => {
  if (channelTab === "whatsapp") {
    return <WhatsappPage channelName={channelTab} accessKey={accessKey} />;
  } else if (channelTab === "telegram") {
    return <TelegramPageWrapper />;
  } else if (channelTab === "facebook") {
    return <FacebookPage />;
  } else if (channelTab === "instagram") {
    return <InstagramPage />;
  } else if (channelTab === "bluwyre") {
    return <ChannelDetails />;
  } else {
    return null;
  }
};

export default ContactManagementPages;
