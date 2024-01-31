import React from "react";
import { Box } from "@mui/material";
import axios from "axios";

const OutBoundCampaign = () => {
    const [outBoundCampaignData, setOutBoundCampaignData] = React.useState<any[]>([]);
    const [campaignsCreated, setCampaignsCreated] = React.useState<any[]>([]);
    const [totalUsersTargeted, setTotalUsersTargeted] = React.useState<any[]>([]);
    const [readCount, setReadCount] = React.useState<any[]>([]);
    const [deliveredCount, setDeliveredCount] = React.useState<any[]>([]);
    const [sentCount, setSentCount] = React.useState<any[]>([]);

    React.useEffect(() => {
      const fetchData = async () => {
        try {
          const params = {
            accessKey:
              "$2y$10$0MNB6SNrJCDmXpZgb14Cgu7r3ZcEVlbbk8XvmRn2x9hKZXebK5Grm",
          };
  
          const response = await axios.get(
            "http://3.108.229.60:8082/bluwyremini-backend/info/getLast31DaysCampaignData.php",
            { params }
          );
          
          setOutBoundCampaignData(response.data);
          setCampaignsCreated(response.data.totalCampaigns);
          setTotalUsersTargeted(response.data.totalUsersTargeted);
          setReadCount(response.data.readCount);
          setDeliveredCount(response.data.deliveredCount);
          setSentCount(response.data.sentCount);
         

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

<div className='col-xl-4'>
        <Box className="card bg-primary card-xl-stretch mb-xl-8" style={{backgroundColor:""}}>
         <Box className="card-body">
          <Box className=" text-white fw-bold fs-2 mb-1 mt-1">
          Outbound Campaign
          </Box>
          Summary of last 30 days<br/><br/>
              <Box className={`fw-semibold text-lightgray`} style={{color:"lightblue"}}>
              Campaigns Created : {campaignsCreated}<br/>
                Total Users Targeted : {totalUsersTargeted}<br/>
                Messages Sent: {sentCount}<br/>
                Messages Delivered: {deliveredCount}<br/>
                Messaged Read: {readCount}<br/>
                CTR ( Approximated):
                              </Box>
             <br/><br/>
             <center><button className='btn btn-primary' style={{backgroundColor:"blue",color:"white",minWidth:300}}>Create Campaign</button></center>
         </Box>
        </Box>
      </div>
</>
    )
}

export default OutBoundCampaign;