import { useState } from "react";
import { KTIcon } from "../../../../../../_metronic/helpers";
import { useListView } from "../../core/ListViewProvider";
import { UsersListFilter } from "./UsersListFilter";
// import {
//   CreateAppModal,
//   Dropdown1,
// } from "../../../../../../_metronic/partials";
import { useLayout } from "../../../../../../_metronic/layout/core";
// import { CampaignModal } from "../../campaign-modal/CampaignModal";
import CustomStepsModal from "../../campaign-modal/custom-steps";

const UsersListToolbar = () => {
  const { setItemIdForUpdate } = useListView();
  // const openAddUserModal = () => {
  //   setItemIdForUpdate(null);
  // };
  const { config } = useLayout();
  const [showCreateAppModal, setShowCreateAppModal] = useState<boolean>(false);
  const [steps, setSteps] = useState<number>(1);

  return (
    <div
      className="d-flex justify-content-end"
      data-kt-user-table-toolbar="base"
    >
      <UsersListFilter />

      {/* begin::Export */}
      <button type="button" className="btn btn-light-primary me-3">
        <KTIcon iconName="exit-up" className="fs-2" />
        Export
      </button>
      {/* end::Export */}

      {/* begin::Add user */}
      {/*} <button
        type="button"
        className="btn btn-primary"
        onClick={openAddUserModal}
      >
        <KTIcon iconName="plus" className="fs-2" />
        Add User
  </button>*/}
      {/* end::Add user */}
      {config.app?.toolbar?.primaryButton && (
        <a
          href="#"
          onClick={() => setShowCreateAppModal(true)}
          className="btn btn-sm fw-bold btn-primary"
        >
          Add Campaign
        </a>
      )}
      {/* <CreateAppModal
        show={showCreateAppModal}
        handleClose={() => setShowCreateAppModal(false)}
      /> */}

      {/* <CampaignModal
        show={showCreateAppModal}
        handleClose={() => setShowCreateAppModal(false)}
      /> */}
      <CustomStepsModal
        show={showCreateAppModal}
        handleClose={() => {
          setShowCreateAppModal(false);
          setSteps(1);
        }}
        steps={steps}
        setSteps={setSteps}
      />
    </div>
  );
};

export { UsersListToolbar };
