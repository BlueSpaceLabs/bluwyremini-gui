import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import PageHeader from "./PageHeader";
import axios from "axios";
import InstagramDataList from "./DataList";
import InstagramConfigModal from "./ConfigurationModal/Modal";
import AuditLogs from "./AuditLogs";
import CustomSnackBar from "../../../components/CustomSnackbar";
import useStaticData from "../../../StaticData";

const InstagramPage = ({ channelName, accessKey }: any) => {
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

  const serviceGetInstagramData = async () => {
    try {
      const url = `${baseUrl}/getChannelDetails.php`;

      const response = await axios.get(url, {
        params: {
          channelName: "instagram",
          accessKey:
            "$2y$10$0MNB6SNrJCDmXpZgb14Cgu7r3ZcEVlbbk8XvmRn2x9hKZXebK5Grm",
        },
      });
      const responseData = response?.data;

      console.log("responseData", responseData);

      setInstagramData(responseData.data);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false); // Set loading to false regardless of success or failure
    }
  };

  useEffect(() => {
    serviceGetInstagramData();
  }, [refetch]);

  return (
    <Box className="card mb-5 mb-xl-10">
      <PageHeader setShowModal={setShowModal} />

      <InstagramDataList instagramData={instagramData} />

      <br />

      <AuditLogs />

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
