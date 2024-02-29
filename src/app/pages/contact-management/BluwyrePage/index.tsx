import React from "react";
import { KTCard } from "../../../../_metronic/helpers";
import axios from "axios";
import PageHeader from "./PageHeader";
import CustomContactTable from "./CustomTable";
import useStaticData from "../../../StaticData";

const ChannelDetails = () => {
  const { baseUrl } = useStaticData();

  const [channelDetailsData, setChannelDetailsData] = React.useState([]);

  React.useEffect(() => {
    const serviceGetContactDetails = async () => {
      try {
        const url = `${baseUrl}/getContactChannelDetails.php`;
        const response = await axios.get(url, {
          params: {
            accessKey:
              "$2y$10$0MNB6SNrJCDmXpZgb14Cgu7r3ZcEVlbbk8XvmRn2x9hKZXebK5Grm",
          },
        });
        const responseData = response?.data;

        // console.log("responseData", responseData);
        if (responseData?.data) {
          const jsonArray = JSON.parse(responseData?.data);
          if (jsonArray.length > 0) setChannelDetailsData(jsonArray);
        }
      } catch (error: any) {
        setChannelDetailsData([]);
        // console.log(error?.message);
      } finally {
        // console.log("API Fetch Done");
      }
    };

    serviceGetContactDetails();
  }, []);

  return (
    <>
      <KTCard>
        <PageHeader />
        <CustomContactTable tableData={channelDetailsData} />
      </KTCard>
    </>
  );
};

export default ChannelDetails;
