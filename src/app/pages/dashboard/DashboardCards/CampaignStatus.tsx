import React from "react";
import { Box } from "@mui/material";
import axios from "axios";
import useStaticData from "../../../StaticData";

const CampaignStatus = () => {
  const { baseUrl } = useStaticData();

  const [campaignStatusData, setCampaignStatusData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const params = {
          accessKey:
            "$2y$10$0MNB6SNrJCDmXpZgb14Cgu7r3ZcEVlbbk8XvmRn2x9hKZXebK5Grm",
        };

        const url = `${baseUrl}/getLast5CampaignStatus.php`;

        const response = await axios.get(url, { params });

        setCampaignStatusData(response.data);
      } catch (error) {
        console.log({ error });
      } finally {
        // logic
      }
    };
    fetchData();
  }, []);

  console.log("CampaignStatusData", campaignStatusData);

  return (
    <>
      <Box className="card bg-danger card-xl-stretch mb-xl-8">
        <Box className="card-body">
          <Box className=" text-white fw-bold fs-2 mb-2 mt-5">
            Last 5 Campaign Status
          </Box>

          {campaignStatusData.map((item: any) => (
            <Box>
              <Box className={`fw-semibold text-white`}>
                {item?.campaignName} :
              </Box>

              <Box className={`fw-semibold text-white`}>
                {item?.executionDatetime}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default CampaignStatus;
