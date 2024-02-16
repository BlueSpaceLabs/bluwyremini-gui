import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import PageHeader from "./PageHeader";
import axios from "axios";
import TelegramConfigModal from "./ConfigurationModal/Modal";
import TelegramDataList from "./DataList";
import AuditLogs from "./AuditLogs";
import CustomSnackBar from "../../../components/CustomSnackbar";

const TelegramPage = ({ channelName, accessKey }: any) => {
  // console.log(channelName, accessKey);

  const [snackbar, setSnackbar] = useState({
    showSnackbar: false,
    severitySnackBar: "",
    messageSnackBar: "",
  });

  const [telegramData, setTelegramData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [refetch, setRefetch] = React.useState<boolean>(false);

  const serviceGetTelegramData = async () => {
    try {
      const response = await axios.get(
        "http://3.108.229.60:8082/bluwyremini-backend/info/getChannelDetails.php",
        {
          params: {
            channelName: "telegram",
            accessKey:
              "$2y$10$0MNB6SNrJCDmXpZgb14Cgu7r3ZcEVlbbk8XvmRn2x9hKZXebK5Grm",
          },
        }
      );
      const responseData = response?.data;

      // console.log("responseData", responseData);

      setTelegramData(responseData.data);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false); // Set loading to false regardless of success or failure
    }
  };

  useEffect(() => {
    serviceGetTelegramData();
  }, [refetch]);

  return (
    <Box className="card mb-5 mb-xl-10">
      <PageHeader setShowModal={setShowModal} />

      <TelegramDataList telegramData={telegramData} />

      <br />

      <AuditLogs />

      <TelegramConfigModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        initialModalData={telegramData}
        setRefetch={setRefetch}
        setSnackbar={setSnackbar}
      />

      <CustomSnackBar
        showSnackbar={snackbar.showSnackbar}
        setSnackbar={setSnackbar}
        severitySnackBar={snackbar.severitySnackBar}
        messageSnackBar={snackbar.messageSnackBar}
      />
    </Box>
  );
};

export default TelegramPage;
