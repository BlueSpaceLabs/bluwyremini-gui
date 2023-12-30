import { FC } from "react";
import { PageTitle } from "../../../_metronic/layout/core";
import { CampaignListViewWrapper } from "./CampaignListView/CampaignListViewWrapper";

const CampaignManagement: FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Campaign Management</PageTitle>
      <CampaignListViewWrapper />
    </>
  );
};

export default CampaignManagement;