import React from "react";
import { KTCard } from "../../../../_metronic/helpers";

import {
  ListViewProvider,
  useListView,
} from "../CampaignListView/core/ListViewProvider";
import { QueryRequestProvider } from "../CampaignListView/core/QueryRequestProvider";
import { QueryResponseProvider } from "../CampaignListView/core/QueryResponseProvider";
import { UsersListHeader } from "../CampaignListView/components/header/UsersListHeader";
import { UsersTable } from "../CampaignListView/table/UsersTable";
import { UserEditModal } from "../CampaignListView/user-edit-modal/UserEditModal";

const CampaignListView = () => {
  const { itemIdForUpdate } = useListView();
  return (
    <>
      <KTCard>
        <UsersListHeader />
        <UsersTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <UserEditModal />}
    </>
  );
};

const CampaignListViewWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <CampaignListView />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
);

export { CampaignListViewWrapper };
