import TableViewOutlinedIcon from "@mui/icons-material/TableViewOutlined";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Box,
} from "@mui/material";
import React, { useState } from "react";
import { Paper, Tab, Tabs } from "../../../components";
import { faker } from "@faker-js/faker";

/* ======= Types =========*/
type TableRowType = {
  userName: string;
  gender: string;
  email: string;
};

const createData = (): TableRowType => {
  return {
    userName: faker.internet.userName(),
    gender: faker.person.gender(),
    email: faker.internet.email(),
  };
};

const rows: TableRowType[] = [
  createData(),
  createData(),
  createData(),
  createData(),
  createData(),
];

/**
 * @component TableOne
 */
const TableOne = () => {
  const [tab, setTab] = useState<string>("T1");

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };

  return (
    <Paper
      title="Table One"
      icon={<TableViewOutlinedIcon />}
      sx={{ height: { lg: 300, md: 350, xs: 300 } }}
    >
      <Box p={1}>
        {/* ############  Tabs ########### */}
        <Tabs value={tab} onChange={handleTabChange}>
          <Tab label="Tab One" value="T1" />
          <Tab label="Tab Two" value="T2" />
          <Tab label="Tab Three" value="T3" />
        </Tabs>

        <TableContainer sx={{ height: "200px" }}>
          <Table size="small" aria-label="simple table">
            {/* ############  Table Head ########### */}
            <TableHead>
              <TableRow>
                <TableCell>User Name</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>Email</TableCell>
              </TableRow>
            </TableHead>

            {/* ############  Table Body ########### */}
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.userName}>
                  <TableCell sx={{ color: "secondary.main" }}>
                    {row.userName}
                  </TableCell>
                  <TableCell>{row.gender}</TableCell>
                  <TableCell>{row.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Paper>
  );
};

export default TableOne;
