import React from "react";
import WhatsappPage from "./WhatsappPage/WhatsappPage";
import TelegramPage from "./TelegramPage/TelegramPage";
import InstagramPage from "./InstagramPage/InstagramPage";
import FacebookPage from "./FacebookPage/FacebookPage";

const ChannelManagementPages = ({ channelTab }: any) => {
  if (channelTab === "whatsapp") {
    return <WhatsappPage />;
  } else if (channelTab === "telegram") {
    return <TelegramPage />;
  } else if (channelTab === "facebook") {
    return <FacebookPage />;
  } else if (channelTab === "instagram") {
    return <InstagramPage />;
  } else {
    return null;
  }
};

export default ChannelManagementPages;
