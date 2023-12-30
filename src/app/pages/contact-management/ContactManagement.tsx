import { FC } from "react";
import { Navigate, Routes, Route, Outlet } from "react-router-dom";
import { PageTitle } from "../../../_metronic/layout/core";
import { ContactManagementHeader } from "./ContactManagementHeader";
import { WhatsappPageWrapper } from "./WhatsappPage/WhatsappPage";
import { FacebookPageWrapper } from "./FacebookPage/FacebookPage";
import { TelegramPageWrapper } from "./TelegramPage/TelegramPage";
import { InstagramPageWrapper } from "./InstagramPage/InstagramPage";
import { BluwyrePageWrapper } from "./BluwyrePage/BluwyrePage";

const ContactManagement: FC = () => {
  return (
    <>
      {/*<PageTitle breadcrumbs={[]}>Contact Management</PageTitle>*/}
      <Routes>
        <Route
          element={
            <>
              <ContactManagementHeader />
              <Outlet />
            </>
          }
        >
          <Route
            path="/whatsapp"
            element={
              <>
                <PageTitle breadcrumbs={[]}>Contact Management </PageTitle>
                <WhatsappPageWrapper />
              </>
            }
          />

          <Route
            path="/facebook"
            element={
              <>
                <PageTitle breadcrumbs={[]}>Contact Management </PageTitle>
                <FacebookPageWrapper />
              </>
            }
          />
          <Route
            path="/instagram"
            element={
              <>
                <PageTitle breadcrumbs={[]}>Contact Management</PageTitle>
                <InstagramPageWrapper />
              </>
            }
          />
          <Route
            path="/telegram"
            element={
              <>
                <PageTitle breadcrumbs={[]}>Contact Management </PageTitle>
                <TelegramPageWrapper />
              </>
            }
          />
          <Route
            path="/bluwyre"
            element={
              <>
                <PageTitle breadcrumbs={[]}>Contact Management</PageTitle>
                <BluwyrePageWrapper />
              </>
            }
          />
          <Route
            index
            element={<Navigate to="/contact-management/whatsapp" />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default ContactManagement;
