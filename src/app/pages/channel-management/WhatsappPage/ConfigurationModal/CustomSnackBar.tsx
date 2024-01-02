import * as React from "react";
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
  openSnackBar,
  setShowSnackBar,
  severitySnackBar,
  messageSnackBar,
}: any) {
  //   const [open, setOpen] = React.useState(openSnackBar);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setShowSnackBar(false);
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      {/* <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button> */}
      <Snackbar
        open={openSnackBar}
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
