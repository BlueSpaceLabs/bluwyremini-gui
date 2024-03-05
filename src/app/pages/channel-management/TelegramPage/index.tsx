import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import PageHeader from "./PageHeader";
import axios from "axios";
import TelegramConfigModal from "./ConfigurationModal/Modal";
import TelegramDataList from "./DataList";
import AuditLogs from "./AuditLogs";
import CustomSnackBar from "../../../components/CustomSnackbar";
import useStaticData from "../../../StaticData";

const TelegramPage = ({ channelName }: any) => {
  // console.log(channelName, accessKey);
  const { baseUrl } = useStaticData();

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
    const url = `${baseUrl}/getChannelDetails.php`;

    try {
      const accessKey = sessionStorage.getItem("accessKey");

      const response = await axios.get(url, {
        params: {
          channelName: "telegram",
          accessKey: accessKey,
        },
      });
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
