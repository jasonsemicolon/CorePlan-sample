import { Tab, Tabs as MuiTabs } from "@mui/material";
import React from "react";

/* ======= Types ======== */
type TabsType = {
  value: string;
  onChange: (event: React.SyntheticEvent, newValue: string) => void;
};

/**
 * @component Tabs
 * @param {string} value
 * @param {function} onChange
 */
const Tabs = ({ value, onChange }: TabsType) => {
  return (
    <MuiTabs
      value={value}
      onChange={onChange}
      textColor="secondary"
      indicatorColor="secondary"
      aria-label="field activates tabs"
      sx={{
        ml: 1,
        "& .MuiTab-root": {
          width: " unset",
          maxWidth: "unset",
          minWidth: "unset",
          padding: "unset",
          mx: 1.5,
        },
      }}
    >
      <Tab value="all" label="All" />
      <Tab value="approvals" label="Approvals" />
      <Tab value="pre-drilling" label="Pre-drilling" />
      <Tab value="drilling" label="Drilling" />
      <Tab value="past-drilling" label="Past-drilling" />
    </MuiTabs>
  );
};

export default Tabs;
