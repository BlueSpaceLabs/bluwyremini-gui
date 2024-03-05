import React from "react";
import { KTCard } from "../../../../_metronic/helpers";

import { ListViewProvider, useListView } from "./core/ListViewProvider";
import { QueryRequestProvider } from "./core/QueryRequestProvider";
import { QueryResponseProvider } from "./core/QueryResponseProvider";
import { UsersListHeader } from "./components/header/UsersListHeader";
import { UsersTable } from "./table/UsersTable";
import { UserEditModal } from "./user-edit-modal/UserEditModal";
import axios from "axios";
import useStaticData from "../../../StaticData";

const BluwyrePage = () => {
  const { baseUrl } = useStaticData();
  const [bluwyreListData, setBluwyreListData] = React.useState([]);

  React.useEffect(() => {
    const serviceGetContactDetails = async () => {
      try {
        const url = `${baseUrl}/getContactChannelDetails.php`;
        const accessKey = sessionStorage.getItem("accessKey");

        const response = await axios.get(url, {
          params: {
            accessKey: accessKey,
          },
        });
        const responseData = response?.data;

        // console.log("responseData", responseData);
        if (responseData?.data) {
          const jsonArray = JSON.parse(responseData?.data);
          if (jsonArray.length > 0) setBluwyreListData(jsonArray);
        }
      } catch (error: any) {
        setBluwyreListData([]);
        // console.log(error?.message);
      } finally {
        // console.log("API Fetch Done");
      }
    };

    serviceGetContactDetails();
  }, []);

  const { itemIdForUpdate } = useListView();
  return (
    <>
      <KTCard>
        <UsersListHeader />
        <UsersTable bluwyreListData={bluwyreListData} />
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
