import React, { useState } from "react";
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
// import { getMediaListData } from "../../../services/MediaManagement";
// import { useQuery } from "react-query";
import axios from "axios";
import CustomSnackBar from "../../../components/CustomSnackbar";
import useStaticData from "../../../StaticData";

const MediaListView = () => {
  const { baseUrl } = useStaticData();

  const { itemIdForUpdate } = useListView();
  const [mediaListViewData, setMediaListViewData] = React.useState([]);

  const [snackbar, setSnackbar] = useState({
    showSnackbar: false,
    severitySnackBar: "",
    messageSnackBar: "",
  });

  const [channelType, setChannelType] = React.useState("");
  const [mediaType, setMediaType] = React.useState("");

  // const {
  //   data: getMediaList,
  //   // isLoading,
  //   refetch: refetchMediaData,
  // } = useQuery("getMediaListData", () => getMediaListData(accessKey));

  // React.useEffect(() => {
  //   if (getMediaList) {
  //     setMediaListViewData(getMediaList);
  //     // console.log({ getMediaList });
  //     // const jsonArray = JSON.parse(getMediaList?.data);
  //     // if (jsonArray.length > 0) setWhatsAppListViewData(jsonArray);
  //   }
  // }, [getMediaList]);

  React.useEffect(() => {
    const getMediaListData = async () => {
      const url = `${baseUrl}/getMediaDetails.php`;
      const accessKey = sessionStorage.getItem("accessKey");

      const params = {
        accessKey: accessKey,
        channelType: channelType,
        mediaType: mediaType,
      };

      try {
        const response = await axios.get(url, { params });
        setMediaListViewData(response.data);
      } catch (error) {
        setMediaListViewData([]);
        console.error("Error fetching data:", error);
      } finally {
        console.log("image list fetch");
      }
    };

    getMediaListData();
  }, [channelType, mediaType]);

  return (
    <>
      <KTCard>
        <UsersListHeader
          setChannelType={setChannelType}
          setMediaType={setMediaType}
          setSnackbar={setSnackbar}
        />
        {/* <UsersTable /> */}
        <CustomMediaTable
          tableData={mediaListViewData}
          setSnackbar={setSnackbar}

          // channelName={channelName}
          // refetchWhatsAppContactListData={refetchWhatsAppContactListData}
          // setShowSnackbar={setShowSnackbar}
          // setSeveritySnackBar={setSeveritySnackBar}
          // setMessageSnackBar={setMessageSnackBar}
        />

        <CustomSnackBar
          showSnackbar={snackbar.showSnackbar}
          setSnackbar={setSnackbar}
          severitySnackBar={snackbar.severitySnackBar}
          messageSnackBar={snackbar.messageSnackBar}
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
