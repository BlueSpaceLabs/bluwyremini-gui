import React, { useState } from "react";
// import { useQuery } from "react-query";
// import { KTCard } from "../../../../_metronic/helpers";
import { UsersListHeader } from "./components/header/UsersListHeader";
import AddWhatsAppContactModal from "./CustomAddContactModal";
import CustomContactTable from "./CustomTable";
// import { getContactWhatsAppData } from "../../../services/ContactManagement";
import CustomSnackBar from "../../../../components/CustomSnackbar/CustomSnackBar";
import axios from "axios";
import { KTCard } from "../../../../../_metronic/helpers";

const InstagramTempPage = ({ channelName, accessKey }: any) => {
  const [showSnackbar, setShowSnackbar] = React.useState<boolean>(false);
  const [severitySnackBar, setSeveritySnackBar] = React.useState<string>("");
  const [messageSnackBar, setMessageSnackBar] = React.useState<string>("");
  const [searchContact, setSearchContact] = useState<string>("");
  const [fromDate, setFromDate] = useState<string>("");
  const [toDate, setToDate] = useState<string>("");
  const [refetchData, setRefetchData] = useState<boolean>(false);
  const [whatsAppListViewData, setWhatsAppListViewData] = React.useState([]);

  const [showAddContactModal, setShowAddContactModal] =
    React.useState<boolean>(false);

  // const {
  //   data: getWhatsAppContactListData,
  //   isLoading,
  //   refetch: refetchWhatsAppContactListData,
  // } = useQuery("contactWhatsAppListData", () =>
  //   getContactWhatsAppData(channelName, accessKey)
  // );

  // React.useEffect(() => {
  //   if (getWhatsAppContactListData?.data) {
  //     const jsonArray = JSON.parse(getWhatsAppContactListData?.data);
  //     if (jsonArray.length > 0) setWhatsAppListViewData(jsonArray);
  //   }
  // }, [getWhatsAppContactListData]);

  React.useEffect(() => {
    const serviceGetContactDetails = async () => {
      try {
        const response = await axios.get(
          "http://3.108.229.60:8082/bluwyremini-backend/info/getContactDetails.php",
          {
            params: {
              channelName: "whatsapp",
              accessKey:
                "$2y$10$0MNB6SNrJCDmXpZgb14Cgu7r3ZcEVlbbk8XvmRn2x9hKZXebK5Grm",
              search: searchContact,
              from: fromDate,
              to: toDate,
            },
          }
        );
        const responseData = response?.data;

        // console.log("responseData", responseData);
        if (responseData?.data) {
          const jsonArray = JSON.parse(responseData?.data);
          if (jsonArray.length > 0) setWhatsAppListViewData(jsonArray);
        }
      } catch (error: any) {
        setWhatsAppListViewData([]);
        // console.log(error?.message);
      } finally {
        // console.log("API Fetch Done");
      }
    };

    serviceGetContactDetails();
  }, [refetchData, searchContact, fromDate, toDate]);

  return (
    <>
      <KTCard>
        <UsersListHeader
          handleShowAddModal={() => setShowAddContactModal(true)}
          setSearchContact={setSearchContact}
          setFromDate={setFromDate}
          setToDate={setToDate}
        />
        <CustomContactTable
          tableData={whatsAppListViewData}
          accessKey={accessKey}
          channelName={channelName}
          setRefetchData={setRefetchData}
          // refetchWhatsAppContactListData={refetchWhatsAppContactListData}
          setShowSnackbar={setShowSnackbar}
          setSeveritySnackBar={setSeveritySnackBar}
          setMessageSnackBar={setMessageSnackBar}
        />

        <AddWhatsAppContactModal
          show={showAddContactModal}
          handleClose={() => setShowAddContactModal(false)}
          accessKey={accessKey}
          channelName={channelName}
          setRefetchData={setRefetchData}
          // refetchWhatsAppContactListData={refetchWhatsAppContactListData}
          setShowSnackbar={setShowSnackbar}
          setSeveritySnackBar={setSeveritySnackBar}
          setMessageSnackBar={setMessageSnackBar}
        />
        <CustomSnackBar
          showSnackbar={showSnackbar}
          setShowSnackbar={setShowSnackbar}
          severitySnackBar={severitySnackBar}
          messageSnackBar={messageSnackBar}
        />
      </KTCard>
    </>
  );
};

export default InstagramTempPage;