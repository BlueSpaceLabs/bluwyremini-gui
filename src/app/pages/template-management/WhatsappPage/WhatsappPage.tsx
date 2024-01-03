import React from "react";
import { KTCard } from "../../../../_metronic/helpers";
import { ListViewProvider, useListView } from "./core/ListViewProvider";
import { QueryRequestProvider } from "./core/QueryRequestProvider";
import { QueryResponseProvider } from "./core/QueryResponseProvider";
import { UsersListHeader } from "./components/header/UsersListHeader";
// import { UsersTable } from "./table/UsersTable";
import { UserEditModal } from "./user-edit-modal/UserEditModal";
import { useQuery } from "react-query";
import axios from "axios";
import CustomTemplateTable from "./CustomTable";

const serviceAxiosGetTemplateWhatsappData = async () => {
  const url =
    "http://3.108.229.60:8082/bluwyremini-backend/info/getTemplatesList.php";
  const params = {
    templateStatus: "approved",
    accessKey: "$2y$10$0MNB6SNrJCDmXpZgb14Cgu7r3ZcEVlbbk8XvmRn2x9hKZXebK5Grm",
    waba_id: "116042751363278",
    access_token:
      "EAAvZAe0w3fFoBABFN7CqXZCwavZCjjrISEZA8vNOcJyqzZBYnyJ07KDERmZCWZCg86Xh7r7JWjelY7D7wz4XN2aZCZAjmSMa8tjZA0L869VcQs6AEwKSGg1H1qHeJrUgd3Yk7ug3FdW7jA825HO2Q4CKj73gxfjjS9BChg6z019mJoWi5MamqbSmeb",
    channelName: "whatsapp",
  };

  const response = await axios.get(url, { params });
  return response.data;
};

const WhatsappPage = () => {
  const { itemIdForUpdate } = useListView();
  const [whatsAppListViewData, setWhatsAppListViewData] = React.useState([]);

  const {
    data: getWhatsAppListData,
    isLoading,
    error,
  } = useQuery("myQueryKey", serviceAxiosGetTemplateWhatsappData);

  React.useEffect(() => {
    if (getWhatsAppListData?.["0"]?.data.length > 0)
      setWhatsAppListViewData(getWhatsAppListData?.["0"]?.data);
  }, [getWhatsAppListData]);

  return (
    <>
      <KTCard>
        <UsersListHeader />
        {/* <UsersTable
          whatsAppListViewData={whatsAppListViewData}
          isLoading={isLoading}
        /> */}
        <CustomTemplateTable tableData={whatsAppListViewData} />
      </KTCard>
      {itemIdForUpdate !== undefined && <UserEditModal />}
    </>
  );
};

const WhatsappPageWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <WhatsappPage />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
);

export { WhatsappPageWrapper };
