import React from "react";
// import { useQuery } from "react-query";
import axios from "axios";

// const serviceInboxListData = async (inboxChannel: string) => {
//   const url =
//     "http://3.108.229.60:8082/bluwyremini-backend/info/getChatUsersList.php";
//   const params = {
//     accessKey: "$2y$10$0MNB6SNrJCDmXpZgb14Cgu7r3ZcEVlbbk8XvmRn2x9hKZXebK5Grm",
//     id: "2",
//     channelName: inboxChannel,
//   };

//   const response = await axios.get(url, { params });

//   return response.data;
// };

const InboxList = ({ inboxChannel, setSelectedUser }: any) => {
  const [inboxListData, setInboxListData] = React.useState([]);

  // const {
  //   data: inboxAPIData,
  //   isLoading,
  //   error,
  // } = useQuery("inboxList", () => serviceInboxListData(inboxChannel));

  // React.useEffect(() => {
  //   // if (inboxAPIData && inboxAPIData.length > 0) setInboxListData(inboxAPIData);
  // }, [inboxAPIData]);

  React.useEffect(() => {
    const fetchData = async () => {
      // const storedData = sessionStorage.getItem("whatsAppStoredData");
      // let whatsAppStoredData;
      // if (storedData) whatsAppStoredData = JSON.parse(storedData);

      try {
        const url =
          "http://3.108.229.60:8082/bluwyremini-backend/info/getChatUsersList.php";
        const params = {
          accessKey:
            "$2y$10$0MNB6SNrJCDmXpZgb14Cgu7r3ZcEVlbbk8XvmRn2x9hKZXebK5Grm",
          id: "2",
          channelName: inboxChannel,
        };

        const response = await axios.get(url, { params });

        // console.log("refetch Inbox");
        if (response?.data?.length > 0) setInboxListData(response?.data);
        else setInboxListData([]);
      } catch (error) {
        console.log("error fetching", error);
        // setError(error);
      } finally {
        // setIsLoading(false);
      }
    };
    // Fetch inbox initially
    fetchData();

    // Poll for new inbox every 5 seconds (adjust as needed)
    const intervalInboxFetch = setInterval(fetchData, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalInboxFetch);
  }, [inboxChannel]);

  //   React.useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const url =
  //           "http://3.108.229.60:8082/bluwyremini-backend/info/getChatUsersList.php";
  //         const params = {
  //           accessKey:
  //             "$2y$10$0MNB6SNrJCDmXpZgb14Cgu7r3ZcEVlbbk8XvmRn2x9hKZXebK5Grm",
  //           id: "2",
  //           channelName: inboxChannel,
  //         };

  //         const response = await axios.get(url, { params });

  //         // setData(response.data);
  //       } catch (error) {
  //         // setError(error);
  //       } finally {
  //         // setIsLoading(false);
  //       }
  //     };

  //     fetchData();
  //   }, []); // The empty dependency array ensures the effect runs once when the component mounts

  const calculateTimeDifference = (chatTime: number) => {
    const currentDate: any = new Date();
    const givenDate: any = new Date(chatTime);

    const differenceInMilliseconds = Math.abs(givenDate - currentDate);

    const days = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (differenceInMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (differenceInMilliseconds % (1000 * 60 * 60)) / (1000 * 60)
    );

    if (days > 0) return `${days} days`;
    else if (hours > 0) return `${hours} hrs`;
    else return `${minutes} mins`;
  };

  return (
    <div
      className="scroll-y me-n5 pe-5 h-200px h-lg-auto"
      data-kt-scroll="true"
      data-kt-scroll-activate="{default: false, lg: true}"
      data-kt-scroll-max-height="auto"
      data-kt-scroll-dependencies="#kt_header, #kt_toolbar, #kt_footer, #kt_chat_contacts_header"
      data-kt-scroll-wrappers="#kt_content, #kt_chat_contacts_body"
      data-kt-scroll-offset="0px"
    >
      {inboxListData.length > 0 ? (
        inboxListData.map((item: any) => (
          <div className="d-flex flex-stack py-4">
            <div className="d-flex align-items-center">
              <div className="symbol symbol-45px symbol-circle">
                <span className="symbol-label bg-light-warning text-warning fs-6 fw-bolder">
                  {item?.custName[0]}
                </span>
              </div>

              <div className="ms-5">
                <span
                  // href="#"
                  className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                  style={{ cursor: "pointer" }}
                  onClick={() => setSelectedUser(item)}
                >
                  {item?.custName}
                </span>
                <div className="fw-bold text-gray-500">{item?.custNumber}</div>
              </div>
            </div>

            <div className="d-flex flex-column align-items-end ms-2">
              <span className="text-muted fs-7 mb-1">
                {calculateTimeDifference(item?.lastInteractionDatetime)}
              </span>
              <span className="badge badge-sm badge-circle badge-light-success">
                6
              </span>
            </div>

            <div className="separator separator-dashed d-none"></div>
          </div>
        ))
      ) : (
        <span className="fw-bold text-gray-500">No inbox list to show.</span>
      )}
    </div>
  );
};

export default InboxList;
