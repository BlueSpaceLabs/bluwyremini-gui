import React, { FC } from "react";
import { PageTitle } from "../../../../_metronic/layout/core";
import KeyWordListView from "./ListView";

const KeyWordsPage: FC = () => {
  return (
    <div style={{ marginTop: -30 }}>
      <PageTitle breadcrumbs={[]}>KeyWords</PageTitle>

      <KeyWordListView />
    </div>
  );
};

export default KeyWordsPage;
