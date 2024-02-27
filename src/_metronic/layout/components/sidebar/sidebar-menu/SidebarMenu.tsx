import { useEffect, useState } from "react";
import { SidebarMenuMain } from "./SidebarMenuMain";
import CustomSnackBar from "../../../../../app/components/CustomSnackbar";
import axios from "axios";

const SidebarMenu = () => {
  const [TotalMessageOld, setTotalMessageOld] = useState(0);
  const [TotalMessageNew, setTotalMessageNew] = useState(0);

  const [snackbar, setSnackbar] = useState({
    showSnackbar: false,
    severitySnackBar: "",
    messageSnackBar: "",
  });

  useEffect(() => {
    if (TotalMessageOld < TotalMessageNew) {
      setTotalMessageOld(TotalMessageNew);
      setSnackbar({
        showSnackbar: true,
        severitySnackBar: "success",
        messageSnackBar: "Incoming New Message !",
      });
    } else {
      setTotalMessageOld(TotalMessageNew);
    }
  }, [TotalMessageOld, TotalMessageNew]);

  const storedUserName = sessionStorage.getItem("userName");

  useEffect(() => {
    const fetchAgentProfile = async () => {
      try {
        const url =
          "http://3.108.229.60:8082/bluwyremini-backend/info/getAgentProfileDetails.php";
        const accessKey =
          "$2y$10$0MNB6SNrJCDmXpZgb14Cgu7r3ZcEVlbbk8XvmRn2x9hKZXebK5Grm";

        const response = await axios.get(url, {
          params: {
            accessKey,
            agentName: storedUserName,
          },
        });

        const responseData = response.data;
        const responseProfileData = responseData?.dataArray[0];
        // console.log("response getAgentProfileDetails", responseProfileData);

        if (responseProfileData) {
          sessionStorage.setItem("userId", responseProfileData?.id);
          sessionStorage.setItem("userType", responseProfileData?.agentType);
        }
      } catch (error) {
        console.error("Error fetching agent profile details:", error);
      }
    };

    if (storedUserName) fetchAgentProfile();
  }, [storedUserName]);

  useEffect(() => {
    const fetchData = async () => {
      const storedUserId = sessionStorage.getItem("userId");
      const storedUserType = sessionStorage.getItem("userType");

      try {
        const url =
          "http://3.108.229.60:8082/bluwyremini-backend/info/getMsgUnreadCount.php";
        const response = await axios.get(url, {
          params: {
            accessKey:
              "$2y$10$0MNB6SNrJCDmXpZgb14Cgu7r3ZcEVlbbk8XvmRn2x9hKZXebK5Grm",
            assignedTo: storedUserId,
            userType: storedUserType === "ADMIN_ROLE" ? "admin" : "agent",
          },
        });
        // console.log(
        //   "response getMsgUnreadCount sidebar",
        //   response.data
        // );

        setTotalMessageNew(Number(response.data.totalCount));
      } catch (error) {
        console.error("Error:", error);
      }
    };

    // Fetch unread message count initially
    fetchData();

    // Poll for unread message count every 20 seconds (adjust as needed)
    const intervalUnreadMessageCountFetch = setInterval(fetchData, 1000 * 20);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalUnreadMessageCountFetch);
  }, []);

  return (
    <div className="app-sidebar-menu overflow-hidden flex-column-fluid">
      <div
        id="kt_app_sidebar_menu_wrapper"
        className="app-sidebar-wrapper hover-scroll-overlay-y my-5"
        data-kt-scroll="true"
        data-kt-scroll-activate="true"
        data-kt-scroll-height="auto"
        data-kt-scroll-dependencies="#kt_app_sidebar_logo, #kt_app_sidebar_footer"
        data-kt-scroll-wrappers="#kt_app_sidebar_menu"
        data-kt-scroll-offset="5px"
        data-kt-scroll-save-state="true"
      >
        <div
          className="menu menu-column menu-rounded menu-sub-indention px-3"
          id="#kt_app_sidebar_menu"
          data-kt-menu="true"
          data-kt-menu-expand="false"
        >
          <SidebarMenuMain />
        </div>

        <CustomSnackBar
          showSnackbar={snackbar.showSnackbar}
          setSnackbar={setSnackbar}
          severitySnackBar={snackbar.severitySnackBar}
          messageSnackBar={snackbar.messageSnackBar}
        />
      </div>
    </div>
  );
};

export { SidebarMenu };
