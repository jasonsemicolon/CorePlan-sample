import { Typography, Divider } from "@mui/material";
import React from "react";

/**
 * @component PageTitle
 * @param {string} children
 */
const PageTitle = ({ children }: { children: string }) => {
  return (
    <>
      <Typography variant="h6" component="h2" my={1} mb={2}>
        {children}
      </Typography>
      <Divider sx={{ my: 1 }} />
    </>
  );
};

export default PageTitle;
