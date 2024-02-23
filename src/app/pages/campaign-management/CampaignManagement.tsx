import { FC } from "react";
import { PageTitle } from "../../../_metronic/layout/core";
import { CampaignListViewWrapper } from "./CampaignListView/CampaignListViewWrapper";
// import FileUploadForm from "./FileUploadForm";

const CampaignManagement: FC = ({
  showCreateAppModal,
  setShowCreateAppModal,
}: any) => {
  return (
    <div>
      <PageTitle breadcrumbs={[]}>Campaign Management</PageTitle>
      <CampaignListViewWrapper
        showCreateAppModal={showCreateAppModal}
        setShowCreateAppModal={setShowCreateAppModal}
      />
      {/*<FileUploadForm/>*/}
    </div>
  );
};

export default CampaignManagement;
