import React from "react";
import MessagesInbox from "./MessagesInbox";
import MessagesConversation from "./MessagesConversation";
import MessagesProfile from "./MessagesProfile";

const MessagesChat = ({ messageTab }: any) => {
  const [showProfile, setShowProfile] = React.useState<boolean>(false);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div style={{ width: `${showProfile ? "29%" : "40%"}` }}>
        <MessagesInbox messageTab={messageTab} />
      </div>

      <div style={{ width: `${showProfile ? "43%" : "58%"}` }}>
        <MessagesConversation setShowProfile={setShowProfile} />
      </div>
      {showProfile && (
        <div style={{ width: "25%" }}>
          <MessagesProfile setShowProfile={setShowProfile} />
        </div>
      )}
    </div>
  );
};

export { MessagesChat };
