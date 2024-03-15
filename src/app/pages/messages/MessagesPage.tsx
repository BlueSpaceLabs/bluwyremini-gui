import React, { useEffect } from "react";
import { Navigate, Route, Routes, Outlet } from "react-router-dom";
import { PageTitle } from "../../../_metronic/layout/core";
import { MessagesHeader } from "./MessagesHeader";
import { MessagesChat } from "./MessagesChatComponent/MessagesChat";
import axios from "axios";
import useStaticData from "../../StaticData";
// import { Private } from "./components/Private";
// import { Group } from "./components/Group";
// import { Drawer } from "./components/Drawer";

// const chatBreadCrumbs: Array<PageLink> = [
//   {
//     title: "Chat",
//     path: "messages/private-chat",
//     isSeparator: false,
//     isActive: false,
//   },
//   {
//     title: "",
//     path: "",
//     isSeparator: true,
//     isActive: false,
//   },
// ];

const MessagesPage = () => {
  const { baseUrl } = useStaticData();

  const [messageTab, setMessageTab] = React.useState("all");
  // const [selectedKeyWord, setSelectedKeyWord] = React.useState("");
  const [messageUnreadCount, setMessageUnreadCount] = React.useState(null);

  const storedUserId = sessionStorage.getItem("userId");
  const storedUserType = sessionStorage.getItem("userType");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `${baseUrl}/getMsgUnreadCount.php`;
        const accessKey = sessionStorage.getItem("accessKey");

        const response = await axios.get(url, {
          params: {
            accessKey: accessKey,
            assignedTo: storedUserId,
            userType: storedUserType === "ADMIN_ROLE" ? "admin" : "agent",
          },
        });
        // console.log("response getMsgUnreadCount", response.data);

        setMessageUnreadCount(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    // Fetch unread message count initially
    fetchData();

    // Poll for unread message count every 5 seconds (adjust as needed)
    const intervalUnreadMessageCountFetch = setInterval(fetchData, 1000 * 5);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalUnreadMessageCountFetch);
  }, []);

  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path="private"
          element={
            <div style={{ marginTop: -30 }}>
              <PageTitle breadcrumbs={[]}>Messages</PageTitle>
              <MessagesHeader
                messageTab={messageTab}
                setMessageTab={setMessageTab}
                // selectedKeyWord={selectedKeyWord}
                // setSelectedKeyWord={setSelectedKeyWord}
                messageUnreadCount={messageUnreadCount}
                totalMessage={
                  messageUnreadCount?.totalCount
                    ? Number(messageUnreadCount?.totalCount)
                    : 0
                }
              />

              <MessagesChat
                messageTab={messageTab}
                // selectedKeyWord={selectedKeyWord}
                newMessageData={messageUnreadCount?.userMsgCountData}
              />
            </div>
          }
        />
        {/* <Route
          path="group"
          element={
            <>
              <PageTitle breadcrumbs={[]}>Group chat</PageTitle>
              <Group />
            </>
          }
        />
        <Route
          path="drawer-chat"
          element={
            <>
              <PageTitle breadcrumbs={[]}>Drawer chat</PageTitle>
              <Drawer />
            </>
          }
        /> */}
        <Route index element={<Navigate to="/messages/private" />} />
      </Route>
    </Routes>
  );
};

export default MessagesPage;
