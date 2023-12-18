import {
  Popover,
  Table as MUITable,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Box,
  Paper,
} from "@mui/material";
import {
  ActivityType,
  MainProgramType,
  StatusType,
  ProgramType,
  allProgramsType,
} from "../../../models/DrillHoles";
import TableHead from "@mui/material/TableHead";
import { useState } from "react";
import { Stack, Typography } from "@mui/material";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { grey } from "@mui/material/colors";

/**
 * @component Table
 * @param {allProgramsType} data
 * @param {ActivityType[]} activities
 * @param {string} tab
 */
export default function Table({
  data,
  activities,
  tab,
}: {
  data: allProgramsType;
  activities: ActivityType[];
  tab: string;
}) {
  return (
    <TableContainer
      sx={{
        // mt: 1,
        p: 2,
      }}
    >
      <MUITable size="small" aria-labelledby="field activates table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="center">Program</TableCell>
            {activities?.map((activity: ActivityType) => {
              if (tab === "all" || tab === activity?.category) {
                return <HeaderCell key={activity?.name} activity={activity} />;
              } else {
                return null;
              }
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((mainProgram: MainProgramType) => {
            return (
              <MainRow
                key={mainProgram?.programName}
                tab={tab}
                rowData={mainProgram}
              />
            );
          })}
        </TableBody>
      </MUITable>
    </TableContainer>
  );
}

/**
 * @component StatusBar
 * @param {number} total
 * @param {StatusType[]} statuses
 */
const StatusBar = ({
  total,
  statuses,
}: {
  total: number;
  statuses: StatusType[];
}) => {
  return (
    <Stack
      direction="row"
      component="div"
      sx={{
        mx: "auto",
        mt: 1,
        width: "100%",
        height: "5px",
        borderRadius: "15px",
        maxWidth: "150px !important",
      }}
    >
      {statuses?.map((status: StatusType, index) => {
        return (
          <Box
            key={status.label + index}
            component="span"
            sx={{
              height: "100%",
              width: `${(100 * status?.value!) / total}%`,
              background: status?.color,
            }}
          />
        );
      })}
    </Stack>
  );
};

/**
 * @component HeaderCell
 * @param {ActivityType} activity
 */
const HeaderCell = ({ activity }: { activity: ActivityType }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <TableCell
        align="center"
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        {activity?.name}
        <StatusBar total={activity?.total!} statuses={activity?.statuses!} />
      </TableCell>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
          padding: 5,
          width: "300px !important",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Paper
          sx={{
            padding: 1,
            width: "200px !important",
          }}
        >
          {activity?.statuses?.map((status: StatusType, index) => {
            return (
              <Stack
                key={status.label + index}
                direction="row"
                justifyContent="space-between"
                my={1}
              >
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Box
                    component="span"
                    sx={{
                      borderRadius: "50%",
                      width: 10,
                      height: 10,
                      background: status?.color,
                    }}
                  />
                  <Typography variant="body1">{status?.label}</Typography>
                </Stack>
                <Typography variant="body1">
                  {status?.value} / {activity?.total!}
                </Typography>
              </Stack>
            );
          })}
        </Paper>
      </Popover>
    </>
  );
};

/**
 * @component BodyCell
 * @param {ActivityType} activity
 */
const BodyCell = ({ activity }: { activity: ActivityType }) => {
  return (
    <TableCell>
      <Box
        sx={{
          mx: "auto",
          padding: "3px 0",
          textAlign: "center",
          width: "80px",
          borderRadius: 1,
          backgroundColor: activity?.status?.color,
          color:
            activity?.status?.property === "inComplete" ? "#fff" : "inherit",
          border:
            activity?.status?.property === "notRequired"
              ? "1px solid #000"
              : activity?.status?.property === "skipped"
              ? "1px solid #9a9a9a"
              : "",
        }}
      >
        {activity?.status?.label}
      </Box>
    </TableCell>
  );
};

/**
 * @component MainRow
 * @param {MainProgramType} rowData
 * @param {string} tab
 */
const MainRow = ({
  rowData,
  tab,
}: {
  tab: string;
  rowData: MainProgramType;
}) => {
  const [open, setOpen] = useState(false);

  const HandleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <TableRow
        sx={{
          cursor: "pointer",
          "&:nth-of-type(odd)": {
            backgroundColor: grey[100],
          },
          // hide last border
          "&:last-child td, &:last-child th": {
            border: 0,
          },
        }}
        onClick={HandleOpen}
      >
        <TableCell align="center">
          {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownOutlinedIcon />}
        </TableCell>

        <TableCell align="center">{rowData?.programName}</TableCell>
        {rowData?.activities?.map((activity: ActivityType, index) => {
          if (tab === activity?.category || tab === "all") {
            return <BodyCell key={activity.name + index} activity={activity} />;
          } else {
            return null;
          }
        })}
      </TableRow>
      {open ? (
        <>
          {rowData?.programs?.map((program: ProgramType) => {
            return (
              <TableRow
                key={program?.programName}
                sx={{
                  "&:nth-of-type(odd)": {
                    backgroundColor: grey[100],
                  },
                  // hide last border
                  "&:last-child td, &:last-child th": {
                    border: 0,
                  },
                }}
              >
                <TableCell></TableCell>
                <TableCell align="center" sx={{ color: "secondary.main" }}>
                  {program?.programName}
                </TableCell>
                {program?.activities?.map((activity: ActivityType) => {
                  if (tab === activity?.category || tab === "all") {
                    return (
                      <BodyCell key={activity?.name} activity={activity} />
                    );
                  } else {
                    return null;
                  }
                })}
              </TableRow>
            );
          })}
        </>
      ) : null}
    </>
  );
};
