import axios from "axios";

const base_url = "http://3.108.229.60:8082/bluwyremini-backend/info";

const axiosInstance = axios.create({
  baseURL: base_url,
  headers: {
    "Content-Type": "application/json",
    // Add other headers if needed
  },
});

interface PostAddCampaign {
  tenant: string;
  requestData: {
    accessKey: string;
    campaign_data: {
      campaignName: string;
      campaignGoal: string;
      campaignDescription: string;
      campaignChannel: string;
      campaignLanguage: string;
    };
  };
}

// postAddCampaign : add Media upload details
export const postAddCampaign = async ({ requestData }: PostAddCampaign) => {
  // const url = `/addContactInfo.php?channelName=${channelName}`;

  console.log(requestData);
  // try {
  //   const response = await axiosInstance.post(url, requestData);

  //   return response.data;
  // } catch (error) {
  //   console.error("Error fetching data:", error);

  //   throw error;
  // }
};
