import React from "react";
import { KTCard } from "../../../../_metronic/helpers";

import {
  ListViewProvider,
  useListView,
} from "../TicketsListView/core/ListViewProvider";
import { QueryRequestProvider } from "../TicketsListView/core/QueryRequestProvider";
import { QueryResponseProvider } from "../TicketsListView/core/QueryResponseProvider";
import { UsersListHeader } from "../TicketsListView/components/header/UsersListHeader";
import { UsersTable } from "../TicketsListView/table/UsersTable";
import { UserEditModal } from "../TicketsListView/user-edit-modal/UserEditModal";

const TicketsListView = () => {
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

const TicketsListViewViewWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <TicketsListView />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
);

export { TicketsListViewViewWrapper };
