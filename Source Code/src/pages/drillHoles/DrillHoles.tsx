import { Backdrop, Box, CircularProgress, Divider, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { API_DRILL_HOLES } from "../../api/Endpoints";
import useRequest from "../../api/Request";
import { PageTitle } from "../../components";
import {
  ActivitiesDataType,
  ActivityType,
  MainProgramType,
  ProgramType,
} from "../../models/DrillHoles";
import { ActivitiesMarker, Map, Table, Tabs } from "./components";

/**
 * @component DrillHoles
 */
const DrillHoles = () => {
  // => Fetch All Data
  const [{ data }] = useRequest<ActivitiesDataType>(API_DRILL_HOLES);

  //=> States
  const [tab, setTab] = useState("all");
  const [mapData, setMapData] = useState([] as ActivityType[]);

  //=> Effects
  useEffect(() => {
    if (data) {
      const mapDataArray: ActivityType[] = [];
      data?.allPrograms?.forEach((mainProgram: MainProgramType) => {
        mainProgram?.programs?.forEach((program: ProgramType) => {
          program?.activities?.forEach((activity: ActivityType) => {
            mapDataArray.push(activity);
          });
        });
      });
      setMapData(mapDataArray);
    }
  }, [data, tab]);

  // => functions
  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };

  if (!data) {
    return (
      <Backdrop
        open={true}
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  return (
    <>
      <PageTitle>Drill Holes Workflow</PageTitle>
      <Paper>
        {/* ######## Tabs ####### */}
        <Tabs value={tab} onChange={handleTabChange} />

        {/* ######## Map ####### */}
        <Box sx={{ height: 200 }}>
          <Map
            area={data?.area}
            mapCenter={data?.mapCenter}
            data={mapData}
            tab={tab}
          />
        </Box>

        {/* ######## Markers ####### */}
        <ActivitiesMarker tab={tab} markers={data?.activities} />
        <Divider />

        {/* ######## Table ####### */}
        <Table
          data={data?.allPrograms}
          activities={data?.activities}
          tab={tab}
        />
      </Paper>
    </>
  );
};

export default DrillHoles;
