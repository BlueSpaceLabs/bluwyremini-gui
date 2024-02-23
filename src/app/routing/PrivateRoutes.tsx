import { lazy, FC, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { MasterLayout } from "../../_metronic/layout/MasterLayout";
import TopBarProgress from "react-topbar-progress-indicator";
import { DashboardWrapper } from "../pages/dashboard/DashboardWrapper";
import { MenuTestPage } from "../pages/MenuTestPage";
import { getCSSVariableValue } from "../../_metronic/assets/ts/_utils";
import { WithChildren } from "../../_metronic/helpers";
import ContactManagement from "../pages/contact-management/ContactManagement";
import TemplateManagement from "../pages/template-management/TemplateManagement";
import MessagesPage from "../pages/messages/MessagesPage";
//import CampaignManagement from "../pages/campaign-management/CampaignManagement";
// import StaticDataManagement from "../pages/static-data/StaticDataManagement";
// import Tickets from "../pages/tickets-management/TicketsManagement";
import Profile from "../pages/settings/profile/Profile";
import Sendmessage from "../pages/settings/send-message/Sendmessage";
//import KeyWordsPage from "../pages/settings/keywords/KeyWordsPage";
import KeyWordsPage from "../pages/settings/keywords";
import Faqs from "../pages/settings/Faqs";
import ChannelManagement from "../pages/channel-management/ChannelManagement";
import MediaManagement from "../pages/media-management/MediaManagement";
import AgentsPage from "../pages/agents-management";
import StaticDataManagement from "../pages/static-data";
import SignInPage from "../pages/login-management/SignIn";
import CampaignManagementPage from "../pages/campaign-management";

const PrivateRoutes = () => {
  const ProfilePage = lazy(() => import("../modules/profile/ProfilePage"));
  const WizardsPage = lazy(() => import("../modules/wizards/WizardsPage"));
  const AccountPage = lazy(() => import("../modules/accounts/AccountPage"));
  const WidgetsPage = lazy(() => import("../modules/widgets/WidgetsPage"));
  const ChatPage = lazy(() => import("../modules/apps/chat/ChatPage"));
  const UsersPage = lazy(
    () => import("../modules/apps/user-management/UsersPage")
  );

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}

        <Route path="sign-in" element={<SignInPage />} />
        <Route path="auth/*" element={<Navigate to="/dashboard" />} />
        {/* Pages */}
        <Route path="dashboard" element={<DashboardWrapper />} />

        <Route path="channels/" element={<ChannelManagement />} />
        <Route path="contact-management/*" element={<ContactManagement />} />
        <Route path="messages/*" element={<MessagesPage />} />
        <Route
          path="campaign-management"
          element={<CampaignManagementPage />}
        />

        <Route path="staticdatamanagement" element={<StaticDataManagement />} />
        <Route path="template-management/*" element={<TemplateManagement />} />
        <Route path="media-management/*" element={<MediaManagement />} />
        {/* <Route path="tickets-management/*" element={<Tickets />} /> */}
        <Route path="profile" element={<Profile />} />
        <Route path="sendmessage" element={<Sendmessage />} />
        <Route path="keywords" element={<KeyWordsPage />} />
        <Route path="agents" element={<AgentsPage />} />
        <Route path="faqs" element={<Faqs />} />
        {/* <Route path="tickets" element={<Tickets />} /> */}

        <Route path="menu-test" element={<MenuTestPage />} />
        {/* Lazy Modules */}
        <Route
          path="crafted/pages/profile/*"
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        />
        <Route
          path="crafted/account/*"
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
        />
        {/* <Route
          path='crafted/pages/wizards/*'
          element={
            <SuspensedView>
              <WizardsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/widgets/*'
          element={
            <SuspensedView>
              <WidgetsPage />
            </SuspensedView>
          }
        />
        
        <Route
          path='apps/chat/*'
          element={
            <SuspensedView>
              <ChatPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/user-management/*'
          element={
            <SuspensedView>
              <UsersPage />
            </SuspensedView>
          }
        />

        */}
        {/* Page Not Found */}
        <Route path="*" element={<Navigate to="/error/404" />} />
      </Route>
    </Routes>
  );
};

const SuspensedView: FC<WithChildren> = ({ children }) => {
  const baseColor = getCSSVariableValue("--bs-primary");
  TopBarProgress.config({
    barColors: {
      "0": baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  });
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>;
};

export { PrivateRoutes };
