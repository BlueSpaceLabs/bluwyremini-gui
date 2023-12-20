import React from "react";
import { KTCard } from "../../../../_metronic/helpers";

import { ListViewProvider, useListView } from "./core/ListViewProvider";
import { QueryRequestProvider } from "./core/QueryRequestProvider";
import { QueryResponseProvider } from "./core/QueryResponseProvider";
import { UsersListHeader } from "./components/header/UsersListHeader";
import { UsersTable } from "./table/UsersTable";
import { UserEditModal } from "./user-edit-modal/UserEditModal";

const BluwyrePage = () => {
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

const BluwyrePageWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <BluwyrePage />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
);

export { BluwyrePageWrapper };