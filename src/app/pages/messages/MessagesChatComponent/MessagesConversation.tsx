import React from "react";
// import {  Dropdown1 } from "../../../../_metronic/partials";
// import { KTIcon } from "../../../../_metronic/helpers";
import { ChatConversation } from "./chat/ChatInner";
import axios from "axios";
// import { useQuery } from "react-query";

// const serviceConversationDetails = async (selectedId: any) => {
//   const url =
//     "http://3.108.229.60:8082/bluwyremini-backend/info/getChatUserDetails.php";

//   const params = {
//     accessKey: "$2y$10$0MNB6SNrJCDmXpZgb14Cgu7r3ZcEVlbbk8XvmRn2x9hKZXebK5Grm",
//     id: selectedId,
//   };

//   const response = await axios.get(url, { params });

//   return response.data;
// };

const MessagesConversation = ({ setShowProfile, selectedInbox }: any) => {
  const [selectedKeyWord, setSelectedKeyWord] = React.useState("");
  const [conversationData, setConversationData] = React.useState([]);
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
      try {
        const url =
          "http://3.108.229.60:8082/bluwyremini-backend/info/getChatUserDetails.php";

        const params = {
          accessKey:
            "$2y$10$0MNB6SNrJCDmXpZgb14Cgu7r3ZcEVlbbk8XvmRn2x9hKZXebK5Grm",
          id: selectedInbox?.custNumber,
        };

        const response = await axios.get(url, { params });

        setConversationData(response.data);
      } catch (error) {
        // setError(error);
      } finally {
        // setIsLoading(false);
      }
    };

    if (selectedInbox?.custNumber) fetchData();
  }, [selectedInbox?.custNumber]);

  if (selectedInbox?.custNumber) {
    return (
      <React.Fragment>
        <div className="card" id="kt_chat_messenger">
          <div className="card-header" id="kt_chat_messenger_header">
            <div className="card-title">
              <div className="symbol-group symbol-hover"></div>
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
          />
        </div>
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
