import React, { useEffect, useState } from "react";
import axios from "axios";
import useStaticData from "../../../StaticData";
import CustomSnackBar from "../../../components/CustomSnackbar";

//const MessagesProfile = ({ setShowProfile }) => {
const MessagesProfile = ({
  setShowProfile,
  selectedInbox,
  messageTab,
}: any) => {
  const { baseUrl } = useStaticData();

  // console.log("selectedInbox", selectedInbox);

  const [formError, setFormError] = React.useState<boolean>(false);
  const [refetchList, setRefetchList] = useState<boolean>(false);
  const [contactDetailData, setContactDetailData] = useState(null);
  const [editContactDetail, setEditContactDetail] = useState({
    address: "",
    mobileNo: "",
    emailId: "",
  });
  const [snackbar, setSnackbar] = useState({
    showSnackbar: false,
    severitySnackBar: "",
    messageSnackBar: "",
  });

  const [profileData, setProfileData] = React.useState({
    profileName: "",
    mobileNumber: "",
    emailId: "",
    createdDate: "",
    address: "",
  });

  const [profileDataEdit, setProfileDataEdit] = React.useState({
    profileName: "",
    mobileNumber: "",
    emailId: "",
    createdDate: "",
    address: "",
  });

  const [editData, setEditData] = useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      const storedData = sessionStorage.getItem("whatsAppStoredData");
      let whatsAppStoredData;
      if (storedData) whatsAppStoredData = JSON.parse(storedData);

      try {
        const url = `${baseUrl}/getChatUserDetails.php`;
        const accessKey = sessionStorage.getItem("accessKey");

        const params = {
          accessKey: accessKey,
          id: selectedInbox?.custNumber,
        };

        const response = await axios.get(url, { params });

        // console.log("response getChatUserDetails", response.data);

        setProfileData({
          profileName: response?.data[0]?.custName,
          mobileNumber: selectedInbox?.custNumber,
          emailId: "",
          createdDate: "",
          address: "",
        });
      } catch (error) {
        // setError(error);
      } finally {
        // setIsLoading(false);
      }
    };

    if (selectedInbox?.custNumber && selectedInbox?.custName) fetchData();
  }, [selectedInbox?.custNumber]);

  useEffect(() => {
    if (editData) setProfileDataEdit(profileData);
  }, [editData, profileData]);

  const handleInputChange = (e: any) => {
    setEditContactDetail({
      ...editContactDetail,
      [e.target.name]: e.target.value,
    });
  };

  const handleContactDetailsUpdateSubmit = async () => {
    if (editContactDetail.mobileNo.length < 2) {
      setFormError(true);
    } else {
      setFormError(false);

      try {
        const accessKey = sessionStorage.getItem("accessKey");

        const data = {
          tenant: "bsl",
          accessKey: accessKey,
          contact_data: {
            mobileNo: editContactDetail.mobileNo,
            address: editContactDetail.address,
            emailId: editContactDetail.emailId,
            messengerId: selectedInbox?.fbSenderId,
            telegramId: messageTab === "telegram" && selectedInbox?.custNumber,
            instaId: selectedInbox?.instaId,
          },
        };

        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        const response = await axios.put(
          `${baseUrl}/modifyContactDetailsMessages.php?channelName=${messageTab}`,
          data,
          config
        );

        setRefetchList((preV: boolean) => !preV);
        // console.log("response", response);

        setSnackbar({
          showSnackbar: true,
          severitySnackBar: "success",
          messageSnackBar: response?.data?.message
            ? response?.data?.message
            : "Successfully Updated Contact Details",
        });
      } catch (error) {
        console.error("Error:", error);

        setSnackbar({
          showSnackbar: true,
          severitySnackBar: "error",
          messageSnackBar: error?.response?.data?.message
            ? error?.response?.data?.message
            : "Failed to Update Contact Details",
        });
      } finally {
        setEditData(false);
      }
    }
  };

  useEffect(() => {
    const url = `${baseUrl}/getContactDetailsMessages.php`;
    const accessKey = sessionStorage.getItem("accessKey");

    const params = {
      accessKey: accessKey,
      channelName: messageTab,
      custId: selectedInbox?.custNumber,
    };

    const fetchData = async () => {
      try {
        const response = await axios.get(url, { params });
        const responseData = response.data;

        console.log("getContactDetailsMessages", responseData?.data);

        const contactData = responseData?.data;

        setContactDetailData(contactData);

        setEditContactDetail({
          address: contactData?.address,
          mobileNo: contactData?.contactNumber,
          emailId: contactData?.emailId,
        });
      } catch (error) {
        setContactDetailData(null);
        setEditContactDetail({
          address: "",
          mobileNo: "",
          emailId: "",
        });

        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [refetchList, baseUrl, selectedInbox?.custNumber, messageTab]);

  return (
    <React.Fragment>
      <div className="card" id="kt_chat_messenger">
        <div className="card-header" style={{ padding: "0.3rem 0.6rem" }}>
          <div className="card-title w-100">
            <div className="w-100 d-flex justify-content-between align-items-start">
              <div>
                <div className="symbol symbol-45px symbol-circle">
                  <span className="symbol-label bg-light-danger text-danger fs-6 fw-bolder">
                    {profileData.profileName[0]}
                  </span>
                </div>
                <div className="d-flex justify-content-center flex-column my-3">
                  <span className="fs-4 fw-bolder text-gray-900 text-hover-primary me-1 mb-2 lh-1">
                    {profileData.profileName}
                  </span>

                  <div className="mb-0 lh-1">
                    <span className="badge badge-success badge-circle w-10px h-10px me-1"></span>
                    <span className="fs-7 fw-bold text-gray-500">Active</span>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <button
                    className="btn btn-sm btn-icon btn-active-light-primary me-1"
                    type="button"
                    data-bs-toggle="tooltip"
                    title="Close Session"
                    onClick={() => setShowProfile(false)}
                  >
                    <i className="bi bi-x-circle fs-3"></i>
                  </button>
                </div>
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
          <div style={{ textAlign: "right" }}>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setEditData(true)}
            >
              Edit
            </button>
          </div>

          <div className="py-2">
            <div className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2">
              {messageTab === "telegram"
                ? "Telegram Id"
                : messageTab === "messenger"
                ? "Messenger Id"
                : messageTab === "instagram"
                ? "Instagram Id"
                : "Mobile Number"}
            </div>

            {editData ? (
              <div>
                <input
                  type="text"
                  className="form-control form-control-solid"
                  placeholder="Edit Mobile Number"
                  value={editContactDetail.mobileNo}
                  name="mobileNo"
                  // onChange={handleInputChange}
                  disabled
                />

                {editContactDetail.mobileNo.length < 2 && formError && (
                  <div className="fv-plugins-message-container">
                    <div className="fv-help-block">
                      Mobile Number is Required.
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="fw-bold text-gray-500">
                {contactDetailData?.contactNumber}
              </div>
            )}
          </div>

          <div className="py-2">
            <div className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2">
              Email Id
            </div>

            {editData ? (
              <div>
                <input
                  type="text"
                  className="form-control form-control-solid"
                  placeholder="Edit Email Id"
                  value={editContactDetail.emailId}
                  name="emailId"
                  onChange={handleInputChange}
                />
              </div>
            ) : (
              <div className="fw-bold text-gray-500">
                {contactDetailData?.emailId}
              </div>
            )}
          </div>

          <div className="py-2">
            <div className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2">
              Address
            </div>

            {editData ? (
              <div>
                <input
                  type="text"
                  className="form-control form-control-solid"
                  placeholder="Edit Address"
                  value={editContactDetail.address}
                  name="address"
                  onChange={handleInputChange}
                />
              </div>
            ) : (
              <div className="fw-bold text-gray-500">
                {contactDetailData?.address}
              </div>
            )}
          </div>

          {editData ? null : (
            <div className="py-2">
              <div className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2">
                Created Date
              </div>
              <div className="fw-bold text-gray-500">
                {contactDetailData?.createdDatetime}
              </div>
            </div>
          )}

          {editData ? null : (
            <div className="py-2">
              <div className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2">
                Last Modified Date
              </div>
              <div className="fw-bold text-gray-500">
                {contactDetailData?.lastModifiedDatetime}
              </div>
            </div>
          )}

          {editData && (
            <div className="d-flex justify-content-between pt-3">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setEditData(false)}
              >
                Cancel
              </button>

              <button
                type="button"
                className="btn btn-primary"
                onClick={handleContactDetailsUpdateSubmit}
              >
                Update
              </button>
            </div>
          )}
        </div>

        <CustomSnackBar
          showSnackbar={snackbar.showSnackbar}
          setSnackbar={setSnackbar}
          severitySnackBar={snackbar.severitySnackBar}
          messageSnackBar={snackbar.messageSnackBar}
        />
      </div>
    </React.Fragment>
  );
};

export default MessagesProfile;
