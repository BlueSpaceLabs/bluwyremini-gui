import React, { useEffect } from "react";
import { KTCard } from "../../../../_metronic/helpers";
import { ListViewProvider, useListView } from "./core/ListViewProvider";
import { QueryRequestProvider } from "./core/QueryRequestProvider";
import { QueryResponseProvider } from "./core/QueryResponseProvider";
import { UsersListHeader } from "./components/header/UsersListHeader";
// import { UsersTable } from "./table/UsersTable";
import { UserEditModal } from "./user-edit-modal/UserEditModal";
// import { useQuery } from "react-query";
import axios from "axios";
import CustomTemplateTable from "./CustomTable";
import useStaticData from "../../../StaticData";

// const serviceAxiosGetTemplateWhatsappData = async () => {
//   const url =
//     "http://3.108.229.60:8082/bluwyremini-backend/info/getTemplatesList.php";

//   // const accessKey = sessionStorage.getItem("accessKey");
//   const accessKey =
//     "$2y$10$0MNB6SNrJCDmXpZgb14Cgu7r3ZcEVlbbk8XvmRn2x9hKZXebK5Grm";

//   const params = {
//     templateStatus: "approved",
//     accessKey: accessKey,
//     waba_id: "116042751363278",
//     access_token:
//       "EAAvZAe0w3fFoBOZC5HtjhN0HAZAE1GQfc5jKrJuakkd7bAas84EohnNiO4aZBFxXRheZAwub30Ib6jbh8uthqq4xZA9JXD1NmTarNJ7ah4iVk3bVZC1csEHGw1pJNuHuf5uRxxqUU05G2UTdMWodn82PkDhEJSv9NUvaSJYWW16IQPy6XZCBJY9fy6X5R482tMai",
//     channelName: "whatsapp",
//   };

//   const response = await axios.get(url, { params });
//   return response.data;
// };

const WhatsappPage = () => {
  const { baseUrl } = useStaticData();

  const { itemIdForUpdate } = useListView();
  const [whatsAppListViewData, setWhatsAppListViewData] = React.useState([]);

  // const {
  //   data: getWhatsAppListData,
  //   isLoading,
  //   error,
  // } = useQuery("myQueryKey", serviceAxiosGetTemplateWhatsappData);

  // React.useEffect(() => {
  //   if (getWhatsAppListData?.["0"]?.data?.length > 0)
  //     setWhatsAppListViewData(getWhatsAppListData?.["0"]?.data);
  // }, [getWhatsAppListData]);

  useEffect(() => {
    const url = `${baseUrl}/getTemplatesList.php`;
    const accessKey = sessionStorage.getItem("accessKey");
    const storedData = sessionStorage.getItem("whatsappConfig");

    let whatsAppStoredData;
    if (storedData) whatsAppStoredData = JSON.parse(storedData);

    console.log("whatsAppStoredData", whatsAppStoredData);

    const params = {
      accessKey: accessKey,
      templateStatus: "approved",
      waba_id: whatsAppStoredData?.accessToken,
      // "116042751363278",
      access_token: whatsAppStoredData?.permanentToken,
      // "EAAvZAe0w3fFoBOZC5HtjhN0HAZAE1GQfc5jKrJuakkd7bAas84EohnNiO4aZBFxXRheZAwub30Ib6jbh8uthqq4xZA9JXD1NmTarNJ7ah4iVk3bVZC1csEHGw1pJNuHuf5uRxxqUU05G2UTdMWodn82PkDhEJSv9NUvaSJYWW16IQPy6XZCBJY9fy6X5R482tMai",
      channelName: "whatsapp",
    };

    const fetchData = async () => {
      try {
        const response = await axios.get(url, { params });
        const responseData = response.data;

        console.log("responseData", responseData);

        if (responseData?.["0"]?.data?.length > 0)
          setWhatsAppListViewData(responseData?.["0"]?.data);
      } catch (error) {
        setWhatsAppListViewData([]);
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
