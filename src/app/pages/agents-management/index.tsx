import React, { FC } from "react";
import { PageTitle } from "../../../_metronic/layout/core";
import KeyWordListView from "./ListView";

const AgentsPage: FC = () => {
  return (
    <div style={{ marginTop: -30 }}>
      <PageTitle breadcrumbs={[]}>Agents</PageTitle>

      <KeyWordListView />
    </div>
  );
};

export default AgentsPage;
