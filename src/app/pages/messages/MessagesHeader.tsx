import React, { useEffect, useState } from "react";
import { KTIcon } from "../../../_metronic/helpers";
import TicketsModal from "./MessagesChatComponent/TicketsModal/TicketsModal";
import axios from "axios";
import CustomSnackBar from "../../components/CustomSnackbar";
import useStaticData from "../../StaticData";
// import { Link, useLocation } from "react-router-dom";

const initialValue = {
  channelName: null,
  config1Data: null,
  config2Data: null,
  config3Data: null,
  config4Data: null,
};

const HeaderCard = ({
  messageTab,
  setMessageTab,
  headerName,
  headerValue,
  newMessage,
}: any) => {
  return (
    <div
      className={`${
        messageTab === headerValue ? "text-primary" : "text-gray-500"
      } position-relative`}
      style={{ cursor: "pointer", padding: "0.5rem" }}
      onClick={() => setMessageTab(headerValue)}
      // "all"
    >
      {headerName}
      {newMessage > 0 && (
        <span
          style={{
            display: "inline-block",
            backgroundColor: "red",
            color: "white",
            minHeight: "1.5rem",
            minWidth: "1.5rem",
            textAlign: "center",
            padding: "0.3rem",
            borderRadius: "50%",
            marginLeft: "0.5rem",
            fontSize: "0.9rem",
          }}
        >
          {newMessage}
        </span>

        // <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        //   99+
        // </span>
      )}
    </div>
  );
};

const MessagesHeader = ({
  messageTab,
  setMessageTab,
  selectedKeyWord,
  setSelectedKeyWord,
  messageUnreadCount,
  totalMessage,
}: any) => {
  const { baseUrl } = useStaticData();

  //   const location = useLocation();
  const [showTicketsModal, setShowTicketsModal] =
    React.useState<boolean>(false);
  const [createTicketsData, setCreateTicketsData] =
    React.useState<any>(initialValue);
  const [keywordListData, setKeywordListData] = useState([]);
  const [snackbar, setSnackbar] = useState({
    showSnackbar: false,
    severitySnackBar: "",
    messageSnackBar: "",
  });
  const [totalMessageCount, setTotalMessageCount] = React.useState(0);

  // console.log("messageUnreadCount MessagesHeader", messageUnreadCount);
  useEffect(() => {
    const url = `${baseUrl}/getKeywordDetails.php`;
    const accessKey = sessionStorage.getItem("accessKey");

    const params = {
      accessKey: accessKey,
    };

    const fetchData = async () => {
      try {
        const response = await axios.get(url, { params });

        // console.log("response getKeywordDetails:", response.data);
        setKeywordListData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (totalMessageCount < totalMessage) {
      setTotalMessageCount(totalMessage);
      setSnackbar({
        showSnackbar: true,
        severitySnackBar: "success",
        messageSnackBar: "Incoming New Message !",
      });
    } else {
      setTotalMessageCount(totalMessage);
    }
  }, [totalMessage, totalMessageCount]);

  return (
    <div className="card mb-1 mb-xl-1">
      <div
        className="card-body pt-2 pb-2"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "63%" }}>
          <div className="py-3 d-flex gap-6 fw-bold fs-6 ">
            <HeaderCard
              messageTab={messageTab}
              setMessageTab={setMessageTab}
              headerName={"All Messages"}
              headerValue={"all"}
              newMessage={
                messageUnreadCount?.totalCount
                  ? Number(messageUnreadCount?.totalCount)
                  : 0
              }
            />

            <HeaderCard
              messageTab={messageTab}
              setMessageTab={setMessageTab}
              headerName={"Whatsapp"}
              headerValue={"whatsapp"}
              newMessage={
                messageUnreadCount?.wabaCount
                  ? Number(messageUnreadCount?.wabaCount)
                  : 0
              }
            />

            <HeaderCard
              messageTab={messageTab}
              setMessageTab={setMessageTab}
              headerName={"Messenger"}
              headerValue={"messenger"}
              newMessage={
                messageUnreadCount?.fbmCount
                  ? Number(messageUnreadCount?.fbmCount)
                  : 0
              }
            />

            <HeaderCard
              messageTab={messageTab}
              setMessageTab={setMessageTab}
              headerName={"Instagram"}
              headerValue={"instagram"}
              newMessage={
                messageUnreadCount?.instaCount
                  ? Number(messageUnreadCount?.instaCount)
                  : 0
              }
            />

            <HeaderCard
              messageTab={messageTab}
              setMessageTab={setMessageTab}
              headerName={"Telegram"}
              headerValue={"telegram"}
              newMessage={
                messageUnreadCount?.telegarmCount
                  ? Number(messageUnreadCount?.telegarmCount)
                  : 0
              }
            />
          </div>
        </div>
        <div
          style={{ width: "36%" }}
          className="d-flex align-items-center justify-content-end gap-3"
        >
          <i
            className="fas fa-cogs ms-1 fs-7"
            data-bs-toggle="tooltip"
            title="Automated Responses"
          ></i>

          <div style={{ width: "200px" }}>
            <select
              className="form-select form-select-solid form-select-lg"
              value={selectedKeyWord}
              onChange={(event: any) => {
                setSelectedKeyWord(event.target.value);
              }}
            >
              <option value="" selected>
                Select Response
              </option>
              {keywordListData?.length > 0 &&
                keywordListData.map((item: any) => {
                  return (
                    <option key={item.id} value={item.description}>
                      {item.keyword}
                    </option>
                  );
                })}
            </select>
          </div>

          <div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setShowTicketsModal(true)}
            >
              <KTIcon iconName="plus" className="fs-2" />
              Create Ticket
            </button>
          </div>
        </div>
      </div>
      <TicketsModal
        show={showTicketsModal}
        handleClose={() => setShowTicketsModal(false)}
        setData={setCreateTicketsData}
      />

      <CustomSnackBar
        showSnackbar={snackbar.showSnackbar}
        setSnackbar={setSnackbar}
        severitySnackBar={snackbar.severitySnackBar}
        messageSnackBar={snackbar.messageSnackBar}
      />
    </div>
  );
};

export { MessagesHeader };
