import React, { FC, useState } from "react";
import { PageTitle } from "../../../_metronic/layout/core";
import AgentsListView from "./ListView";
import CustomSnackBar from "../../components/CustomSnackbar";

const AgentsPage: FC = () => {
  const [snackbar, setSnackbar] = useState({
    showSnackbar: false,
    severitySnackBar: "",
    messageSnackBar: "",
  });

  return (
    <div style={{ marginTop: -30 }}>
      <PageTitle breadcrumbs={[]}>Agents</PageTitle>

      <AgentsListView setSnackbar={setSnackbar} />

      <CustomSnackBar
        showSnackbar={snackbar.showSnackbar}
        setSnackbar={setSnackbar}
        severitySnackBar={snackbar.severitySnackBar}
        messageSnackBar={snackbar.messageSnackBar}
      />
    </div>
  );
};

export default AgentsPage;
