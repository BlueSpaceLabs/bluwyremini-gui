import React from "react";
import { Navigate, Route, Routes, Outlet } from "react-router-dom";
import { PageTitle } from "../../../_metronic/layout/core";
import { MessagesHeader } from "./MessagesHeader";
import { MessagesChat } from "./MessagesChatComponent/MessagesChat";
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
  const [messageTab, SetMessageTab] = React.useState("all");

  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path="private"
          element={
            <div style={{marginTop:-30}}>
              <PageTitle breadcrumbs={[]}>Messages</PageTitle>
              <MessagesHeader
                messageTab={messageTab}
                SetMessageTab={SetMessageTab}
              />
              <MessagesChat messageTab={messageTab} />
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
