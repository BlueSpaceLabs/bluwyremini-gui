import { FC } from "react";
import { PageTitle } from "../../../_metronic/layout/core";
import { TicketsListViewViewWrapper } from "./TicketsListView/TicketsListViewWrapper";

const TicketsManagement: FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Tickets</PageTitle>
      <TicketsListViewViewWrapper />
    </>
  );
};

export default TicketsManagement;