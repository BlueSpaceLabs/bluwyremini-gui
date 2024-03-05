import React, { useEffect, useState } from "react";
import { KTCard } from "../../../../_metronic/helpers";

import {
  ListViewProvider,
  useListView,
} from "../CampaignListView/core/ListViewProvider";
import { QueryRequestProvider } from "../CampaignListView/core/QueryRequestProvider";
import { QueryResponseProvider } from "../CampaignListView/core/QueryResponseProvider";
import { UsersListHeader } from "../CampaignListView/components/header/UsersListHeader";
// import { UsersTable } from "../CampaignListView/table/UsersTable";
import { UserEditModal } from "../CampaignListView/user-edit-modal/UserEditModal";
import CustomCampaignTable from "./CustomTable";
// import { useQuery } from "react-query";
// import { getCampaignDataAPI } from "../../../services/CampaignManagement";
import useStaticData from "../../../StaticData";
import axios from "axios";

const CampaignListView = ({
  showCreateAppModal,
  setShowCreateAppModal,
}: any) => {
  const { baseUrl } = useStaticData();

  const [refetchList, setRefetchList] = useState<boolean>(false);

  const { itemIdForUpdate } = useListView();

  const [campaignListViewData, setCampaignListViewData] = React.useState([]);

  // const {
  //   data: getCampaignData,
  //   isLoading,
  //   error,
  // } = useQuery("getCampaignData", () => getCampaignDataAPI(accessKey));

  // React.useEffect(() => {
  //   console.log({ getCampaignData });
  //   if (getCampaignData?.length > 0) setCampaignListViewData(getCampaignData);
  // }, [getCampaignData]);

  useEffect(() => {
    const url = `${baseUrl}/getCampaignList.php`;
    const accessKey = sessionStorage.getItem("accessKey");

    const params = {
      accessKey: accessKey,
    };

    const fetchData = async () => {
      try {
        const response = await axios.get(url, { params });
        const responseData = response.data;

        setCampaignListViewData(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [refetchList]);

  return (
    <>
      <KTCard>
        <UsersListHeader
          showCreateAppModal={showCreateAppModal}
          setShowCreateAppModal={setShowCreateAppModal}
        />
        {/* <UsersTable /> */}

        <CustomCampaignTable
          tableData={campaignListViewData}
          setRefetchList={setRefetchList}
        />
      </KTCard>
      {itemIdForUpdate !== undefined && <UserEditModal />}
    </>
  );
};

const CampaignListViewWrapper = ({
  showCreateAppModal,
  setShowCreateAppModal,
}: any) => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <CampaignListView
          showCreateAppModal={showCreateAppModal}
          setShowCreateAppModal={setShowCreateAppModal}
        />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
);

export { CampaignListViewWrapper };
