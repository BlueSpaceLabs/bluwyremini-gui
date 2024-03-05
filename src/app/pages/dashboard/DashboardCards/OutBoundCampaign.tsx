import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import axios from "axios";
import useStaticData from "../../../StaticData";

const OutBoundCampaign = () => {
  const { baseUrl } = useStaticData();

  const [outBoundCampaignData, setOutBoundCampaignData] = React.useState<any[]>(
    []
  );
  const [campaignsCreated, setCampaignsCreated] = React.useState<any[]>([]);
  const [totalUsersTargeted, setTotalUsersTargeted] = React.useState<any[]>([]);
  const [readCount, setReadCount] = React.useState<any[]>([]);
  const [deliveredCount, setDeliveredCount] = React.useState<any[]>([]);
  const [sentCount, setSentCount] = React.useState<any[]>([]);
  const [failedCount, setFailedCount] = React.useState<any[]>([]);
  const [ctr, setCtr] = React.useState<any[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `${baseUrl}/getLast31DaysCampaignData.php`;
        const accessKey = sessionStorage.getItem("accessKey");

        const params = {
          accessKey: accessKey,
        };

        const response = await axios.get(url, { params });

        setOutBoundCampaignData(response.data);
        setCampaignsCreated(response.data.totalCampaigns);
        setTotalUsersTargeted(response.data.totalUsersTargeted);
        setReadCount(response.data.readCount);
        setDeliveredCount(response.data.deliveredCount);
        setSentCount(response.data.sentCount);
        setFailedCount(response.data.errorCount);
        setCtr(response.data.CTR);
      } catch (error) {
        console.log({ error });
      } finally {
        // logic
      }
    };
    fetchData();
  }, []);

  console.log("outBoundCampaignData", outBoundCampaignData);

  return (
    <>
      <div className="col-xl-4">
        <Box
          className="card bg-primary card-xl-stretch mb-xl-8"
          style={{ backgroundColor: "" }}
        >
          <Box className="card-body">
            <Box className=" text-white fw-bol fs-2 mb-1 mt-1">
              Outbound Campaign
            </Box>
            Summary of last 30 days
            <br />
            <br />
            <Box
              className={`text-lightgray`}
              style={{ color: "lightblue" }}
            >
              Campaigns Created : {campaignsCreated}
              <br />
              Total Users Targeted : {totalUsersTargeted}
              <br />
              Messages Sent: {sentCount}
              <br />
              Messages Delivered: {deliveredCount}
              <br />
              Messaged Read: {readCount}
              <br />
              Failed Count: {failedCount}
              <br />
              CTR ( Approximated): {ctr}
            </Box>
            <br />
            <br />
            <center>
              <Link
                to="/campaign-management"
                className="btn btn-primary"
                style={{
                  backgroundColor: "blue",
                  color: "white",
                  minWidth: 300,
                }}
              >
                Create Campaign
              </Link>
            </center>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default OutBoundCampaign;
