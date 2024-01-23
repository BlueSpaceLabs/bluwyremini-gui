import React from "react";
import { Box, Paper } from "@mui/material";

const HeaderTab: React.FC = ({ tabHeading, setTabHeading }: any) => {
  return (
    <Box component={Paper} py={1} px={3}>
      <Box display={"flex"} gap={3} py={1} className="fw-bold fs-6">
        <Box
          className={`${
            tabHeading === "tab1" ? "text-primary" : "text-gray-500"
          } `}
          sx={{ cursor: "pointer" }}
          onClick={() => setTabHeading("tab1")}
        >
          Tab 1
        </Box>

        <Box
          className={`${
            tabHeading === "tab2" ? "text-primary" : "text-gray-500"
          } `}
          sx={{ cursor: "pointer" }}
          onClick={() => setTabHeading("tab2")}
        >
          Tab 2
        </Box>

        <Box
          className={`${
            tabHeading === "tab3" ? "text-primary" : "text-gray-500"
          } `}
          sx={{ cursor: "pointer" }}
          onClick={() => setTabHeading("tab3")}
        >
          Tab 3
        </Box>

        <Box
          className={`${
            tabHeading === "tab4" ? "text-primary" : "text-gray-500"
          } `}
          sx={{ cursor: "pointer" }}
          onClick={() => setTabHeading("tab4")}
        >
          Tab 4
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderTab;
