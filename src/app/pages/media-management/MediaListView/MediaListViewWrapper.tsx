import React from "react";
import { KTCard } from "../../../../_metronic/helpers";

import {
  ListViewProvider,
  useListView,
} from "../MediaListView/core/ListViewProvider";
import { QueryRequestProvider } from "../MediaListView/core/QueryRequestProvider";
import { QueryResponseProvider } from "../MediaListView/core/QueryResponseProvider";
import { UsersListHeader } from "../MediaListView/components/header/UsersListHeader";
// import { UsersTable } from "../MediaListView/table/UsersTable";
import { UserEditModal } from "../MediaListView/user-edit-modal/UserEditModal";
import CustomMediaTable from "./CustomTable";
import { getMediaListData } from "../../../services/MediaManagement";
import { useQuery } from "react-query";

const accessKey =
  "$2y$10$0MNB6SNrJCDmXpZgb14Cgu7r3ZcEVlbbk8XvmRn2x9hKZXebK5Grm";

const MediaListView = () => {
  const { itemIdForUpdate } = useListView();
  const [mediaListViewData, setMediaListViewData] = React.useState([]);

  const {
    data: getMediaList,
    // isLoading,
    // refetch: refetchMediaData,
  } = useQuery("getMediaListData", () => getMediaListData(accessKey));

  React.useEffect(() => {
    if (getMediaList) {
      setMediaListViewData(getMediaList);
      // console.log({ getMediaList });
      // const jsonArray = JSON.parse(getMediaList?.data);
      // if (jsonArray.length > 0) setWhatsAppListViewData(jsonArray);
    }
  }, [getMediaList]);

  return (
    <>
      <KTCard>
        <UsersListHeader />
        {/* <UsersTable /> */}
        <CustomMediaTable
          tableData={mediaListViewData}
          // accessKey={accessKey}
          // channelName={channelName}
          // refetchWhatsAppContactListData={refetchWhatsAppContactListData}
          // setShowSnackbar={setShowSnackbar}
          // setSeveritySnackBar={setSeveritySnackBar}
          // setMessageSnackBar={setMessageSnackBar}
        />
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
