import React from "react";
import { ChatInner, Dropdown1 } from "../../../../_metronic/partials";
import axios from "axios";

//const MessagesProfile = ({ setShowProfile }) => {
const MessagesProfile = ({ setShowProfile, selectedInbox }: any) => {
  const [profileData, setProfileData] = React.useState({
    profileName: "",
    mobileNumber: "",
    emailId: "",
    createdDate: "",
  });

  React.useEffect(() => {
    const fetchData = async () => {
      const storedData = sessionStorage.getItem("whatsAppStoredData");
      let whatsAppStoredData;
      if (storedData) whatsAppStoredData = JSON.parse(storedData);

      try {
        const url =
          "http://3.108.229.60:8082/bluwyremini-backend/info/getChatUserDetails.php";

        const params = {
          accessKey:
            "$2y$10$0MNB6SNrJCDmXpZgb14Cgu7r3ZcEVlbbk8XvmRn2x9hKZXebK5Grm",
          id: selectedInbox?.custNumber,
        };

        const response = await axios.get(url, { params });

        console.log(response.data);
        setProfileData({
          profileName: response?.data[0]?.custName,
          mobileNumber: selectedInbox?.custNumber,
          emailId: "",
          createdDate: "",
        });
      } catch (error) {
        // setError(error);
      } finally {
        // setIsLoading(false);
      }
    };

    if (selectedInbox?.custNumber && selectedInbox?.custName) fetchData();
  }, [selectedInbox?.custNumber]);

  return (
    <React.Fragment>
      <div className="card" id="kt_chat_messenger">
        <div className="card-header" id="kt_chat_messenger_header">
          <div className="card-title">
            <div
              className="symbol symbol-45px symbol-circle"
              style={{ marginLeft: "-20px" }}
            >
              <span className="symbol-label bg-light-danger text-danger fs-6 fw-bolder">
                {profileData.profileName[0]}
              </span>
            </div>
            <div className="d-flex justify-content-center flex-column me-3">
              <span
                className="fs-4 fw-bolder text-gray-900 text-hover-primary me-1 mb-2 lh-1"
                style={{ cursor: "pointer" }}
                onClick={() => setShowProfile(false)}
              >
                {/* Brian Cox */}
                {profileData.profileName}
              </span>

              <div className="mb-0 lh-1">
                <span className="badge badge-success badge-circle w-10px h-10px me-1"></span>
                <span className="fs-7 fw-bold text-gray-500">Active</span>
              </div>
            </div>
          </div>

          {/* <div className="card-toolbar">
            <div className="me-n3">
              <button
                className="btn btn-sm btn-icon btn-active-light-primary"
                data-kt-menu-trigger="click"
                data-kt-menu-placement="bottom-end"
                data-kt-menu-flip="top-end"
                onClick={() => setShowProfile(false)}
              >
                <i className="ki-outline ki-cross fs-2" />{" "}
              </button>
              <Dropdown1 />
            </div>
          </div> */}
        </div>
        {/* <ChatInner /> */}
        <div className="d-flex flex-column p-4">
          <div className="py-2">
            <div className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2">
              Mobile Number
            </div>
            <div className="fw-bold text-gray-500">
              {profileData.mobileNumber}
            </div>
          </div>

          <div className="py-2">
            <div className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2">
              Email Id
            </div>
            <div className="fw-bold text-gray-500">{profileData.emailId}</div>
          </div>

          <div className="py-2">
            <div className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2">
              Created Date
            </div>
            <div className="fw-bold text-gray-500">
              {profileData.createdDate}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MessagesProfile;
