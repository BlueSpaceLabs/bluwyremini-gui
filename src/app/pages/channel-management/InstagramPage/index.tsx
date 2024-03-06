import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import PageHeader from "./PageHeader";
import axios from "axios";
import InstagramDataList from "./DataList";
import InstagramConfigModal from "./ConfigurationModal/Modal";
import AuditLogs from "../AuditLogs";
import CustomSnackBar from "../../../components/CustomSnackbar";
import useStaticData from "../../../StaticData";

const InstagramPage = ({ channelName }: any) => {
  // console.log(channelName, accessKey);
  const { baseUrl } = useStaticData();

  const [snackbar, setSnackbar] = useState({
    showSnackbar: false,
    severitySnackBar: "",
    messageSnackBar: "",
  });

  const [instagramData, setInstagramData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [refetch, setRefetch] = React.useState<boolean>(false);

  useEffect(() => {
    const url = `${baseUrl}/getChannelDetails.php`;
    const accessKey = sessionStorage.getItem("accessKey");

    const params = {
      accessKey: accessKey,
      channelName: "instagram",
    };

    const fetchData = async () => {
      try {
        const response = await axios.get(url, { params });
        const responseData = response.data;

        // console.log("responseData getChannelDetails", responseData?.data);

        setInstagramData(responseData?.data);
      } catch (error) {
        setInstagramData(null);
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

      <InstagramDataList instagramData={instagramData} />

      <br />

      <AuditLogs auditLogsData={instagramData} />

      <InstagramConfigModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        initialModalData={instagramData}
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

export default InstagramPage;
