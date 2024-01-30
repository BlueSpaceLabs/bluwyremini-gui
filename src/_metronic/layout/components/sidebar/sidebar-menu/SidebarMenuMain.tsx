import { useIntl } from "react-intl";
import { KTIcon } from "../../../../helpers";
import { SidebarMenuItemWithSub } from "./SidebarMenuItemWithSub";
import { SidebarMenuItem } from "./SidebarMenuItem";

const SidebarMenuMain = () => {
  const intl = useIntl();

  return (
    <>
      <SidebarMenuItem
        to="/dashboard"
        icon="element-11"
        title={intl.formatMessage({ id: "MENU.DASHBOARD" })}
        fontIcon="bi-app-indicator"
      />
      <SidebarMenuItem
        to="/channels"
        icon="whatsapp"
        title="Channel Configurations"
        fontIcon="bi-layers"
      />
      <SidebarMenuItem
        to="/contact-management/"
        icon="phone"
        title="Contacts"
        fontIcon="bi-layers"
      />
      <SidebarMenuItem
        to="/campaign-management"
        icon="abstract-33"
        title="Outbound Campaigns"
        fontIcon="bi-layers"
      />
      <SidebarMenuItem
        to="/template-management"
        icon="document"
        title="Messaging Templates"
        fontIcon="bi-layers"
      />
      <SidebarMenuItem
        to="/media-management"
        icon="abstract-36"
        title="Content Library"
        fontIcon="bi-layers"
      />
      <SidebarMenuItem
        to="/messages/private"
        icon="messages"
        title="Messages Inbox"
        fontIcon="bi-layers"
      />

     {/*  <SidebarMenuItem
        to="/staticdatamanagement"
        icon="data"
        title="Static Data"
        fontIcon="bi-layers"
      />
      
      <SidebarMenuItem
        to="tickets-management/"
        icon="element-plus"
        title="Tickets"
        fontIcon="bi-layers"
      /> */}

      <SidebarMenuItemWithSub
        to="#"
        title="Configurations"
        icon="setting-2"
        fontIcon="bi-person"
      >
        <SidebarMenuItem to="/keywords" title="Canned Responses" hasBullet={true} />
        <SidebarMenuItem
          to="/sendmessage"
          title="Platform APIs"
          hasBullet={true}
        />
      </SidebarMenuItemWithSub>
      <SidebarMenuItem
        to=""
        icon="messages"
        title="Agents"
        fontIcon="bi-layers"
      />
      <SidebarMenuItem
        to="/crafted/account/overview"
        icon="messages"
        title="Profile Management"
        fontIcon="bi-layers"
      />
      <SidebarMenuItem
        to="/faqs"
        icon="messages"
        title="FAQs"
        fontIcon="bi-layers"
      />
    </>
  );
};

export { SidebarMenuMain };
