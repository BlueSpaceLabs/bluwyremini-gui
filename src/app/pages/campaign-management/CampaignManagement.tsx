import { FC } from "react";
import { PageTitle } from "../../../_metronic/layout/core";
import { CampaignListViewWrapper } from "./CampaignListView/CampaignListViewWrapper";
import FileUploadForm from "./FileUploadForm";

const CampaignManagement: FC = () => {
  return (
    <div style={{marginTop:-30}}>
      <PageTitle breadcrumbs={[]}>Campaign Management</PageTitle>
      <CampaignListViewWrapper />
     {/*<FileUploadForm/>*/}
    </div>
  );
};

export default CampaignManagement;