import React, { useState } from "react";
import { PageTitle } from "../../../_metronic/layout/core";
import CustomSnackBar from "../../components/CustomSnackbar";
import ContactFormUI from "./ContactFormUI";

const ContactUsPage = () => {
  const [snackbar, setSnackbar] = useState({
    showSnackbar: false,
    severitySnackBar: "",
    messageSnackBar: "",
  });

  return (
    <React.Fragment>
      <div style={{ marginTop: "-30px" }}>
        <PageTitle breadcrumbs={[]}>Contact Us</PageTitle>

        <ContactFormUI />

        <CustomSnackBar
          showSnackbar={snackbar.showSnackbar}
          setSnackbar={setSnackbar}
          severitySnackBar={snackbar.severitySnackBar}
          messageSnackBar={snackbar.messageSnackBar}
        />
      </div>
    </React.Fragment>
  );
};

export default ContactUsPage;
