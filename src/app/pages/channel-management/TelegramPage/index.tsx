import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import PageHeader from "./PageHeader";
import axios from "axios";
import TelegramConfigModal from "./ConfigurationModal/Modal";
import TelegramDataList from "./DataList";
import CustomSnackBar from "../../../components/CustomSnackbar";
import useStaticData from "../../../StaticData";
import AuditLogs from "../AuditLogs";

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

  useEffect(() => {
    const url = `${baseUrl}/getChannelDetails.php`;
    const accessKey = sessionStorage.getItem("accessKey");

    const params = {
      accessKey: accessKey,
      channelName: "telegram",
    };

    const fetchData = async () => {
      try {
        const response = await axios.get(url, { params });
        const responseData = response.data;

        // console.log("responseData getChannelDetails", responseData?.data);

        setTelegramData(responseData?.data);
      } catch (error) {
        setTelegramData(null);
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [refetch, baseUrl, channelName]);

  return (
    <Box
      className="card mb-5 mb-xl-10"
      style={{ paddingLeft: 20, paddingRight: 20 }}
    >
      <PageHeader setShowModal={setShowModal} />

      <TelegramDataList telegramData={telegramData} />

      <br />

      <AuditLogs auditLogsData={telegramData} />

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
