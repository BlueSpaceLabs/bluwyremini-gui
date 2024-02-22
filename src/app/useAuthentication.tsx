import { useState, useEffect } from "react";
import axios from "axios";

const base_url = "http://127.0.0.1:8080";
const realm = "demo-realm";
const clientId = "democlient";

interface Authentication {
  inputUserName: string;
  setInputUserName: React.Dispatch<React.SetStateAction<string>>;
  inputUserPassword: string;
  setInputUserPassword: React.Dispatch<React.SetStateAction<string>>;
  isLoggedIn: boolean;
  handleLoginClick: () => Promise<void>;
  handleLogoutClick: () => Promise<void>;
}

const useAuthentication = (): Authentication => {
  console.log("subhro 0013 useAuthentication");
  const [inputUserName, setInputUserName] = useState<string>("");
  const [inputUserPassword, setInputUserPassword] = useState<string>("");
  const [customerAccessKey, setCustomerAccessKey] = useState<string>("");

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLoginClick = async (): Promise<void> => {
    console.log("handleLoginClick");

    if (inputUserName && inputUserPassword) {
      console.log("subhro test 501");
      const url = `${base_url}/realms/${realm}/protocol/openid-connect/token`;
      const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
      };

      const loginData = new URLSearchParams();
      loginData.append("client_id", clientId);
      loginData.append("username", inputUserName);
      loginData.append("password", inputUserPassword);
      loginData.append("grant_type", "password");

      console.log("subhro test 502");

      try {
        console.log("subhro test 503");

        const response = await axios.post(url, loginData, { headers });

        const responseData = response.data;
        console.log("handleLoginClick :", response.data);

        console.log("subhro test 504");

        if (responseData) {
          console.log("subhro test 505");

          sessionStorage.setItem("accessToken", responseData.access_token);
          sessionStorage.setItem("refreshToken", responseData.refresh_token);

          setInputUserName("");
          setInputUserPassword("");
          setIsLoggedIn(true);
          window.location.reload();
        } else {
          console.log("subhro test 506");

          sessionStorage.clear();
          setIsLoggedIn(false);
        }
      } catch (error: any) {
        console.log("subhro test 507");

        setIsLoggedIn(false);

        console.error("Error Login:", error.response.data);
      }
    } else {
      // alert("Please enter both username and password");
      console.log("Please enter both username and password");
    }
  };

  const handleLogoutClick = async (): Promise<void> => {
    const storedRefreshToken = sessionStorage.getItem("refreshToken");

    const url = `${base_url}/realms/${realm}/protocol/openid-connect/logout`;
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
    };

    const data = new URLSearchParams();
    data.append("client_id", clientId);
    data.append("refresh_token", storedRefreshToken!);

    try {
      const response = await axios.post(url, data, { headers });
      console.log("handleLogoutClick :", response.data);

      sessionStorage.clear();
      setIsLoggedIn(false);
    } catch (error: any) {
      console.error("Error logging out:", error.response.data);
    }
  };

  useEffect(() => {
    const storedRefreshToken = sessionStorage.getItem("refreshToken");

    // Function to refresh access token
    const getRefreshedAccessToken = async (): Promise<void> => {
      if (storedRefreshToken) {
        const url = `${base_url}/realms/${realm}/protocol/openid-connect/token`;

        const data = new URLSearchParams({
          client_id: clientId,
          grant_type: "refresh_token",
          refresh_token: storedRefreshToken,
        });

        try {
          const response = await axios.post(url, data, {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          });
          const responseData = response.data;
          console.log("getRefreshedAccessToken", responseData);

          if (responseData) {
            sessionStorage.setItem("accessToken", responseData.access_token);
            sessionStorage.setItem("refreshToken", responseData.refresh_token);

            setIsLoggedIn(true);
          } else {
            sessionStorage.clear();
            setIsLoggedIn(false);
          }
        } catch (error: any) {
          setIsLoggedIn(false);
          sessionStorage.clear();
          window.location.reload();

          console.error("Failed to Authenticate:", error.response.data);
        }
      }
    };

    getRefreshedAccessToken();

    // Function to periodically refresh access token
    const interval = setInterval(getRefreshedAccessToken, 0.25 * 60 * 1000); // 1 minutes

    // Clean-up function
    return () => clearInterval(interval);
  }, []);

  console.log("isLoggedIn", isLoggedIn);

  // Get Tenant & Access Key
  useEffect(() => {
    const fetchData = async () => {
      const accessKey =
        "$2y$10$0MNB6SNrJCDmXpZgb14Cgu7r3ZcEVlbbk8XvmRn2x9hKZXebK5Grm";
      const url =
        "http://3.108.229.60:8082/bluwyremini-backend/info/getCustomerTenantDetails.php";

      try {
        const response = await axios.get(url, {
          params: {
            accessKey: accessKey,
          },
        });
        const responseData = response.data;

        // console.log("Get Tenant & Access Key",responseData );

        if (responseData) {
          setCustomerAccessKey(responseData.data.custEncKey);
          sessionStorage.setItem("tenantName", responseData.data.tenant);
          sessionStorage.setItem("accessKey", responseData.data.custEncKey);
        }
      } catch (error) {
        console.error("Error fetching Tenant & Access Key:", error);
      }
    };

    if (isLoggedIn) fetchData();
  }, [isLoggedIn]);

  // Get WhatsApp Configuration Details
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url =
          "http://3.108.229.60:8082/bluwyremini-backend/info/getChannelDetails.php";
        const channelName = "whatsapp";
        const response = await axios.get(url, {
          params: {
            accessKey: customerAccessKey,
            channelName: channelName,
          },
        });
        const responseData = response.data;
        // console.log("Get WhatsApp Configuration Details :", responseData);

        const jsonStringWhatsapp = JSON.stringify(responseData.data);

        sessionStorage.setItem("whatsappConfig", jsonStringWhatsapp);
      } catch (error) {
        console.error("Error fetching WhatsApp Configuration Details:", error);
      }
    };

    if (customerAccessKey) fetchData();
  }, [customerAccessKey]);

  // Get Telegram Configuration Details
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url =
          "http://3.108.229.60:8082/bluwyremini-backend/info/getChannelDetails.php";
        const channelName = "telegram";
        const response = await axios.get(url, {
          params: {
            accessKey: customerAccessKey,
            channelName: channelName,
          },
        });
        const responseData = response.data;
        // console.log("Get Telegram Configuration Details :", responseData);

        const jsonStringTelegram = JSON.stringify(responseData.data);

        sessionStorage.setItem("TelegramConfig", jsonStringTelegram);
      } catch (error) {
        console.error("Error fetching Telegram Configuration Details:", error);
      }
    };

    if (customerAccessKey) fetchData();
  }, [customerAccessKey]);

  // Get Instagram Configuration Details
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url =
          "http://3.108.229.60:8082/bluwyremini-backend/info/getChannelDetails.php";
        const channelName = "instagram";
        const response = await axios.get(url, {
          params: {
            accessKey: customerAccessKey,
            channelName: channelName,
          },
        });
        const responseData = response.data;
        // console.log("Get Instagram Configuration Details :", responseData);

        const jsonStringInstagram = JSON.stringify(responseData.data);

        sessionStorage.setItem("InstagramConfig", jsonStringInstagram);
      } catch (error) {
        console.error("Error fetching Instagram Configuration Details:", error);
      }
    };

    if (customerAccessKey) fetchData();
  }, [customerAccessKey]);

  // Get Messenger Configuration Details
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url =
          "http://3.108.229.60:8082/bluwyremini-backend/info/getChannelDetails.php";
        const channelName = "messenger";
        const response = await axios.get(url, {
          params: {
            accessKey: customerAccessKey,
            channelName: channelName,
          },
        });
        const responseData = response.data;
        // console.log("Get Messenger Configuration Details :", responseData);

        const jsonStringMessenger = JSON.stringify(responseData.data);

        sessionStorage.setItem("MessengerConfig", jsonStringMessenger);
      } catch (error) {
        console.error("Error fetching Messenger Configuration Details:", error);
      }
    };

    if (customerAccessKey) fetchData();
  }, [customerAccessKey]);

  // Get DialogFlowCX Configuration Details
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url =
          "http://3.108.229.60:8082/bluwyremini-backend/info/getChannelDetails.php";
        const channelName = "dialogflowcx";
        const response = await axios.get(url, {
          params: {
            accessKey: customerAccessKey,
            channelName: channelName,
          },
        });
        const responseData = response.data;
        // console.log("Get DialogFlowCX Configuration Details :", responseData);

        const jsonStringDialogFlowCX = JSON.stringify(responseData.data);

        sessionStorage.setItem("DialogFlowCXConfig", jsonStringDialogFlowCX);
      } catch (error) {
        console.error(
          "Error fetching DialogFlowCX Configuration Details:",
          error
        );
      }
    };

    if (customerAccessKey) fetchData();
  }, [customerAccessKey]);

  return {
    inputUserName,
    setInputUserName,
    inputUserPassword,
    setInputUserPassword,
    handleLoginClick,
    isLoggedIn,
    handleLogoutClick,
  };
};

export default useAuthentication;
