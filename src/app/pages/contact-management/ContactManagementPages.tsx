import React from "react";
import WhatsappPage from "./WhatsappPage/WhatsappPage";
import { FacebookPageWrapper } from "./FacebookPage/FacebookPage";
import { TelegramPageWrapper } from "./TelegramPage/TelegramPage";
import { InstagramPageWrapper } from "./InstagramPage/InstagramPage";
import { BluwyrePageWrapper } from "./BluwyrePage/BluwyrePage";

const ContactManagementPages = ({ channelTab, accessKey }: any) => {
  if (channelTab === "whatsapp") {
    return <WhatsappPage channelName={channelTab} accessKey={accessKey} />;
  } else if (channelTab === "telegram") {
    return <TelegramPageWrapper />;
  } else if (channelTab === "facebook") {
    return <FacebookPageWrapper />;
  } else if (channelTab === "instagram") {
    return <InstagramPageWrapper />;
  } else if (channelTab === "bluwyre") {
    return <BluwyrePageWrapper />;
  } else {
    return null;
  }
};

export default ContactManagementPages;
