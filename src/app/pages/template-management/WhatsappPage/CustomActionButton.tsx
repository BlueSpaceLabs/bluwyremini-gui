import React, { FC, useEffect } from "react";
// import { useMutation, useQueryClient } from "react-query";
import { MenuComponent } from "../../../../_metronic/assets/ts/components";
import { KTIcon } from "../../../../_metronic/helpers";
import CustomEditModal from "./CustomEditModal";
import CustomDeleteModal from "./CustomDeleteModal";

// type Props = {
//   id: ID;
// };

const CustomActionButton = ({ detailTemplateData }: any) => {
  const [showEditModal, setShowEditModal] = React.useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = React.useState<boolean>(false);

  const storedData = sessionStorage.getItem("whatsappConfig");
  var whatsAppStoredData;
    if (storedData) whatsAppStoredData = JSON.parse(storedData);

  useEffect(() => {
    MenuComponent.reinitialization();
  }, []);

  return (
    <>
      <a
        href=""
        className="btn btn-light btn-active-light-primary btn-sm"
        data-kt-menu-trigger="click"
        data-kt-menu-placement="bottom-end"
      >
        Actions
        <KTIcon iconName="down" className="fs-5 m-0" />
      </a>
      {/* begin::Menu */}
      <div
        className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
        data-kt-menu="true"
      >
        {/* begin::Menu item */}
        <div className="menu-item px-3">
          <span className="menu-link px-3" onClick={() => setShowEditModal(true)}>
            Details
          </span>
        </div>
        {/* end::Menu item */}

        {/* begin::Menu item */}
        {/*<div className="menu-item px-3">
          <a
            className="menu-link px-3"
            data-kt-users-table-filter="delete_row"
            href={`https://business.facebook.com/wa/manage/message-templates/?business_id=1343361919334988&waba_id=116042751363278&id=${detailTemplateData.id}`}
            target="_blank"
          >
            Edit Template
          </a>
        </div>*/}
        {/* end::Menu item */}

        <CustomEditModal
          show={showEditModal}
          handleClose={() => setShowEditModal(false)}
          detailTemplateData={detailTemplateData}
          whatsAppStoredData ={whatsAppStoredData}
        />
        <CustomDeleteModal
          show={showDeleteModal}
          handleClose={() => setShowDeleteModal(false)}
          selectedId={detailTemplateData.id}
        />
      </div>
      {/* end::Menu */}
    </>
  );
};

export { CustomActionButton };
