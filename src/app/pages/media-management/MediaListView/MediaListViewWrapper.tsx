import React from "react";
import { KTCard } from "../../../../_metronic/helpers";

import {
  ListViewProvider,
  useListView,
} from "../MediaListView/core/ListViewProvider";
import { QueryRequestProvider } from "../MediaListView/core/QueryRequestProvider";
import { QueryResponseProvider } from "../MediaListView/core/QueryResponseProvider";
import { UsersListHeader } from "../MediaListView/components/header/UsersListHeader";
import { UsersTable } from "../MediaListView/table/UsersTable";
import { UserEditModal } from "../MediaListView/user-edit-modal/UserEditModal";

const MediaListView = () => {
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

const MediaListViewWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <MediaListView />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
);

export { MediaListViewWrapper };
