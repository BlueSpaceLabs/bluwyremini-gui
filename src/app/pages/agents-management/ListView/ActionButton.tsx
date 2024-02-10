import React, { FC, useEffect } from "react";
// import { useMutation, useQueryClient } from "react-query";
import { MenuComponent } from "../../../../_metronic/assets/ts/components";
import { KTIcon } from "../../../../_metronic/helpers";
import axios from "axios";
import EditKeyWordModal from "../Modals/Edit";
import DeleteKeyWordModal from "../Modals/Delete";
import DetailKeyWordModal from "../Modals/Details";
// import EditWhatsAppContactModal from "./CustomEditContactModal";

// type Props = {
//   id: ID;
// };

const ActionButtonKeyWordListView = ({ detailData, setRefetchList }: any) => {
  // console.log("detailContactData", detailContactData);

  useEffect(() => {
    MenuComponent.reinitialization();
  }, []);

  const [showDetailKeyWordModal, setShowDetailKeyWordModal] =
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
            onClick={() => setShowDetailKeyWordModal(true)}
          >
            Detail
          </span>
        </div>

        {/* end::Menu item */}
      </div>

      {/* <EditKeyWordModal
        show={showEditKeyWordModal}
        handleClose={() => setShowEditKeyWordModal(false)}
        initialData={detailData}
        setRefetchList={setRefetchList}
      /> */}

      <DetailKeyWordModal
        show={showDetailKeyWordModal}
        handleClose={() => setShowDetailKeyWordModal(false)}
        detailData={detailData}
        setRefetchList={setRefetchList}
      />
    </>
  );
};

export default ActionButtonKeyWordListView;
