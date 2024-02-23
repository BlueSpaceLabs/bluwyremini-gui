import { FC } from "react";
import { Navigate, Routes, Route, Outlet } from "react-router-dom";
import { PageTitle } from "../../../_metronic/layout/core";
import { WhatsappPageWrapper } from "./WhatsappPage/WhatsappPage";
import { FacebookPageWrapper } from "./FacebookPage/FacebookPage";
import { TelegramPageWrapper } from "./TelegramPage/TelegramPage";
import { InstagramPageWrapper } from "./InstagramPage/InstagramPage";
import { TemplateManagementHeader } from "./TemplateManagementHeader";
import { KTCard } from "../../../_metronic/helpers";

const ComingSoon = () => {
  return (
    <KTCard>
      <div
        className="card p-3 d-flex justify-content-center align-items-center"
        style={{ height: "250px" }}
      >
        <h3 className="fw-bolder fs-1 text-gray-900">Coming Soon !</h3>
      </div>
    </KTCard>
  );
};
const TemplateManagement: FC = () => {
  return (
    <>
      {/*<PageTitle breadcrumbs={[]}>Templates</PageTitle>*/}
      <div style={{ marginTop: -30 }}>
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
                  {/* <WhatsappPageWrapper /> */}
                  <ComingSoon />
                </>
              }
            />
            <Route
              path="/facebook"
              element={
                <>
                  <PageTitle breadcrumbs={[]}>Templates </PageTitle>
                  {/* <FacebookPageWrapper /> */}
                  <ComingSoon />
                </>
              }
            />
            <Route
              path="/instagram"
              element={
                <>
                  <PageTitle breadcrumbs={[]}>Templates</PageTitle>
                  {/* <InstagramPageWrapper /> */}
                  <ComingSoon />
                </>
              }
            />
            <Route
              path="/telegram"
              element={
                <>
                  <PageTitle breadcrumbs={[]}>Templates </PageTitle>
                  {/* <TelegramPageWrapper /> */}
                  <ComingSoon />
                </>
              }
            />
            <Route
              index
              element={<Navigate to="/template-management/whatsapp" />}
            />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default TemplateManagement;
