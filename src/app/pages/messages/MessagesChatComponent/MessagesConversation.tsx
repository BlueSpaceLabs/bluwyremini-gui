import React, { useEffect, useState } from "react";
// import {  Dropdown1 } from "../../../../_metronic/partials";
// import { KTIcon } from "../../../../_metronic/helpers";
import { ChatConversation } from "./chat/ChatInner";
import axios from "axios";
import CustomSnackBar from "../../../components/CustomSnackbar";
import RoleChecker from "../../../RoleChecker";
import useStaticData from "../../../StaticData";
// import { useQuery } from "react-query";

// const serviceConversationDetails = async (selectedId: any) => {
//   const url =
//        `${baseUrl}/getChatUserDetails.php`;

//   const params = {
//     accessKey: accessKey,
//     id: selectedId,
//   };

//   const response = await axios.get(url, { params });

//   return response.data;
// };

const MessagesConversation = ({
  setShowProfile,
  selectedInbox,
  messageTab,
  selectedKeyWord,
}: any) => {
  const { baseUrl } = useStaticData();

  const [conversationData, setConversationData] = React.useState([]);
  const [agentListData, setAgentListData] = React.useState([]);
  const [agentSelected, setAgentSelected] = React.useState("");
  const [snackbar, setSnackbar] = useState({
    showSnackbar: false,
    severitySnackBar: "",
    messageSnackBar: "",
  });

  const [sendMessageClick, setSendMessageClick] =
    React.useState<boolean>(false);
  // const { data: conversationDetails, isLoading, isError } =
  //   // useQuery("conversationDataAPI", () =>
  //   //   serviceConversationDetails(selectedInbox?.custNumber)
  //   // );

  //   useQuery("conversationDataAPI", () =>
  //     selectedInbox?.custNumber
  //       ? serviceConversationDetails(selectedInbox.custNumber)
  //       : null
  //   );

  // const handleSelectChange = (event: any) => {
  //   setSelectedKeyWord(event.target.value);
  // };

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

        // console.log("refetch Message");
        setConversationData(response.data);
      } catch (error) {
        // setError(error);
      } finally {
        // setIsLoading(false);
      }
    };
    if (selectedInbox?.custNumber)
      // Fetch messages initially
      fetchData();

    // Poll for new messages every 5 seconds (adjust as needed)
    const intervalMessageFetch = setInterval(fetchData, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalMessageFetch);
  }, [selectedInbox?.custNumber, sendMessageClick]);

  useEffect(() => {
    const url = `${baseUrl}/getAgentProfileDetails.php`;
    const accessKey = sessionStorage.getItem("accessKey");

    const params = {
      accessKey: accessKey,
    };

    const fetchData = async () => {
      try {
        const response = await axios.get(url, { params });
        const responseData = response.data;

        // console.log(responseData.dataArray);
        setAgentListData(responseData.dataArray);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [selectedInbox]);

  useEffect(() => {
    const handleAssignAgent = async () => {
      const tenant = "bsl";

      try {
        const url = `${baseUrl}/assignedChatToAgent.php`;
        const accessKey = sessionStorage.getItem("accessKey");

        const selectedAgent = JSON.parse(agentSelected);

        const data = {
          tenant: tenant,
          accessKey: accessKey,
          chat_data: {
            id: selectedInbox.custNumber,
            agentId: selectedAgent?.id,
            chatid: selectedInbox.chatId,
            agentName: selectedAgent?.username,
          },
        };

        const response = await axios.post(url, data, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        // console.log("Response assignedChatToAgent:", response.data);

        setSnackbar({
          showSnackbar: true,
          severitySnackBar: "success",
          messageSnackBar: response?.data?.message
            ? response?.data?.message
            : "Successfully Assign Agent",
        });

        // console.log("assignedChatToAgent", response.data);
      } catch (error) {
        console.error("Error fetching updateMsgStatusRead:", error);

        setSnackbar({
          showSnackbar: true,
          severitySnackBar: "error",
          messageSnackBar: error?.response?.data?.message
            ? error?.response?.data?.message
            : "Failed to Assign Agent",
        });
      } finally {
        // setIsLoading(false);
      }
    };

    if (agentSelected) handleAssignAgent();
  }, [agentSelected]);

  if (selectedInbox?.custNumber) {
    return (
      <React.Fragment>
        <div className="card" id="kt_chat_messenger">
          <div className="card-header pt-3" id="kt_chat_messenger_header">
            <div className="card-title w-100 d-flex justify-content-between align-items-center">
              {/* <div className="symbol-group symbol-hover"></div> */}
              <div className="d-flex justify-content-center flex-column me-3">
                <span
                  className="fs-4 fw-bolder text-gray-900 text-hover-primary me-1 mb-2 lh-1"
                  style={{ cursor: "pointer" }}
                  onClick={() => setShowProfile(true)}
                >
                  {selectedInbox?.custName}
                </span>

                <div className="mb-0 lh-1">
                  <span className="badge badge-success badge-circle w-10px h-10px me-1"></span>
                  <span className="fs-7 fw-bold text-gray-500">Active</span>
                </div>
              </div>
              <RoleChecker defaultRole="ADMIN_ROLE">
                <div style={{ width: "200px" }}>
                  <select
                    className="form-select form-select-solid form-select-lg"
                    value={agentSelected}
                    onChange={(event: any) => {
                      setAgentSelected(event.target.value);
                    }}
                  >
                    <option value="" selected>
                      Assign To
                    </option>
                    {agentListData?.length > 0 &&
                      agentListData.map((item: any) => {
                        return (
                          <option
                            key={item.id}
                            // value={`${item.id},${item.username}`}
                            value={JSON.stringify({
                              id: item.id,
                              username: item.username,
                            })}
                          >
                            {`${item.firstName} ${item.lastName}`}
                          </option>
                        );
                      })}
                  </select>
                </div>
              </RoleChecker>
            </div>

            <div className="card-toolbar">
              {/* <div className="col-lg-8 fv-row" style={{ width: "200px" }}>
              <select
                className="form-select form-select-solid form-select-lg"
                value={selectedKeyWord}
                onChange={handleSelectChange}
              >
                <option value="" selected disabled>
                  Select KeyWord
                </option>
                <option value="kayword_1">KeyWord 1</option>
                <option value="kayword_2">KeyWord 2</option>
                <option value="kayword_3">KeyWord 3</option>
                <option value="kayword_4">KeyWord 4</option>
              </select>
            </div> */}
              {/* <div className="me-n3">
              <button
                className="btn btn-active-light-primary"
                data-kt-menu-trigger="click"
                data-kt-menu-placement="bottom-end"
                data-kt-menu-flip="top-end"
                onClick={() => setShowProfile(true)}
              >
                Profile Details
              </button>
              <Dropdown1 />
            </div> */}
            </div>
          </div>
          <ChatConversation
            selectedKeyWord={selectedKeyWord}
            conversationData={conversationData}
            selectedInbox={selectedInbox}
            setSendMessageClick={setSendMessageClick}
            messageTab={messageTab}
          />
        </div>

        <CustomSnackBar
          showSnackbar={snackbar.showSnackbar}
          setSnackbar={setSnackbar}
          severitySnackBar={snackbar.severitySnackBar}
          messageSnackBar={snackbar.messageSnackBar}
        />
      </React.Fragment>
    );
  } else {
    return (
      <div className="card" id="kt_chat_messenger">
        <div className="card-header" id="kt_chat_messenger_header">
          <div className="card-title">Please select a inbox. </div>
        </div>
      </div>
    );
  }
};

export default MessagesConversation;
