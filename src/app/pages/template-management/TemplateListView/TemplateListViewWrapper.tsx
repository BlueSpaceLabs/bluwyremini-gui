import React from "react";
import { KTCard } from "../../../../_metronic/helpers";

import {
  ListViewProvider,
  useListView,
} from "../TemplateListView/core/ListViewProvider";
import { QueryRequestProvider } from "../TemplateListView/core/QueryRequestProvider";
import { QueryResponseProvider } from "../TemplateListView/core/QueryResponseProvider";
import { UsersListHeader } from "../TemplateListView/components/header/UsersListHeader";
import { UsersTable } from "../TemplateListView/table/UsersTable";
import { UserEditModal } from "../TemplateListView/user-edit-modal/UserEditModal";

const TemplateListView = () => {
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

const TemplateListViewWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <TemplateListView />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
);

export { TemplateListViewWrapper };
