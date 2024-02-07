import React, { FC } from "react";
import { PageTitle } from "../../../../_metronic/layout/core";
import { KeyWordsListViewWrapper } from "./KeyWordsListView/KeyWordsListViewWrapper";

const KeyWordsPage: FC = () => {
  return (
    <div style={{marginTop:-30}}>
      <PageTitle breadcrumbs={[]}>KeyWords</PageTitle>
      <KeyWordsListViewWrapper />
    </div>
  );
};

export default KeyWordsPage;
