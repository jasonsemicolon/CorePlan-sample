import React from "react";
import { Tabs as MUITabs, TabsProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledTabs = styled((props: TabsProps) => <MUITabs {...props} />)({
  minHeight: "unset",
  marginLeft: "12px",
  "& .MuiTabs-indicator": {
    display: "none",
  },
});

/**
 * Returns auth context
 * @component Tabs
 * @param {TabsProps} props
 */
const Tabs = (props: TabsProps) => {
  return <StyledTabs aria-label="tabs" {...props} />;
};

export default Tabs;
