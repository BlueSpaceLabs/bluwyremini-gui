import React from "react";
import { KTCard } from "../../../../../_metronic/helpers";

import {
  ListViewProvider,
  useListView,
} from "../KeyWordsListView/core/ListViewProvider";
import { QueryRequestProvider } from "../KeyWordsListView/core/QueryRequestProvider";
import { QueryResponseProvider } from "../KeyWordsListView/core/QueryResponseProvider";
import { UsersListHeader } from "../KeyWordsListView/components/header/UsersListHeader";
import { UsersTable } from "../KeyWordsListView/table/UsersTable";
import { UserEditModal } from "../KeyWordsListView/user-edit-modal/UserEditModal";

const KeyWordsListView = () => {
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

const KeyWordsListViewWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <KeyWordsListView />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
);

export { KeyWordsListViewWrapper };
