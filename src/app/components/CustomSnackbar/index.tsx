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
  setSnackbar,
  severitySnackBar,
  messageSnackBar,
}: any) {
  // console.log(
  //   "CustomSnackBar called",
  //   { showSnackbar },
  //   { setSnackbar },
  //   { severitySnackBar },
  //   { messageSnackBar }
  // );

  //   const [snackbar, setSnackbar] = useState({
  //     showSnackbar: false,
  //     severitySnackBar: "",
  //     messageSnackBar: "",
  //   });

  // <CustomSnackBar
  //       showSnackbar={snackbar.showSnackbar}
  //       setSnackbar={setSnackbar}
  //       severitySnackBar={snackbar.severitySnackBar}
  //       messageSnackBar={snackbar.messageSnackBar}
  //     />

  // setSnackbar({
  //   showSnackbar: true,
  //   severitySnackBar: "success",
  //   messageSnackBar: response?.data?.message
  //     ? response?.data?.message
  //     : "Successfully SnackBarMessage",
  // });

  // setSnackbar({
  //   showSnackbar: true,
  //   severitySnackBar: "error",
  //   messageSnackBar: error?.response?.data?.message
  //     ? error?.response?.data?.message
  //     : "Failed to SnackBarMessage",
  // });

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbar((preValue) => ({
      ...preValue,
      showSnackbar: false,
    }));
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
