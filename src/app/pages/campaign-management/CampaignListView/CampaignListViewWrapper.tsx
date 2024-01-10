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
import CustomCampaignTable from "./CustomTable";
import { useQuery } from "react-query";
import { getCampaignDataAPI } from "../../../services/CampaignManagement";

const accessKey =
  "$2y$10$0MNB6SNrJCDmXpZgb14Cgu7r3ZcEVlbbk8XvmRn2x9hKZXebK5Grm";

const CampaignListView = () => {
  const { itemIdForUpdate } = useListView();

  const [campaignListViewData, setCampaignListViewData] = React.useState([]);

  const {
    data: getCampaignData,
    isLoading,
    error,
  } = useQuery("getCampaignData", () => getCampaignDataAPI(accessKey));

  React.useEffect(() => {
    console.log({ getCampaignData });
    if (getCampaignData?.length > 0) setCampaignListViewData(getCampaignData);
  }, [getCampaignData]);

  return (
    <>
      <KTCard>
        <UsersListHeader />
        {/* <UsersTable /> */}

        <CustomCampaignTable tableData={campaignListViewData} />
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
