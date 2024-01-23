import React, { FC, useEffect } from "react";
// import { useMutation, useQueryClient } from "react-query";
import { MenuComponent } from "../../../../_metronic/assets/ts/components";
import { KTIcon } from "../../../../_metronic/helpers";
// import CustomEditModal from "./CustomContactModal";
// import CustomDeleteModal from "./CustomDetailsModal";
import CustomDetailsModal from "./CustomDetailsModal";
import EditWhatsAppContactModal from "./CustomEditContactModal";

// type Props = {
//   id: ID;
// };

const CustomActionButton = ({
  detailContactData,
  accessKey,
  channelName,
  // refetchWhatsAppContactListData,
  setRefetchData,
  setShowSnackbar,
  setSeveritySnackBar,
  setMessageSnackBar,
}: any) => {
  const [showEditContactModal, setShowEditContactModal] =
    React.useState<boolean>(false);
  const [showDetailsModal, setShowDetailsModal] =
    React.useState<boolean>(false);

  useEffect(() => {
    MenuComponent.reinitialization();
  }, []);

  return (
    <>
      <span
        // href="#"
        // className="btn btn-light btn-active-light-primary btn-sm"
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
        <div className="menu-item px-3">
          <span
            className="menu-link px-3"
            onClick={() => setShowEditContactModal(true)}
          >
            Edit
          </span>
        </div>
        {/* end::Menu item */}

        {/* begin::Menu item */}
        <div className="menu-item px-3">
          <span
            className="menu-link px-3"
            data-kt-users-table-filter="delete_row"
            onClick={() => setShowDetailsModal(true)}
          >
            Details
          </span>
        </div>
        {/* end::Menu item */}

        {/* <CustomEditModal
          show={showEditModal}
          handleClose={() => setShowEditModal(false)}
          detailContactData={detailContactData}
        /> */}
        <CustomDetailsModal
          show={showDetailsModal}
          handleClose={() => setShowDetailsModal(false)}
          detailContactData={detailContactData}
        />

        <EditWhatsAppContactModal
          show={showEditContactModal}
          handleClose={() => setShowEditContactModal(false)}
          initialModalData={detailContactData}
          accessKey={accessKey}
          channelName={channelName}
          // refetchWhatsAppContactListData={refetchWhatsAppContactListData}
          setRefetchData={setRefetchData}
          setShowSnackbar={setShowSnackbar}
          setSeveritySnackBar={setSeveritySnackBar}
          setMessageSnackBar={setMessageSnackBar}
        />
      </div>
      {/* end::Menu */}
    </>
  );
};

export { CustomActionButton };
