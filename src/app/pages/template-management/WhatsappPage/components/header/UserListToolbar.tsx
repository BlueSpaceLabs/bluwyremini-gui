import { useEffect, useState } from "react";
import { KTIcon } from "../../../../../../_metronic/helpers";
import { useListView } from "../../core/ListViewProvider";
// import { UsersListFilter } from "./UsersListFilter";
import { DateRangeFilter } from "./DateRangeFilter";

const UsersListToolbar = () => {
  const { setItemIdForUpdate } = useListView();
  const openAddUserModal = () => {
    setItemIdForUpdate(null);
  };

  const [fromDate, setFromDate] = useState<string>("");
  const [toDate, setToDate] = useState<string>("");
  const [showExport, setShowExport] = useState<boolean>(false);

  useEffect(() => {
    console.log("Calling API", { fromDate }, { toDate });
    if (fromDate && toDate) setShowExport(true);
    else setShowExport(false);
  }, [fromDate, toDate]);

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
        onClick={openAddUserModal}
      >
        <KTIcon iconName="plus" className="fs-2" />
        Add Template
      </button>
      {/* end::Add user */}
    </div>
  );
};

export { UsersListToolbar };
