import React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomSnackBar({
  showSnackbar,
  setShowSnackbar,
  severitySnackBar,
  messageSnackBar,
}: any) {
  // const [showSnackbar, setShowSnackbar] = React.useState<boolean>(false);
  // const [severitySnackBar, setSeveritySnackBar] = React.useState<string>("");
  // const [messageSnackBar, setMessageSnackBar] = React.useState<string>("");

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setShowSnackbar(false);
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={showSnackbar}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        key={"bottom" + "right"}
      >
        <Alert
          onClose={handleClose}
          severity={severitySnackBar}
          //   "success" || "warning" || "info" || "error"
          sx={{ width: "100%" }}
        >
          {messageSnackBar}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
