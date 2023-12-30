import React from "react";
import { KTIcon } from "../../../../../../../_metronic/helpers";
import AddKeyWordsModal from "../../AddKeyWordsModal/AddKeyWordsModal";
import { useListView } from "../../core/ListViewProvider";
import { UsersListFilter } from "./UsersListFilter";

const initialValue = {
  mediaFile: null,
  mediaTitle: null,
  mediaDescription: null,
};

const UsersListToolbar = () => {
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [addMediaModalData, setAddMediaModalData] =
    React.useState<object>(initialValue);

  console.log("addMediaModalData", addMediaModalData);

  const { setItemIdForUpdate } = useListView();
  const openAddUserModal = () => {
    setItemIdForUpdate(null);
  };

  return (
    <div
      className="d-flex justify-content-end"
      data-kt-user-table-toolbar="base"
    >
      {/* <UsersListFilter /> */}

      {/* begin::Export */}
      {/* <button type="button" className="btn btn-light-primary me-3">
        <KTIcon iconName="exit-up" className="fs-2" />
        Export
      </button> */}
      {/* end::Export */}

      {/* begin::Add user */}
      <button
        type="button"
        className="btn btn-primary"
        // onClick={openAddUserModal}
        onClick={() => setShowModal(true)}
      >
        <KTIcon iconName="plus" className="fs-2" />
        Add KeyWords
      </button>
      {/* end::Add user */}

      <AddKeyWordsModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        setData={setAddMediaModalData}
      />
    </div>
  );
};

export { UsersListToolbar };
