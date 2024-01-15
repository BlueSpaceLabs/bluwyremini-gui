import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { CustomActionButton } from "./CustomActionButton";
// import { CustomActionButton } from "./CustomActionButton";

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

export default function CustomContactTable({
  tableData,
  accessKey,
  channelName,
  refetchWhatsAppContactListData,
  setShowSnackbar,
  setSeveritySnackBar,
  setMessageSnackBar,
}: any) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - tableData.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  if (tableData.length > 0) {
    return (
      <TableContainer sx={{ pt: 4 }}>
        <Table sx={{ minWidth: "100%" }} aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              <TableCell className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                Bluwyre Id
              </TableCell>
              <TableCell className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                Full Name
              </TableCell>
              {/*<TableCell className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                Mobile Number
    </TableCell>*/}
              
              <TableCell className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                Mobile Number
              </TableCell>
              <TableCell className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                Last Interaction
              </TableCell>
              <TableCell className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                Created Date
              </TableCell>
              <TableCell className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? tableData.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : tableData
            ).map((row: any) => {
              return (
                <TableRow key={row.name}>
                  <TableCell className="text-gray-600 fw-bold fs-8 py-8">
                    {row.bluwyreId}
                  </TableCell>

                  <TableCell className="text-gray-600 fw-bold fs-8 py-8">
                    {row.crmFullname}
                  </TableCell>
                  {/*<TableCell className="text-gray-600 fw-bold fs-8 py-8">
                    {row.mobileNo}
              </TableCell>*/}
                  <TableCell className="text-gray-600 fw-bold fs-8 py-8">
                    {row.wabaMobileNo}
                  </TableCell>
                  <TableCell className="text-gray-600 fw-bold fs-8 py-8">
                    {row.lastInteractionDatetime}
                  </TableCell>
                  
                  <TableCell className="text-gray-600 fw-bold fs-8 py-8">
                    {row.createdDatetime}
                  </TableCell>

                  {/* <TableCell className="text-gray-600 fw-bold fs-8 py-8">
                    {row.lastModifiedDatetime}
                  </TableCell> */}

                  {/* <TableCell className="text-gray-600 fw-bold fs-8 py-8">
                    {row.nameToAddress}
                  </TableCell> */}

                  {/* <TableCell className="text-gray-600 fw-bold fs-8 py-8">
                    {row.wabaLastInteractionDatetime}
                  </TableCell> */}

                  {/* <TableCell className="text-gray-600 fw-bold fs-8 py-8">
                    {row.wabaName}
                  </TableCell> */}

                  <TableCell className="text-gray-600 fw-bold fs-8 py-8">
                    {/* Action */}
                    {/* <UserActionsCell id={1} /> */}
                    <CustomActionButton
                      detailContactData={row}
                      accessKey={accessKey}
                      channelName={channelName}
                      refetchWhatsAppContactListData={
                        refetchWhatsAppContactListData
                      }
                      setShowSnackbar={setShowSnackbar}
                      setSeveritySnackBar={setSeveritySnackBar}
                      setMessageSnackBar={setMessageSnackBar}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[10, 25, { label: "All", value: -1 }]}
                colSpan={3}
                count={tableData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    );
  } else {
    return (
      <div style={{ height: "30vh" }}>
        <div className="p-10 d-flex text-center w-100 align-content-center justify-content-center">
          <p className="text-gray-600 fw-bold fs-6">No Record to show.</p>
        </div>
      </div>
    );
  }
}
