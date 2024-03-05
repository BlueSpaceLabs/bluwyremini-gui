import React, { FC, useEffect } from "react";
// import { useMutation, useQueryClient } from "react-query";
import { MenuComponent } from "../../../../_metronic/assets/ts/components";
import { KTIcon } from "../../../../_metronic/helpers";
// import CustomEditModal from "./CustomEditModal";
import CustomDeleteModal from "./CustomDeleteModal";
import DetailCampaignModal from "./DetailModal";

// type Props = {
//   id: ID;
// };

const CustomActionButton = ({
  detailCampaignData,
  setSnackbar,
  setRefetchList,
}: any) => {
  const [showEditModal, setShowEditModal] = React.useState<boolean>(false);

  const [showDetailCampaignModal, setShowDetailCampaignModal] =
    React.useState<boolean>(false);

  useEffect(() => {
    MenuComponent.reinitialization();
  }, []);

  return (
    <>
      <span
        // href="#"
        className="btn btn-light btn-active-light-primary btn-sm"
        data-kt-menu-trigger="click"
        data-kt-menu-placement="bottom-end"
      >
        Actions
        <KTIcon iconName="down" className="fs-5 m-0" />
      </span>
      {/* begin::Menu */}
      <div
        className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
        data-kt-menu="true"
      >
        {/* begin::Menu item */}
        {/* <div className="menu-item px-3">
          <a className="menu-link px-3" onClick={() => setShowEditModal(true)}>
            Details
          </a>
        </div> */}
        {/* end::Menu item */}

        {/* begin::Menu item */}
        <div className="menu-item px-3">
          <a
            className="menu-link px-3"
            data-kt-users-table-filter="delete_row"
            onClick={() => setShowDetailCampaignModal(true)}
          >
            Details
          </a>
        </div>
        {/* end::Menu item */}

        {/* <CustomEditModal
          show={showEditModal}
          handleClose={() => setShowEditModal(false)}
          detailTemplateData={detailTemplateData}
        /> */}

        {/* <CustomDeleteModal
          show={showDeleteModal}
          handleClose={() => setShowDeleteModal(false)}
          selectedId={detailCampaignData.id}
        /> */}
      </div>
      {/* end::Menu */}

      <DetailCampaignModal
        show={showDetailCampaignModal}
        handleClose={() => setShowDetailCampaignModal(false)}
        selectedId={detailCampaignData.id}
        setRefetchList={setRefetchList}
        setSnackbar={setSnackbar}
      />
    </>
  );
};

export { CustomActionButton };
