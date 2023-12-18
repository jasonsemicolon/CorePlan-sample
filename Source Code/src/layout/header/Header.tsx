import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import LibraryAddOutlinedIcon from "@mui/icons-material/LibraryAddOutlined";
import PublicIcon from "@mui/icons-material/Public";
import {
  AppBar,
  Box,
  Button,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import * as React from "react";
import logo from "../../assets/images/logo.png";
import { useLogout } from "../../auth/Auth";
import { drawerMinWidth, drawerWidth } from "../sidebar/Sidebar";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

/**
 *@component Header
 */
const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);
  const logout = useLogout();
  // let {userName} = useGetUser()

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "corePlan-header-user-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={logout}>Sign Out</MenuItem>
    </Menu>
  );

  const iconSx = { color: "purple", width: 15, m: -0.5 };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          boxShadow: "unset",
        }}
      >
        <Toolbar>
          {/* ########### Logo ########### */}
          <img
            src={logo}
            alt="logo"
            style={{
              width: `calc(${drawerWidth} - 4vw)`,
              minWidth: `calc(${drawerMinWidth} - 4vw)`,
            }}
          />

          <Box sx={{ flexGrow: 1, ml: "4vw" }}>
            <Stack direction="row" justifyContent="space-between">
              <Stack direction="row" spacing={3}>
                {/* ########### Dashboard Name ########### */}
                <Stack direction="row" alignItems="center" spacing={0.5}>
                  <PublicIcon sx={iconSx} />
                  <Typography variant="body1" component="span">
                    Global Dashboard
                  </Typography>
                </Stack>

                {/* ########### Project Select ########### */}
                <Button
                  startIcon={<LibraryAddOutlinedIcon sx={iconSx} />}
                  endIcon={<KeyboardArrowDownOutlinedIcon sx={iconSx} />}
                >
                  Projects
                </Button>
              </Stack>

              {/* ########### User Menu ########### */}
              <Button
                startIcon={<AccountCircleOutlinedIcon sx={iconSx} />}
                endIcon={<KeyboardArrowDownOutlinedIcon sx={iconSx} />}
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
              >
                User Name
                {/* {userName} */}
              </Button>
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
};

export default Header;
