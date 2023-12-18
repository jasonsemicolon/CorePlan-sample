import { Home } from "@mui/icons-material";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import DomainVerificationIcon from "@mui/icons-material/DomainVerification";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SdCardAlertIcon from "@mui/icons-material/SdCardAlert";
import StorageIcon from "@mui/icons-material/Storage";
import TvIcon from "@mui/icons-material/Tv";
import {
  Box,
  Collapse,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Theme,
  Toolbar,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTE_SEGMENTS } from "../../config/Routes";

/* ---- Types ---- */
type MenuItemType = {
  label: string;
  Icon: any;
  link?: string;
  subMenu?: { label: string; link: string }[];
};

type ListItemType = { Item: MenuItemType };

type SubItemType = {
  subItem: { label: string; link: string };
};

/* ---- Variables ---- */
export const drawerWidth = "12vw";
export const drawerMinWidth = "120px";
const menuItems = [
  { label: "Dashboard", link: ROUTE_SEGMENTS.DASHBOARD, Icon: Home },
  {
    label: "Drill Planing",
    Icon: StorageIcon,
    subMenu: [{ label: "Drill Holes", link: ROUTE_SEGMENTS.DRILL_HOLES }],
  },
  {
    label: "Field Activates",
    Icon: DomainVerificationIcon,
  },
  {
    label: "Sample Dispatch",
    Icon: LocalShippingIcon,
  },
  {
    label: "Documents",
    Icon: DocumentScannerIcon,
  },
  {
    label: "ReadMe",
    link: ROUTE_SEGMENTS.README,
    Icon: TvIcon,
  },
  {
    label: "Not Found",
    link: "/404",
    Icon: SdCardAlertIcon,
  },
];

/**
 *@component Sidebar
 */
const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        minWidth: drawerMinWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          minWidth: drawerMinWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto", pt: 1 }}>
        {/* ########### Sidebar Top Title ########### */}
        <ListItem>
          <ListItemIcon sx={{ minWidth: 25 }}>
            <FiberManualRecordIcon
              sx={{
                width: 15,
                color: blue[200],
              }}
            />
          </ListItemIcon>
          <ListItemText primary="Gold Sands (Demo)" />
        </ListItem>

        {/* ########### Sidebar Menu List ########### */}
        <List
          component="nav"
          subheader={
            <ListSubheader
              sx={{
                background: (theme) => theme.palette.primary.main,
                color: "gray",
                height: "40px",
              }}
              component="div"
              id="nested-list-subheader"
            >
              PROJECT MENU
            </ListSubheader>
          }
        >
          {menuItems.map((Item) => {
            return <CustomListItem key={Item?.label} Item={Item} />;
          })}
        </List>
      </Box>
    </Drawer>
  );
};

/**
 * @component CustomListItem
 * @param {ListItemType} Item
 */
const CustomListItem = ({ Item }: ListItemType) => {
  const [open, setOpen] = useState(false);

  let { pathname } = useLocation();
  let navigate = useNavigate();

  let isActive: boolean = pathname === Item.link;

  const commonSx = {
    color: (theme: Theme) =>
      isActive
        ? theme.palette.secondary.main
        : theme.palette.primary.contrastText,
  };

  return (
    <>
      <ListItem key={Item?.label} disablePadding>
        <ListItemButton
          onClick={() => {
            Item?.link ? navigate(Item?.link) : setOpen(!open);
          }}
        >
          <ListItemIcon sx={{ minWidth: 25 }}>
            <Item.Icon sx={commonSx} />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={commonSx}
            primary={Item?.label}
          />
        </ListItemButton>
      </ListItem>

      {/* ########### SubMenu ########### */}
      {Item?.subMenu && (
        <Collapse in={open} timeout="auto">
          <List component="div">
            {Item?.subMenu?.map((sub: { label: string; link: string }) => {
              return (
                <CustomSubListItem key={sub?.label + sub?.link} subItem={sub} />
              );
            })}
          </List>
        </Collapse>
      )}
    </>
  );
};

/**
 * @component CustomSubListItem
 * @param {SubItemType} subItem
 */
const CustomSubListItem = ({ subItem }: SubItemType) => {
  let { pathname } = useLocation();
  let navigate = useNavigate();

  let isActive: boolean = pathname === subItem?.link;

  const commonSx = {
    color: (theme: Theme) =>
      isActive
        ? theme.palette.secondary.main
        : theme.palette.primary.contrastText,
  };

  return (
    <ListItemButton
      sx={{ pl: 4, maxHeight: 2 }}
      onClick={() => {
        navigate(subItem?.link);
      }}
    >
      <ListItemIcon sx={{ minWidth: 18 }}>
        <FiberManualRecordIcon
          sx={{
            width: 8,
            ...commonSx,
          }}
        />
      </ListItemIcon>
      <ListItemText
        primary={subItem?.label}
        primaryTypographyProps={commonSx}
      />
    </ListItemButton>
  );
};

export default Sidebar;
