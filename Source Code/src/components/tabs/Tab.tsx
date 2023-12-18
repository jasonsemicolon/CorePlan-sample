import React from "react";
import { Tab as MUITab, TabProps } from "@mui/material";
import { styled } from "@mui/material/styles";

/**
 * Returns auth context
 * @component Tab
 * @param {TabProps} props
 */
const Tab = (props: TabProps) => {
  const StyledTab = styled((props: TabProps) => <MUITab {...props} />)(
    ({ theme }) => ({
      textTransform: "none",
      marginRight: theme.spacing(1),
      borderRadius: "3px",
      minHeight: "unset",
      minWidth: "unset",
      padding: "3px !important",

      "&.Mui-selected": {
        padding: "2px 6px !important",
        color: "#fff",
        backgroundColor: theme.palette.secondary.main,
      },
    })
  );

  return <StyledTab {...props} />;
};

export default Tab;
