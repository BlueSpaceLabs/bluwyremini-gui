import React, { FC, useState } from "react";
import { PageTitle } from "../../../../_metronic/layout/core";
import KeyWordListView from "./ListView";
import CustomSnackBar from "../../../components/CustomSnackbar";

const KeyWordsPage: FC = () => {
  const [snackbar, setSnackbar] = useState({
    showSnackbar: false,
    severitySnackBar: "",
    messageSnackBar: "",
  });

  return (
    <div style={{ marginTop: -30 }}>
      <PageTitle breadcrumbs={[]}>KeyWords</PageTitle>

      <KeyWordListView setSnackbar={setSnackbar} />

      <CustomSnackBar
        showSnackbar={snackbar.showSnackbar}
        setSnackbar={setSnackbar}
        severitySnackBar={snackbar.severitySnackBar}
        messageSnackBar={snackbar.messageSnackBar}
      />
    </div>
  );
};

export default KeyWordsPage;
