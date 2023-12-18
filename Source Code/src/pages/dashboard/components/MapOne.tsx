import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { API_DASHBOARD_MAP } from "../../../api/Endpoints";
import useRequest from "../../../api/Request";
import { Paper } from "../../../components";
import { DashboardMapData } from "../../../models/MapOne";
import { ActivitiesMarker, Map } from "../../drillHoles/components";
import { Box } from "@mui/material";

/**
 * @component MapOne
 */
const MapOne = () => {
  // => Fetch Data
  const [{ data }] = useRequest<DashboardMapData>(API_DASHBOARD_MAP);

  return (
    <Paper icon={<MapOutlinedIcon />} title="Map" sx={{ height: 350 }}>
      {data && (
        <>
          <Box
            sx={{
              height: 280,
              "& .mapboxgl-ctrl-bottom-left": {
                display: "none",
              },
            }}
          >
            <Map
              tab="all"
              area={data?.area}
              data={data?.points}
              mapCenter={data?.mapCenter}
              controls={false}
            />
          </Box>

          <ActivitiesMarker tab="all" markers={data?.markers} />
        </>
      )}
    </Paper>
  );
};

export default MapOne;
