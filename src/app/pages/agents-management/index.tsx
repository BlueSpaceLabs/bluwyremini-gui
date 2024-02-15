import React, { FC } from "react";
import { PageTitle } from "../../../_metronic/layout/core";
import AgentsListView from "./ListView";

const AgentsPage: FC = () => {
  return (
    <div style={{ marginTop: -30 }}>
      <PageTitle breadcrumbs={[]}>Agents</PageTitle>

      <AgentsListView />
    </div>
  );
};

export default AgentsPage;
