import React from "react";
import PageHeader from "./header";
import CustomContactTable from "./table";
import { KTCard } from "../../../../_metronic/helpers";
import axios from "axios";

const FacebookPage = () => {
  const [facebookListData, setFacebookListData] = React.useState([]);
  // const [showSnackbar, setShowSnackbar] = React.useState<boolean>(false);
  // const [severitySnackBar, setSeveritySnackBar] = React.useState<string>("");
  // const [messageSnackBar, setMessageSnackBar] = React.useState<string>("");
  const [searchContact, setSearchContact] = React.useState<string>("");
  const [fromDate, setFromDate] = React.useState<string>("");
  const [toDate, setToDate] = React.useState<string>("");
  const [refetchData, setRefetchData] = React.useState<boolean>(false);
  const [showAddContactModal, setShowAddContactModal] =
    React.useState<boolean>(false);

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
          if (jsonArray.length > 0) setFacebookListData(jsonArray);
        }
      } catch (error: any) {
        setFacebookListData([]);
        console.log(error?.message);
      } finally {
        // console.log("API Fetch Done");
      }
    };

    serviceGetContactDetails();
  }, [refetchData, searchContact, fromDate, toDate]);

  return (
    <>
      <KTCard>
        <PageHeader
          setSearchContact={setSearchContact}
          setFromDate={setFromDate}
          setToDate={setToDate}
        />
        <CustomContactTable tableData={facebookListData} />
      </KTCard>
    </>
  );
};

export default FacebookPage;
