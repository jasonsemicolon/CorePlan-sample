import { Box, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

/**
 * @component Layout
 */
const Layout = () => {
  return (
    <>
      {/* ########### Header ########### */}
      <Header />

      <Box sx={{ display: "flex", overflow: "hidden" }}>
        {/* ########### Sidebar ########### */}
        <Sidebar />

        {/* ########### Main ########### */}
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) => theme.palette.mainBackground,
            padding: 2,
            flexGrow: 1,
            overflowX: "hidden",
            overflowY: "auto",
            minHeight: "100vh",
          }}
        >
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default Layout;
