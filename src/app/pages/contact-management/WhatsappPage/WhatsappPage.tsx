import React from "react";
import { useQuery } from "react-query";
import { KTCard } from "../../../../_metronic/helpers";
import { UsersListHeader } from "./components/header/UsersListHeader";
import AddWhatsAppContactModal from "./CustomAddContactModal";
import CustomContactTable from "./CustomTable";
import { getContactWhatsAppData } from "../../../services/ContactManagement";
import CustomSnackBar from "../../../components/CustomSnackbar/CustomSnackBar";

const WhatsappPage = ({ channelName, accessKey }: any) => {
  const [showSnackbar, setShowSnackbar] = React.useState<boolean>(false);
  const [severitySnackBar, setSeveritySnackBar] = React.useState<string>("");
  const [messageSnackBar, setMessageSnackBar] = React.useState<string>("");

  const [whatsAppListViewData, setWhatsAppListViewData] = React.useState([]);

  const [showAddContactModal, setShowAddContactModal] =
    React.useState<boolean>(false);

  const {
    data: getWhatsAppContactListData,
    isLoading,
    refetch: refetchWhatsAppContactListData,
  } = useQuery("contactWhatsAppListData", () =>
    getContactWhatsAppData(channelName, accessKey)
  );

  React.useEffect(() => {
    if (getWhatsAppContactListData?.data) {
      const jsonArray = JSON.parse(getWhatsAppContactListData?.data);
      if (jsonArray.length > 0) setWhatsAppListViewData(jsonArray);
    }
  }, [getWhatsAppContactListData]);

  return (
    <>
      <KTCard>
        <UsersListHeader
          handleShowAddModal={() => setShowAddContactModal(true)}
        />
        <CustomContactTable
          tableData={whatsAppListViewData}
          accessKey={accessKey}
          channelName={channelName}
          refetchWhatsAppContactListData={refetchWhatsAppContactListData}
          setShowSnackbar={setShowSnackbar}
          setSeveritySnackBar={setSeveritySnackBar}
          setMessageSnackBar={setMessageSnackBar}
        />

        <AddWhatsAppContactModal
          show={showAddContactModal}
          handleClose={() => setShowAddContactModal(false)}
          accessKey={accessKey}
          channelName={channelName}
          refetchWhatsAppContactListData={refetchWhatsAppContactListData}
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

export default WhatsappPage;
