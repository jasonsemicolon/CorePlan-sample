import { Box, Typography, Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { ActivityType } from "../../../models/DrillHoles";

/**
 * Markers under map
 * @component ActivitiesMarker
 */
const ActivitiesMarker = ({
  markers,
  tab,
}: {
  markers: ActivityType[];
  tab: string;
}) => {
  return (
    <Grid container spacing={1} m={1}>
      {markers?.map((marker) => {
        return <Marker key={marker?.name} tab={tab} marker={marker} />;
      })}
    </Grid>
  );
};

/**
 * @component Marker
 */
const Marker = ({ marker, tab }: { marker: ActivityType; tab: string }) => {
  let { name, color, category } = marker;

  if (category !== tab && tab !== "all") {
    //Display the marker in the desired tab
    return null;
  }
  return (
    <Grid>
      <Stack direction="row" alignItems="center" spacing={0.5}>
        <Box
          component="span"
          sx={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: color,
          }}
        />
        <Typography variant="body1">{name}</Typography>
      </Stack>
    </Grid>
  );
};

export default ActivitiesMarker;
