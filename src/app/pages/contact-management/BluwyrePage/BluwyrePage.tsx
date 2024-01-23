import React from "react";
import { KTCard } from "../../../../_metronic/helpers";

import { ListViewProvider, useListView } from "./core/ListViewProvider";
import { QueryRequestProvider } from "./core/QueryRequestProvider";
import { QueryResponseProvider } from "./core/QueryResponseProvider";
import { UsersListHeader } from "./components/header/UsersListHeader";
import { UsersTable } from "./table/UsersTable";
import { UserEditModal } from "./user-edit-modal/UserEditModal";
import axios from "axios";

const BluwyrePage = () => {
  const [bluwyreListData, setBluwyreListData] = React.useState([]);
  React.useEffect(() => {
    const serviceGetContactDetails = async () => {
      try {
        const response = await axios.get(
          "http://3.108.229.60:8082/bluwyremini-backend/info/getContactChannelDetails.php",
          {
            params: {
              accessKey:
                "$2y$10$0MNB6SNrJCDmXpZgb14Cgu7r3ZcEVlbbk8XvmRn2x9hKZXebK5Grm",
            },
          }
        );
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
