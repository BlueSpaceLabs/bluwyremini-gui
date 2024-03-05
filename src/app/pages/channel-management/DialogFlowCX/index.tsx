import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import PageHeader from "./PageHeader";
import axios from "axios";
import DialogFlowCXConfigModal from "./ConfigurationModal/Modal";
import DialogFlowDataList from "./DataList";
import AuditLogs from "./AuditLogs";
import CustomSnackBar from "../../../components/CustomSnackbar";
import useStaticData from "../../../StaticData";

const DialogFlowCXPage = ({ channelName }: any) => {
  const { baseUrl } = useStaticData();

  // console.log(channelName, accessKey);

  const [snackbar, setSnackbar] = useState({
    showSnackbar: false,
    severitySnackBar: "",
    messageSnackBar: "",
  });

  const [dialogFlowCXListData, setDialogFlowCXListData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [refetch, setRefetch] = React.useState<boolean>(false);

  const serviceGetDialogFlowCXData = async () => {
    try {
      const url = `${baseUrl}/getChannelDetails.php`;
      const accessKey = sessionStorage.getItem("accessKey");

      const response = await axios.get(url, {
        params: {
          channelName: "dialogflowcx",
          accessKey: accessKey,
        },
      });
      const responseData = response?.data;

      setDialogFlowCXListData(responseData.data);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false); // Set loading to false regardless of success or failure
    }
  };

  useEffect(() => {
    serviceGetDialogFlowCXData();
  }, [refetch]);

  return (
    <Box className="card mb-5 mb-xl-10">
      <PageHeader setShowModal={setShowModal} />

      <DialogFlowDataList dialogFlowCXListData={dialogFlowCXListData} />

      <br />

      <AuditLogs />

      <DialogFlowCXConfigModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        initialModalData={dialogFlowCXListData}
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

export default DialogFlowCXPage;
