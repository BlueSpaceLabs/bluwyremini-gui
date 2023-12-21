import React, { FC } from "react";
import { PageTitle } from "../../../_metronic/layout/core";
import { MediaListViewWrapper } from "./MediaListView/MediaListViewWrapper";

const MediaManagement: FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Media Management</PageTitle>
      <MediaListViewWrapper />
    </>
  );
};

export default MediaManagement;
