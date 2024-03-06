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

  useEffect(() => {
    const url = `${baseUrl}/getAgentProfileDetails.php`;
    const accessKey = sessionStorage.getItem("accessKey");

    const params = {
      accessKey: accessKey,
      search: searchAgent,
    };

    const fetchData = async () => {
      try {
        const response = await axios.get(url, { params });
        const responseData = response.data;

        setAgentsListViewData(responseData.dataArray);
      } catch (error) {
        setAgentsListViewData([]);
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [refetchList, searchAgent]);

  return (
    <React.Fragment>
      <KTCard>
        {/* search & add modal */}
        <ListViewHeader
          setSearchKeyWord={setSearchAgent}
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
