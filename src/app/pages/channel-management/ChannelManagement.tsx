import React, { FC } from "react";
import { PageTitle } from "../../../_metronic/layout/core";
import { ChannelManagementHeader } from "./ChannelManagementHeader";
import ChannelManagementPages from "./ChannelManagementPages";

const ChannelManagement: FC = () => {
  const [channelTab, setChannelTab] = React.useState<string>("whatsapp");
  return (
    <>
      <div style={{ marginTop: -30 }}>
        <PageTitle breadcrumbs={[]}>Channel Management</PageTitle>
      </div>
      <ChannelManagementHeader
        channelTab={channelTab}
        setChannelTab={setChannelTab}
      />
      <ChannelManagementPages channelTab={channelTab} />
    </>
  );
};

export default ChannelManagement;
