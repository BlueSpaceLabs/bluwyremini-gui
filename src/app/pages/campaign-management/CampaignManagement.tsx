import { FC } from "react";
import { PageTitle } from "../../../_metronic/layout/core";
import { CampaignListViewWrapper } from "./CampaignListView/CampaignListViewWrapper";
import FileUploadForm from "./FileUploadForm";

const CampaignManagement: FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Campaign Management</PageTitle>
      <CampaignListViewWrapper />
     {/*<FileUploadForm/>*/}
    </>
  );
};

export default CampaignManagement;