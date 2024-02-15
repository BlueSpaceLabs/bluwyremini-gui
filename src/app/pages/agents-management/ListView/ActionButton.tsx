import React, { FC, useEffect } from "react";
// import { useMutation, useQueryClient } from "react-query";
import { MenuComponent } from "../../../../_metronic/assets/ts/components";
import { KTIcon } from "../../../../_metronic/helpers";
import DetailAgentsModal from "../Modals/Details";
// import EditWhatsAppContactModal from "./CustomEditContactModal";

// type Props = {
//   id: ID;
// };

const ActionButtonAgentsListView = ({ detailData, setRefetchList }: any) => {
  // console.log("detailData", detailData);

  useEffect(() => {
    MenuComponent.reinitialization();
  }, []);

  const [showDetailAgentsModal, setShowDetailAgentsModal] =
    React.useState<boolean>(false);

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

        <div className="menu-item px-3">
          <span
            className="menu-link px-3"
            onClick={() => setShowDetailAgentsModal(true)}
          >
            Detail
          </span>
        </div>

        {/* end::Menu item */}
      </div>

      <DetailAgentsModal
        show={showDetailAgentsModal}
        handleClose={() => setShowDetailAgentsModal(false)}
        detailData={detailData}
        setRefetchList={setRefetchList}
      />
    </>
  );
};

export default ActionButtonAgentsListView;
