import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import PageHeader from "./PageHeader";
import axios from "axios";
import FacebookDataList from "./DataList";
import FacebookConfigModal from "./ConfigurationModal/Modal";
import AuditLogs from "./AuditLogs";
import CustomSnackBar from "../../../components/CustomSnackbar";

const FacebookPage = ({ channelName, accessKey }: any) => {
  // console.log(channelName, accessKey);

  const [showSnackbar, setShowSnackbar] = React.useState<boolean>(false);
  const [severitySnackBar, setSeveritySnackBar] = React.useState<string>("");
  const [messageSnackBar, setMessageSnackBar] = React.useState<string>("");

  const [facebookData, setFacebookData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [refetch, setRefetch] = React.useState<boolean>(false);

  const serviceGetFacebookData = async () => {
    try {
      const response = await axios.get(
        "http://3.108.229.60:8082/bluwyremini-backend/info/getChannelDetails.php",
        {
          params: {
            channelName: "messenger",
            accessKey:
              "$2y$10$0MNB6SNrJCDmXpZgb14Cgu7r3ZcEVlbbk8XvmRn2x9hKZXebK5Grm",
          },
        }
      );
      const responseData = response?.data;

      // console.log("responseData", responseData);

      setFacebookData(responseData.data);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false); // Set loading to false regardless of success or failure
    }
  };

  useEffect(() => {
    serviceGetFacebookData();
  }, [refetch]);

  return (
    <Box className="card mb-5 mb-xl-10">
      <PageHeader setShowModal={setShowModal} />

      <FacebookDataList facebookData={facebookData} />

      <br />

      <AuditLogs />

      <FacebookConfigModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        initialModalData={facebookData}
        setRefetch={setRefetch}
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
    </Box>
  );
};

export default FacebookPage;
