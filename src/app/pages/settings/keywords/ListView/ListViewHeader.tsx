import React, { useState } from "react";
import SearchKeyWordFilter from "./SearchFilter";
import { KTIcon } from "../../../../../_metronic/helpers";

const ListViewHeader = ({ setSearchKeyWord, showAddModal }: any) => {
  return (
    <div className="card-header border-0 pt-6">
      <SearchKeyWordFilter setDebouncedSearchTerm={setSearchKeyWord} />

      <div
        className="d-flex justify-content-end"
        data-kt-user-table-toolbar="base"
      >
        {/* <DateRangeFilter setFromDate={setFromDate} setToDate={setToDate} /> */}

        {/* <UsersListFilter /> */}

        {/* begin::Export */}
        {/* {showExport && (
        <button type="button" className="btn btn-light-primary me-3">
          <KTIcon iconName="exit-up" className="fs-2" />
          Export
        </button>
      )} */}
        {/* end::Export */}

        {/* begin::Add user */}
        <button
          type="button"
          className="btn btn-primary"
          onClick={showAddModal}
        >
          <KTIcon iconName="plus" className="fs-2" />
          Add KeyWord
        </button>
        {/* end::Add user */}
      </div>
    </div>
  );
};

export default ListViewHeader;
