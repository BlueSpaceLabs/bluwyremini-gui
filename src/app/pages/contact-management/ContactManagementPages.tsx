import React from "react";
import WhatsappPage from "./WhatsappPage/WhatsappPage";
import ChannelDetails from "./BluwyrePage";
// import FacebookPage from "./FacebookPage";
// import InstagramPage from "./InstagramPage";
// import TelegramPage from "./TelegramPage";
import FaceBookTempPage from "./FacebookPage/Home";
import InstagramTempPage from "./InstagramPage/Home";
import TelegramTempPage from "./TelegramPage/Home";

const ContactManagementPages = ({ channelTab, accessKey }: any) => {
  if (channelTab === "whatsapp") {
    return <WhatsappPage channelName={channelTab} accessKey={accessKey} />;
  } else if (channelTab === "telegram") {
    // return <TelegramPage />;
    return <TelegramTempPage channelName={channelTab} accessKey={accessKey} />;
  } else if (channelTab === "facebook") {
    // return <FacebookPage />;
    return <FaceBookTempPage channelName={channelTab} accessKey={accessKey} />;
  } else if (channelTab === "instagram") {
    // return <InstagramPage />;
    return <InstagramTempPage channelName={channelTab} accessKey={accessKey} />;
  } else if (channelTab === "bluwyre") {
    return <ChannelDetails />;
  } else {
    return null;
  }
};

export default ContactManagementPages;
