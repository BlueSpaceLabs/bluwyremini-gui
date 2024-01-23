import { useEffect, useState } from "react";
import { KTIcon } from "../../../../../../_metronic/helpers";
import { DateRangeFilter } from "./DateRangeFilter";
import axios from "axios";
// import { useListView } from "../../core/ListViewProvider";
// import { UsersListFilter } from "./UsersListFilter";

const UsersListToolbar = ({
  handleShowAddModal,
  setFromDate,
  setToDate,
}: any) => {
  // const { setItemIdForUpdate } = useListView();

  const [showExport, setShowExport] = useState<boolean>(false);

  // useEffect(() => {
  //   console.log("Calling API", { fromDate }, { toDate });

  //   if (fromDate && toDate) {
  //     setShowExport(true);
  //     const serviceGetContactDetails = async () => {
  //       try {
  //         const response = await axios.get(
  //           "http://3.108.229.60:8082/bluwyremini-backend/info/getContactDetails.php",
  //           {
  //             params: {
  //               channelName: "whatsapp",
  //               accessKey:
  //                 "$2y$10$0MNB6SNrJCDmXpZgb14Cgu7r3ZcEVlbbk8XvmRn2x9hKZXebK5Grm",
  //               from: fromDate,
  //               to: toDate,
  //             },
  //           }
  //         );
  //         const responseData = response?.data;

  //         console.log("responseData", responseData);
  //       } catch (error: any) {
  //         console.log(error);
  //       } finally {
  //         console.log("API Fetch Done");
  //       }
  //     };

  //     serviceGetContactDetails();
  //   } else setShowExport(false);
  // }, [fromDate, toDate]);

  return (
    <div
      className="d-flex justify-content-end"
      data-kt-user-table-toolbar="base"
    >
      <DateRangeFilter setFromDate={setFromDate} setToDate={setToDate} />

      {/* <UsersListFilter /> */}

      {/* begin::Export */}
      {showExport && (
        <button type="button" className="btn btn-light-primary me-3">
          <KTIcon iconName="exit-up" className="fs-2" />
          Export
        </button>
      )}
      {/* end::Export */}

      {/* begin::Add user */}
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleShowAddModal}
      >
        <KTIcon iconName="plus" className="fs-2" />
        Add Contact
      </button>
      {/* end::Add user */}
    </div>
  );
};

export { UsersListToolbar };
