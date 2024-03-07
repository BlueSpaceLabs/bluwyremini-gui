import React from "react";
import MessagesInbox from "./MessagesInbox";
import MessagesConversation from "./MessagesConversation";
import MessagesProfile from "./MessagesProfile";

const MessagesChat = ({ messageTab, selectedKeyWord, newMessageData }: any) => {
  const [showProfile, setShowProfile] = React.useState<boolean>(false);
  const [selectedInbox, setSelectedInbox] = React.useState(null);

  React.useEffect(() => {
    setSelectedInbox(null);
    setShowProfile(false);
  }, [messageTab]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div style={{ width: `${showProfile ? "29%" : "40%"}` }}>
        <MessagesInbox
          messageTab={messageTab}
          setSelectedUser={setSelectedInbox}
          newMessageData={newMessageData}
        />
      </div>

      <div style={{ width: `${showProfile ? "43%" : "58%"}` }}>
        <MessagesConversation
          setShowProfile={setShowProfile}
          selectedInbox={selectedInbox}
          messageTab={messageTab}
          selectedKeyWord={selectedKeyWord}
        />
      </div>
      {showProfile && (
        <div style={{ width: "25%" }}>
          <MessagesProfile
            setShowProfile={setShowProfile}
            selectedInbox={selectedInbox}
            messageTab={messageTab}
          />
        </div>
      )}
    </div>
  );
};

export { MessagesChat };
