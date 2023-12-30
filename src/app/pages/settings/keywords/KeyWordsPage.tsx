import React, { FC } from "react";
import { PageTitle } from "../../../../_metronic/layout/core";
import { KeyWordsListViewWrapper } from "./KeyWordsListView/KeyWordsListViewWrapper";

const KeyWordsPage: FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>KeyWords</PageTitle>
      <KeyWordsListViewWrapper />
    </>
  );
};

export default KeyWordsPage;
