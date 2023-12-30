import { FC } from "react";
import { Navigate, Routes, Route, Outlet } from "react-router-dom";
import { PageTitle } from "../../../_metronic/layout/core";
import { WhatsappPageWrapper } from "./WhatsappPage/WhatsappPage";
import { FacebookPageWrapper } from "./FacebookPage/FacebookPage";
import { TelegramPageWrapper } from "./TelegramPage/TelegramPage";
import { InstagramPageWrapper } from "./InstagramPage/InstagramPage";
import { TemplateManagementHeader } from "./TemplateManagementHeader";

const TemplateManagement: FC = () => {
  return (
    <>
      {/*<PageTitle breadcrumbs={[]}>Templates</PageTitle>*/}
      <Routes>
        <Route
          element={
            <>
              <TemplateManagementHeader />
              <Outlet />
            </>
          }
        >
          <Route
            path="/whatsapp"
            element={
              <>
                <PageTitle breadcrumbs={[]}> Templates </PageTitle>
                <WhatsappPageWrapper />
              </>
            }
          />

          <Route
            path="/facebook"
            element={
              <>
                <PageTitle breadcrumbs={[]}>Templates </PageTitle>
                <FacebookPageWrapper />
              </>
            }
          />
          <Route
            path="/instagram"
            element={
              <>
                <PageTitle breadcrumbs={[]}>Templates</PageTitle>
                <InstagramPageWrapper />
              </>
            }
          />
          <Route
            path="/telegram"
            element={
              <>
                <PageTitle breadcrumbs={[]}>Templates </PageTitle>
                <TelegramPageWrapper />
              </>
            }
          />
          <Route
            index
            element={<Navigate to="/template-management/whatsapp" />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default TemplateManagement;
