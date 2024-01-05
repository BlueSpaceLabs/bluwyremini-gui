import axios from "axios";

const base_url = "http://3.108.229.60:8082/bluwyremini-backend/info";

const axiosInstance = axios.create({
  baseURL: base_url,
  headers: {
    "Content-Type": "application/json",
    // Add other headers if needed
  },
});

// getContactWhatsAppData : to get all the whatsapp channel list data
export const getContactWhatsAppData = async (
  channelName: string,
  accessKey: string
) => {
  const url = "/getContactDetails.php";

  const params = {
    channelName: channelName,
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

// getContactWhatsAppDataById : to get the whatsapp channel contact data by id
export const getContactWhatsAppDataById = async (
  channelName: string,
  accessKey: string,
  bluwyreId: string
) => {
  const url = "/getContactDetails.php";

  const params = {
    channelName: channelName,
    accessKey: accessKey,
    bluwyreId: bluwyreId,
  };

  try {
    const response = await axiosInstance.get(url, { params });

    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);

    throw error;
  }
};

interface PostAddWhatsappContact {
  channelName: string;
  requestData: {
    tenant: string;
    accessKey: string;
    contact_data: {
      mobileNo: string;
      firstChannel: string;
      lastInteractedChannel: string;
      crmFullname: string;
      nameToAddress: string;
      wabaMobileNo: string;
      wabaName: string;
    };
  };
}

// postAddWhatsappContact : add whatsapp contact details
export const postAddWhatsappContact = async ({
  channelName,
  requestData,
}: PostAddWhatsappContact) => {
  const url = `/addContactInfo.php?channelName=${channelName}`;

  try {
    const response = await axiosInstance.post(url, requestData);

    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);

    throw error;
  }
};

interface PostEditWhatsappContact {
  channelName: string;
  requestData: {
    tenant: string;
    accessKey: string;
    contact_data: {
      bluwyreId: string;
      mobileNo: string;
      crmFullname: string;
      nameToAddress: string;
      wabaMobileNo: string;
      wabaName: string;
    };
  };
}

// postEditWhatsappContact : edit whatsapp contact details
export const postEditWhatsappContact = async ({
  channelName,
  requestData,
}: PostEditWhatsappContact) => {
  const url = `/modifyContactInfo.php?channelName=${channelName}`;

  try {
    const response = await axiosInstance.post(url, requestData);

    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);

    throw error;
  }
};
