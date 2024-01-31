import React from "react";
import { KTIcon } from "../../../../../_metronic/helpers";
import { DateRangeFilter } from "./DateRangeFilter";

const FilterBox = ({ setFromDate, setToDate }: any) => {
  return (
    <div
      className="d-flex justify-content-end"
      data-kt-user-table-toolbar="base"
    >
      {/* <UsersListFilter /> */}

      {/* <button type="button" className="btn btn-light-primary me-3">
        <KTIcon iconName="exit-up" className="fs-2" />
        Export
      </button> */}

      <DateRangeFilter setFromDate={setFromDate} setToDate={setToDate} />

      <button
        type="button"
        className="btn btn-primary"
        //   onClick={openAddUserModal}
      >
        <KTIcon iconName="plus" className="fs-2" />
        Add User
      </button>
    </div>
  );
};

export default FilterBox;
