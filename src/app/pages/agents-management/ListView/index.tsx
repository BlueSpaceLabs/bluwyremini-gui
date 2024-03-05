import React, { useEffect, useState } from "react";
import axios from "axios";
import { KTCard } from "../../../../_metronic/helpers";
import CustomAgentsTable from "./CustomTable";
import ListViewHeader from "./ListViewHeader";
import AddAgentsModal from "../Modals/Add";
import useStaticData from "../../../StaticData";

const AgentsListView = ({ setSnackbar }: any) => {
  const { baseUrl } = useStaticData();

  const [agentsListViewData, setAgentsListViewData] = useState([]);
  const [searchAgent, setSearchAgent] = useState<string>("");
  const [showAddAgentsModal, setShowAddAgentsModal] = useState(false);

  const [refetchList, setRefetchList] = useState<boolean>(false);

  // console.log("refetchList", refetchList);
  useEffect(() => {
    const url = `${baseUrl}/getAgentProfileDetails.php`;
    const accessKey = sessionStorage.getItem("accessKey");

    const params = {
      accessKey: accessKey,
      searchAgent: searchAgent,
    };

    const fetchData = async () => {
      try {
        const response = await axios.get(url, { params });
        const responseData = response.data;

        setAgentsListViewData(responseData.dataArray);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    // Clean up effect
    return () => {
      // Optionally, cancel ongoing requests or perform other cleanup
    };
  }, [refetchList, searchAgent]); // Empty dependency array means this effect will only run once after the initial render

  return (
    <React.Fragment>
      <KTCard>
        {/* search & add modal */}
        <ListViewHeader
          setSearchAgent={setSearchAgent}
          showAddModal={() => setShowAddAgentsModal(true)}
        />

        {/* table & action - edit & delete */}
        <CustomAgentsTable
          tableData={agentsListViewData}
          setRefetchList={setRefetchList}
          setSnackbar={setSnackbar}
        />
      </KTCard>

      <AddAgentsModal
        show={showAddAgentsModal}
        handleClose={() => setShowAddAgentsModal(false)}
        setRefetchList={setRefetchList}
        setSnackbar={setSnackbar}
      />
    </React.Fragment>
  );
};

export default AgentsListView;
