import React from "react";
import {
  Box,
  Divider,
  Paper as MUIPaper,
  Stack,
  PaperProps,
} from "@mui/material";

/* ======= Types ========*/
type PaperType = {
  icon: React.ReactNode;
  title: string;
  headerChildren?: React.ReactNode;
  children?: React.ReactNode;
} & PaperProps;

/**
 * Returns auth context
 * @component Paper
 * @param {React.ReactNode} icon
 * @param {string} title
 * @param {React.ReactNode} headerChildren
 * @param {React.ReactNode} [children]
 */
const Paper = ({
  icon,
  title,
  headerChildren,
  children,
  ...props
}: PaperType) => {
  return (
    <MUIPaper {...props}>
      {/* ######## Header ####### */}
      <Stack
        px={2}
        py={0.5}
        minHeight="35px"
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack direction="row" spacing={1}>
          {icon}
          <Box ml={1}>{title}</Box>
        </Stack>
        <Box>{headerChildren}</Box>
      </Stack>
      <Divider />

      {/* ######## Body ####### */}
      <Box>{children}</Box>
    </MUIPaper>
  );
};

export default Paper;
