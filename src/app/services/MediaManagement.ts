import axios from "axios";

const base_url = "http://3.108.229.60:8082/bluwyremini-backend/info";

const axiosInstance = axios.create({
  baseURL: base_url,
  headers: {
    "Content-Type": "application/json",
    // Add other headers if needed
  },
});

// getMediaListData : to get all the media list data
export const getMediaListData = async (accessKey: string) => {
  const url = "/getMediaDetails.php";

  const params = {
    accessKey: accessKey,
  };

  try {
    const response = await axiosInstance.get(url, { params });

    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);

    throw error;
  }
};

// getMediaListDataById : to get the media data by id
export const getMediaListDataById = async (
  accessKey: string,
  imageId: string
) => {
  const url = "/getMediaDetails.php";

  const params = {
    accessKey: accessKey,
    id: imageId,
  };

  try {
    const response = await axiosInstance.get(url, { params });

    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);

    throw error;
  }
};

interface PostAddMedia {
  tenant: string;
  requestData: {
    accessKey: string;
    contact_data: {
      imageS3Id: string;
      imageS3Url: string;
      mediaTitle: string;
      mediaDescription: string;
      channelName: string;
    };
  };
}

// postAddMedia : add Media upload details
export const postAddMedia = async ({ requestData }: PostAddMedia) => {
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
