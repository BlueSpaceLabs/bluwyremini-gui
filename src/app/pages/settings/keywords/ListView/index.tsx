import React, { useEffect, useState } from "react";
import CustomKeyWordTable from "./CustomTable";
import ListViewHeader from "./ListViewHeader";
import axios from "axios";
import { KTCard } from "../../../../../_metronic/helpers";
import AddKeyWordModal from "../Modals/Add";
import useStaticData from "../../../../StaticData";

const KeyWordListView = ({ setSnackbar }: any) => {
  const { baseUrl } = useStaticData();

  const [keyWordListViewData, setKeyWordListViewData] = useState([]);
  const [searchKeyWord, setSearchKeyWord] = useState<string>("");
  const [showAddKeyWordModal, setShowAddKeyWordModal] = useState(false);

  const [refetchList, setRefetchList] = useState<boolean>(false);

  console.log("refetchList", refetchList);
  useEffect(() => {
    const url = `${baseUrl}/getKeywordDetails.php`;

    const params = {
      accessKey: "$2y$10$0MNB6SNrJCDmXpZgb14Cgu7r3ZcEVlbbk8XvmRn2x9hKZXebK5Grm",
      searchKeyWord: searchKeyWord,
    };

    const fetchData = async () => {
      try {
        const response = await axios.get(url, { params });

        console.log("response", response.data);
        setKeyWordListViewData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    // Clean up effect
    return () => {
      // Optionally, cancel ongoing requests or perform other cleanup
    };
  }, [refetchList, searchKeyWord]); // Empty dependency array means this effect will only run once after the initial render

  return (
    <React.Fragment>
      <KTCard>
        {/* search & add modal */}
        <ListViewHeader
          setSearchKeyWord={setSearchKeyWord}
          showAddModal={() => setShowAddKeyWordModal(true)}
        />

        {/* table & action - edit & delete */}
        <CustomKeyWordTable
          tableData={keyWordListViewData}
          setRefetchList={setRefetchList}
          setSnackbar={setSnackbar}
        />
      </KTCard>

      <AddKeyWordModal
        show={showAddKeyWordModal}
        handleClose={() => setShowAddKeyWordModal(false)}
        setRefetchList={setRefetchList}
        setSnackbar={setSnackbar}
      />
    </React.Fragment>
  );
};

export default KeyWordListView;
