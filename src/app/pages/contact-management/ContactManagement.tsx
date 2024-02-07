import React from "react";
import { PageTitle } from "../../../_metronic/layout/core";
import ContactManagementPages from "./ContactManagementPages";
import ContactManagementHeader from "./ContactManagementHeader";

const accessKey =
  "$2y$10$0MNB6SNrJCDmXpZgb14Cgu7r3ZcEVlbbk8XvmRn2x9hKZXebK5Grm";

const ContactManagement: React.FC = () => {
  const [channelTab, setChannelTab] = React.useState<string>("whatsapp");

  return (
    <div style={{marginTop:-30}}>
      <PageTitle breadcrumbs={[]}>Contact Management</PageTitle>
      <ContactManagementHeader
        channelTab={channelTab}
        setChannelTab={setChannelTab}
      />
      <ContactManagementPages channelTab={channelTab} accessKey={accessKey} />
    </div>
  );
};

export default ContactManagement;
